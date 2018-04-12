Title: Fuzzing The New Groupchats
Date: 2015-09-12 13:58
Author: Jfreegman
Category: development, groupchats, testing
Status: published

With the [new
groupchats](https://github.com/JFreegman/toxcore/blob/new_groupchats/docs/Group-Chats.md) almost
complete I thought it was time for another big testing session, and this
time I decided I would take you all along for the roller coaster ride of
fun. Before you read any further, I should warn that this is a technical
post geared towards the programmers and developers in the crowd. If
protocols and C code aren't your thing, [click
here](https://www.youtube.com/watch?v=KMFOVSWn0mI).

For those who don't know [what fuzzing
is](https://www.youtube.com/watch?v=Xnwodi2CBws), it's a form of random
code testing. The idea is simple: feed your program random/malformed
data and wait for it to crash;  gather crash info, fix the crash, and
repeat (or log the crash and keep going). The purpose of this type of
testing is to explore the deep dark corners of the state space in order
to catch bugs that normal usage or unit testing would almost certainly
miss. These types of bugs—particularly in memory unsafe languages such
as C—can lead to subtle vulnerabilities that leave the door open for
exploitation.

There are different levels of fuzzing ranging from dumb to smart, which
explore different aspects and depths of the application protocol. An
example of the dumbest form of fuzzing would be to fill a packet with
completely random data and send it to the packet handler. Dumb fuzzing
theoretically guarantees 100% code coverage given enough time, but in
reality the universe will probably end before it ever gets past the
first hash check. Conversely, smart fuzzing creates valid data and
modifies/corrupts it to varying degrees. This ends up covering a smaller
state space, but in practice has much greater code coverage, and is
generally more useful for all but the simplest of programs.

I chose only to use two levels, where level-1 is dumb-ish and level-2 is
smart-ish. Something highly complex like a compiler or a web browser
might require 6 or 7 levels or even more, but the groupchat protocol is
pretty simple and more straightforward by comparison. In hindsight, a
3rd level might be warranted, but each added level greatly increases the
amount of work, and I'm not convinced that it would be worth the effort,
as even level-1 fuzzing has satisfactory code coverage much of the time.

Before going any further, it would be helpful to understand the
structure of a Tox groupchat packet:

** \[  IP/UDP  |  Header 1  |  Header 2  |  App data  \]**

Zooming in to the three sections we care about:

Header 1:   **\[  Packet ID  (1 b)  |  Chat ID hash  (4 b)  |  Sender PK
(32 b)  |  nonce (24 b)  \]**

Header 2:  **\[  Random padding (0-8 b)  |  Group packet type (1 b)
 \]**

App data:  **\[  Sender pub-key hash (4 b)  |  payload (0-? b) \]**

The first header is a plain-text section comprised of integrity checks;
if any of these are invalid the packet will be discarded. The second
header, which is encrypted along with the rest of the packet, mitigates
certain types of length-based packet analysis with padding, and tells us
what higher-level function needs to be done. Due to the very simple
nature of these headers and the straightforward way in which they're
handled, unit testing and manual inspection would be better suited for
this section of the code. Instead, I skipped all that and focused my
efforts on the app data, or more specifically, the payload.

Level-1 targets everything starting after the sender pub-key hash in the
app data. The code looks like
[this](https://gist.github.com/JFreegman/7240bd05519876a7f772). What it
does is create a data buffer containing a valid public-key hash and a
bunch of random data as the payload (this is the app data section of the
packet, which is always created before adding the headers). Then the
packet is sent *n* times to each peer in the group, where *n* is the
number of different packet types that we want to test. If the for loops
in **fuzz\_send\_group\_packet()** confuse you, check out the
**GROUP\_PACKET\_TYPE** and **GROUP\_BROADCAST\_TYPE** enumerators in
the [group\_chats.h
file](https://github.com/JFreegman/toxcore/blob/new_groupchats/toxcore/group_chats.h#L119).

A few of the packet types only have a single data field in their
payload, so for them this is actually close to the highest possible
level of fuzzing. An example of this would be normal text messages,
where the entire payload is the message itself. On the other hand, some
of the packet types have numerous fields with sensitive parsing
operations tied to them, and these are the ones that require us to go a
bit deeper. For example, the sync response payload looks like this:

**\[  num\_peers  |  peer\_data\_1  |  peer\_data\_2  |  etc.  \]**

What makes it complicated is the fact that peer data is itself just
another series of data chunks of varied sizes (a protocol within a
protocol), all of which must be treated as untrusted and potentially
malicious. What happens if num\_peers doesn't reflect the actual number
of peers being sent? What happens if critical parts of the peer data
gets corrupted, such as the nick length? What happens if the packet is
too small?

To answer these questions, we move to level-2 smart-ish fuzzing. I first
need to create a valid sync response packet. There are different ways
you could do this, but I chose the path of least resistance and
copy-pasted most of [the
code](https://gist.github.com/JFreegman/9e317cc073f20e7be88e) for
creating sync responses, adjusting things where needed. Most of that
code isn't too relevant here; the interesting part is the call
to** fuzz\_gc\_packet()** at the bottom. Go ahead and [take
a look](https://gist.github.com/JFreegman/cc08d2f68a48bc34ff57) at
what's inside that function, as it's the most critical part of the
smart-fuzzing code, and differs quite a bit from the way level-1
randomizes packets.

Rather than randomizing every byte in the payload, bytes are randomized
with a probability *f*, called the fuzz-factor, with use of the
**fuzz\_this\_byte()** function. This is because I want to test packets
with different levels of corruption. Having *f* constantly cycle with
clock ticks means I can test payloads with a level of corruption ranging
from 0 bytes to the entire thing. In addition to randomizing bytes, I
sometimes also modify the data length. This tests bounds checking,
although it's only useful for packet types that don't have a strict
length requirement. For example, we would want to do this for sync
responses because the sync response handler only checks the lower bound
with the clause: if (length &lt;= sizeof(uint32\_t)).

Once I finished the tedious task of re-creating all the message sender
functions in fuzz-form and made sure everything was working properly, it
was time to try it out. I re-compiled the code with the [LLVM address
sanitizer](http://clang.llvm.org/docs/AddressSanitizer.html) enabled,
and ran three concurrent instances (that is, three peers in one group,
all spamming each other with fuzzed packets). I would then re-start the
session every time it crashed or critically misbehaved. Some people
might just settle for running it with a debugger attached, but with C
there is no guarantee that invalid memory operations will cause a crash.
The address sanitizer is a much more reliable tool for this purpose
(though it has its own downsides that make debugging more difficult).

I ended up discovering a total of four bugs all within quick succession,
 two of which were memory related ([fix
1](https://github.com/JFreegman/toxcore/commit/1732318e05c8e3ddad67411eb59de999ee62db0d)),
and two of which were behaviour related ([fix
2](https://github.com/JFreegman/toxcore/commit/689ea6091ff2784c048380e22a8340b0c70f605e)).
After gaining confidence that there were no more 'easy' bugs, I left the
three instances running overnight while I slept, and found everything
running perfectly when I woke up. Eight hours sounds like a lot of time,
but in the world of fuzzing it's only about average. It's common for
people to leave their fuzzers running over the weekend, or even for
weeks at a time, although it's highly context-dependent.

With that said, I think eight hours without a crash indicates a good
deal of robustness (that or my fuzzer isn't very good; hopefully the
former). While I still can't guarantee that my code is perfectly rock
solid, and will not stop testing here, I have much more confidence in it
now as we get close to merging the new groupchats into Toxcore's master
branch.

If anyone has any suggestions, constructive criticism, or spots any
errors, I'd love to hear about it in the comments. Happy Toxing!

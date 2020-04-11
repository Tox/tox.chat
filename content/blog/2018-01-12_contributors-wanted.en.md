Title: Contributors wanted
Date: 2018-01-12 16:29
Author: nurupo
Category: Uncategorized
Status: published

It's common knowledge that any open source project wouldn't mind having
more contributors and Tox is not an exception. This blog post is for
those who want to contribute but don't know where to start.

Starting contributing to Tox is as easy as joining [\#toktok channel on
Freenode IRC](https://wiki.tox.chat/users/community#irc), which is where
majority of the development discussion takes place, and asking what part
of Tox would benefit the most given your skill set and interests, unless
you already have an idea which part of Tox you would like to help with.
Just note that it might take some time for you to get a reply as not
everyone is always in the chat, so please be patient. Many Tox
developers and community members are connected to the chat 24/7 but get
on it only in their free time. Mailing list might sound more appropriate
for such possibly asynchronous discussions, and we do have a mailing
list, but it doesn't seem to catch on among developers much, so you will
get better response on IRC.

Here is a non-exhaustive list of things you could help with, just to
give an idea.

Non-programming
===============

You don't have to know programming in order to help. You can help by
testing nightly builds of clients and translating clients to different
languages.

Testing clients
---------------

You can help by testing nightly builds of Tox clients, the
in-development, yet to be released, versions of clients, and reporting
any problems you encounter to the developers. Testing nightly builds can
help to find bugs and get them fixed before a release is made. Some
clients don't have nightly builds available for testing, or they do but
they are not well maintained and might be broken. If this is the case
for a client you want to test, simply asking developers for nightlies
should resolve this issue. Also, even if the client you test is
non-nightly, your testing is still useful. Just make sure that you are
testing the latest release version of the client, as any issues you
encounter might have been fixed in a newer version. You can get a client
to test from the [Download page](https://tox.chat/download.html) of our
website. You can provide feedback to the client developers by opening an
issue in the client's issue tracker, which is generally located on the
client's [repository page](https://tox.chat/clients.html). When
reporting feedback, especially bugs, is a good idea to provide as much
information to the developers as possible: operating system you are
running and the version of it, the version of the Tox client you are
running, exact steps on to how to reproduce the issue you are having and
what you have expected to happen instead when you took those steps.

Translating clients
-------------------

Some of the clients support multiple languages in their user interface,
you can help translate the user interface to any language you know and
correct existing translations if you find them unsatisfactory.

Here are links for some of clients:

-   [Antidote](https://github.com/Antidote-for-Tox/Antidote/blob/d4018af502d7cb82d9f477e2078227b89a8d1d3a/FAQ/en.md#translations)
-   [qTox](https://github.com/qTox/qTox/wiki/Translating)
-   [uTox](https://github.com/uTox/uTox/tree/develop/langs)

Programming-related
===================

Software development
--------------------

Anyone with programming background is welcome, as we have quite diverse
codebases. We could use help of people familiar with any of C, C++, Go,
Haskell, Java, Python, Rust, Scala, Swift and other. Familiarity with
networking, peer-to-peer software design, distributed hash table,
cryptography and writing secure code is preferred, but not required for
all of the codebases we have. You can help with an existing software
project or start a new project of your own that would be useful to Tox.
Also, you don't have to write code to contribute. Reviewing the code
that is considered for merging into the codebase is also a great way to
help.

Website development
-------------------

We are in need of a website developer/designer or anyone familiar with
HTML, CSS, Bootstrap, Jinja 2 templates and Python. The person currently
maintaining the website is more of a C++ developer than a web developer,
so while they keep the information on the website up-to-date, doing more
involved changes, like changing the page layout, is something that is
hard for them. The Tox website [doesn't use anything
fancy](https://github.com/Tox/tox.chat), we try to keep it as simple as
possible: it's a static page website which uses Jinja2 template engine
and Python for page generation. We limit the use of JavaScript to the
point that the website is perfectly functional without it while enabling
it adds optional enhancements.

Packaging
---------

We are in need of package maintainers (to the point that we don't have
packages for Ubuntu 17.10 (Artful) at all), anyone familiar with shell
scripting, building software, debugging and fixing failed builds and
creating packages is welcome. We maintain Debian and Ubuntu package
repositories, with packages being created using pbuilder, so familiarity
with pbuilder helps.

Join \#toktok and become a contributor today!

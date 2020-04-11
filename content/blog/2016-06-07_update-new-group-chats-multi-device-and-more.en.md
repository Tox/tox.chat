Title: Update: New group chats, multi-device, and more!
Date: 2016-06-07 08:05
Author: Jfreegman
Category: Uncategorized
Status: published

Hey everyone! It's been a while since our last update, so we'd like to
get everyone up to speed on what's been going on in terms of Toxcore
development and community happenings.

One of the most discussed topics in the Tox community over the past few
months has been the release of the new group chats. Unfortunately, there
is still no ETA. I finished writing the code base about 6 months ago and
they've been available for testing for some time via my new groupchats
[branch](https://github.com/JFreegman/toxcore). However, it's still
missing one crucial thing: TCP support.  The new group chats cannot be
merged without TCP-DHT support in the core, which is currently being
worked on in a private branch by the lead core developer, irungentoo.
The latest word is that DHT is currently working over TCP, but he's
still having issues with bugs and failing tests. We know how eager
everyone is to finally be able to try out the new group chats, and we
want the community to know that work is being done and progress is being
made.

In other news, [Grayhatter](https://github.com/grayhatter), along with
the support of [Tux3](https://github.com/tux3), is working on another
widely requested feature for
Toxcore—[Multi-device](https://github.com/GrayHatter/toxcore/tree/multi-device) support. It's
still in a very early, hardly-working stage of development, but if you
like the idea of testing extremely buggy code that may or may not delete
your profile, you can try the [Multi-device
version](https://github.com/GrayHatter/uTox/tree/multidevice) of *µTox*.
**(Note: backup your save.tox profile first.)**

Finally, we would like to offer a heartfelt thank you to
[LittleVulpix](https://github.com/littlevulpix) for stepping up to the
plate and taking over [toxme.io](https://toxme.io) after its original
owner no longer had the ability to maintain the service. Additionally,
we want to thank [Encrypt](https://github.com/Encrypt), who created a
packaging script, and with the help of Tux3 has adjusted the script to
work on our build infrastructure.

That's it for now, but hopefully we'll have some more announcements for
you in the near future. Happy Toxing!

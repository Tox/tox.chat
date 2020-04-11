Title: Memory leak bug and new Toxcore release fixing it
Date: 2018-10-08 16:37
Author: nurupo
Category: Security Announcement
Status: published

A memory leak bug was discovered in Toxcore that can be triggered
remotely to exhaust one's system memory, resulting in a denial of
service attack. The bug is present in the TCP Server module of Toxcore
and therefore it affects mostly bootstrap nodes. Regular Tox clients
generally have the TCP Server functionality disabled by default, leaving
them unaffected.

The bug was introduced on July 15th, 2014 in commit
[22d28ddf36563e2d0018fc20cafdfe61278dd67f](https://github.com/TokTok/c-toxcore/commit/22d28ddf36563e2d0018fc20cafdfe61278dd67f),
making all previous versions of [TokTok
c-toxcore](https://github.com/TokTok/c-toxcore/) and [irungentoo's
toxcore](https://github.com/irungentoo/toxcore) vulnerable.

The bug is fixed in TokTok c-toxcore
[v0.2.8](https://github.com/TokTok/c-toxcore/releases/tag/v0.2.8). The
bug is also fixed in the master branch of irungentoo's toxcore, in
commit
[bf69b54f64003d160d759068f4816b2d9b2e1e21](https://github.com/irungentoo/toxcore/commit/bf69b54f64003d160d759068f4816b2d9b2e1e21).
As a general reminder, if you are still using irungentoo's toxcore, we
strongly encourage you to switch to using TokTok c-toxcore instead as
it's a lot more actively developed and maintained. In fact, irungentoo's
toxcore is neither being developed nor maintained for some time now,
aside from merging only the most critical fixes from TokTok c-toxcore
from time to time, missing all other important fixes.

If you are using TokTok c-toxcore v0.2.8, you should be unaffected by
this bug.

If you are using an older Toxcore, for example a client you use didn't
release an update, make sure that you have the TCP Server functionality
disabled in the client settings and you should be unaffected. Some
clients, like qTox v1.16.3 and uTox v0.16.1, don't provide the user with
an option to enable the TCP Server, having it always disabled, and other
clients, like Toxic v0.8.2, do provide the TCP Server option, but it's
disabled by default. Note that it's possible that some other clients
have the TCP Server option enabled by default.

If you are running a bootstrap node, we strongly encourage you to update
to TokTok c-toxcore v0.2.8 rather than disable the TCP Server option. In
fact, we will be making Toxcore v0.2.8 the minimal required version for
all of the nodes on our bootstrap node list. TCP relay functionality is
very useful for mobile users and those behind restrictive NATs, and
given that it's mostly bootstrap nodes that act as TCP relay servers, as
clients generally have that option disabled, even a few of those nodes
disabling TCP Server functionality would reduce the number of TCP relay
servers Tox clients can use considerably.

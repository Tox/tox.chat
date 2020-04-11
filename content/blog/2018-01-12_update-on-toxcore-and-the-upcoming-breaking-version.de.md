Title: Update on Toxcore and the upcoming breaking version
Date: 2018-01-12 15:30
Author: nurupo
Category: development
Status: published

Hello everyone! Time flies fast, we spent all of 2017 without any status
update, so a blog post is due, especially given that we are about to hit
a new milestone and introduce some breaking changes.

Since our last blog post about [Toxcore getting a stable version
release]({filename}2016-12-20_first-stable-release-of-toktok-toxcore.en.md),
version 0.1.0, Toxcore has seen eleven more releases, which brings it to
the version 0.1.11. Some of the notable changes in these releases
include: (a little) reduction of bandwidth usage
[\[1\]](https://github.com/TokTok/c-toxcore/pull/542),
[\[2\]](https://github.com/TokTok/c-toxcore/pull/511), fix of issues
related to reconnecting
[\[3\]](https://github.com/TokTok/c-toxcore/pull/615), improvement of
LAN discovery [\[4\]](https://github.com/TokTok/c-toxcore/pull/586),
ability to disable LAN discovery
[\[5\]](https://github.com/TokTok/c-toxcore/pull/306), fix of the read
receipts sometimes never arriving
[\[6\]](https://github.com/TokTok/c-toxcore/pull/500), reduced video
corruption [\[7\]](https://github.com/TokTok/c-toxcore/pull/623) and
better support of the FreeBSD platform
[\[8\]](https://github.com/TokTok/c-toxcore/pull/424),
[\[9\]](https://github.com/TokTok/c-toxcore/pull/473),
[\[10\]](https://github.com/TokTok/c-toxcore/pull/505),
[\[11\]](https://github.com/TokTok/c-toxcore/pull/635),
[\[12\]](https://github.com/TokTok/c-toxcore/pull/648) and the Microsoft
Visual C++ compiler
[\[13\]](https://github.com/TokTok/c-toxcore/pull/452),
[\[14\]](https://github.com/TokTok/c-toxcore/pull/479),
[\[15\]](https://github.com/TokTok/c-toxcore/pull/481),
[\[16\]](https://github.com/TokTok/c-toxcore/pull/556). Aside from
these, there were also many other bug fixes and code maintainability
improvements.

The next Toxcore release that is planned after 0.1.11 is 0.2.0. Toxcore
versioning scheme follows that of Semantic Versioning with x.y.z
versions with leading zeros being stripped, meaning that 0.1.0 has the
same API promise as 1.0.0. Which means that 0.2.0 will be a breaking
release, it will break the compatibility with 0.1.x versions. Some of
the breaking changes planned for 0.2.0 include: removal of the toxdns
library [\[17\]](https://github.com/TokTok/c-toxcore/pull/650), building
resulting in just a single Toxcore library file containing all
sublibraries' code
[\[18\]](https://github.com/TokTok/c-toxcore/pull/442) and
toxencryptsave library's API breakage
[\[19\]](https://github.com/TokTok/c-toxcore/pull/334). Other breaking
changes might be added as the work on 0.2.0 release goes on.

It's worth to note that since our last Toxcore blog post the adoption of
the [TokTok Toxcore](https://github.com/TokTok/c-toxcore/) fork of the
[original Toxcore](https://github.com/irungentoo/toxcore) has been going
well and all of the actively maintained clients have switched to using
it as their Toxcore library.

That's all with updates on Toxcore.

As usual, happy Toxing!

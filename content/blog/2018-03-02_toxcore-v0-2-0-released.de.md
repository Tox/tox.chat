Title: Toxcore v0.2.0 released
Date: 2018-03-02 20:15
Author: nurupo
Category: Uncategorized
Status: published

We are happy to announce the release of Toxcore v0.2.0. Download the
tarballs, verify the signatures and read the changelog on [Toxcore's
GitHub Releases
page](https://github.com/TokTok/c-toxcore/releases/tag/v0.2.0).

Some of the notable changes in this release are: fix for large video
frame corruption [\[1\]](https://github.com/TokTok/c-toxcore/pull/718),
removal of libtoxdns
[\[2\]](https://github.com/TokTok/c-toxcore/pull/650), small API
breaking changes in tox.h, toxav.h and toxencryptsave.h
[\[3\]](https://github.com/TokTok/c-toxcore/pull/771),
[\[4\]](https://github.com/TokTok/c-toxcore/pull/799),
[\[5\]](https://github.com/TokTok/c-toxcore/pull/821),
[\[6\]](https://github.com/TokTok/c-toxcore/pull/578),
[\[7\]](https://github.com/TokTok/c-toxcore/pull/734),
[\[8\]](https://github.com/TokTok/c-toxcore/pull/334), API deprecation
notices for APIs that will get removed in v0.3.0
[\[9\]](https://github.com/TokTok/c-toxcore/pull/798), and a build
script change that results in a single big libtoxcore library being
built, instead of separate libtoxcore, libtoxav and libtoxencryptsave
like it was before
[\[10\]](https://github.com/TokTok/c-toxcore/pull/442). One of the
changes that we hoped would get in v0.2.0 but it didn't was persistent
group chats, but with how things are going it's set to be added in one
of the v0.2.x releases.

Some clients already have support for Toxcore v0.2.0, for example [Toxic
v0.8.2](https://github.com/JFreegman/toxic/releases/tag/v0.8.2) and qTox
master, while other clients are working on adding the support.

Title: Update: Ubuntu Yakkety packages, Tox in App Store and Toxcore updates!
Date: 2016-10-30 10:11
Author: nurupo
Category: development
Status: published

Hello everyone! Some of you have requested us to make a status update,
so here we go.

Packaging
=========

Quite a bit has happened with Linux packaging this month.

Packages for Ubuntu Yakkety (16.10) are available. Our packaging team
prepared for the new Ubuntu release beforehand, packaging clients for
Ubuntu Yakkety while it was still in the beta, so all of our clients
were available for Ubuntu Yakkety on the day of its release.

Packages for Ubuntu Vivid (15.04) and Ubuntu Wily (15.10) were removed.
We have mentioned in [the previous blog
post]({filename}2016-08-26_update-new-client-xenial-packages-tox-in-google-play-toxcore-fork-and-more.en.md)
that we would like to remove them at some point, as Ubuntu Vivid and
Ubuntu Wily [have reached EOL](https://wiki.ubuntu.com/Releases), and
addition of packages for the new Ubuntu release served as that point.

Empty package repositories were removed. These repositories existed
because we considered packaging for them at one point, but because of
cross-compilation complexity and lack of required dependencies on older
distribution versions we decided not to package for them. For example,
we didn't have any packages for armel architecture and for Ubuntu Trusty
release. This [caused some
confusion](https://github.com/Tox/tox.chat/issues/101) as some Tox users
would see these package repositories available and add them, thinking
that they contained Tox clients, when in fact they were empty.

qTox packages were removed from all package repositories. In [the
previous blog
post]({filename}2016-08-26_update-new-client-xenial-packages-tox-in-google-play-toxcore-fork-and-more.en.md)
we mentioned that [*Encrypt*](https://github.com/Encrypt) was going to
take over the maintenance of qTox packages, but because of personal
reasons he is not able to volunteer as much of his free time as he hoped
he could. We decided that it's a bad idea to serve unmaintained packages
to our users, so we had to remove them. Although there are no more qTox
packages in our https://pkg.tox.chat package repository, you can still
get qTox packages from the [openSUSE Build Service package
repository](https://software.opensuse.org/download.html?project=home%3Aantonbatenev%3Atox&package=qtox),
which [qTox developers advertise as the recommended place to get qTox
packages](https://github.com/qTox/qTox/blob/master/README.md#qtox), and
which is linked on the [Download page](https://tox.chat/download.html)
of our website.

iOS
===

[Antidote](https://antidote.im/), the Tox client for iOS developer by
[*dvor*](https://github.com/dvor), is now [on the App
Store](https://itunes.apple.com/app/antidote-for-tox/id933117605). Get
it, try it out and send your feedback to Antidote's developer by either
writing a review on the App Store or submitting a bug report/feature
request to [the issue
tracker](https://github.com/Antidote-for-Tox/Antidote/issues)!

Toxcore
=======

irungentoo/toxcore
------------------

[Not much has
happened](https://github.com/irungentoo/toxcore/compare/1fa5887fee6016318d02911f78f3610dd0e0dc7f...dcf2aaa53005060608353b9d66b9917fd7ed18a9)
with [irungentoo/toxcore](https://github.com/irungentoo/toxcore).
Incorrect permissions set by
tox-boostrapd[\[1\]](https://github.com/irungentoo/toxcore/commit/d28f94a2f9d7ddba2bc439ce7cc3160305cedb82)
and bug in LAN discovery
code[\[2\]](https://github.com/irungentoo/toxcore/commit/e6af3a7825e8307a501bc7c3e7b1ff323f081870)
were fixed. A bug in development branch which resulted in a crash of
Toxcore[\[3\]](https://github.com/irungentoo/toxcore/commit/ce60b9cf52dd20aedbe2f07ed29c96663f94c313)
was fixed.

TokTok/c-toxcore
----------------

[A lot of internal
changes](https://github.com/irungentoo/toxcore/compare/755f084e8720b349026c85afbad58954cb7ff1d4...TokTok:de966cdf90843819e2f7287e22ddcb5f95491b18)
were done in [TokTok/c-toxcore](https://github.com/TokTok/c-toxcore) in
order to make it more testable and to improve the code quality in
general. Compliance with the C standard was
improved[\[4\]](https://github.com/TokTok/c-toxcore/pull/96). Callbacks
thoughout Toxcore have become stateless (ToxAv is comign next), which
will help with bindings for the languages with managed
memory[\[5\]](https://github.com/TokTok/c-toxcore/issues/40). ABI
backward compatibility support was improved
[\[6\]](https://github.com/TokTok/c-toxcore/pull/117),
[\[7\]](https://github.com/TokTok/c-toxcore/pull/70/files). Toxcore was
made compatible with C++, allowing us to use C++ compiler to catch some
type casing issues
[\[8\]](https://github.com/TokTok/c-toxcore/pull/143),
[\[9\]](https://github.com/TokTok/c-toxcore/pull/170). The existing test
suite was improved
[\[10\]](https://github.com/irungentoo/toxcore/compare/755f084e8720b349026c85afbad58954cb7ff1d4...TokTok:de966cdf90843819e2f7287e22ddcb5f95491b18).
Group chat API was rewritten to follow the guidelines of the current
API[\[11\]](https://github.com/TokTok/c-toxcore/pull/135). Generally a
lot of other code improvements happened.

To allow easier transition of clients from irungentoo/toxcore to
TokTok/c-toxcore, [0.0.1 version of TokTok/c-toxcore was
released](https://github.com/TokTok/c-toxcore/releases/tag/v0.0.1),
which would make it possible for clients to support both Toxcores at the
same time. µTox nightly has already transitioned to using
TokTok/c-toxcore, which means that the next release of µTox will be
using TokTok/c-toxcore. Antidote, Antox and qTox also have plans on
switching to TokTok/c-toxcore.

Support for UPnP and NAT-PMP is coming to Toxcore
[soon](https://github.com/TokTok/c-toxcore/pull/209).
[UPnP](https://en.wikipedia.org/wiki/Universal_Plug_and_Play#NAT_traversal)
and [NAT-PMP](https://en.wikipedia.org/wiki/NAT_Port_Mapping_Protocol)
are port forwarding mechanisms, they allow programs to automatically
setup a port forwarding rules on users' routers without users having to
manually do this. This solves the issue of routers not allowing someone
you have not communicated with before to send you data, improving Tox's
networking performance, as the hole punching workaround would not be
needed to get around this anymore.

That’s all that has happened during last couple months, until the next
update!

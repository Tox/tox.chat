Title: Update: New client, Xenial packages, Tox in Google Play, Toxcore fork and more!
Date: 2016-08-26 22:38
Author: nurupo
Category: development, groupchats
Status: published

Hello everyone! It's been more than two months since the last update and
quite a few things have happened since then, so an update is due.

Website
-------

A new client has been added to our website --
[Toxygen](https://tox.chat/clients.html). It's written in python and
uses Qt for its UI. Give it a try and see if you like it. You can get it
for Windows and Linux from [Toxygen's Releases
page](https://github.com/toxygen-project/toxygen/releases). We also
provide Debian and Ubuntu packages for it in our nightly package
repository.

Packaging
---------

Thanks to Encrypt's and tux3's efforts, we now provide packages for
Ubuntu Xenial. As of writing this, the following client packages are
available in nightly Xenial: Toxic, Toxygen and uTox.

New packages were added to our package repository: uTox, Ricin and
Toxygen. While we did package uTox before, it was just a static binary,
whereas now we have proper shared binaries made for target
distributions. Ricin is currently available only in the stable
repository, but should soon also be available in the nightly.

If you have been following qTox blog -- and yes, qTox got its
[blog](https://qtox.github.io/blog), we recommend you follow it if you
are a qTox user -- you should know that [qTox has moved from
distributing Linux packages through our packaging infrastructure to
using openSUSE's Open Build Service (OBS)
platform](https://qtox.github.io/blog/2016/08/10/Hello-World.html),
mainly as OBS allows to create packages for more Linux flavors than just
Debian and Ubuntu, such as Fedora, openSUSE, CentOS and a few more.
Because of this, tux3, the main qTox developer, has stopped maintaining
qTox Linux packages in our package repository, but he is against
removing them just yet to allow for smoother transition of users to OBS.
Encrypt, the other packaging enthusiast, has said that he is willing to
maintain qTox packages in our package repository in tux3's stead, which
tux3 is not against, and he will look into adding support for .rpm
packages (used by Fedora, openSUSE, CentOS, etc.) to our infrastructure.
Packaging is a surprisingly hard and arcane process, so if you have
experience with creating proper .rpm packages in target distribution's
chroots, we could use some help -- [please email
Encrypt](mailto:encrypt@encrypt-tips.tk?subject=Help%20with%20rpm%20packaging&cc=infrastructure@tox.chat).

Using Tox package repository
----------------------------

Just as a reminder, here are instructions on how to get our packages on
Debian and Ubuntu systems.

We currently support Debian Jessie (8/stable), Debian Stretch
(9/testing), Debian Sid (unstable), Ubuntu Vivid (15.04), Ubuntu Wily
(15.10) and Ubuntu Xenial (16.04 LTS), i386 and amd64 architectures. To
add our package repository, run the following commands, replacing
`TRACK` with either `stable` or `nightly` and replacing `RELEASE` with
one of `jessie`, `stretch`, `sid`, `vivid`, `wily` or `xenial`,
appropriate for your Debian/Ubuntu release. Packages in the stable track
are generally updated whenever a client releases a new version, and
packages in the nightly track are updated once a day with the most
recent development progress, if any.

`echo "deb https://pkg.tox.chat/debian TRACK RELEASE" | sudo tee /etc/apt/sources.list.d/tox.list wget -qO - https://pkg.tox.chat/debian/pkg.gpg.key | sudo apt-key add - sudo apt-get install apt-transport-https sudo apt-get update # List all client packages available grep -h 'Package: ' /var/lib/apt/lists/pkg.tox.chat* | grep -v ' lib'`

There is also a special `RELEASE` called `release` available, which
provides statically built versions of some of the clients. It's not very
well maintained, it's there mostly for historic reasons, as this was the
very first release name we had in our package repository and we
advertised it to users. If you are on one of the supported Debian/Ubuntu
releases mentioned above but you use the `release` release, we advise to
switch to the release appropriate for your Debian/Ubuntu version.

In the future we plan on making nightly packages to be updated as soon
as developers push new code for them, which might happen more frequently
than once a day. We also plan on dropping Ubuntu Vivid and Ubuntu Wily
support at some point, as [those Ubuntu releases have reached their end
of life](https://wiki.ubuntu.com/Releases), and adding support for
Ubuntu Yakkety.

Android
-------

Antox got [published on Google
Play](https://play.google.com/store/apps/details?id=chat.tox.antox).
Previously Antox was available only though our [F-Droid
repo](https://pkg.tox.chat/fdroid/repo), [Google Play
testing](https://play.google.com/apps/testing/chat.tox.antox) and as a
[direct APK download](https://pkg.tox.chat/fdroid/repo/antox.apk), but
now everyone can easily find and download it through Google Play. While
we believe that it might be a bit too early to make it publicly
available for everyone, given that Toxcore is not optimized for mobile
yet: it uses **a lot** of data and keeps CPU busy, resulting in
increased battery usage, which might turn people away from Tox, the
Antox developer decided that it's the perfect time to publicly release
it, so here we have it. Install it, test it and report any issues to
[Antox issue tracker](https://github.com/Antox/Antox/issues).

Shockingly enough, uTox also got [published on Google
Play](https://play.google.com/store/apps/details?id=tox.client.utox).
uTox is a native Linux application, not an Android application, made to
run on Android. As such, you can expect it having UI different to what
regular Android applications have, to the point that it might be not
very usable. It's surprising to see it being released on Google Play, as
uTox for Android was created as a joke, just to prove that you indeed
can run it on Android, it wasn't supposed to be used by anyone. You can
give it a try if you feel adventurous enough, and report bugs to [uTox
issue tracker](https://github.com/GrayHatter/uTox/issues), but we'd
suggest waiting for uTox to be properly ported on Android as an Android
application, rather than a generic Linux application.

The story goes that Antox developer didn't want to publish Antox on
Google Play until Toxcore becomes more mobile friendly, so the uTox
developer published uTox to Google Play just to provoke Antox developer
publishing Antox. Such mind games our developers play with each other.

Toxcore
-------

Toxcore's developer, irungentoo, has been very busy lately and unable to
find time to work on Toxcore. Because any change to Toxcore should be
first reviewed and approved by irungentoo, as he is the only one who can
merge changes, Toxcore development has been stalled for some time now.
To get around this, [a non-hostile Toxcore
fork](https://github.com/TokTok/toxcore) was created by iphy, where the
development is currently ongoing.

You might have noticed that the fork was created in [TokTok GitHub
organization](https://github.com/TokTok). What is TokTok? TokTok
initially was one of [Google Summer of Code 2015
projects](https://www.google-melange.com/archive/gsoc/2015/orgs/tox)
mentored by iphy, specifically it was the [New Android Client
project](https://wiki.tox.chat/developers/gsoc/2015/ideas#new_android_client)
([GitHub repository](https://github.com/iphydf/toktok)). iphy has
[extended the idea since then
greatly](https://toktok.github.io/index.html), to the point of [making
it a distributed storage and computing
platform](https://toktok.github.io/vision.html), but the fact that it's
still built on top of Toxcore remains unchanged. Why is the new Toxcore
fork in the TokTok GitHub organization? iphy was quick on forking
Toxcore, setting up automated testing and review system, opening bug
reports and adding code contributions, so that before we could even get
iphy to explain what the fork is about and decide whether we should
support it and move it to the [Tox GitHub
organization](https://github.com/Tox), it has already became problematic
to move it to Tox organization because everything would need to be
re-setup again, so we just left it there, at least for now. We might
move it to the Tox GitHub organization later, but for now we don't
really care where it is, what we care is improving Toxcore.

The current goal that we work towards in the forked Toxcore is to test
whether Toxcore does what the Tox specification says it should be doing.
Since the Tox specification was written after the Toxcore implementation
was made, not the other way around, Toxcore currently has no
specification-based tests. Having a specification testing framework
would allow us to test Toxcore and any possible future Tox
implementation against the claims made in the Tox specification, which
also would allow for an easy way of extending the Tox specification and
having those extensions tested. This goal also would allow us to get
more familiar with Toxcore codebase, as previously only irungentoo had a
good knowledge of it. After the specification-based testing will be
complete and we become familiar with Toxcore codebase, we will be able
to proceed with including new features into the Tox specification and
implementing them.

Multidevice
-----------

Multidevice support is not yet complete, [Grayhatter and several other
contributors are still working on
it](https://github.com/GrayHatter/toxcore/tree/multi-device). Some of
the things that need to be done include support of synchronization of
video and audio calls, file transfers and friend deletion actions.

New group chats
---------------

New group chat support is currently not being worked on by anyone. As
you might have read from [the previous update blog
post](https://blog.tox.chat/2016/06/update-new-group-chats-multi-device-and-more/),
the new group chats are almost fully implemented in JFreegman's Toxcore
fork, the only thing needed for them to work properly is the TCP-DHT
support by Toxcore. Irungentoo has said that he will work on adding
TCP-DHT to Toxcore, but as he has been busy, he never got to adding
TCP-DHT to Toxcore and we don't know when he will have time to do that.
Also, because the current goal of the Toxcore fork is to be fully tested
against Tox specification, and both TCP-DHT and the new group chat are
not (yet) part of the specification, we can't implement them before we
are done with the testing, as implementing them would make Toxcore
behave in a way that is not conforming with the current Tox
specification. For now we are trying to avoid modifying Toxcore
behavior, until we are done with the specification-based tests. We
believe that with irungentoo being less active, having
specification-based tests and good understanding of Toxcore is a good
investment of our time before we move to implementing other features,
such as TCP-DHT for the new group chat, so don't be upset if your
favorite feature didn't make it in, we are slowly but steadily working
on it.

That's all for now, until the next time!

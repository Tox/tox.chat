Title: Bug in musl-libc discovered, affecting the fully static Toxic builds
Date: 2017-10-20 19:49
Author: nurupo
Category: Security Announcement
Status: published

We advise everyone using the fully static Toxic builds that are listed
on our [download page](https://tox.chat/download.html) to update them to
the newest version by re-downloading them from that page. Those Toxic
builds use musl-libc and there was a fairly serious bug discovered in
musl-libc
([CVE-2017-15650](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-15650))
and [patched
yesterday](https://git.musl-libc.org/cgit/musl/commit/?id=45ca5d3fcb6f874bf5ba55d0e9651cef68515395)
. The new Toxic builds include this patch. This affects only the fully
static Toxic builds, no other builds currently use musl-libc.

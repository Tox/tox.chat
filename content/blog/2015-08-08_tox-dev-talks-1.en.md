Title: Tox Dev Talks - #1
Date: 2015-08-08 23:29
Author: areashr
Category: Tox Dev Talks
Status: published

*(If you don't already know, Tox Dev Talks is a series of weekly
meetings that bring the Tox developer community together to share ideas,
progress, and miscellaneous chatter. They take place every Saturday at
03:00 UTC.)*

This week's Tox Dev Talk turned out exceptionally well, especially as it
was the first one. The primary focus was on mobile issues; here is a
summary of what was discussed.

-   How do we deal with doze mode in Android M?
    -   Do we use GCM?
-   Is a "passive mode" for toxcore so we can reduce battery and data
    usage possible?
-   How do we deal with backgrounding restrictions on iOS?
    -   Possible solution: use VoIP sockets.
-   No concrete decisions as of now.

<!-- -->

-   qTox: as tux3 has been absent for a while, the main repo might be
    moved to DaSpirit's fork.

**Progress updates and to-do:**

-   **installgen2 (Web)**
    -   ToxKek - Fix connection and crash bugs, add mobile frontend
        design, add avatars, add file transfers, add ToxDNS support, add
        groupchat support, add memes, and add remote server support.
        *(ToxKek is an early-stage HTML/JS Tox client.)*
    -   Tox.Party - Add Tox3 support and get https certificate.
    -   Tox Wiki - Add missing pages and clean up mess
-   **chuongv (iOS)**
    -   Antidote: Implement video calls for this week.
-   **subliun (Android)**
    -   Antox: working on encrypted profile support, fixing some bugs,
        and getting ready for av support.
    -   New ToxDNS host is toxme.io
-   **Impyy (C\#/Windows)**
    -   SharpTox - finish new groupchat bindings, write documentation
        for both new av api and new groupchat api.
-   **oranges (Build infrastructure)**
    -   Jenkins is up and building libraries, some clients are building.
    -   Waiting on client devs for some of the other clients.

We hope to see more of the same kind of constructive discussion, and
more developers in attendance next week!

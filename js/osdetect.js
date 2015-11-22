var OSName = "Unknown";
var dlLink = ["https://wiki.tox.chat/binaries"];
var title = ["Download Tox"];
var desc = ["Happy hacking"]
var groupnum = 2;
var arch = 0;

function getModalContent(client) {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200 || this.status == 304) {
        var thisarlen=document.getElementsByName(client).length;
        for (var j=0; j < thisarlen; j++) {
            document.getElementsByName(client)[j].innerHTML = this.responseText;
        }
        console.log("received " + client);
    } else if (this.status == 404) { 
        var thisarlen=document.getElementsByName(client).length;
        for (var j=0; j < thisarlen; j++) {
            document.getElementsByName(client)[j].innerHTML = " ";
        }
        console.log("404 " + client);
    }
    };
    var clientToGet = "clients/" + client + ".html";
        xhr.open('GET', clientToGet, true);
        xhr.send();
        console.log("sent " + client);
}

//detect arch
//if it declares 64 be 64
if (window.navigator.userAgent.indexOf("WOW64")!=-1 || window.navigator.userAgent.indexOf("x86_64")!=-1 || window.navigator.userAgent.indexOf("x64;")!=-1 || window.navigator.userAgent.indexOf("Win64")!=-1 || window.navigator.userAgent.indexOf("AMD64")!=-1) {
    arch = 64;
}
//if it declares 32 be 32
if (window.navigator.userAgent.indexOf("i386")!=-1 || window.navigator.userAgent.indexOf("i686")!=-1) {
    arch = 32;
}
//if it declared neither and it's windows we know it's 32 and we only care about arches on desktop windows right now
if (window.navigator.userAgent.indexOf("Windows")!=-1 && arch==0) {
    arch = 32;
}

/* order matters because of timid niche device UAs
 * some windows phones say they're also iOS so we put WP at the bottom
 * to make sure if there's any WP mentioned at all it gets set to WP
 * even though we have no wp client yet they lie about being ios
 * which would be more confusing so we have to catch it
 * thanks nutella
 * anyways here we configure what to do for each UA with (button) titles,
 * links, and descriptions. first button has all arrays' [0] second has [1] etc
 */

if (window.navigator.userAgent.indexOf("Mac")!=-1) {
    OSName="Mac"; title=["Download uTox"]; 
    clientName=["utox"];
    desc=["(OS X 10.7+)"];
    longDesc=["uTox is currently the only client getting built for OS X."];
    dlLink=["https://zodiaclabs.org/storage/c1/uTox-0.4.2.dmg"];}
if (window.navigator.userAgent.indexOf("iPad")!=-1) {
    OSName="iOS"; title=["Install Antidote"];
    clientName=["antidote"];
    desc=["(iOS 8+)"];
    longDesc=["(not yet iPad-optimized)"];
    dlLink=["http://antidote.im"];}
if (window.navigator.userAgent.indexOf("iPhone")!=-1) {
    OSName="iOS"; title=["Install Antidote"];
    clientName=["antidote"];
    desc=["(iOS 8+)"];
    longDesc=[""];
    dlLink=["http://antidote.im"];}

if (window.navigator.userAgent.indexOf("Linux")!=-1) {
    if (arch==32) {
        OSName="Linux"; title=["Install Repo", "qTox 32-bit", "uTox 32-bit", "Toxic 32-bit"];
        clientName=["repo", "qtox", "utox", "toxic"];
        desc=["For apt, Gentoo, and Arch.", "Qt 5, prioritizes UX", "uses its own toolkit, more minimal", "ncurses, cli"];
        longDesc=["We have an apt repo for Ubuntu and other Debian derivatives, plus a Gentoo overlay and an Arch PKGBUILD.", "There are different versions available in the repo, using different versions of Qt and with different compilation settings.", "", ""];
        dlLink=["#gnulinux", "https://build.tox.chat/job/qTox-qt5.4.2_build_linux_x86_release/lastSuccessfulBuild/artifact/qTox-qt5.4.2_build_linux_x86_release.tar.xz", "https://build.tox.chat/job/uTox_build_linux_x86_release/lastSuccessfulBuild/artifact/utox_linux_x86.tar.xz", "https://build.tox.chat/job/toxic_build_linux_x86_release/lastSuccessfulBuild/artifact/toxic_build_linux_x86_release.tar.xz"];
    } else if (arch==64) {
        OSName="Linux"; title=["Install Repo", "qTox 64-bit", "uTox 64-bit", "Toxic 64-bit"];
        clientName=["repo", "qtox", "utox", "toxic"];
        desc=["For apt, Gentoo, and Arch.", "Qt 5, prioritizes UX", "uses its own toolkit, more minimal", "ncurses, cli"];
        longDesc=["We have an apt repo for Ubuntu and other Debian derivatives, plus a Gentoo overlay and an Arch PKGBUILD.", "There are different versions available in the repo, using different versions of Qt and with different compilation settings.", "", ""];
        dlLink=["#gnulinux", "https://build.tox.chat/job/qTox-qt5.4.2_build_linux_x86-64_release/lastSuccessfulBuild/artifact/qTox-qt5.4.2_build_linux_x86-64_release.tar.xz", "https://build.tox.chat/job/uTox_build_linux_x86-64_release/lastSuccessfulBuild/artifact/utox_linux_x86-64.tar.xz", "https://build.tox.chat/job/toxic_build_linux_x86-64_release/lastSuccessfulBuild/artifact/toxic_build_linux_x86-64_release.tar.xz"];
    } else {
        OSName="Linux"; title=["Install Repo"];
        clientName=["repo"];
        desc=["For apt, Gentoo, and Arch."];
        longDesc=["We have an apt repo for Ubuntu and other Debian derivatives, plus a Gentoo overlay and an Arch PKGBUILD."];
        dlLink=["#gnulinux"];
    }
}
    
if (window.navigator.userAgent.indexOf("FreeBSD")!=-1) {
    OSName="FreeBSD"; title=["Install qTox", "Install uTox", "Install Toxic"];
    clientName=["qtox", "utox", "toxic"];
    desc=["Qt 5, prioritizes UX", "uses its own toolkit, more minimal", "ncurses, cli"];
    longDesc=["", "", ""];
    dlLink=["https://www.freshports.org/net-im/qTox", "https://freshports.org/net-im/uTox/", "https://freshports.org/net-im/toxic/"];}

if (window.navigator.userAgent.indexOf("Android")!=-1) { 
    OSName="Android"; title=["Install Antox", "Get Antox APK"];
    clientName=["antox", "antox"];
    desc=["Requires F-droid.", "You'll need to update manually."];
    longDesc=["<h5>F-droid is a package manager for Android. <a href='https://f-droid.org/' target='_blank'>Get F-droid here.</a></h5><br/><iframe src='clients/antox.html'>", "<h5>You'll have to update manually later if you download the raw APK.</h5><br/><iframe src='clients/antox.html'>"];
    dlLink=["#fdroid", "https://build.tox.chat/job/antox_build_android_arm_release/lastSuccessfulBuild/artifact/antox.apk"];}

if (window.navigator.userAgent.indexOf("Windows")!=-1) {
    if (arch==64) {
        OSName="Windows"; title=["qTox 64-bit", "uTox 64-bit"/*, "Toxy 64-bit"*/];
        clientName=["qtox", "utox"];
        desc=["Recommended, most user-friendly.", "Might run more lightly. A little glitchy."/*, "Metro-style."*/];
        longDesc=["qTox should look native on most versions of Windows. Change the appearance in Settings.", "", ""];
        dlLink=["https://build.tox.chat/view/Clients/job/qTox_build_windows_x86-64_release/lastSuccessfulBuild/artifact/qTox_build_windows_x86-64_release.zip", "https://build.tox.chat/job/uTox_build_windows_x86-64_release/lastSuccessfulBuild/artifact/utox_windows_x86-64.zip"/*, "https://jenkins.impy.me/job/Toxy%20x64/lastSuccessfulBuild/artifact/toxy_x64.zip"*/];
    } else {
        OSName="Windows"; title=["qTox 32-bit", "uTox 32-bit"/*, "Toxy 32-bit"*/];
        clientName=["qtox", "utox"];
        desc=["Recommended, most user-friendly.", "Might run more lightly. A little glitchy."/*, "Metro-style."*/];
        longDesc=["qTox should look native on most versions of Windows. Change the appearance in Settings.", "", ""];
        dlLink=["https://build.tox.chat/view/Clients/job/qTox_build_windows_x86_release/lastSuccessfulBuild/artifact/qTox_build_windows_x86_release.zip", "https://build.tox.chat/job/uTox_build_windows_x86_release/lastSuccessfulBuild/artifact/utox_windows_x86.zip"/*, "https://jenkins.impy.me/job/Toxy%20x86/lastSuccessfulBuild/artifact/toxy_x86.zip"*/];
    }
}
if (window.navigator.userAgent.indexOf("Windows Phone")!=-1) {
    OSName="Unknown"; title=["Download"];
    dlLink=["http://wiki.tox.chat/binaries"];}

//set platform toxlock
document.getElementById("platImg").src = "img/plat/" + OSName.toLowerCase() + ".svg";

//remove normal button
document.getElementById("defaultButton").innerHTML="";

//if Unknown OS, do boring button, else generate from UA config
if (OSName=="Unknown") {
    document.getElementById("buttonArea").innerHTML = "<a id='link' href='http://wiki.tox.chat/binaries' class='button download'><span class='fa fa-download'>&nbsp;</span>Download</a>"
} else {
    //loop through all links and make buttons and info modals
    var arlen=dlLink.length;
    for (var i=0; i < arlen; i++) {
        var button = "<a id='link" + i + "' href='" + dlLink[i] + "' class='button download'><span class='fa fa-download'>&nbsp;</span>" + title[i] + "</a>";
        var blurb = "<span class='button' style='background:#353535;box-shadow:none;cursor:default;'>" + desc[i] + "&nbsp;&nbsp;<a href='#info-" + title[i].replace(" ", "-") + "-" + OSName + "'><span class='fa fa-info-circle'></span></a></span>"
        
        document.getElementById("buttonArea").innerHTML = document.getElementById("buttonArea").innerHTML + button + blurb + "<br/>";
        document.getElementById("modals").innerHTML = document.getElementById("modals").innerHTML + "<div id='info-" + title[i].replace(" ", "-") + "-" + OSName + "' class='modalDialog button'><div><a href='#close' title='Close' class='close'><span class='fa fa-close'>&nbsp;</span></a><h2>" + title[i] + "</h2><br/><div>" + longDesc[i] + "</div><br/><div><img style='width:100%;' src='img/client/" + clientName[i] + "_" + OSName.toLowerCase() + ".png'></div><br/><div name='" + clientName[i] + "'>&nbsp;</div></div></div>";
    
        getModalContent(clientName[i]);
        console.log("just did " + clientName[i]);
        
        
    }
}

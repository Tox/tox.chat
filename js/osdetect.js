var OSName = "Unknown";
var dlLink = ["https://wiki.tox.chat/binaries"];
var title = ["Download Tox"];
var desc = ["Happy hacking"]
var groupnum = 2;
var arch = 0;

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
    desc=["(OS X 10.7+)"];
    dlLink=["https://zodiaclabs.org/storage/c1/uTox-0.4.2.dmg"];}
if (window.navigator.userAgent.indexOf("iPad")!=-1) {
    OSName="iOS"; title=["Install Antidote"];
    desc=["(iOS 8+)"];
    dlLink=["http://antidote.im"];}
if (window.navigator.userAgent.indexOf("iPhone")!=-1) {
    OSName="iOS"; title=["Install Antidote"];
    desc=["(iOS 8+)"];
    dlLink=["http://antidote.im"];}

if (window.navigator.userAgent.indexOf("Linux")!=-1) {
    OSName="Linux"; title=["Install Tox"];
    desc=["We have packages for most major distros."];
    dlLink=["#gnulinux"];}
if (window.navigator.userAgent.indexOf("FreeBSD")!=-1) {
    OSName="FreeBSD"; title=["Install qTox", "Install uTox", "Install Toxic"];
    desc=["Qt 5, prioritizes UX", "own toolkit, more minimal", "ncurses, cli"];
    dlLink=["https://www.freshports.org/net-im/qTox", "https://freshports.org/net-im/uTox/", "https://freshports.org/net-im/toxic/"];}
if (window.navigator.userAgent.indexOf("Android")!=-1) { 
    OSName="Android"; title=["Install Antox from Fdroid", "Get Antox APK"];
    dlLink=["#fdroid", "https://build.tox.chat/job/antox_build_android_arm_release/lastSuccessfulBuild/artifact/antox.apk"];}

if (window.navigator.userAgent.indexOf("Windows")!=-1) {
    OSName="Windows"; title=["qTox 32-bit", "qTox 64-bit", "uTox 32-bit", "uTox 64-bit", "Toxy 32-bit", "Toxy 64-bit"];
    desc=["Recommended, most user-friendly.", "Recommended, most user-friendly.", "Might run more lightly. A little glitchy.", "Might run more lightly. A little glitchy.", "Metro-style.", "Metro-style."];
    dlLink=["https://build.tox.chat/view/Clients/job/qTox_build_windows_x86_release/lastSuccessfulBuild/artifact/qTox_build_windows_x86_release.zip", "https://build.tox.chat/view/Clients/job/qTox_build_windows_x86-64_release/lastSuccessfulBuild/artifact/qTox_build_windows_x86-64_release.zip", "https://build.tox.chat/job/uTox_build_windows_x86_release/lastSuccessfulBuild/artifact/utox_windows_x86.zip", "https://build.tox.chat/job/uTox_build_windows_x86-64_release/lastSuccessfulBuild/artifact/utox_windows_x86-64.zip", "https://jenkins.impy.me/job/Toxy%20x86/lastSuccessfulBuild/artifact/toxy_x86.zip", "https://jenkins.impy.me/job/Toxy%20x64/lastSuccessfulBuild/artifact/toxy_x64.zip"];}
if (window.navigator.userAgent.indexOf("Windows Phone")!=-1) {
    OSName="Unknown"; title=["Download"];
    dlLink=["http://wiki.tox.chat/binaries"];}

//set image
document.getElementById("platImg").src = "img/plat/" + OSName.toLowerCase() + ".svg";

//remove normal button
document.getElementById("defaultButton").innerHTML="";

//if Unknown OS, do boring button, else generate from UA config
if (OSName=="Unknown") {
    document.getElementById("buttonArea").innerHTML = "<a id='link' href='http://wiki.tox.chat/binaries' class='button download'><span class='fa fa-download'>&nbsp;</span>Download</a>"
} else {
    //loop through all links and make buttons
    var arlen=dlLink.length;
    for (var i=0; i < arlen; i++) {
        var button = "<a id='link" + i + "' href='" + dlLink[i] + "' class='button download'><span class='fa fa-download'>&nbsp;</span>" + title[i] + arch + "</a>";
        var blurb = "<span class='button' style='background:#353535;box-shadow:none;cursor:default;'>" + desc[i] + "</span>"
        document.getElementById("buttonArea").innerHTML = document.getElementById("buttonArea").innerHTML + button + blurb + "<br/>";
    }
}

var OSName = "Unknown";
var dlLink = ["https://wiki.tox.chat/binaries"];
var title = ["Download"];
var groupnum = 2;
var arch = 0;

//detect arch
if (window.navigator.userAgent.indexOf("WOW64")!=-1 || window.navigator.userAgent.indexOf("x86_64")!=-1 || window.navigator.userAgent.indexOf("x64;")!=-1 || window.navigator.userAgent.indexOf("Win64")!=-1 || window.navigator.userAgent.indexOf("AMD64")!=-1) {
    arch = 64;
}
if (window.navigator.userAgent.indexOf("i386")!=-1 || window.navigator.userAgent.indexOf("i686")!=-1 || window.navigator.userAgent.indexOf("i586")!=-1) {
    arch = 32;
}

/* order matters because of timid niche device UAs
 * some windows phones say they're also iOS so we put WP at the bottom
 * to make sure if there's any WP mentioned at all it gets set to WP
 * even though we have no wp client yet they lie about being ios
 * which would be more confusing so we have to catch it
 * thanks nutella
 */

if (window.navigator.userAgent.indexOf("Mac")!=-1) {
    OSName="Mac"; title=["uTox"]; 
    dlLink=["https://zodiaclabs.org/storage/c1/uTox-0.4.2.dmg"];}
if (window.navigator.userAgent.indexOf("iPad")!=-1) {
    OSName="iOS"; title=["Antidote"];
    dlLink=["http://antidote.im"];}
if (window.navigator.userAgent.indexOf("iPhone")!=-1) {
    OSName="iOS"; title=["Antidote"];
    dlLink=["http://antidote.im"];}

if (window.navigator.userAgent.indexOf("Linux")!=-1) {
    OSName="Linux"; title=["Tox"];
    dlLink=["#gnulinux"];}
if (window.navigator.userAgent.indexOf("FreeBSD")!=-1) {
    OSName="FreeBSD"; title=["qTox"];
    dlLink=["https://www.freshports.org/net-im/qTox"];}
if (window.navigator.userAgent.indexOf("Android")!=-1) { 
    OSName="Android"; title=["Antox (Fdroid)", "Antox (APK)"];
    dlLink=["https://wiki.tox.chat/binaries#f-droid", "https://build.tox.chat/job/antox_build_android_arm_release/lastSuccessfulBuild/artifact/antox.apk"];}

if (window.navigator.userAgent.indexOf("Windows")!=-1) {
    OSName="Windows"; title=["32bit qTox", "64bit qTox", "32bit uTox", "64bit uTox", "32bit Toxy", "64bit Toxy"];
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
        //br every two buttons
        var bab = "";
        var hi = i + 1;
        if (hi % groupnum === 0) bab = "<br/>";
        var button = "<a id='link" + i + "' href='" + dlLink[i] + "' class='button download'><span class='fa fa-download'>&nbsp;</span>Download " + title[i] + arch + "</a>" + bab;
        document.getElementById("buttonArea").innerHTML = document.getElementById("buttonArea").innerHTML + button;
    }
}

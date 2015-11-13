var OSName = "Unknown";
var dlLink = ["https://wiki.tox.chat/binaries"];
var title = ["Download"];

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
    OSName="Linux"; title=["qTox", "Toxic", "uTox"];
    dlLink=["https://wiki.tox.chat/binaries#gnulinux"];}
if (window.navigator.userAgent.indexOf("FreeBSD")!=-1) {
    OSName="FreeBSD"; title=["qTox"];
    dlLink=["https://www.freshports.org/net-im/qTox"];}
if (window.navigator.userAgent.indexOf("Android")!=-1) { 
    OSName="Android"; title=["Antox (Fdroid)", "Antox (APK)"];
    dlLink=["https://wiki.tox.chat/binaries#f-droid", "https://build.tox.chat/job/antox_build_android_arm_release/lastSuccessfulBuild/artifact/antox.apk"];}

if (window.navigator.userAgent.indexOf("Windows")!=-1) {
    OSName="Windows"; title=["32 bit", "64 bit"];
    dlLink=["https://build.tox.chat/view/Clients/job/qTox_build_windows_x86_release/lastSuccessfulBuild/artifact/qTox_build_windows_x86_release.zip", "https://build.tox.chat/view/Clients/job/qTox_build_windows_x86-64_release/lastSuccessfulBuild/artifact/qTox_build_windows_x86-64_release.zip"];}
if (window.navigator.userAgent.indexOf("Windows Phone")!=-1) {
    OSName="Unknown"; title=["Download"];
    dlLink=["http://wiki.tox.chat/binaries"];}

//set image
document.getElementById("platimg").src = "img/plat/" + OSName.toLowerCase() + ".svg";

//remove normal button
document.getElementById("defaultButton").innerHTML="";

//loop through all links and make buttons
var arlen=dlLink.length;
for (var i=0; i < arlen; i++) {
    var button64 = "<a id='link" + i + "' href='" + dlLink[i] + "' class='button download'><span class='fa fa-download'>&nbsp;</span>Download " + title[i] + " for " + OSName + "</a>";
    document.getElementById("buttonarea").innerHTML = document.getElementById("buttonarea").innerHTML + button64;
}

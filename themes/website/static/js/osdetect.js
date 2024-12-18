/*
	Globals
*/

var arch = 0;
var OSName = "Unknown";

var clients = [];

/*
	Arch detection
*/

// If 64 is declared
if (window.navigator.userAgent.indexOf("WOW64") != -1 || window.navigator.userAgent.indexOf("x86_64") != -1 || window.navigator.userAgent.indexOf("x64;") != -1 || window.navigator.userAgent.indexOf("Win64") != -1 || window.navigator.userAgent.indexOf("AMD64") != -1) {
	arch = 64;
}

// If 32 is declared
if (window.navigator.userAgent.indexOf("i386") != -1 || window.navigator.userAgent.indexOf("i686") != -1) {
	arch = 32;
}

// If the OS is Windows and neither is declared we know it's 32
if (window.navigator.userAgent.indexOf("Windows") != -1 && arch == 0) {
	arch = 32;
}

/*
	OS detection (order matters)
*/

if (window.navigator.userAgent.indexOf("Mac") != -1) {
	OSName = "Mac";

	clients = [];
}

if (window.navigator.userAgent.indexOf("iPad") != -1) {
	OSName = "iOS";

	clients = [];
}

if (window.navigator.userAgent.indexOf("iPhone") != -1) {
	OSName = "iOS";

	clients = [];
}

if (window.navigator.userAgent.indexOf("FreeBSD") != -1) {
	OSName = "FreeBSD";

	clients = [{
		title: "Install uTox",
		name: "utox",
		icon: "external-link",
		desc: true,
		dlLink: "https://freshports.org/net-im/uTox/",
	}, {
		title: "Install Toxic",
		name: "toxic",
		icon: "external-link",
		desc: true,
		dlLink: "https://freshports.org/net-im/toxic/",
	}];
}

if (window.navigator.userAgent.indexOf("Android") != -1) {
	OSName = "Android";

	clients = [{
		title: "aTox F-Droid",
		name: "atox",
		icon: "external-link",
		desc: true,
		dlLink: "https://f-droid.org/en/packages/ltd.evilcorp.atox/",
	}, {
		title: "aTox Google Play",
		name: "atox",
		icon: "external-link",
		desc: true,
		dlLink: "https://play.google.com/store/apps/details?id=ltd.evilcorp.atox",
	}, {
		title: "aTox APK",
		name: "atox",
		icon: "download",
		desc: true,
		dlLink: "https://github.com/evilcorpltd/aTox/releases/download/v0.8.0/atox.apk",
	}];
}

if (window.navigator.userAgent.indexOf("Windows") != -1) {
	OSName = "Windows";

	if (arch == 64) {
		clients = [{
			title: "uTox 64-bit",
			name: "utox",
			icon: "download",
			desc: true,
			dlLink: "https://github.com/uTox/uTox/releases/download/v0.18.1/utox_x86_64.exe",
		}];
	} else {
		clients = [];
	}
}

if (window.navigator.userAgent.indexOf("Windows Phone") != -1) {
	// We don't have a windows phone client?!??
	clients = [];
}

/*
	All the magic stuff the makes the buttons change and stuff
*/

// Set platform toxlock
document.getElementById("platImg").src = "theme/img/plat/" + OSName.toLowerCase() + ".svg";

// Remove normal button
document.getElementById("defaultButton").innerHTML = "";

// Loop through all links and make buttons and info modals
for (var i = 0; i < clients.length; i++) {
	var client = clients[i];

	var button = "\
	<a id='link" + i + "' href='" + client.dlLink + "' class='button large-button download'>\
		<span class='fa fa-" + client.icon + "'>&nbsp;</span>" + client.title + "\
	</a>";

	var infoButton = "";
	if (client.desc) {
		infoButton = "\
		<a class='button large-button' style='box-shadow:none;color:#368CCA;' href='clients.html#" + client.name + "' title='More info'>\
			<span class='fa fa-info-circle'></span>\
		</a>";
	}

	document.getElementById("buttonArea").innerHTML = document.getElementById("buttonArea").innerHTML + button + infoButton + "<br/>";
}

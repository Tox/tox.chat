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

	clients = [{
		title: "qTox (macOS 12+, Apple Silicon)",
		name: "qtox",
		icon: "download",
		desc: true,
		dlLink: "https://github.com/TokTok/qTox/releases/download/v1.18.3/qTox-v1.18.3.arm64-12.0.dmg",
	}, {
		title: "qTox (macOS 10.15+, Apple Silicon)",
		name: "qtox",
		icon: "download",
		desc: true,
		dlLink: "https://github.com/TokTok/qTox/releases/download/v1.18.3/qTox-v1.18.3.arm64-10.15.dmg",
	}, {
		title: "qTox (macOS 12+, Intel)",
		name: "qtox",
		icon: "download",
		desc: true,
		dlLink: "https://github.com/TokTok/qTox/releases/download/v1.18.3/qTox-v1.18.3.x86_64-12.0.dmg",
	}, {
		title: "qTox (macOS 10.15+, Intel)",
		name: "qtox",
		icon: "download",
		desc: true,
		dlLink: "https://github.com/TokTok/qTox/releases/download/v1.18.3/qTox-v1.18.3.x86_64-10.15.dmg",
	}];
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
		title: "Install qTox",
		name: "qtox",
		icon: "external-link",
		desc: true,
		dlLink: "https://www.freshports.org/net-im/qTox",
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
			title: "qTox 64-bit",
			name: "qtox",
			icon: "download",
			desc: true,
			dlLink: "https://github.com/TokTok/qTox/releases/download/v1.18.3/setup-qtox-x86_64-release.exe",
		}];
	} else {
		clients = [{
			title: "qTox 32-bit",
			name: "qtox",
			icon: "download",
			desc: true,
			dlLink: "https://github.com/TokTok/qTox/releases/download/v1.18.3/setup-qtox-i686-release.exe",
		}];
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

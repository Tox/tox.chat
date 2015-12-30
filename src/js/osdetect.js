/*
	Globals
*/

var arch = 0;
var OSName = "Unknown";

var defClient = {
	title: "Wiki Downloads",
	name: "",
	icon: "external-link",
	desc: false,
	dlLink: "http://wiki.tox.chat/binaries",
};

var clients = [defClient];

/*
	Functions
*/

// Fetches client about pages and puts them in modals
function getModalContent(clientName) {
	xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200 || this.status == 304) {
			var thisarrlen = document.getElementsByName(clientName).length;
			for (var j = 0; j < thisarrlen; j++) {
				document.getElementsByName(clientName)[j].innerHTML = this.responseText;
			}

			console.log("Received " + clientName);
		} else if (this.status == 404) {
			var thisarrlen = document.getElementsByName(clientName).length;
			for (var j = 0; j < thisarrlen; j++) {
				document.getElementsByName(clientName)[j].innerHTML = " ";
			}

			console.log("404 " + clientName);
		}
	};

	var clientToGet = "abouts/" + clientName + ".html";

	xhr.open("GET", clientToGet, true);
	xhr.send();

	console.log("Sent " + clientName);
}

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
		title: "Download uTox",
		name: "utox",
		icon: "download",
		desc: true,
		dlLink: "https://zodiaclabs.org/storage/c1/uTox-0.4.2.dmg",
	}];
}

if (window.navigator.userAgent.indexOf("iPad") != -1) {
	OSName = "iOS";

	clients = [{
		title: "Install Antidote",
		name: "antidote",
		icon: "external-link",
		desc: true,
		dlLink: "http://antidote.im",
	}];
}

if (window.navigator.userAgent.indexOf("iPhone") != -1) {
	OSName = "iOS";

	clients = [{
		title: "Install Antidote",
		name: "antidote",
		icon: "external-link",
		desc: true,
		dlLink: "http://antidote.im",
	}];
}

if (window.navigator.userAgent.indexOf("Linux") != -1) {
	OSName = "Linux";

	clients = [{
		title: "Install Repo",
		name: "repo",
		icon: "list-ul",
		desc: false,
		dlLink: "#gnulinux",
	}];
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
		title: "Install Antox",
		name: "antox",
		icon: "external-link",
		desc: true,
		dlLink: "#fdroid",
	}, {
		title: "Antox APK",
		name: "antox",
		icon: "download",
		desc: true,
		dlLink: "https://build.tox.chat/job/antox_build_android_arm_release/lastSuccessfulBuild/artifact/antox.apk",
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
			dlLink: "https://build.tox.chat/view/Clients/job/qTox_build_windows_x86-64_release/lastSuccessfulBuild/artifact/qTox_build_windows_x86-64_release.zip",
		}, {
			title: "uTox 64-bit",
			name: "utox",
			icon: "download",
			desc: true,
			dlLink: "https://build.tox.chat/job/uTox_build_windows_x86-64_release/lastSuccessfulBuild/artifact/utox_windows_x86-64.zip",
		}];
	} else {
		clients = [{
			title: "qTox 32-bit",
			name: "qtox",
			icon: "download",
			desc: true,
			dlLink: "https://build.tox.chat/view/Clients/job/qTox_build_windows_x86_release/lastSuccessfulBuild/artifact/qTox_build_windows_x86_release.zip",
		}, {
			title: "uTox 32-bit",
			name: "utox",
			icon: "download",
			desc: true,
			dlLink: "https://build.tox.chat/job/uTox_build_windows_x86_release/lastSuccessfulBuild/artifact/utox_windows_x86.zip"
		}];
	}
}

if (window.navigator.userAgent.indexOf("Windows Phone") != -1) {
	// We don't have a windows phone client?!??
	clients = [defClient];
}

/*
	All the magic stuff the makes the buttons change and stuff
*/

// Set platform toxlock
document.getElementById("platImg").src = "img/plat/" + OSName.toLowerCase() + ".svg";

// Remove normal button
document.getElementById("defaultButton").innerHTML = "";

// Loop through all links and make buttons and info modals
for (var i = 0; i < clients.length; i++) {
	var client = clients[i];

	var button = "\
	<a id='link" + i + "' href='" + client.dlLink + "' class='button button--primary'>\
		" + client.title + "\
	</a>";

	var infoButton = "";
	if (client.desc) {
		infoButton = "\
		<a class='button' style='box-shadow:none;color:#368CCA;' href='#info-" + client.title.replace(" ", "-") + "-" + OSName + "' title='More info'>\
			<span class='fa fa-info-circle'></span>\
		</a>";
	}

	document.getElementById("buttonArea").innerHTML = document.getElementById("buttonArea").innerHTML + button + infoButton + "<br/>";
	document.getElementById("modals").innerHTML = document.getElementById("modals").innerHTML + "\
	<div id='info-" + client.title.replace(" ", "-") + "-" + OSName + "' class='modalDialog button'><div>\
	<a href='#close' title='Close' class='close'>\
		<span class='fa fa-close'>&nbsp;</span>\
	</a>\
	<h2>" + client.title + "</h2>\
	<br/>\
	<div name='" + client.name + "'>&nbsp;</div>\
	<br/>\
	<img style='width:100%;' src='img/client/" + client.name + "_" + OSName.toLowerCase() + ".png'>";

	getModalContent(client.name);
	console.log("Just did " + client.name);
}

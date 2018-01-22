/*
	Globals
*/

var arch = 0;
var OSName = "Unknown";

var defClient = {
	title: "Wiki Downloads",
	name: "",
	faicon: "external-link",
	desc: false,
	dlLink: "http://wiki.tox.chat/binaries"
};

var clients = [defClient];

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
		title: "qTox",
		name: "qtox",
		faicon: "download",
		desc: true,
		dlLink: "https://github.com/qTox/qTox/releases/download/v1.13.0/qTox.dmg",
	},  {
		title: "uTox 64-bit",
		name: "utox",
		faicon: "download",
		desc: true,
		dlLink: "https://github.com/uTox/uTox/releases/download/v0.16.1/uTox-0.16.1.dmg",
	}];
}

if (window.navigator.userAgent.indexOf("iPad") != -1) {
	OSName = "iOS";

	clients = [{
		title: "Antidote",
		name: "antidote",
		faicon: "external-link",
		desc: true,
		dlLink: "https://itunes.apple.com/app/antidote-for-tox/id933117605",
	}];
}

if (window.navigator.userAgent.indexOf("iPhone") != -1) {
	OSName = "iOS";

	clients = [{
		title: "Antidote",
		name: "antidote",
		faicon: "external-link",
		desc: true,
		dlLink: "https://itunes.apple.com/app/antidote-for-tox/id933117605",
	}];
}

if (window.navigator.userAgent.indexOf("Linux") != -1) {
	OSName = "Linux";

	clients = [{
		title: "Debian",
		name: "repo",
		icon: "icon-debian",
		desc: false,
		dlLink: "#gnulinux",
	},
	{
		title: "Gentoo",
		name: "repo",
		icon: "icon-gentoo",
		desc: false,
		dlLink: "#gnulinux"
	},
	{
		title: "Arch",
		name: "repo",
		icon: "icon-arch",
		desc: false,
		dlLink: "#gnulinux",
	}];
}

if (window.navigator.userAgent.indexOf("FreeBSD") != -1) {
	OSName = "FreeBSD";

	clients = [{
		title: "Install qTox",
		name: "qtox",
		faicon: "external-link",
		desc: true,
		dlLink: "https://www.freshports.org/net-im/qTox",
	}, {
		title: "Install uTox",
		name: "utox",
		faicon: "external-link",
		desc: true,
		dlLink: "https://freshports.org/net-im/uTox/",
	}, {
		title: "Install Toxic",
		name: "toxic",
		faicon: "external-link",
		desc: true,
		dlLink: "https://freshports.org/net-im/toxic/",
	}];
}

if (window.navigator.userAgent.indexOf("Android") != -1) {
	OSName = "Android";

	clients = [{
		title: "Antox F-Droid",
		name: "antox",
		faicon: "external-link",
		desc: true,
		dlLink: "#fdroid",
	}, {
		title: "Antox Google Play",
		name: "antox",
		faicon: "external-link",
		desc: true,
		dlLink: "https://play.google.com/store/apps/details?id=chat.tox.antox",
	}, {
		title: "Antox APK",
		name: "antox",
		faicon: "download",
		desc: true,
		dlLink: "https://pkg.tox.chat/fdroid/repo/antox.apk",
	}];
}

if (window.navigator.userAgent.indexOf("Windows") != -1) {
	OSName = "Windows";

	if (arch == 64) {
		clients = [{
			title: "qTox 64-bit",
			name: "qtox",
			faicon: "download",
			desc: true,
			dlLink: "https://build.tox.chat/view/qtox/job/qTox_pkg_windows_x86-64_stable_release/lastSuccessfulBuild/artifact/setup-qtox.exe",
		}, {
			title: "uTox 64-bit",
			name: "utox",
			faicon: "download",
			desc: true,
			dlLink: "https://downloads.utox.io/stable/uTox_win64.exe",
		}];
	} else {
		clients = [{
			title: "qTox 32-bit",
			name: "qtox",
			faicon: "download",
			desc: true,
			dlLink: "https://build.tox.chat/view/qtox/job/qTox_pkg_windows_x86_stable_release/lastSuccessfulBuild/artifact/setup-qtox.exe",
		}, {
			title: "uTox 32-bit",
			name: "utox",
			faicon: "download",
			desc: true,
			dlLink: "https://downloads.utox.io/stable/uTox_win32.exe"
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

// Set platform header
document.getElementById("downloadHeader").innerHTML = "Download Tox for " + OSName;

// Set platform toxlock
document.getElementById("platImg").src = "theme/img/plat/" + OSName.toLowerCase() + ".svg";

// Remove normal button
document.getElementById("defaultButton").innerHTML = "";

var buttonArea = document.getElementById("buttonArea");


// Loop through all links and make buttons and info modals
for (var i = 0; i < clients.length; i++) 
{
	var client = clients[i];

	if (!client.icon)
		client.icon = "";

	if (client.faicon)
		client.faicon = "fa fa-" + client.faicon;
	else
		client.faicon = "";

	// create button
	var button = document.createElement("A");
	button.id = "link"+i;
	button.href = client.dlLink;
	button.className = "button large-button download";

	// create icon
	var buttonIcon = document.createElement("SPAN");
	buttonIcon.className = client.faicon + " " + client.icon + " icon-distro-small";

	// append icon and client name to the button
	button.appendChild(buttonIcon);
	button.innerHTML += " " + client.title;


	// create info button if needed
	var infoButton;
	if (client.desc) {
		infoButton = document.createElement("A");
		infoButton.className = "button large-button";
		infoButton.style = "box-shadow:none;color:#368CCA";
		infoButton.href = "clients.html#" + client.name;
		infoButton.title = "More info";
		infoButton.innerHTML = "<span class='fa fa-info-circle'></span>";
	}

	// append created button and info button (if created)
	buttonArea.appendChild (button);
	if (infoButton)
		buttonArea.appendChild(infoButton);

}

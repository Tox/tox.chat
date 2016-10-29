/*
	Globals
*/
function get_arch(){
	var arch = 32;

	/*
		Arch detection
	*/
	// If 64 is declared
	if (window.navigator.userAgent.indexOf("WOW64") != -1 || window.navigator.userAgent.indexOf("x86_64") != -1 || window.navigator.userAgent.indexOf("x64;") != -1 || window.navigator.userAgent.indexOf("Win64") != -1 || window.navigator.userAgent.indexOf("AMD64") != -1) {
		arch = 64;
	}

	return arch;
}

function get_os(){
	/*
		OS detection (order matters)
	*/
	var OSName = "Unknown";

	if (window.navigator.userAgent.indexOf("Mac") != -1) {
		OSName = "OS X";
	}

	if (window.navigator.userAgent.indexOf("iPad") != -1) {
		OSName = "iOS";
	}

	if (window.navigator.userAgent.indexOf("iPhone") != -1) {
		OSName = "iOS";
	}

	if (window.navigator.userAgent.indexOf("Linux") != -1) {
		OSName = "Linux";
	}

	if (window.navigator.userAgent.indexOf("FreeBSD") != -1) {
		OSName = "FreeBSD";
	}

	if (window.navigator.userAgent.indexOf("Android") != -1) {
		OSName = "Android";
	}

	if (window.navigator.userAgent.indexOf("Windows") != -1) {
		OSName = "Windows";
	}
	return OSName;
}


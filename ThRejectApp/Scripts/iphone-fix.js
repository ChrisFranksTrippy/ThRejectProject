"use strict";

(function () {

	let uagent = navigator.userAgent.toLowerCase();
	let docBody = document.getElementsByTagName("body")[0];

	let setWidth = document.getElementById("textbox-width");
	let dateInputs = document.getElementsByClassName("date-width-fix");

	if (uagent.search("iphone") > -1 || uagent.search("ipad") > -1) {
		docBody.style.cursor = "pointer";
		docBody.style.overflowY = "scroll";

		resizeDateInputs();

		window.addEventListener('resize', resizeDateInputs);

	} else {
		console.log("Not an iPhone or iPad.");
	}

	function resizeDateInputs() {
		for (let i = 0; i < dateInputs.length; i++) {
			dateInputs[i].style.width = setWidth.clientWidth + "px";
		}

		//alert(setWidth.clientWidth);
	}


})();

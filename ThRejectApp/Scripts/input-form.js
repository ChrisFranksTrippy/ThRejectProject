"use strict";

(function () {

	let coverLayer = document.getElementById("cover-layer");
	let raiseTicketBtn = document.getElementById("new-ticket");
	let sendBtn = document.getElementById("submit-button");


	sendBtn.addEventListener("click", submitForm);
	raiseTicketBtn.addEventListener("click", newTicket);

	function submitForm() {
		coverLayer.classList.add("fade-in");
	}
	
	function newTicket() {
		coverLayer.classList.remove("fade-in");
	}

})()

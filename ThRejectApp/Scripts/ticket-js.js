"use strict";

(function () {

	let lastClickTime = new Date().getTime();
	let ticketCards = document.getElementById("t-body").getElementsByClassName("cta");
	
	let mobileSearchBtn = document.getElementById("mobile-search-button");
	let mobileSearchContainer = document.getElementById("t-footer");
	
	for (let i = 0; i < ticketCards.length; i++) {		
		ticketCards[i].addEventListener("click", doubleTabRequest);		
	}
	
	mobileSearchBtn.addEventListener("click", toggleMobileSearch);
	
	function doubleTabRequest(event) {
		console.log("double tab requested!");
		
		let currentClickTime = new Date().getTime();
		let clickTimeDif = currentClickTime - lastClickTime;
		lastClickTime = currentClickTime;

		if (clickTimeDif < 400 && clickTimeDif > 0) {
			location = "edit-form.html";
			//console.log(event.target);
		}

	}
	
	function toggleMobileSearch() {		
		
		if (mobileSearchContainer.classList.contains("show")){
			mobileSearchContainer.classList.remove("show");
			mobileSearchBtn.classList.add("fa-search");
			mobileSearchBtn.classList.remove("fa-close");
		} else {
			mobileSearchContainer.classList.add("show");
			mobileSearchBtn.classList.remove("fa-search");
			mobileSearchBtn.classList.add("fa-close");
		}
		
		
		
	}

})();

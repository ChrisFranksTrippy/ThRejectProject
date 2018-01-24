"use strict";

(function(){
	
	let creditSlider = document.getElementById("credit-recieved-slider");
	
	let saveBtn = document.getElementById("save-button");
	let cancelBtn = document.getElementById("cancel-button");
	
	creditSlider.addEventListener("click", sliderHandler);
	
	saveBtn.addEventListener("click", saveForm);
	cancelBtn.addEventListener("click", cancelForm);
	
	function sliderHandler() {
		creditSlider.classList.toggle("slide");
	}
	
	function saveForm() {
		
		location = "tickets.html";
		
	}
	
	function cancelForm() {
		
		location = "tickets.html";
		
	}
	
})()
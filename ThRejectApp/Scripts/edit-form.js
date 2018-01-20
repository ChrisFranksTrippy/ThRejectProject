"use strict";

(function(){
	
	let saveBtn = document.getElementById("save-button");
	let cancelBtn = document.getElementById("cancel-button");
	
	saveBtn.addEventListener("click", saveForm);
	cancelBtn.addEventListener("click", cancelForm);
	
	function saveForm() {
		
		location = "tickets.html";
		
	}
	
	function cancelForm() {
		
		location = "tickets.html";
		
	}
	
})()
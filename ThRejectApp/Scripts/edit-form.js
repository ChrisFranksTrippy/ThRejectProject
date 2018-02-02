"use strict";

(function () {

    let saveLink = document.getElementById("save-link").innerHTML;
    let cancelLink = document.getElementById("cancel-link").innerHTML;
	
    /* Find inputs and line containers */
    let main = document.getElementsByTagName("MAIN")[0];
    let inputFields = main.getElementsByTagName("INPUT");
    let lines = [];
    let inputSelect = main.getElementsByTagName("SELECT")[0];


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

        let data = {};

        for (let i = 0; i < inputFields.length; i++) {
            data[inputFields[i].id] = inputFields[i].value;
        }

        data[inputSelect.id] = inputSelect.options[inputSelect.selectedIndex].value;

        let params = typeof data === "string" ? data : Object.keys(data).map(
            function (k) { return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]) }
        ).join("&");


        let xhr = new XMLHttpRequest();
        xhr.open("POST", saveLink, true);


        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.send(params);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let response = JSON.parse(xhr.responseText);
                console.log(response);

                if (response === "Success") {
                    location = cancelLink;
                }
            }
        };
		
	}
	
	function cancelForm() {

        location = cancelLink;
		
	}
	
})()
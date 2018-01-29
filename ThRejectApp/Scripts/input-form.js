"use strict";

(function () {

    let submitLink = document.getElementById("submit-link").innerHTML;

    let coverLayer = document.getElementById("cover-layer");
    let main = document.getElementsByTagName("MAIN")[0];
	let raiseTicketBtn = document.getElementById("new-ticket");
	let sendBtn = document.getElementById("submit-button");

    /* Find inputs and line containers */
    let inputFields = main.getElementsByTagName("INPUT");
    let lines = [];
    let inputSelect = main.getElementsByTagName("SELECT")[0];

    for (let i = 0; i < inputFields.length; i++) {
        lines[i] = inputFields[i].parentElement;

        inputFields[i].value = "Test";
    }

    /* Add event listeners */

	sendBtn.addEventListener("click", submitForm);
    raiseTicketBtn.addEventListener("click", newTicket);



    function submitForm() {       

        let missingInput = false;

        //Reg inputs
        for (let i = 0; i < inputFields.length; i++) {
            if (inputFields[i].value.trim() === "") {
                if (!lines[i].classList.contains("error")) {
                    lines[i].classList.add("error");
                }

                missingInput = true;

            } else {
                if (lines[i].classList.contains("error")) {
                    lines[i].classList.remove("error");
                }
            }
        }

        //Select input
        if (inputSelect.options[inputSelect.selectedIndex].value === "") {
            if (!inputSelect.parentElement.classList.contains("error")) {
                inputSelect.parentElement.classList.add("error");
            }

            missingInput = true;
        } else {
            if (inputSelect.parentElement.classList.contains("error")) {
                inputSelect.parentElement.classList.remove("error");
            }
        }

        if (!missingInput) {
            /* Get input data values into an object */
            let data = {};

            for (let i = 0; i < inputFields.length; i++) {
                data[inputFields[i].id] = inputFields[i].value;
            }

            data[inputSelect.id] = inputSelect.options[inputSelect.selectedIndex].value;

            /* Post object via ajax */

            //data = JSON.stringify(data);
            //console.log(data);

            //data = data.replace(/"(.*?)":"(.*?)"/gi, '$1:"$2"')
            //console.log(data);

            //$.ajax({
            //    method: 'POST',
            //    url: submitLink,
            //    datatype: 'json',
            //    data: data,
            //    success: function () {
            //        console.log("Success");
            //    }
            //});

            let params = typeof data == "string" ? data : Object.keys(data).map(
                function (k) { return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]) }
            ).join("&");

            
            let xhr = new XMLHttpRequest();
            xhr.open("POST", submitLink, true);


            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            xhr.send(params);
   
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    let response = JSON.parse(xhr.responseText);
                    console.log(response);

                    coverLayer.classList.add("fade-in");
                }
            };

            
        }		
	}
	
	function newTicket() {
		coverLayer.classList.remove("fade-in");
	}

})()

"use strict";

(function () {

	let ctas = document.getElementsByClassName("cta");
	let checkboxContainers = document.getElementsByClassName("checkbox-container");

	
	for (let i = 0; i < ctas.length; i++) {
		ctas[i].addEventListener("click", ctaHandler);
	}

	for (let i = 0; i < checkboxContainers.length; i++) {
		checkboxContainers[i].addEventListener("click", checkboxHandler);
	}

    function ctaHandler(event) {
        let clickTarget = event.target;

        while (true) {
            if (clickTarget.tagName.toLowerCase() === "body") {
                return 0;
            } else if (!clickTarget.classList.contains("cta")) {
                clickTarget = clickTarget.parentElement;
            } else {
                break;
            }
        }
                
		event.target.classList.add("toggle");
		event.target.addEventListener("transitionend", ctaTransitionend);
	}

	function ctaTransitionend(event) {
		event.target.classList.remove("toggle");
	}

	function checkboxHandler(event) {
		if (event.target.tagName.toLocaleLowerCase() === "span") {
			//Get value
			let innerValue = event.target.innerHTML.toLocaleLowerCase();
			let checkContainer = event.target.parentElement;
			let btnCount = checkContainer.children.length;

			//Set input value
			event.target.parentElement.parentElement.getElementsByTagName("input")[0].value = innerValue;

			for (let i = 0; i < btnCount; i++) {
				checkContainer.children[i].classList.remove("toggle");
			}
			
			event.target.classList.add("toggle");
		}
	}


})()

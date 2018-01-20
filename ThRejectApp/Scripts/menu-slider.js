"use strict";

(function () {

	let docBody = document.getElementsByTagName("body")[0];
	let mBurger = document.getElementById("menu-burger");
	let menuDraw = document.getElementById("menu-draw");
	
	docBody.addEventListener("click", requestMenuDraw);

	function requestMenuDraw(event) {

		if (event.target.id === "menu-burger" || event.target.classList.contains("menu-span")) {

			toggleMenuDraw();
		} else if (event.target.tagName.toLocaleLowerCase() === "nav") {
			console.log("Do nothing, Nav container clicked.");
		} else if (menuDraw.classList.contains("show-menu")) {
			console.log("MenuDraw is open anything but the nav container was clicked.");
			toggleMenuDraw();
		}
	}

	function toggleMenuDraw() {
		//Prevent user seeing menu transition when changing 
		//the size of the window in real time
		menuDraw.classList.add("transition-menu");

		requestAnimationFrame(function () {

			menuDraw.classList.contains("show-menu") ?
				function () {
					menuDraw.classList.remove("show-menu");
					mBurger.classList.remove("cross");
				}() : function () {
					menuDraw.classList.add("show-menu");
					mBurger.classList.add("cross");
				}();

			menuDraw.addEventListener("transitionend", removeTransition);
		});
	}

	function removeTransition() {
		menuDraw.classList.remove("transition-menu");
		menuDraw.removeEventListener("transitionend", removeTransition);
	}
	
})();
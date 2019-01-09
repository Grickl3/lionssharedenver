

function toggleModal(e) {
	deliveryModal.classList.toggle("delivery__hidden");
}

function toggleSplash() {
	yOffset = window.scrollY;

	if (yOffset <= 20) {
		splash.classList.remove("splash-hidden");
	} else {
		splash.classList.add("splash-hidden");
	}
}


function toggleContent(e) {
	// console.log("content toggler reached");
	contentBox.classList.toggle("content__hidden");
}


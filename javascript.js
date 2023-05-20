function scroll() {
	let scrollPosition = document.querySelector("html").scrollTop;
	let header = document.querySelector("header");

	if (scrollPosition > 100) {
		header.classList.add("sticky-header");
	} else if (scrollPosition == 0) {
		header.classList.remove("sticky-header");
	}
}
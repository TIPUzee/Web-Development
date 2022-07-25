function move_slide(caller) {
	let carousel = caller.getAttribute('data-o-belong-to-carousel');
	let slide_number = caller.getAttribute('data-o-indicator-for-slide');

	var slides = document.querySelectorAll(carousel + ' .carousel-slide');
	var carousel_frame = document.querySelector(carousel + ' .carousel-frame');
	let frame_width = window.getComputedStyle(carousel_frame).getPropertyValue('width');
	let slides_wrapper = document.querySelector(carousel + ' .carousel-slide-wrapper');

	let left_position = parseFloat(frame_width) * parseInt(slide_number);
	let mystyle = 'left: -' + left_position + 'px';
	
	slides_wrapper.style=mystyle;

	let indicators = document.querySelectorAll(carousel + " .carousel-indicator-item[data-o-belong-to-carousel='" + carousel + "'");
	console.log(indicators);
	for (let i = 0; i < indicators.length; i++) {
		indicators[i].classList.remove('active');
	}
	caller.classList.add('active');
}




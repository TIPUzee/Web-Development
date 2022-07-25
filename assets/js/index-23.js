var sliderImages = document.querySelectorAll('.slider img');
let currSlide = 0;

function moveSlide(sign) 
{
	sliderImages[currSlide].classList.remove('active');
	sliderImages[currSlide].classList.add('inactive');
	currSlide = (currSlide + sign) % 3;
	if (currSlide == -1) { currSlide = 2; }
	sliderImages[currSlide].classList.remove('inactive');
	sliderImages[currSlide].classList.add('active');
}

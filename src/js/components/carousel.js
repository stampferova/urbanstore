import $ from 'jquery';
import 'slick-carousel/slick/slick';


export const init = () => {

	$('[data-slick]').slick({
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	});
};



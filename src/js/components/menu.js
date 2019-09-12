import $ from 'jquery';

export const init = () => {
	const body = $('body');
	const nav = $('.nav__top');

	$('.nav__button--menu').on('click', function () {
		body.toggleClass('is-menu-visible');
		nav.removeClass('is-user-open');
	});

	$('.nav__button--user').on('click', function () {
		nav.toggleClass('is-user-open');
		body.removeClass('is-menu-visible');
	});


};

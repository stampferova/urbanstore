import $ from 'jquery';


export const init = () => {
	$('.nav__select').on('click', function () { $(this).toggleClass('is-active')});

};

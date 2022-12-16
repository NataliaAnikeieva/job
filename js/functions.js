$(document).ready(function () {
	initMobileMenu();
	//initSlider();
});
function initMobileMenu() {
	'use strict;';
	let navigation = $('.navigation__list'),
		hamburger = $('.hamburger');
	if (hamburger.length) {
		hamburger.on({
			click: function () {
				$(this).toggleClass('open');
				navigation.toggleClass('active');
			},
			tap: function () {
				$(this).toggleClass('open');
				navigation.toggleClass('active');
			},
		});
	}
}

function initSlider() {
	'use strict;';
	$('.cards__list').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
	});
}

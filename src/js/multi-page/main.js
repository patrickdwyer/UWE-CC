jQuery(function ($) {
/* -----------------------------------------
	Plugins
----------------------------------------- */

	// matchHeight
	$('.match-height').matchHeight();

	// Owl Carousel - Home
	$("#owl-header").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true,
		pagination: true,
		rewindSpeed: 500,
		navigation: false
	});

});

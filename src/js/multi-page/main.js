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

	// Toggles "view/hide" for accordions
	$('.collapse').on('shown.bs.collapse', function(){
		$(this).parent().find(".panel-heading").addClass("active").find(".hideview").html($(".hideview").html().replace("View", "Hide")).find(".fa-plus").removeClass("fa-plus").addClass("fa-times");
	}).on('hidden.bs.collapse', function(){
		$(this).parent().find(".panel-heading").removeClass("active").find(".hideview").html($(".hideview").html().replace("Hide", "View")).find(".fa-times").removeClass("fa-plus").addClass("fa-plus");
	});

});

$(document).ready(function() {

	$(function() {
		var owl = $('.features__landing .carousel__wrap');
		owl.owlCarousel({
			items: 1,
			dots: true,
			nav: false,
			smartSpeed: 1000,
			dotsContainer: '#carousel-dots',
		});

		// next carousel
    $('.carousel-arrow__right').click(function(e) {
      e.preventDefault();
      owl.trigger('next.owl.carousel');
    })

    // prev carousel
    $('.carousel-arrow__left').click(function(e) {
      e.preventDefault();
      owl.trigger('prev.owl.carousel', [300]);
    })
	})
	
});
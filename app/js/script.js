$(document).ready(function() {

	// Landing owl carousel START
	$(function() {
		var owl = $('.features__landing .carousel__wrap');
		owl.owlCarousel({
			items: 1,
			dots: true,
			dotsSpeed: 300,
			nav: false,
			smartSpeed: 1000,
			dotsContainer: '#carousel-dots',
		});

		// next carousel
    $('.features__landing .carousel-arrow__right').click(function(e) {
      e.preventDefault();
      owl.trigger('next.owl.carousel');
    })

    // prev carousel
    $('.features__landing .carousel-arrow__left').click(function(e) {
      e.preventDefault();
      owl.trigger('prev.owl.carousel', [300]);
    })
	})
	// Landing owl carousel END

	// Online magazin owl carousel START
	$(function() {
		var owl = $('.features-content__online-magazine .carousel__wrap');
		owl.owlCarousel({
			items: 1,
			dots: true,
			dotsSpeed: 300,
			nav: false,
			smartSpeed: 1000,
			dotsContainer: '#carousel-dots-magazine',
		});

		// next carousel
    $('.features-content__online-magazine .carousel-arrow__right').click(function(e) {
      e.preventDefault();
      owl.trigger('next.owl.carousel');
    })

    // prev carousel
    $('.features-content__online-magazine .carousel-arrow__left').click(function(e) {
      e.preventDefault();
      owl.trigger('prev.owl.carousel', [300]);
    })
	});
	// Online magazin owl carousel END
	
});
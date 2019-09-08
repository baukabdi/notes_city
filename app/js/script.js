$(document).ready(function() {

	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 400);
		return false;
	});

	/* $(window).on('scroll', function() {
		headerHeight = $('.header').height();
		if ( $(window).scrollTop() > headerHeight ) {
			$('.menu-static').addClass('menu-dynamic');
		}
		else {
			$('.menu-static').removeClass('menu-dynamic');
		}
		console.log( $(window).scrollTop() );
	}) */

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

	// Cashback owl carousel START
	$(function() {
		var owl = $('.features-content__cashback .carousel__wrap');
		owl.owlCarousel({
			items: 1,
			dots: true,
			dotsSpeed: 300,
			nav: false,
			smartSpeed: 1000,
			dotsContainer: '#carousel-dots-cashback',
		});

		// next carousel
    $('.features-content__cashback .carousel-arrow__right').click(function(e) {
      e.preventDefault();
      owl.trigger('next.owl.carousel');
    })

    // prev carousel
    $('.features-content__cashback .carousel-arrow__left').click(function(e) {
      e.preventDefault();
      owl.trigger('prev.owl.carousel', [300]);
    })
	})
	// Cashback owl carousel END
	
});
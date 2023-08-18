// gallery home page
	//Gallery Carousel
	if ($('.gallery-carousel').length) {
		$('.gallery-carousel').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 400,
			autoplay: true,
			navText: ['<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1023: {
					items: 3
				},
				1200: {
					items: 5
				}
			}
		});
	}

	//Gallery Carousel
	if ($('.gallery-carousel-two').length) {
		$('.gallery-carousel-two').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 0,
			nav: false,
			smartSpeed: 400,
			autoplay: true,
			navText: ['<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1200: {
					items: 3
				},
				1400: {
					items: 5
				}
			}
		});
	}
    // end gallery home page
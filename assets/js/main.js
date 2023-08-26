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
			navText: ['<span class="bi bi-arrow-left"></span>', '<span class="bi bi-arrow-right"></span>'],
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
			navText: ['<span class="bi bi-arrow-left"></span>', '<span class="bi bi-arrow-right"></span>'],
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
    // start partner carousel page
	if ($('.partner-carousel').length) {
		$('.partner-carousel').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 50,
			nav: true,
			smartSpeed: 400,
			autoplay: true, 
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				768: {
					items: 2
				},
				1023: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});
	}
    // end partner carousel page

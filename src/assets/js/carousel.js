document.addEventListener("DOMContentLoaded", function() {
    "use strict";

    var testimonialsCarousel = document.getElementById("customers-testimonials");

    if (testimonialsCarousel) {
        var testimonialsCarouselOptions = {
            loop: true,
            center: true,
            items: 3,
            margin: 30,
            autoplay: true,
            dots: true,
            nav: true,
            autoplayTimeout: 8500,
            smartSpeed: 450,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 3
                }
            }
        };

        // Initialize Owl Carousel
        var owl = new OwlCarousel(testimonialsCarousel, testimonialsCarouselOptions);
    }
});

// Owl Carousel implementation in plain JavaScript
function OwlCarousel(element, options) {
    var currentOptions = options || {};
    var defaultOptions = {
        loop: false,
        center: false,
        items: 1,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 5000,
        smartSpeed: 250,
        dots: false,
        nav: false,
        navText: ['<', '>'],
        responsive: {}
    };

    // Merge default options with user-defined options
    for (var key in defaultOptions) {
        if (currentOptions.hasOwnProperty(key)) {
            defaultOptions[key] = currentOptions[key];
        }
    }

    // Initialize Owl Carousel with options
    $(element).owlCarousel(defaultOptions);
}

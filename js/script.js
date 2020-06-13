$(document).ready(function() {
    $('.burger__menu').click(function(event) {
        $('.burger__menu,.main__menu').toggleClass('active');
    });

    $(document).ready(function() {
        $('.slider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: false
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        arrows:false
                    }
                },
            ]
        });
    });
});



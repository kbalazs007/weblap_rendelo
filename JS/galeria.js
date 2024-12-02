$(document).ready(function() {

    $(".center").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerPadding: '60px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerPadding: '60px',
                    slidesToShow: 1
                }
            }
        ]
    });


});
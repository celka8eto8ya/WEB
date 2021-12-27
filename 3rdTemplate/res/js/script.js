$(document).ready(function () {
    $('.menu_burger').click(function (event) {
        $('.menu_burger,.header_list,.changeTheme').toggleClass('active');

    });
});
$(document).ready(function () {
    $('.changeTheme').click(function (event) {
        $('.header,.main').toggleClass('active');

    });
});

$(document).ready(function () {
    $('.article_slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1200, // swipe speed
        easing: 'ease',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3300,
        pauseOnFocus: true, // pause autoplay
        pauseOnHover: true, // pause autoplay
        draggable: false, // swipe with help mouse
        waitForAnimate: true, // waining end animation
        responsive:
            [
                {
                    breakpoint: 768,
                    settings:
                    {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings:
                    {
                        slidesToShow: 1
                    }
                }
            ]
    });
});


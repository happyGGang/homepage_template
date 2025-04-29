// 슬릭 오류 방지
jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
        this.addEventListener('touchstart', handle, { passive: false });
    },
};
jQuery.event.special.touchmove = {
    setup: function (_, ns, handle) {
        this.addEventListener('touchmove', handle, { passive: false });
    },
};

$(document).ready(function () {
    // 배너 슬라이드
    $('.banner-slide').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplay: false,
        speed: 300,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 6,
                    variableWidth: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    variableWidth: true,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    variableWidth: true,
                },
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 3,
                    variableWidth: true,
                },
            },
        ],
    });

    $('.banner-prev').click(function () {
        $('.banner-slide').slick('slickPrev');
    });

    $('.banner-next').click(function () {
        $('.banner-slide').slick('slickNext');
    });
});

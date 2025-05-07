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
    // #header에 호버 이벤트
    $('.g-menu').on('mouseenter', function () {
        $('.gnb-menu li .SubMenu').css('display', 'flex');
    });

    // #header와 .subMenu ul에서 마우스가 완전히 떠날 때
    $('.g-menu, .gnb-menu li .SubMenu').on('mouseleave', function (e) {
        if (!$(e.relatedTarget).closest('.g-menu, .gnb-menu li .SubMenu').length) {
            $('.gnb-menu li .SubMenu').css('display', 'none');
        }
    });

    // .subMenu ul에 마우스가 들어가면 유지
    $('.gnb-menu li .SubMenu').on('mouseenter', function () {
        $('.gnb-menu li .SubMenu').css('display', 'flex');
    });

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

$(document).ready(function () {
    // 메인 팝업 슬라이더
    const $popupSlide = $('.main-popup-slide');
    $popupSlide.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
    });

    // 초기 페이징 설정
    $popupSlide.on('init', function (event, slick) {
        $('.main-popup-pagination').text(`1 / ${slick.slideCount}`);
    });

    // 슬라이드 변경 시 페이징 업데이트
    $popupSlide.on('afterChange', function (event, slick, currentSlide) {
        $('.main-popup-pagination').text(`${currentSlide + 1} / ${slick.slideCount}`);
    });

    // 이전/다음 버튼
    $('.main-popup-prev, .main-popup-next').click(function () {
        if ($popupSlide.hasClass('slick-initialized')) {
            $popupSlide.slick($(this).hasClass('main-popup-prev') ? 'slickPrev' : 'slickNext');
        }
    });

    // 재생/일시정지 버튼
    const $playPauseBtn = $('.main-popup-play-and-pause img');
    let isPlaying = true;

    $playPauseBtn.click(function () {
        if (isPlaying) {
            $popupSlide.slick('slickPause');
            $(this).attr('src', '/resources/homepage/template/img/main/type7/03/play.svg');
        } else {
            $popupSlide.slick('slickPlay');
            $(this).attr('src', '/resources/homepage/template/img/main/type7/03/pause.svg');
        }
        isPlaying = !isPlaying;
    });

    // 슬라이더 위치 재설정
    $popupSlide.slick('setPosition');

    // 슬라이더 재초기화 시 페이징 업데이트
    $popupSlide.on('reInit', function (event, slick) {
        $('.main-popup-pagination').text(`1 / ${slick.slideCount}`);
    });

    const $items = $('.quick-menu-item');
    const $firstItem = $items.eq(0);

    // 첫 번째 항목을 기본 active 상태로
    $firstItem.addClass('active');

    // 다른 항목에 마우스를 올리면 해당 항목만 active
    $items.on('mouseenter', function () {
        $items.removeClass('active');
        $(this).addClass('active');
    });

    // 마우스를 모두 떼면 다시 첫 번째 항목이 active
    $('.quick-menu').on('mouseleave', function () {
        $items.removeClass('active');
        $firstItem.addClass('active');
    });
});

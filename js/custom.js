$(function () {

    lucide.createIcons();


    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        autoplay: {
            delay: 3000, // 3초마다 슬라이드 전환
            disableOnInteraction: false, // 사용자 조작 후에도 autoplay 유지
        },

        // Navigation arrows
        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },

        pagination: {
            clickable: true,
            el: '.main_visual .page',
        },

    });
});
$(() => {
    "use strict";
    // Fixed Navbar
    $(this).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $('.navbar').addClass('navbar-fixed');
        } else {
            $('.navbar').removeClass('navbar-fixed');
        }
    });
    // Start Swiper
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });
    // End Swiper
    // Start Question
    $('.question').click(function () {
        $(this).next().slideToggle();
        $(this).parent().toggleClass('active');
    });
    // End Question
    // Start Swiper
    var swiper = new Swiper(".mySwiper-company", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            390: {
            slidesPerView: 1,
            spaceBetween: 10,
            },
            640: {
            slidesPerView: 2,
            spaceBetween: 20,
            },
            768: {
            slidesPerView: 4,
            spaceBetween: 40,
            },
            1024: {
            slidesPerView: 5,
            spaceBetween: 50,
            },
        },
        });
    // End Swiper
});
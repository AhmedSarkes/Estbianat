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
    // Start Question
    $('.question').click(function () {
        $(this).next().slideToggle();
        $(this).parent().toggleClass('active');
    });
    // End Question
});
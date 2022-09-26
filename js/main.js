$(() => {
  "use strict";
  // Fixed Navbar
  $(this).scroll(function () {
    if ($(this).scrollTop() >= 50) {
      $(".navbar").addClass("navbar-fixed");
    } else {
      $(".navbar").removeClass("navbar-fixed");
    }
  });
  // Start Question
  $(".question").click(function () {
    $(this).next().slideToggle();
    $(this).parent().toggleClass("active");
  });
  // End Question
  //   Start Dropdown Menu
  $(".dropdown").on("mouseover", function () {
    if ($(".dropdown")) {
      $(".dropdown .profile + .dropdown-menu").addClass(
        "d-flex justify-content-center align-content-end flex-column text-end show"
      );
    } else return;
  });
  $(".dropdown").on("mouseleave", function () {
    if ($(".dropdown")) {
      $(".dropdown .profile + .dropdown-menu").removeClass(
        "d-flex justify-content-center align-content-end flex-column text-end show"
      );
    }
  });
  //   End Dropdown Menu
  // Start Show Password
  $('.fa-eye-slash').on('click', function () {
    $('.fa-eye-slash').css({
      display: 'none',
    });
    $('.fa-eye-slash + .fa-eye').css({
      display: 'flex',
    });
    $('#password').attr('type', 'text');
    $('#confirm-password').attr('type', 'text');
  })
  $('.fa-eye').on('click', function () {
    $('.fa-eye').css({
      display: 'none',
    });
    $('.fa-eye-slash').css({
      display: 'flex',
    });
    $('#password').attr('type', 'password');
    $('#confirm-password').attr('type', 'password');
  })
  // End Show Password
  // Start Tab Class
  // Start Student
  $('.student #student').on('click', function () {
    $('.container-student#student').css({
      display: 'block',
    });
    $('.container-employer#employer').css({
      display: 'none',
    });
    $('.container-graduate#graduate').css({
      display: 'none',
    });
  });
  // End Student
  // Start Employer
  $('.employer #employer').on('click', function () {
    $('.container-employer#employer').css({
      display: 'block',
    });
    $('.container-student#student').css({
      display: 'none',
    });
    $('.container-graduate#graduate').css({
      display: 'none',
    });
  });
  // End Employer
  // Start Graduate
  $('.graduate #graduate').on('click', function () {
    $('.container-graduate#graduate').css({
      display: 'block',
    });
    $('.container-employer#employer').css({
      display: 'none',
    });
    $('.container-student#student').css({
      display: 'none',
    });
  });
  // End Tab Class
});

// document.addEventListener('click', e => {
//     const isDropdownButton = e.target.matches("[data-dropdown-button]");
//     if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

//     let currentDropdown;
//     if (isDropdownButton) {
//         currentDropdown = e.target.closest('[data-dropdown]');
//         currentDropdown.classList.toggle('active');
//     }

//     document.querySelectorAll("[data-dropdown].active").forEach( dropdown => {
//         if (dropdown === currentDropdown) return;
//         dropdown.classList.remove('active');
//     });
// });

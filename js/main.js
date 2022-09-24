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

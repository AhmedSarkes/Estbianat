$(() => {
  "use strict";
  // Fixed Navbar
  $(this).scroll(() => {
    if ($(this).scrollTop() >= 50) {
      $(".navbar").addClass("navbar-fixed");
    } else {
      $(".navbar").removeClass("navbar-fixed");
    }
  });
  // Start Question
  $(".question").click(() => {
    $(this).next().slideToggle();
    $(this).parent().toggleClass("active");
  });
  // End Question
  //   Start Dropdown Menu
  $(".dropdown").on("mouseover", () => {
    if ($(".dropdown")) {
      $(".dropdown .profile + .dropdown-menu").addClass(
        "d-flex justify-content-center align-content-end flex-column text-end show"
      );
    } else return;
  });
  $(".dropdown").on("mouseleave", () => {
    if ($(".dropdown")) {
      $(".dropdown .profile + .dropdown-menu").removeClass(
        "d-flex justify-content-center align-content-end flex-column text-end show"
      );
    }
  });
  //   End Dropdown Menu
  // Start Show Password
  $(".fa-eye-slash").on("click", () => {
    $(".fa-eye-slash").css({
      display: "none",
    });
    $(".fa-eye-slash + .fa-eye").css({
      display: "flex",
    });
    $("#password").attr("type", "text");
    $("#confirm-password").attr("type", "text");
  });
  $(".fa-eye").on("click", () => {
    $(".fa-eye").css({
      display: "none",
    });
    $(".fa-eye-slash").css({
      display: "flex",
    });
    $("#password").attr("type", "password");
    $("#confirm-password").attr("type", "password");
  });
  // End Show Password
  // Start Tab Class
  // Start Student
  $(".student #student").on("click", () => {
    $(".container-student#student").css({
      display: "block",
    });
    $(".container-employer#employer").css({
      display: "none",
    });
    $(".container-graduate#graduate").css({
      display: "none",
    });
  });
  // End Student
  // Start Employer
  $(".employer #employer").on("click", () => {
    $(".container-employer#employer").css({
      display: "block",
    });
    $(".container-student#student").css({
      display: "none",
    });
    $(".container-graduate#graduate").css({
      display: "none",
    });
  });
  // End Employer
  // Start Graduate
  $(".graduate #graduate").on("click", () => {
    $(".container-graduate#graduate").css({
      display: "block",
    });
    $(".container-employer#employer").css({
      display: "none",
    });
    $(".container-student#student").css({
      display: "none",
    });
  });
  // End Graduate
  // End Tab Class
  // Start Open Popup Survey
  $(".survey-btn-index").on("click", () => {
    $(".popup-overlay").css({
      display: "block",
    });
    $(".container-survey").css({
      display: "block",
    });
  });
  // End Open Popup Survey
  // Start Close Popup Survey
  $(".popup-overlay").on("click", (event) => {
    if (event.target.class !== $(".container-survey")) {
      $(".popup-overlay").css({
        display: "none",
      });
      $(".container-survey").css({
        display: "none",
      });
    } else {
      $(".popup-overlay").css({
        display: "block",
      });
    }
  });
  // End Close Popup Survey
  // Start Remove Alert
  $(".container-alert .delete .fa-trash-can").on("click", () => {
    $(".feedback-alert").remove();
  });
  $(".container-alert .delete .fa-trash-can").on("click", () => {
    $(".feedback-alert").remove();
  });
  $(".container-alert .delete .fa-trash-can").on("click", () => {
    $(".feedback-alert").remove();
  });
  // End Remove Alert
  // Start Open Popup Feedback Alert
  $(".feedback-alert").on("click", () => {
    $(".popup-overlay").css({
      display: "block",
    });
    $(".container-feedback").css({
      display: "block",
    });
  });
  // End Open Popup Feedback Alert
  // Start Close Popup Feedback Alert
  $(".popup-overlay").on("click", (event) => {
    if (event.target.class !== $(".container-feedback")) {
      $(".popup-overlay").css({
        display: "none",
      });
      $(".container-feedback").css({
        display: "none",
      });
    }
  });
  // End Close Popup Feedback Alert
  // Start Open Popup Feedback Alert
  $(".send-feedback-btn").on("click", () => {
    $(".popup-overlay").css({
      display: "block",
    });
    $(".container-success-feedback").css({
      display: "block",
    });
    $(".container-feedback").css({
      display: "none",
    });
  });
  // End Open Popup Feedback Alert
  // Start Close Popup Feedback Alert
  $(".popup-overlay").on("click", (event) => {
    if (event.target.class !== $(".container-success-feedback")) {
      $(".popup-overlay").css({
        display: "none",
      });
      $(".container-success-feedback").css({
        display: "none",
      });
    }
  });
  // End Close Popup Feedback Alert
  // Start Tab Class
  // Start Statistical
  $(".container-statistical #statistical").on("click", () => {
    $(".container-statistical#statistical").css({
      display: "block",
    });
    $(".container-judging#judging").css({
      display: "none",
    });
    $(".container-accuracy#accuracy").css({
      display: "none",
    });
  });
  // End Statistical
  // Start Judging
  $(".container-judging #judging").on("click", () => {
    $(".container-judging#judging").css({
      display: "block",
    });
    $(".container-statistical#statistical").css({
      display: "none",
    });
    $(".container-accuracy#accuracy").css({
      display: "none",
    });
  });
  // End Judging
  // Start Accuracy
  $(".container-accuracy #accuracy").on("click", () => {
    $(".container-accuracy#accuracy").css({
      display: "block",
    });
    $(".container-statistical#statistical").css({
      display: "none",
    });
    $(".container-judging#judging").css({
      display: "none",
    });
  });
  // End Accuracy
  // End Tab Class
  // Start Send Order
  // Start Open Send Order Popup Overlay
  $(".send-order-btn").on("click", () => {
    $(".popup-overlay").css({
      display: "block",
    });
    $(".container-success-send-order").css({
      display: "block",
    });
  });
  // End Open Send Order Popup Overlay
  // Start Close Send Order Popup Overlay
  $(".popup-overlay").on("click", (event) => {
    if (event.target.class !== $(".container-success-send-order")) {
      $(".popup-overlay").css({
        display: "none",
      });
      $(".container-success-send-order").css({
        display: "none",
      });
    }
  });
  // End Close Send Order Popup Overlay
  // End Send Order
  // Start Open Popup Survey
  $(".send-contact-ms-btn").on("click", () => {
    $(".popup-overlay").css({
      display: "block",
    });
    $(".container-survey").css({
      display: "block",
    });
  });
  // End Open Popup Survey
  // Start Close Popup Survey
  $(".popup-overlay").on("click", (event) => {
    if (event.target.class !== $(".container-survey")) {
      $(".popup-overlay").css({
        display: "none",
      });
      $(".container-survey").css({
        display: "none",
      });
    } else {
      $(".popup-overlay").css({
        display: "block",
      });
    }
  });
  // End Close Popup Survey
});

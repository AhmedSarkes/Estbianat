$(() => {
  `use strict`;
  // Fixed Navbar
  $(this).scroll(function () {
    if ($(this).scrollTop() >= 50) {
      $(`.navbar`).addClass(`navbar-fixed`);
    } else {
      $(`.navbar`).removeClass(`navbar-fixed`);
    }
  });
  // Start Question
  $(`.question`).click(function () {
    $(this).next().slideToggle();
    $(this).parent().toggleClass(`active`);
  });
  // End Question
  //   Start Dropdown Menu
  $(`.dropdown`).on(`mouseover`, function () {
    if ($(`.dropdown`)) {
      $(`.dropdown .profile + .dropdown-menu`).addClass(
        `d-flex justify-content-center align-content-end flex-column text-end show`
      );
    } else return;
  });
  $(`.dropdown`).on(`mouseleave`, function () {
    if ($(`.dropdown`)) {
      $(`.dropdown .profile + .dropdown-menu`).removeClass(
        `d-flex justify-content-center align-content-end flex-column text-end show`
      );
    }
  });
  //   End Dropdown Menu
  // Start Show Password
  $(`.fa-eye-slash`).on(`click`, function () {
    $(`.fa-eye-slash`).css({
      display: `none`,
    });
    $(`.fa-eye-slash + .fa-eye`).css({
      display: `flex`,
    });
    $(`#password`).attr(`type`, `text`);
    $(`#confirm-password`).attr(`type`, `text`);
    $(`#new-password`).attr(`type`, `text`);
    $(`#confirm-new-password`).attr(`type`, `text`);
  });
  $(`.fa-eye`).on(`click`, function () {
    $(`.fa-eye`).css({
      display: `none`,
    });
    $(`.fa-eye-slash`).css({
      display: `flex`,
    });
    $(`#password`).attr(`type`, `password`);
    $(`#confirm-password`).attr(`type`, `password`);
    $(`#new-password`).attr(`type`, `password`);
    $(`#confirm-new-password`).attr(`type`, `password`);
  });
  // End Show Password
  // Start Tab Class
  // Start Student
  $(`.student #student`).on(`click`, function () {
    $(`.container-student#student`).css({
      display: `block`,
    });
    $(`.container-employer#employer`).css({
      display: `none`,
    });
    $(`.container-graduate#graduate`).css({
      display: `none`,
    });
  });
  // End Student
  // Start Employer
  $(`.employer #employer`).on(`click`, function () {
    $(`.container-employer#employer`).css({
      display: `block`,
    });
    $(`.container-student#student`).css({
      display: `none`,
    });
    $(`.container-graduate#graduate`).css({
      display: `none`,
    });
  });
  // End Employer
  // Start Graduate
  $(`.graduate #graduate`).on(`click`, function () {
    $(`.container-graduate#graduate`).css({
      display: `block`,
    });
    $(`.container-employer#employer`).css({
      display: `none`,
    });
    $(`.container-student#student`).css({
      display: `none`,
    });
  });
  // End Graduate
  // End Tab Class
  // Start Tab Branch
  // Start Student
  $(`.student #student-branch`).on(`click`, function () {
    $(`.container-student#student-branch`).css({
      display: `block`,
    });
    $(`.container-employer#employer-branch`).css({
      display: `none`,
    });
    $(`.container-graduate#graduate-branch`).css({
      display: `none`,
    });
  });
  // End Student
  // Start Employer
  $(`.employer #employer-branch`).on(`click`, function () {
    $(`.container-employer#employer-branch`).css({
      display: `block`,
    });
    $(`.container-student#student-branch`).css({
      display: `none`,
    });
    $(`.container-graduate#graduate-branch`).css({
      display: `none`,
    });
  });
  // End Employer
  // Start Graduate
  $(`.graduate #graduate-branch`).on(`click`, function () {
    $(`.container-graduate#graduate-branch`).css({
      display: `block`,
    });
    $(`.container-employer#employer-branch`).css({
      display: `none`,
    });
    $(`.container-student#student-branch`).css({
      display: `none`,
    });
  });
  // End Graduate
  // End Tab Branch
  // Start Open Popup Survey
  $(`.survey-btn-index`).on(`click`, function () {
    $(`.popup-overlay`).css({
      display: `block`,
    });
    $(`.container-survey`).css({
      display: `block`,
    });
  });
  // End Open Popup Survey
  // Start Close Popup Survey
  $(`.popup-overlay`).on(`click`, function (event) {
    if (event.target.class !== $(`.container-survey`)) {
      $(`.popup-overlay`).css({
        display: `none`,
      });
      $(`.container-survey`).css({
        display: `none`,
      });
    } else {
      $(`.popup-overlay`).css({
        display: `block`,
      });
    }
  });
  // End Close Popup Survey
  // Start Remove Alert
  $(`.container-alert .delete .fa-trash-can`).on(`click`, function () {
    $(`.feedback-alert`).remove();
  });
  $(`.container-alert .delete .fa-trash-can`).on(`click`, function () {
    $(`.feedback-alert`).remove();
  });
  $(`.container-alert .delete .fa-trash-can`).on(`click`, function () {
    $(`.feedback-alert`).remove();
  });
  // End Remove Alert
  // Start Open Popup Feedback Alert
  $(`.feedback-alert`).on(`click`, function () {
    $(`.popup-overlay`).css({
      display: `block`,
    });
    $(`.container-feedback`).css({
      display: `block`,
    });
  });
  // End Open Popup Feedback Alert
  // Start Close Popup Feedback Alert
  $(`.popup-overlay`).on(`click`, function (event) {
    if (event.target.class !== $(`.container-feedback`)) {
      $(`.popup-overlay`).css({
        display: `none`,
      });
      $(`.container-feedback`).css({
        display: `none`,
      });
    }
  });
  // End Close Popup Feedback Alert
  // Start Open Popup Feedback Alert
  $(`.send-feedback-btn`).on(`click`, function () {
    $(`.popup-overlay`).css({
      display: `block`,
    });
    $(`.container-success-feedback`).css({
      display: `block`,
    });
    $(`.container-feedback`).css({
      display: `none`,
    });
  });
  // End Open Popup Feedback Alert
  // Start Close Popup Feedback Alert
  $(`.popup-overlay`).on(`click`, function (event) {
    if (event.target.class !== $(`.container-success-feedback`)) {
      $(`.popup-overlay`).css({
        display: `none`,
      });
      $(`.container-success-feedback`).css({
        display: `none`,
      });
    }
  });
  // End Close Popup Feedback Alert
  // Start Tab Class
  // Start Statistical
  $(`.container-statistical #statistical`).on(`click`, function () {
    $(`.container-statistical#statistical`).css({
      display: `block`,
    });
    $(`.container-judging#judging`).css({
      display: `none`,
    });
    $(`.container-accuracy#accuracy`).css({
      display: `none`,
    });
  });
  // End Statistical
  // Start Judging
  $(`.container-judging #judging`).on(`click`, function () {
    $(`.container-judging#judging`).css({
      display: `block`,
    });
    $(`.container-statistical#statistical`).css({
      display: `none`,
    });
    $(`.container-accuracy#accuracy`).css({
      display: `none`,
    });
  });
  // End Judging
  // Start Accuracy
  $(`.container-accuracy #accuracy`).on(`click`, function () {
    $(`.container-accuracy#accuracy`).css({
      display: `block`,
    });
    $(`.container-statistical#statistical`).css({
      display: `none`,
    });
    $(`.container-judging#judging`).css({
      display: `none`,
    });
  });
  // End Accuracy
  // End Tab Class
  // Start Send Order
  // Start Open Send Order Popup Overlay
  $(`.send-order-btn`).on(`click`, function () {
    $(`.popup-overlay`).css({
      display: `block`,
    });
    $(`.container-success-send-order`).css({
      display: `block`,
    });
  });
  // End Open Send Order Popup Overlay
  // Start Close Send Order Popup Overlay
  $(`.popup-overlay`).on(`click`, function (event) {
    if (event.target.class !== $(`.container-success-send-order`)) {
      $(`.popup-overlay`).css({
        display: `none`,
      });
      $(`.container-success-send-order`).css({
        display: `none`,
      });
    }
  });
  // End Close Send Order Popup Overlay
  // End Send Order
  // Start Open Popup Survey
  $(`.send-contact-ms-btn`).on(`click`, function () {
    $(`.popup-overlay`).css({
      display: `block`,
    });
    $(`.container-survey`).css({
      display: `block`,
    });
  });
  // End Open Popup Survey
  // Start Close Popup Survey
  $(`.popup-overlay`).on(`click`, function (event) {
    if (event.target.class !== $(`.container-survey`)) {
      $(`.popup-overlay`).css({
        display: `none`,
      });
      $(`.container-survey`).css({
        display: `none`,
      });
    } else {
      $(`.popup-overlay`).css({
        display: `block`,
      });
    }
  });
  // End Close Popup Survey
  // Start BTN Survey
  $(`.survey-container-btn .survey-btn`).on(`click`, function () {
    $(this).addClass(`active-current`).siblings().removeClass(`active-current`);
  });
  $(`.summary`).on(`click`, function () {
    $(`.survey-container-body`).css({ display: `block` });
    $(`.mySwiper`).css({ display: `none` });
  });
  $(`.que`).on(`click`, function () {
    $(`.survey-container-body`).css({ display: `none` });
    $(`.mySwiper`).css({ display: `block` });
  });
  // End BTN Survey

  // Start Open Popup Confirm Phone Number
  $(`.container-phone`).on(`click`, function () {
    $(`.popup-overlay`).css({
      display: `block`,
    });
    $(`.confirm-phone-number`).css({
      display: `block`,
    });
  });
  // End Open Popup Confirm Phone Number
  // Start Close Popup Confirm Phone Number
  $(`.popup-overlay`).on(`click`, function (event) {
    if (event.target.class !== $(`.confirm-phone-number`)) {
      $(`.popup-overlay`).css({
        display: `none`,
      });
      $(`.confirm-phone-number`).css({
        display: `none`,
      });
    }
  });
  // End Close Popup Confirm Phone Number
  // Start Credit Pay By Adding Active Class
  $(`.credit`).click(function () {
        $('.wallet').removeClass('active');
        $(this).toggleClass(`active`);
      });
      $(`.wallet`).click(function () {
    $('.credit').removeClass('active');
    $(this).toggleClass(`active`);
  });
  // End Credit Pay By Adding Active Class
});
// Start Dynamic Add Input Fields
// Declaration Constant
const loginContainerBtn = document.createElement(`div`);
const button = document.createElement(`a`);
const form = document.querySelector(`.add-new-survey-form .container .row form`);
const inputGroup = document.querySelector(`.container-group-input`);
const addBtn = document.querySelector(`#add`);
let selectEle = document.querySelector(`select`);
const divCont = document.createElement(`div`);
var i = 1;
var j = 1;
// Add Input Field Function
function addInput() {
  const label = document.createElement(`label`);
  label.textContent = `الخيار رقم ${j}`;
  label.setAttribute(`for`, `choose-${j++}`);
  label.className = `label-control`;
  const inputEle = document.createElement(`input`);
  inputEle.type = `text`;
  inputEle.placeholder = `أدخل الخيار رقم ${i}`;
  inputEle.id = `choose-${i++}`;
  inputEle.className = `form-control text-end mt-2 mb-3`;
  inputGroup.appendChild(divCont);
  divCont.appendChild(label);
  divCont.appendChild(inputEle);
}
// Add Button Function
function addBtnFunction() {
  loginContainerBtn.className = `login-container-btn col-8 d-flex justify-content-start align-items-center mt-5 mb-5`;
  button.className = `btn login add`;
  loginContainerBtn.setAttribute(`id`, `add`);
  button.textContent = `إضافة خيار`;
  loginContainerBtn.appendChild(button);
  form.appendChild(loginContainerBtn);
}
// On Change Input Field By Select Element
selectEle.onchange = function () {
  if (selectEle.value === `1`) {
    inputGroup.innerHTML = ``;
    divCont.innerHTML = ``;
    loginContainerBtn.remove();
    i = 1;
    j = 1;
  }
  if (selectEle.value === `2`) {
    addBtnFunction();
    button.addEventListener(`click`, addInput);
  } else {
    inputGroup.innerHTML = ``;
    divCont.innerHTML = ``;
    i = 1;
    j = 1;
  }

  if (selectEle.value === `3`) {
    addBtnFunction();
    button.addEventListener(`click`, addInput);
  } else {
    inputGroup.innerHTML = ``;
    divCont.innerHTML = ``;
    i = 1;
    j = 1;
  }
  if (selectEle.value === `4`) {
    addBtnFunction();
    button.addEventListener(`click`, addInput);
  } else {
    inputGroup.innerHTML = ``;
    divCont.innerHTML = ``;
    i = 1;
    j = 1;
  }
  if (selectEle.value === `5`) {
    addBtnFunction();
    button.addEventListener(`click`, addInput);
  } else {
    inputGroup.innerHTML = ``;
    divCont.innerHTML = ``;
    i = 1;
    j = 1;
  }
  if (selectEle.value === `6`) {
    addBtnFunction();
    button.addEventListener(`click`, addInput);
  } else {
    inputGroup.innerHTML = ``;
    divCont.innerHTML = ``;
    i = 1;
    j = 1;
  }
  if (selectEle.value === `7`) {
    addBtnFunction();
    button.addEventListener(`click`, addInput);
  } else {
    inputGroup.innerHTML = ``;
    divCont.innerHTML = ``;
    i = 1;
    j = 1;
  }
  if (selectEle.value === `8`) {
    addBtnFunction();
    button.addEventListener(`click`, addInput);
  } else {
    inputGroup.innerHTML = ``;
    divCont.innerHTML = ``;
    i = 1;
    j = 1;
  }
  if (selectEle.value === `9`) {
    addBtnFunction();
    button.addEventListener(`click`, addInput);
  } else {
    inputGroup.innerHTML = ``;
    divCont.innerHTML = ``;
    i = 1;
    j = 1;
  }
};
// End Dynamic Add Input Field

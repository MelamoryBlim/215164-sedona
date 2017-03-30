"use strict";

var formButton = document.querySelector('.feedback-form__button');

var successPopup = document.querySelector(".success-popup");

var failurePopup = document.querySelector(".failure-popup");

var successClose = successPopup.querySelector(".success-popup__button");

var failureClose = failurePopup.querySelector(".failure-popup__button");

var feedbackForm = document.querySelector(".feedback-form");

var firstName = feedbackForm.querySelector("[name=first name]");

var lastName = feedbackForm.querySelector("[name=last name]");

var phoneNumber = feedbackForm.querySelector("[name=phone number]");

var email = feedbackForm.querySelector("[name=email]");

feedbackForm.addEventListener("submit", function (event) {
  if (!firstName.value || !lastName.value || !phoneNumber.value || !email.value) {
    event.preventDefault();
    failurePopup.classList.add("failure-popup--show")} else {
      successPopup.classList.add("success-popup--show")}
});

successClose.addEventListener("click", function (event) {
  event.preventDefault();
  successPopup.classList.remove("success-popup--show");
});

failureClose.addEventListener("click", function (event) {
  event.preventDefault();
  failurePopup.classList.remove("failure-popup--show");
});

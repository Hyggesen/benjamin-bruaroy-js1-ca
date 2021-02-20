const form = document.querySelector("#contactForm");

const theName = document.querySelector("#name");
const theSubject = document.querySelector("#subject");
const theEmail = document.querySelector("#email");
const theAddress = document.querySelector("#address");
const formError = document.querySelector(".form-error");
const thankYou = document.querySelectorAll(".gzValidate");

function validateForm() {
  event.preventDefault();

  if (checkLength(theName.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
    console.log("error");
    
  }

  if (checkLength(theSubject.value, 9) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (validateEmail(theEmail.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(theAddress.value, 24) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const matchesEmail = regEx.test(email);
  return matchesEmail;
}

function approveValidation() {
  if (theEmail.value === true) {
    console.log("YEY");
  }
}

function setSuccess() {
  return (thankYou.style.display = "block");
}
setSuccess();

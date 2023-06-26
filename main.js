const firstName = document.getElementById("firstName");
const surName = document.getElementById("surName");
const email = document.getElementById("Email");
const comment = document.getElementById("comment");
const nameError = document.getElementById("nameError");
const surNameError = document.getElementById("surNameError");
const emailError = document.getElementById("emailError");
const commentError = document.getElementById("commentError");

function validateForm(e) {
  e.preventDefault();

  if (!firstName.value) {
    nameError.classList.add("visible");
    firstName.setAttribute("aria-invalid", true);
    firstName.setCustomValidity("First name is required");
  } else {
    nameError.classList.remove("visible");
    firstName.setAttribute("aria-invalid", false);
    firstName.setCustomValidity("");
  }

  if (!surName.value) {
    surNameError.classList.add("visible");
    surName.setAttribute("aria-invalid", true);
    surName.setCustomValidity("Surname is required");
  } else {
    surNameError.classList.remove("visible");
    surName.setAttribute("aria-invalid", false);
    surName.setCustomValidity("");
  }

  if (!email.value) {
    emailError.classList.add("visible");
    email.setAttribute("aria-invalid", true);
    email.setCustomValidity("Email is required");
  } else if (!isValidEmail(email.value)) {
    emailError.classList.add("visible");
    email.setAttribute("aria-invalid", true);
    email.setCustomValidity("Invalid email format");
  } else {
    emailError.classList.remove("visible");
    email.setAttribute("aria-invalid", false);
    email.setCustomValidity("");
  }

  if (!comment.value) {
    commentError.classList.add("visible");
    comment.setAttribute("aria-invalid", true);
    comment.setCustomValidity("Comment is required");
  } else {
    commentError.classList.remove("visible");
    comment.setAttribute("aria-invalid", false);
    comment.setCustomValidity("");
  }

  // If there are no errors, submit the form
  if (
    firstName.checkValidity() &&
    surName.checkValidity() &&
    email.checkValidity() &&
    comment.checkValidity()
  ) {
    // Form is valid, submit it
    document.getElementById("myForm").submit();
  }
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", validateForm);




const navBar = document.querySelector("#righthead");

navBar.addEventListener("click", clickMe);
const navList = document.querySelector("#overlay");

function clickMe() {
  navList.style.display=("block")
  console.log((2+3).value);
}
console.log(navList)

console.log(navBar);
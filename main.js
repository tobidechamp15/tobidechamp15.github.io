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
const nameLogo = document.querySelector(".nav");
function clickMe() {
  navList.classList.remove("d-none");
  // navList.style.transition = ".5s";
  nameLogo.style.display = "none";
  console.log("clicking");
}
console.log(navList);

console.log(navBar);

const cancel = document.querySelector("#cancel");

cancel.addEventListener("click", navCancel);

function navCancel() {
  navList.classList.add("d-none");
  nameLogo.style.display = "flex";
  console.log("cancel o");
}
console.log(nameLogo);
const projects = document.querySelector(".item1");
projects.addEventListener("click", function () {
   
    var section = document.querySelector(".desplchol");
    section.scrollIntoView({ behavior: "smooth" });
  
})

const about = document.querySelector(".item2");
about.addEventListener("click", function () {
   
    var section = document.querySelector(".aboutme");
    section.scrollIntoView({ behavior: "smooth" });
})

const contact = document.querySelector(".item3");
contact.addEventListener("click", function () {
   
    var section = document.querySelector(".des-form");
    section.scrollIntoView({ behavior: "smooth" });
  
})

const toProjects = document.querySelector(".toProjects");
toProjects.addEventListener("click", function () {
  var section = document.querySelector(".repplchol");
  section.scrollIntoView({ behavior: "smooth" });
  console.log("clikkk");
});
const toAbout = document.querySelector(".toAbout");
toAbout.addEventListener("click", function () {
  var section = document.querySelector(".desabttop");
  section.scrollIntoView({ behavior: "smooth" });
  console.log("clikkk");
});
const toContact = document.querySelector(".toContact");
toContact.addEventListener("click", function () {
  var section = document.querySelector(".contactform");
  section.scrollIntoView({ behavior: "smooth" });
  console.log("clikkk");
});

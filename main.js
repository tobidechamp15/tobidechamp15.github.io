const forms = document.getElementById("des-form");
 const error= document.querySelector(".error")
const fname = document.getElementById("fname");
const sname = document.getElementById("sname");
const email = document.getElementById("email");
const serror = document.getElementById("snameError");

function validateInput() {
  if (!fname.value) {
     error.classList.remove("hidden")
  } else {
    error.classList.add("hidden")
   }
    
  if (!sname.value) {
    error.classList.remove("hidden");
  } else {
    error.classList.add("hidden");
     console.log(fname.value);
  }
}
function validate(event){
  event.preventDefault();
  validateInput();
}


forms.addEventListener("submit", validate);
console.log(forms);



console.log(fname);


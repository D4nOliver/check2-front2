let email = document.getElementById("inputEmail");
let password = document.getElementById("inputPassword");
let submit = document.getElementById("inputSubmit");
//console.log(email);
submit.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailTratado = email.value.trim();
  let senhaTratado = password.value.trim();
  console.log(emailTratado);
  console.log(senhaTratado);
});
function validacao() {
  if (email.value != "" && password.value != "") {
    //submit.style.backgroundColor = "blue";
    submit.disabled = false;
  } else {
    //submit.style.backgroundColor = "red";
    submit.disabled = true;
  }
}

email.addEventListener("keyup", () => {
  validacao();
});

password.addEventListener("keyup", () => {
  validacao();
});

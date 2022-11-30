import { validacao } from "./utils.js";

let email = document.getElementById("inputEmail");
let password = document.getElementById("inputPassword");
let submit = document.getElementById("inputSubmit");
//console.log(email);
let login = [];
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let emailTratado = email.value.trim();
  let senhaTratado = password.value.trim();
});
//
email.addEventListener("keyup", () => {
  login = [email.value, password.value];
  validacao(login);
});

password.addEventListener("keyup", () => {
  login = [email.value, password.value];
  validacao(login);
});

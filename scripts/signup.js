import { validacao } from "./utils";

let name = document.getElementById("name");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  //preventDefault parou de funcionar
  if (validacao()) {
    name = name.value.trim();
    lastName = lastname.value.trim();
    email = email.value.trim();
    password = password.value.trim();
    password2 = password2.value.trim();
    //consegui tratar os dados mas depois de usar a validacao() ainda nao funcionou
    let signupJs = {
      firstName: name,
      lastName: lastName,
      email: email,
      password: password,
    };

    let signupJson = JSON.stringify(signupJs);
    console.log(signupJson);
  }
});

let email = document.getElementById("inputEmail");
let password = document.getElementById("inputPassword");
let submit = document.getElementById("inputSubmit");
let login = [];

submit.addEventListener("click", (e) => {
  e.preventDefault();
  // tratando os dados
  let emailLogin = email.value.trim();
  let senhaLogin = password.value.trim();
  // add no array login
  login.push(emailLogin, senhaLogin);
  //tranfomando em JSON
  let loginJSON = JSON.stringify(login);
  //
  logandoApi(loginJSON);
});
//tem q arrumar aki, n ta logando
function logandoApi(loginJson) {
  let config = {
    method: "POST",
    body: loginJson,
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch("https://ctd-fe2-todo-v2.herokuapp.com/v1/users/login", config)
    .then((resultado) => {
      if (resultado.status == 201) {
        return resultado.json();
      } else {
        throw resultado;
      }
    })
    .then((resultado) => {
      loginSucesso(resultado);
    })
    .catch((erro) => {
      loginErro(erro);
    });
}

function loginSucesso(resposta) {
  console.log(resposta);
}
function loginErro(resposta) {
  console.log(resposta);
}
email.addEventListener("keyup", () => {
  login = [email.value, password.value];
  validacao(login);
});

password.addEventListener("keyup", () => {
  login = [email.value, password.value];
  validacao(login);
});

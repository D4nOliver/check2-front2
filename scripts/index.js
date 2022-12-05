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
  login = { email: emailLogin, password: senhaLogin };
  //tranfomando em JSON
  let loginJSON = JSON.stringify(login);
  logandoApi(loginJSON);
});
//logando na API
function logandoApi(loginJson) {
  let config = {
    method: "POST",
    body: loginJson,
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(`${baseUrl()}/users/login`, config)
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
  // salvando o token na storage
  sessionStorage.setItem("jwt", resposta.jwt);
  // mandando o user para tarefas.html
  location.href = "tarefas.html";
}
function loginErro(resposta) {
  if (resposta.status == 400 || resposta.status == 404) {
    alert("login inválido: Email e/ou senha desconhecidos");
  }
}
// validando email e senha
email.addEventListener("keyup", () => {
  let login = [email.value, password.value];
  validacao(login);
});

password.addEventListener("keyup", () => {
  let login = [email.value, password.value];
  validacao(login);
});

function validacao(array) {
  array.forEach((e) => {
    if (e != "") {
      submit.disabled = false;
    } else {
      //submit.style.backgroundColor = "red";
      submit.disabled = true;
    }
  });
}
function baseUrl() {
  return "https://ctd-fe2-todo-v2.herokuapp.com/v1/";
}

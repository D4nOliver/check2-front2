function validacao(array) {
  array.forEach((e) => {
    if (e != "") {
      submit.disabled = false;
    } else {
      submit.disabled = true;
    }
  });
}
function baseUrl() {
  return "http://todo-api.ctd.academy:3000/v1";
}

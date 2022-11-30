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
export { validacao };

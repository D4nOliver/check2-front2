function validacao(array) {
  array.forEach((e) => {
    if (e != "") {
      submit.disabled = false;
      return true
    } else {
      //submit.style.backgroundColor = "red";
      submit.disabled = true;
      return false
    }
  });
}
export { validacao };
// arrumar a  importação

let submit = document.getElementById("submit")

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    
    let inputs = document.querySelectorAll("input")
    console.log(inputs)
    
    let [
        firstName, 
        lastName,
        email,  
        password, 
        password2
    ] = Array.from(inputs).map(e=>e.value.trim())
      

    let motivoErro = validaSenha(password, password2)
    if(motivoErro){
        alert(motivoErro)
    }
    else {
        let userData = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password
        }
        let userDataJson = JSON.stringify(userData)
        signupApi(userDataJson)
        console.log(userDataJson)
    }
})

function validaSenha(s1,s2){
    console.log(s1 + s2)
    if(s1 !== s2) 
        return "As senhas devem ser iguais"
    if(s1.length < 6) 
        return "A senha deve conter mais de 6 caracteres"
    if(s1.search(/\d/) == -1) 
        return "A senha deve conter números"
    if(s1.search(/[a-zA-Z]/) == -1) 
        return "A senha deve conter letras"
    if(s1.search(/[!@#$%^&*()_+]/) == -1)
        return "A senha deve conter pelo menos um caractere especial"
    
    return false  
}

function signupApi(JsonRecebido){
    let config = {
        method: "POST",
        body: JsonRecebido,
        headers: {
            "Content-Type": "application/json",
        },
    };
    
    fetch(`${baseUrl()}/users`, config)
        .then((resultado)=>{
            return resultado.json()
        })
        .then((resultado)=>{
            signupSucesso()
        })
        .catch((erro)=>{
            signupErro(erro)
        })
    
}

function signupSucesso(){
    location.href = "index.html"
}

function signupErro(resposta){
    if(resposta.status == 400){
        alert("Usuario já esta cadastrado")
    }
}

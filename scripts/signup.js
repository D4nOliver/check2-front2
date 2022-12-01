let submit = document.getElementById("submit")

let data =[]
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    
    let inputs = document.querySelectorAll("input")
    console.log(inputs)
    inputs.forEach((e)=>{
        data.push(e.value)
    })
    
    let firstName = data[0].trim()
    let lastName = data[1].trim()
    let email = data[2].trim()
    let password = data[3].trim()
    let password2 = data[4].trim()
    
    if(validaSenha(password, password2)){
        let userData = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password
        }
        let userDataJson = JSON.stringify(userData)
        signupApi(userDataJson)
    }
    else {
        console.log("senha diferente")
    }
})



function validaSenha(s1,s2){
    if(s1 === s2){
        return true
    }
    else {
        return false
    }
    
}

function signupApi(JsonRecebido){
    let config = {
        method: "POST",
        body: JsonRecebido,
        headers: {
            "Content-Type": "application/json",
        },
    };
    
    fetch("https://ctd-fe2-todo-v2.herokuapp.com/v1/users", config)
        .then((resultado)=>{
            return resultado.json()
        })
        .then((resultado)=>{
            signupSucesso()
        })
        .catch((erro)=>[
            signupErro(resposta)
        ])
    
}

function signupSucesso(){
    location.href = "index.html"
}

function signupErro(resposta){
    if(resposta.status == 400){
        alert("Usuario já esta cadastrado")
    }
}

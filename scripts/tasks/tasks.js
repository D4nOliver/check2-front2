let jwt;

window.onload = () =>{
    jwt = sessionStorage.getItem("jwt")

    console.log(jwt)
    if(!jwt){
        window.location = "index.html"

    }
    else{
        getUserData()

        getTasks()
    }
}


async function getUserData(){
    let config = {
        headers:
            {"authorization": jwt}
    }

    try {
        let request = await fetch(`${baseUrl()}/users/getMe`, config)

        if(request.status == 200){
            let response = await request.json()
        
            setUsername(response)
        }
        else{
            throw Error("Erro")
        }
    } catch (error) {
        alert(error)
    }
}


async function getTasks(){
    let config = {
        headers:
            {"authorization": jwt}
    }

    try{
        let request = await fetch(`${baseUrl()}/tasks`, config)

        if(request.status == 200){
            let response = await request.json()

            manipulateTasks(response)
        }
        else{
            throw Error("Ocorreu um erro")
        }
    }
    catch(error){
        alert(error)
    }
}

function setUsername(userData){
    let name = document.getElementById("userName")

    name.innerText = `${userData.firstName} ${userData.lastName}`
}

let exitButton = document.getElementById("closeApp")

exitButton.addEventListener("click", ()=>{
    let exitConfirm = confirm("Deseja encerrar a sessão ?")

    if(exitConfirm){
        sessionStorage.removeItem("jwt")

        window.location = "index.html"
    }
})

let manipulateTasks = (userData) =>{
    userData.map(task =>{
        if(task.completed){
            renderCompletedtask(task)
        }
        else{
            console.log(task)
            renderPendingTask(task)
        }
    })
}

async function changeTaskStatus(id){
    let taskBody = {
        "completed": true
    }
    let taskBodyJson = JSON.stringify(taskBody)
    
    console.log(taskBodyJson)

    let config = {
        method: 'PUT',
        body: taskBodyJson,
        headers:
            {
                "authorization": jwt,
                "Content-Type": "application/json"
            }
    }

    try {
        let request = await fetch(`${baseUrl()}/tasks/${id}`, config)

        if(request.status == 200) {
            let response = await request.json()

            location.reload()
            console.log(response)
        }
        else{
            throw Error("Erro ao atualizar tarefa")
        }
    } catch (error) {
        alert(error)
    }
    
}

let createButton = document.getElementById("createTask")

createButton.addEventListener('click', e =>{
    e.preventDefault()

    let taskName = document.getElementById("novaTarefa").value.trim()

    const newTaskObj = {
        "description": taskName,
        "completed": false
    }

    let newTaskJson = JSON.stringify(newTaskObj)

    let config = {
        method: 'POST',
        body: newTaskJson,
        headers: {
            'Content-type': 'application/json',
            'Authorization': jwt
        }
    }

    fetch(`${baseUrl()}/tasks`, config)
        .then((response)=>{
            if(response.status == 201) return response.json()
        })
        .then((response)=>{
            console.log(response)
            taskSuccess()
        })
        .catch((error)=>{
            taskFailed()
        })
})

function taskSuccess(){
    alert("Tarefa cadastrada com sucesso!")
    window.location.reload()
}

function taskFailed(){
    alert("Erro ao cadastrar tarefa!")
}
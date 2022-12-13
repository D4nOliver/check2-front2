let pendingTasks = document.getElementById("tarefas-pendentes")
let completedTasks = document.getElementById("tarefas-terminadas")

function renderPendingTask(task){
    let liTask = document.createElement("li")
    liTask.classList.add("tarefa")

    liTask.innerHTML = 
    `
        <div class="not-done" onclick="changeTaskStatus(${task.id})"></div>
        <div class="descricao">
            <p class="nome">${task.description}</p>
            <p class="timestamp"><i class="far fa-calendar-alt"></i> ${task.createdAt}</p>
        </div>
    `
    pendingTasks.appendChild(liTask)
}

function renderCompletedtask(task){
    let liTask = document.createElement("li")
    liTask.classList.add("tarefa")

    liTask.innerHTML = 
    `
        <div onclick="moverTarefaParaTerminada(${task.id})"></div>
        <div class="descricao">
            <p class="nome">${task.description}</p>
            <p class="timestamp"><i class="far fa-calendar-alt"></i> ${task.createdAt}</p>
        </div>
    `
    completedTasks.appendChild(liTask)
}
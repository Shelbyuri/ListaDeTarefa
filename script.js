    // estado da aplicaçâo
    const tarefas = []
    // alteradores de estado da aplicação
    console.log(tarefas)

    function add(){
    const input = document.querySelector("input")
    const tarefa = input.value
    tarefas.push(tarefa)
    input.value = ""
    render()
}
    // mostrar o estado da tela
    function render(){
        const ul = document.querySelector("ul")
        ul.innerHTML = null

        tarefas.forEach(function(tarefa){ 
          const li = document.createElement("li")
          li.innerText = tarefa
          ul.appendChild(li)
        })
    }
    // iniciar
    render()
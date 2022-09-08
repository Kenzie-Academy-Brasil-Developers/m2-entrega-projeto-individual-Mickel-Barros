import { apiAdmin } from "./api-dashboard-admin.js"
import { fechar } from "./dashboard.js"
function menuDepartamentos(){
    const btn = document.querySelector(".departamentos")
    btn.addEventListener("click", () => {
        const deletar = document.querySelector(".containerSetores")
        const deletar2 = document.querySelector(".divCriarEmpresa")
        const deletar3 = document.querySelector(".divId")
        const deletar4 = document.querySelector(".container")
        const h2 = document.querySelector("h2")
        if(deletar){deletar.remove(), h2.remove()}
        if(deletar2){deletar2.remove()}
        if(deletar3){deletar3.remove()}
        if(deletar4){deletar4.remove()}
        apiAdmin.listarDepartamentos()
        apiAdmin.usuariosSemDepartamento()
        fechar()
        criarPaginaDepartamento()
    })
}
menuDepartamentos()
export function listaDeDepartamentos(arr){
    const main = document.querySelector("main")
    const div = document.createElement("div")
    const titulo = document.createElement("h2")
    arr.forEach(element => {
        const divLista = document.createElement("div")
        const h2 = document.createElement("h2")
        const h3 = document.createElement("h3")
        const hour = document.createElement("span")
        const description = document.createElement("p")
        const description2 = document.createElement("p")
        titulo.innerText = "Lista de Departamentos"
        h2.innerText = element.name
        h3.innerText = element.companies.name
        div.className = "listaDepartamentos"
        hour.innerText = element.companies.opening_hours
        description.innerText = element.description
        description2.innerText = element.companies.description
        divLista.append(h2, description, h3, hour, description2)
        div.append(divLista)
        const container = document.querySelector(".container")
        container.append(titulo, div)
        main.append(container)

    })
}
export function listarDepartamentosEspecifico(){
    const main = document.querySelector("main")
    const div = document.createElement("div")
    const titulo = document.createElement("h2")

}

function criarPaginaDepartamento(){
    const container = document.createElement("div")
    container.className = "container"
    const main = document.querySelector("main")
    const div = document.createElement("div")
    const divCriarDepartamento = document.createElement("div")
    const h2 = document.createElement("h2")
    const inputName = document.createElement("input")
    const inputDescription = document.createElement("input")
    const inputId = document.createElement("input")
    const btnCriar = document.createElement("button")

    h2.innerText = "Criar departamento"
    inputName.placeholder = "Digite o nome do departamento"
    inputDescription.placeholder = "Digite a descrição do departamento"
    inputId.placeholder = "Digite o ID da empresa"
    btnCriar.innerText = "Criar"
    div.className = "divDepartamento"

    divCriarDepartamento.append(h2, inputName, inputDescription, inputId, btnCriar)
    
    btnCriar.addEventListener("click", () => {
        const obj = {
            name: inputName.value,
            description: inputDescription.value,
            company_uuid: inputId.value
        }
        apiAdmin.criarDepartamento(obj)
    })
    
    const divEditarDepartamento = document.createElement("div")
    const h2Edit = document.createElement("h2")
    const inputDescriptionEdit = document.createElement("input")
    const inputIdEdit = document.createElement("input")
    const btnCriarEdit = document.createElement("button")
    h2Edit.innerText = "Editar departamento"
    inputDescriptionEdit.placeholder = "Digite a nova descrição do departamento"
    inputIdEdit.placeholder = "Digite o ID do departamento"
    btnCriarEdit.innerText = "Editar"
    div.className = "divDepartamento"
    btnCriarEdit.addEventListener("click", () => {
        const obj = {
            description: inputDescriptionEdit.value
        } 
        const id = inputIdEdit.value
        apiAdmin.editarDepartamento(obj, id)

    })

    divEditarDepartamento.append(h2Edit, inputDescriptionEdit, inputIdEdit, btnCriarEdit)

    const divDeletarDepartamento = document.createElement("div")
    const h2Delete = document.createElement("h2")
    const inputIdDelete = document.createElement("input")
    const btnCriarDelete = document.createElement("button")
    h2Delete.innerText = "Deletar departamento"
    inputIdDelete.placeholder = "Digite o ID do departamento"
    btnCriarDelete.innerText = "Deletar"
    div.className = "divDepartamento"
    btnCriarDelete.addEventListener("click", () => {
        const id = inputIdDelete.value
        console.log(id)
        apiAdmin.deletarDepartamento(id)

    })
    divDeletarDepartamento.append(h2Delete, inputIdDelete, btnCriarDelete)

    const divBtn = document.createElement("div")
    const titulo = document.createElement("h2")
    const inputIdEmpresa = document.createElement("input")
    inputIdEmpresa.placeholder = "Digite o ID da empresa"
    const btnDepartamento = document.createElement("button")
    btnDepartamento.innerText = "Pesquisar"
    titulo.innerText = "Departamento de uma empresa"
    divBtn.className = "divPesquisa"
    divBtn.append(titulo, inputIdEmpresa, btnDepartamento)
    btnDepartamento.addEventListener("click", () => {
        apiAdmin.listarDepartamentosEmpresa(inputIdEmpresa.value)
    })
    apiAdmin.listarTodosUsuarios()
    div.append(divCriarDepartamento, divEditarDepartamento, divDeletarDepartamento, divBtn)
    container.appendChild(div)
    main.appendChild(container)
    contratarFuncionario()
    editarFuncionario()
    atualizarInfoUsuarioAdmin()
}

export function usuariosSemDepartamento(arr){
    const main = document.querySelector("main")
    const divTodos = document.createElement("div") 
    divTodos.className = "usuariosSemDP"
    const tituloLista = document.createElement("h2")
    tituloLista.innerText = "Usuários sem Departamento"
    arr.forEach(element => {
        const username = document.createElement("h2")
        const professional_level = document.createElement("p")
        const div = document.createElement("div") 
        username.innerText = element.username 
        professional_level.innerText = element.professional_level
        div.append(username, professional_level)
        divTodos.append(div)
        const container = document.querySelector(".container")
        container.append(tituloLista, divTodos)
        main.append(container)
    })
}
export function todosUsuarios(arr){
    const main = document.querySelector("main")
    const divTodos = document.createElement("div") 
    divTodos.className = "divTodos"
    const tituloLista = document.createElement("h2")
    tituloLista.innerText = "Usuários"
    arr.forEach(element => {
        const div = document.createElement("div") 
        const username = document.createElement("h2")
        const professional_level = document.createElement("p")
        username.innerText = element.username 
        professional_level.innerText = element.professional_level
        div.append(username, professional_level)
        divTodos.append(div)
        const container = document.querySelector(".container")
        container.append(tituloLista, divTodos)
        main.append(container)
    })
    
}
function contratarFuncionario(){
    const main = document.querySelector("main")
    const divTodos = document.createElement("div") 
    const tituloLista = document.createElement("h2")
    const input = document.createElement("input")
    const input2 = document.createElement("input")
    const btn = document.createElement("button")
    btn.innerText = "Contratar"
    input.placeholder = "Digite o ID do usuário"
    input2.placeholder = "Digite o ID do departamento"
    btn.addEventListener("click", () => {
        const obj = {
            user_uuid : input.value,
            department_uuid : input2.value
        }
        apiAdmin.contratarFuncionario(obj)
    })
    const container = document.querySelector(".container")
    container.appendChild(divTodos)
    main.appendChild(container)
    divTodos.append(tituloLista, input, input2, btn)
    tituloLista.innerText = "Contratar funcionário"
}
function editarFuncionario(){
    const main = document.querySelector("main")
    const divTodos = document.createElement("div") 
    const tituloLista = document.createElement("h2")
    const input = document.createElement("input")
    const btn = document.createElement("button")
    btn.innerText = "Demitir"
    input.placeholder = "Digite o ID do usuário"
    btn.addEventListener("click", () => {
       
        apiAdmin.demitirFuncionario(input.value)
    })
    const container = document.querySelector(".container")
    container.appendChild(divTodos)
    main.appendChild(container)
    divTodos.append(tituloLista, input, btn)
    tituloLista.innerText = "Demitir funcionário"
}
function atualizarInfoUsuarioAdmin(){
    const main = document.querySelector("main")
    const divTodos = document.createElement("div") 
    const tituloLista = document.createElement("h2")
    const input = document.createElement("input")
    const input2 = document.createElement("input")
    const input3 = document.createElement("input")
    const btn = document.createElement("button")
    btn.innerText = "Atualizar"
    input.placeholder = "Digite o ID do usuário"
    input2.placeholder = "Digite o tipo de trabalho"
    input3.placeholder = "Digite o nível profissional"
    btn.addEventListener("click", () => {
        const obj = {
            kind_of_work: input2.value,
            professional_level: input3.value
        } 
        apiAdmin.atualizarInfoUsuario(input.value, obj)
    })
    const container = document.querySelector(".container")
    container.appendChild(divTodos)
    main.appendChild(container)
    divTodos.append(tituloLista, input, input2, input3, btn)
    tituloLista.innerText = "Atualizar informações de um funcionário"
}
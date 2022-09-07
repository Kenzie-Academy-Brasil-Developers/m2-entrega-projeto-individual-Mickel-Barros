import { apiAdmin } from "./dashboard-admin.js"
import { fechar } from "./dashboard.js"
function menuEmpresasCriadas(){
    const btn = document.querySelector(".empresasCriadas")
    btn.addEventListener("click", () => {
        btnCriarEmpresa()
        fechar()
        paginaEmpresas()
    })
}
menuEmpresasCriadas()
function btnCriarEmpresa(){
    const repetido = document.querySelector(".divCriarEmpresa")
    if(repetido){repetido.remove()}
    const deletar = document.querySelector(".containerSetores")
    const h2 = document.querySelector("h2")
    const deletarDiv = document.querySelector(".divId")
    const deletar2 = document.querySelector(".container")
    if(deletar){deletar.remove(), h2.remove(), deletarDiv.remove()}
    if(deletar2){deletar2.remove()}
    const div = document.createElement("div")
    const main = document.querySelector("main")
    const titulo = document.createElement("h2")
    const btn = document.createElement("button")

    const inputName = document.createElement("input")
    const inputHour = document.createElement("input")
    const inputDescription = document.createElement("input")
    const inputSetor = document.createElement("input")
    
    titulo.innerText = "Criar empresa" 
    btn.className = "btnCriarEmpresa"
    btn.innerText = "Criar"
    div.className = "divCriarEmpresa"
    inputName.placeholder = "Digite o nome da empresa"
    inputHour.placeholder = "Digite o horário de funcionamento"
    inputDescription.placeholder = "Digite a descrição da empresa"
    inputSetor.placeholder = "Digite o id do setor"

    inputName.className = "inputName"
    inputHour.className = "inputHour"
    inputDescription.className = "inputDescription"
    inputSetor.className = "inputSetor"


    div.append(titulo, inputName, inputHour, inputDescription, inputSetor, btn)
    main.appendChild(div)

    btn.addEventListener("click", () => {
        const obj = {
            name: inputName.value,
            opening_hours: inputHour.value,
            description: inputDescription.value,
            sector_uuid: inputSetor.value
          }
        apiAdmin.criarEmpresa(obj)
    })
    apiAdmin.listarEmpresas()
}
function paginaEmpresas(){
    const div = document.querySelector(".divCriarEmpresa")
    const container = document.createElement("div")
    container.className = "empresaEspecifica"
    const h2 = document.createElement("h2")
    const input = document.createElement("input")
    const btn = document.createElement("button")

    h2.innerText = "Pesquisar empresa específica"
    input.placeholder = "Digite o nome da empresa"
    btn.innerText = "Pesquisar"

    btn.addEventListener("click", () => {
        
        const h2 = document.querySelectorAll(".empresaDiv h2")
        for(let i = 0; i < h2.length; i++){
            if(h2[i].innerText !== input.value){
                (h2[i].parentNode.parentNode.remove())
            }
        }
    })
    const divSetor = document.createElement("div")
    divSetor.className = "divSetor"
    const tituloSetor = document.createElement("h2")
    const inputSetor = document.createElement("input")
    const btnSetor = document.createElement("button")

    tituloSetor.innerText = "Pesquisar empresa por setor"
    inputSetor.placeholder = "Digite o nome do setor"
    btnSetor.innerText = "Pesquisar"

    btnSetor.addEventListener("click", () => {
        apiAdmin.listarEmpresasPorSetor(inputSetor.value)
    })

    divSetor.append(tituloSetor, inputSetor, btnSetor)
    div.append(divSetor, container)
    container.append(h2, input, btn)
}

export function criarListaEmpresasSetor(arr){
    if(arr !== undefined){
        arr.forEach(element => {
            const empresa = document.createElement("div")
            const div = document.createElement("div")
            const nome = document.createElement("h2")
            const secao = document.createElement("span")
            const horario = document.createElement("span")
            const descricao = document.createElement("p")
    
            nome.innerText = element.name
            secao.innerText = element.sectors.description
            horario.innerText = element.opening_hours
            descricao.innerText = element.description
            secao.className = "secao"
            empresa.className = "empresaDiv"
    
            div.append(nome, secao)
            empresa.append(div, horario, descricao)
            const empresas = document.querySelector(".divSetor")
            empresas.appendChild(empresa)
        })
    }
}

export function criarListaEmpresas(arr){
    if(arr !== undefined){
        arr.forEach(element => {
            const empresa = document.createElement("div")
            const div = document.createElement("div")
            const nome = document.createElement("h2")
            const secao = document.createElement("span")
            const horario = document.createElement("span")
            const descricao = document.createElement("p")
    
            nome.innerText = element.name
            secao.innerText = element.sectors.description
            horario.innerText = element.opening_hours
            descricao.innerText = element.description
            secao.className = "secao"
            empresa.className = "empresaDiv"
    
            div.append(nome, secao)
            empresa.append(div, horario, descricao)
            const empresas = document.querySelector(".empresaEspecifica")
            empresas.appendChild(empresa)
        })
    }
}
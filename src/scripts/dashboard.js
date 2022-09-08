import {Api} from "./api-dashboard.js"
function darkmode(){
    const btnDarkmode = document.querySelector(".darkmodeBtn")
    btnDarkmode.addEventListener("click", () => {
        const img = document.querySelector(".darkmodeBtn img")
        const header = document.querySelector("header")
        const body = document.querySelector("body") 
        const main = document.querySelector("main")
        body.classList.toggle("darkmode")
        header.classList.toggle("darkmode")
        main.classList.toggle("darkmode")
        /* if(img.src =="http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/src/assets/luga.png"){
            img.src = "http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/src/assets/sol.jpg"
            return
        }
        img.src = "http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/src/assets/luga.png" */
    })
}
darkmode()

function sair(){
    const btn = document.querySelector("header button")
    btn.addEventListener("click", () => {
        localStorage.clear()
        window.location.replace("http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/index.html")
    })
}
sair()

function editarPerfil(){
    const btn = document.querySelector(".btnConta")
    const input = document.querySelector(".login input")
    const inputSenha = document.querySelector(".senha")
    
    btn.addEventListener("click", () => {

    })
}
editarPerfil()

function abrirMenu(){
    const btn = document.querySelector("body > button")
    btn.addEventListener("click", () => {
        const aside = document.querySelector("aside")
        aside.classList.toggle("abrirAside")
        btn.classList.toggle("extenderBtn")
        /* const imgBtn = document.querySelector("body > button > img")
        if(imgBtn.src == "http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/src/assets/setaEsc.png"){
            imgBtn.src = "http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/src/assets/seta.png"
            return
        }
        imgBtn.src = "http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/src/assets/setaEsc.png" */
    })
}
abrirMenu()

export function fechar(){
    const btn = document.querySelector("body > button")
    const aside = document.querySelector("aside")
    aside.classList.toggle("abrirAside")
    btn.classList.toggle("extenderBtn")
    const imgBtn = document.querySelector("body > button > img")
    /* if(imgBtn.src == "http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/src/assets/setaEsc.png"){
            imgBtn.src = "http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/src/assets/seta.png"
            return
        }
        imgBtn.src = "http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/src/assets/setaEsc.png" */
}

function usuarioComum(){
    const usuarioNormal = localStorage.getItem("@KenzieEmpresa:isAdmin")
    if(usuarioNormal == "false"){
        const btn = document.querySelector("body > button")
        const aside = document.querySelector("aside")
        aside.className = "esconder"
        btn.className = "esconder"

        const obj = {
            username: "",
            email: "",
            password: ""
        }
        const main = document.querySelector("main")
        const div = document.createElement("div")
        const h2 = document.createElement("h2")
        const inputName = document.createElement("input")
        const inputEmail = document.createElement("input")
        const inputPassword = document.createElement("input")
        const button = document.createElement("button")

        inputPassword.type = "password"
        div.className = "divAtualizarInfo"
        h2.innerText = "Deseja atualizar suas informações?"
        button.className = "btnPegarInfo"
        button.innerText = "Alterar"
        inputName.placeholder = "Digite seu novo nome"
        inputEmail.placeholder = "Digite seu novo email"
        inputPassword.placeholder = "Digite sua nova senha"

        div.append(h2, inputName, inputEmail, inputPassword, button)
        
        button.addEventListener("click", () => {
            obj.username = inputName.value
            obj.email = inputEmail.value
            obj.password = inputPassword.value
            Api.atualizarInfoUsuario(obj)
        })
        
        const divEmpresa = document.createElement("div")
        divEmpresa.className = "divSuaEmpresa"
        const h2Empresa = document.createElement("h2")
        const suaEmpresa = document.createElement("p")

        h2Empresa.innerText = "Sua Empresa"

        const divDepartamento = document.createElement("div")
        divDepartamento.className = "divSeuDepartamento"
        const h2Departamento = document.createElement("h2")

        h2Departamento.innerText = "Seu Departamento"
        Api.usuarioCoworkers()

        main.append(div, divDepartamento, divEmpresa)
        divDepartamento.append(h2Departamento)
        divEmpresa.append(h2Empresa, suaEmpresa)
    }
}
usuarioComum()

export function mostrarCoworkers(arr){
    const id = localStorage.getItem("@KenzieEmpresa:id")
    const seuDp = document.querySelector(".divSeuDepartamento")
    const divDp = document.createElement("div")
    divDp.className = "divDp"
    const nameDp = document.createElement("h2")
    const descricao = document.createElement("p")
    nameDp.innerText = arr[0].name
    descricao.innerText = arr[0].description
    divDp.append(nameDp, descricao)
    for(let i in arr[0].users){
        if(arr[0].users[i].uuid !== id){
            const div = document.createElement("div")
            const name = document.createElement("h2")
            const email = document.createElement("p")
            const level = document.createElement("p")
            const tipo = document.createElement("p")
            const titulo = document.createElement("p")
            titulo.innerText = "Funcionários que trabalham no seu departamento:"
            name.innerText = arr[0].users[i].username
            email.innerText = arr[0].users[i].email
            level.innerText = arr[0].users[i].professional_level
            tipo.innerText = arr[0].users[i].kind_of_work

            div.append(titulo, name, email, level, tipo)
            seuDp.append(divDp, div)
        }
    }
    const empresa = arr[0].company_uuid
    Api.listarEmpresas(empresa)
} 
export function empresaFuncionario(arr, id){
    arr.forEach(element => {
        if(element.uuid === id){
            console.log(element)

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
            const empresas = document.querySelector(".divSuaEmpresa")
            empresas.appendChild(empresa)
        }
    })
}
function fecharModal(){
    const btnFecharModal = document.querySelector(".fecharModal")
    btnFecharModal.addEventListener("click", () => {
        const modal = document.querySelector(".modalAppear")
        modal.className = "modal"
        const hidden2 = document.querySelector(".hidden2")
        hidden2.className = "hidden2"
    })
}
fecharModal()
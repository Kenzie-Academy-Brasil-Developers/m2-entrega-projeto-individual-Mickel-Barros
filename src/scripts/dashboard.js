import {Api} from "./api-dashboard.js"
function darkmode(){
    const btnDarkmode = document.querySelector(".darkmodeBtn")
    btnDarkmode.addEventListener("click", () => {
        const img = document.querySelector(".darkmodeBtn img")
        const header = document.querySelector("header")
        const body = document.querySelector("body") 
        const main = document.querySelector("main")
        /* const empresas = document.querySelector(".empresas")
        empresas.classList.toggle("darkmode") */
        body.classList.toggle("darkmode")
        header.classList.toggle("darkmode")
        main.classList.toggle("darkmode")
        if(img.src =="http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/src/assets/luga.png"){
            img.src = "http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/src/assets/sol.jpg"
            return
        }
        img.src = "http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/src/assets/luga.png"
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
        const imgBtn = document.querySelector("body > button > img")
        if(imgBtn.src == "http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/src/assets/setaEsc.png"){
            imgBtn.src = "http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/src/assets/seta.png"
            return
        }
        imgBtn.src = "http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/src/assets/setaEsc.png"
    })
}
abrirMenu()

export function fechar(){
    const btn = document.querySelector("body > button")
    const aside = document.querySelector("aside")
    aside.classList.toggle("abrirAside")
    btn.classList.toggle("extenderBtn")
    const imgBtn = document.querySelector("body > button > img")
    if(imgBtn.src == "http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/src/assets/setaEsc.png"){
            imgBtn.src = "http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/src/assets/seta.png"
            return
        }
        imgBtn.src = "http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/src/assets/setaEsc.png"
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
        const funcionariosDepartamento = document.createElement("p")

        h2Departamento.innerText = "Seu Departamento"
        funcionariosDepartamento.innerText = "Funcionários que trabalham no seu departamento:"
        Api.usuarioCoworkers()

        main.append(div, divDepartamento, divEmpresa)
        divDepartamento.append(h2Departamento, funcionariosDepartamento)
        divEmpresa.append(h2Empresa, suaEmpresa)
    }
}
usuarioComum()

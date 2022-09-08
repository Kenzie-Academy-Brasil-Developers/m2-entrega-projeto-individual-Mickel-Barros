function darkmode(){
    const btnDarkmode = document.querySelector(".darkmodeBtn")
    btnDarkmode.addEventListener("click", () => {
        const img = document.querySelector(".darkmodeBtn img")
        const header = document.querySelector("header")
        const body = document.querySelector("body") 
        const main = document.querySelector("main")
        const empresas = document.querySelector(".empresas")
        empresas.classList.toggle("darkmode")
        body.classList.toggle("darkmode")
        header.classList.toggle("darkmode")
        main.classList.toggle("darkmode")
        /* console.log(img.src)
        if(img.src =="m2-entrega-projeto-individual-Mickel-Barros/src/assets/luga.png"){
            console.log("a")
            img.src = "http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/src/assets/sol.jpg"
            return
        }
        img.src = "http://127.0.0.1:5500/m2-entrega-projeto-individual-Mickel-Barros/src/assets/luga.png" */
    })
}
darkmode()

function login(){
    const btnLogin = document.querySelector(".loginBtn")
    btnLogin.addEventListener("click", abrirLogin)
}
login()
export function abrirLogin(){
    const modalLogin = document.querySelector(".login")
    modalLogin.classList.toggle("appear")
    const black = document.querySelector(".hidden")
    black.classList.toggle("black")
}
function fecharLogin(){
    const btnFechar = document.querySelector(".fecharLogin")
    btnFechar.addEventListener("click", () => {
        const modalLogin = document.querySelector(".appear")
        modalLogin.classList.toggle("appear")
        const black = document.querySelector(".black")
        black.classList.toggle("black")
    })
}
fecharLogin()

export function modalLogin(){
    const btnEntrar = document.querySelector(".btnEntrar")
    btnEntrar.addEventListener("click", abrirModalLogin) 
       
}
export function abrirModalLogin(){
    const modal = document.querySelector(".modal")
    modal.classList.toggle("modalAppear")
    const hidden2 = document.querySelector(".hidden2")
    hidden2.classList.toggle("black2")
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
function cadastro(){
    const btnCadastro = document.querySelector(".cadastroBtn")
    btnCadastro.addEventListener("click", () => {
        const modalCadastro = document.querySelector(".cadastro")
        modalCadastro.classList.toggle("appearCadastro")
        const black = document.querySelector(".hidden")
        black.classList.toggle("black")
    })
}
cadastro()
function fecharCadastro(){
    const btnFechar = document.querySelector(".fecharCadastro")
    btnFechar.addEventListener("click",  fechar)
}
export function fechar(){
    const modalCadastro = document.querySelector(".appearCadastro")
    modalCadastro.classList.toggle("appearCadastro")
    const black = document.querySelector(".black")
    black.classList.toggle("black")
}
fecharCadastro()
export function modalCadastro(){
    const btnEntrar = document.querySelector(".btnCadastrar")
    btnEntrar.addEventListener("click", () => {
        const modal = document.querySelector(".modal")
        modal.classList.toggle("modalAppear") 
        const hidden2 = document.querySelector(".hidden2")
        hidden2.classList.toggle("black2")
    })
}
modalCadastro()


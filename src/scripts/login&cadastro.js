import {Api} from "./api.js"
function pegarCadastro(){
    const btnCadastrar = document.querySelector(".btnCadastrar")
    const obj = {
        password: "",
        email: "",
        professional_level: "",
        username: ""
          
    }
    btnCadastrar.addEventListener("click", () => {
        const input = document.querySelectorAll(".cadastro input")
        for(let i = 0; i < input.length; i++){
            obj.email = input[0].value
            obj.password = input[1].value
            obj.professional_level = input[2].value
            obj.username = input[3].value
        }
        Api.cadastrar(obj)
    })
}
pegarCadastro() 

function pegarLogin(){
    const btnLogar = document.querySelector(".btnEntrar")
    const obj = {
        email: "",
        password: ""
    }
    btnLogar.addEventListener("click", () => {
        obj.email = document.querySelector(".login input").value
        obj.password = document.querySelector(".senha").value
        Api.logar(obj)
    })
}
pegarLogin() 
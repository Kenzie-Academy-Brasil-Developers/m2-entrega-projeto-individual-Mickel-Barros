import { abrirLogin } from "./index.js"
import { fechar} from "./index.js"
import { modalCadastro } from "./index.js"
import { abrirModalLogin } from "./index.js"
export class Api{
    static async listarEmpresas(){
        const empresas = await fetch("http://localhost:6278/companies",{
            headers:{"Authorization":"Bearer null"}
        })
        .then(res => res.json())
        .then(res => {criarListaEmpresas(res)
            filtroTodos(res)
            filtroAlimenticio(res)
            filtroAutomotiva(res)
            filtroTI(res)
        })
        .catch(err => console.log(err))
    }
    static async cadastrar(obj){
        const cadastro = await fetch("http://localhost:6278/auth/register/user",{
            method: "POST",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(obj)

        })
        .then(res => res.json())
        .then(res => {
        if(res.error){
            modalCadastro()
            return
        }
        })
        .catch(err => console.log(err))
    }
    static async logar(obj){
        const login = await fetch("http://localhost:6278/auth/login",{
            method: "POST",
            headers:{"Content-type":"application/json", "Authorization":"Bearer null"},
            body: JSON.stringify(obj)
        
        })
        .then(res => res.json())
        .then(res => {
        console.log(res)
        if(res.error){
            abrirModalLogin()
            return
        }
        localStorage.setItem("@KenzieEmpresa:token", res.token)
        localStorage.setItem("@KenzieEmpresa:id", res.uuid)
        localStorage.setItem("@KenzieEmpresa:isAdmin", res.is_admin)
        this.mudarPagina()})
        .catch(err => console.log(err))
    }
    static async mudarPagina(){
        const token = localStorage.getItem("@KenzieEmpresa:token")
        if(token !== "undefined"){
            window.location.assign("src/dashboard/dashboard.html")
            
        }
    }
}
Api.listarEmpresas()
function criarListaEmpresas(arr){
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
            const empresas = document.querySelector(".empresas")
            empresas.appendChild(empresa)
        })
    }
}




function filtroTodos(res){
    const btnTodos = document.querySelector(".filtroTodos")
    btnTodos.addEventListener("click", () => {
        const filtro = document.querySelectorAll(".secao")
        filtro.forEach(element => {element.closest("div").parentNode.remove()})
        criarListaEmpresas(res)
    })
}
filtroTodos()

function filtroAlimenticio(res){
    const btnAlimenticio = document.querySelector(".filtroAlimenticio")
    btnAlimenticio.addEventListener("click", () => {
        const filtro = document.querySelectorAll(".empresaDiv")
        filtro.forEach(element => {element.remove()})
        criarListaEmpresas(res)
        const descricao = document.querySelectorAll(".secao")
        descricao.forEach(element => {
            if(element.innerText !== "Alimenticio"){
                element.closest("div").parentNode.remove()
            
            }
        })
    })
}

function filtroAutomotiva(res){
    const btnAutomotiva = document.querySelector(".filtroAutomotiva")
    btnAutomotiva.addEventListener("click", () => {
        const filtro = document.querySelectorAll(".empresaDiv")
        filtro.forEach(element => {element.remove()})
        criarListaEmpresas(res)
        const descricao = document.querySelectorAll(".secao")
        descricao.forEach(element => {
            if(element.innerText !== "Automotiva"){
                element.closest("div").parentNode.remove()
            
            }
        })
    })
}
filtroAutomotiva()
function filtroTI(res){
    const btnTI = document.querySelector(".filtroTI")
    btnTI.addEventListener("click", () => {
        const filtro = document.querySelectorAll(".empresaDiv")
        filtro.forEach(element => {element.remove()})
        criarListaEmpresas(res)
        const descricao = document.querySelectorAll(".secao")
        descricao.forEach(element => {
            if(element.innerText !== "TI"){
                element.closest("div").parentNode.remove()
            
            }
        })
    })
}
filtroTI()
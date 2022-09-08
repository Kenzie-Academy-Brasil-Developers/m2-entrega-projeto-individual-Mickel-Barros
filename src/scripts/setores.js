import { apiAdmin } from "./api-dashboard-admin.js"
import { fechar } from "./dashboard.js"
function menuSetores(){
    const btn = document.querySelector(".setores")
    btn.addEventListener("click", () => {
        apiAdmin.listarSetores()
        fechar()
    })
}
menuSetores()

export function criarListaSetores(arr){
    const repetido = document.querySelector(".containerSetores")
    const h2Repetido = document.querySelector("h2")
    const divRepetida = document.querySelector(".divId")
    if(repetido){repetido.remove(), h2Repetido.remove(), divRepetida.remove()}
    const caixa = document.createElement("div")
    const h2 = document.createElement("h2")
    const main = document.querySelector("main")
    main.appendChild(h2)
    const divId = document.createElement("div")
    const deletar = document.querySelector(".divCriarEmpresa")
    const deletar2 = document.querySelector(".container")
    if(deletar){deletar.remove()}
    if(deletar2){deletar2.remove()}
    arr.forEach(element => {
        const div = document.createElement("div")
        const description = document.createElement("h2")
        const p = document.createElement("p")
        /* p.innerText = element.uuid */
        description.innerText = element.description
        h2.innerText = "Setores"
        div.className = "listaSetores"
        caixa.className = "containerSetores"
        divId.className = "divId"
        main.append(caixa, divId)
        caixa.appendChild(div)
        divId.appendChild(p)
        div.appendChild(description)
    })
}
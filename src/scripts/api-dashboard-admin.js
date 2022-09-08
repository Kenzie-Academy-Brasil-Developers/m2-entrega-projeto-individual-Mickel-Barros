import { criarListaSetores } from "./setores.js"
import {listaDeDepartamentos} from "./departamentos.js"
import { todosUsuarios } from "./departamentos.js"
import { usuariosSemDepartamento } from "./departamentos.js"
import { criarListaEmpresas, criarListaEmpresasSetor } from "./empresas.js"
export class apiAdmin{
    static async criarEmpresa(obj){
        console.log(obj)
        const token = localStorage.getItem("@KenzieEmpresa:token")
        const empresa = await fetch("http://localhost:6278/companies",{
            method: "POST",
            headers:{"Authorization":`Bearer ${token}`,"Content-Type":"application/json"},
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(res => {console.log(res)
        })
        .catch(err => console.log(err))
    }
    static async listarSetores(){
        const token = localStorage.getItem("@KenzieEmpresa:token")
        const setores = await fetch("http://localhost:6278/sectors",{
            method: "GET",
            headers:{"Authorization":`Bearer ${token}`,"Content-Type":"application/json"},
        })
        .then(res => res.json())
        .then(res => {
            criarListaSetores(res)
        })
        .catch(err => console.log(err))
    }
    static async listarDepartamentos(){
        const token = localStorage.getItem("@KenzieEmpresa:token")
        const departmentos = await fetch("http://localhost:6278/departments",{
            method: "GET",
            headers:{"Authorization":`Bearer ${token}`,"Content-Type":"application/json"},
        })
        .then(res => res.json())
        .then(res => {listaDeDepartamentos(res)
        })
        .catch(err => console.log(err))
    }
    static async listarDepartamentosEmpresa(id){
        const token = localStorage.getItem("@KenzieEmpresa:token")
        const departmentos = await fetch(`http://localhost:6278/departments/${id}`,{
            method: "GET",
            headers:{"Authorization":`Bearer ${token}`,"Content-Type":"application/json"},
        })
        .then(res => res.json())
        .then(res => {console.log(res)
        })
        .catch(err => console.log(err))
    }
    static async criarDepartamento(obj){
        const token = localStorage.getItem("@KenzieEmpresa:token")
        const departmento = await fetch("http://localhost:6278/departments",{
            method: "POST",
            headers:{"Authorization":`Bearer ${token}`,"Content-Type":"application/json"},
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(res => {console.log(res)
        })
        .catch(err => console.log(err))
    }
    static async contratarFuncionario(obj){
        console.log(JSON.stringify(obj))
        const token = localStorage.getItem("@KenzieEmpresa:token")
        const funcionario = await fetch("http://localhost:6278/departments/hire/",{
            method: "PATCH",
            headers:{"Authorization":`Bearer ${token}`,"Content-Type":"application/json"},
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(res => {console.log(res)
        })
        .catch(err => console.log(err))
    }
    static async demitirFuncionario(id){
        const token = localStorage.getItem("@KenzieEmpresa:token")
        const funcionario = await fetch(`http://localhost:6278/departments/dismiss/${id}`,{
            method: "PATCH",
            headers:{"Authorization":`Bearer ${token}`,"Content-Type":"application/json"},
        })
        .then(res => res.json())
        .then(res => {console.log(res)
        })
        .catch(err => console.log(err))
    }
    static async deletarDepartamento(id){
        const token = localStorage.getItem("@KenzieEmpresa:token")
        const departamento = await fetch(`http://localhost:6278/departments/${id}`,{
            method: "DELETE",
            headers:{"Authorization":`Bearer ${token}`,"Content-Type":"application/json"},
        })
        .then(res => res.json())
        .then(res => {console.log(res)
        })
        .catch(err => console.log(err))
    }
    static async editarDepartamento(obj, id){
        console.log(obj, id)
        const token = localStorage.getItem("@KenzieEmpresa:token")
        const departamento = await fetch(`http://localhost:6278/departments/${id}`,{
            method: "PATCH",
            headers:{"Authorization":`Bearer ${token}`,"Content-Type":"application/json"},
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(res => {console.log(res)
        })
        .catch(err => console.log(err))
    }
    static async listarTodosUsuarios(){
        const token = localStorage.getItem("@KenzieEmpresa:token")
        const usuarios = await fetch(`http://localhost:6278/users`,{
            method: "GET",
            headers:{"Authorization":`Bearer ${token}`,"Content-Type":"application/json"},
        })
        .then(res => res.json())
        .then(res => {
            todosUsuarios(res)
        })
        .catch(err => console.log(err))
    }
    static async usuariosSemDepartamento(){
        const token = localStorage.getItem("@KenzieEmpresa:token")
        const usuarios = await fetch(`http://localhost:6278/admin/out_of_work`,{
            method: "GET",
            headers:{"Authorization":`Bearer ${token}`},
        })
        .then(res => res.json())
        .then(res => {usuariosSemDepartamento(res)
            console.log(res)
        })
        .catch(err => console.log(err))
    }
    static async atualizarInfoUsuario(id, obj){
        const token = localStorage.getItem("@KenzieEmpresa:token")
        const usuarios = await fetch(`http://localhost:6278/admin/update_user/${id}`,{
            method: "PATCH",
            headers:{"Authorization":`Bearer ${token}`,"Content-Type":"application/json"},
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(res => {console.log(res)
        })
        .catch(err => console.log(err))
    }
    static async listarEmpresas(){
        const empresas = await fetch(`http://localhost:6278/companies`,{
            method: "GET",
            headers:{"Authorization":`Bearer null`},
        })
        .then(res => res.json())
        .then(res => {console.log(res)
        criarListaEmpresas(res)})
        .catch(err => console.log(err))
    }
    static async listarEmpresasPorSetor(setor){
        const empresas = await fetch(`http://localhost:6278/companies/${setor}`,{
            method: "GET",
            headers:{"Authorization":`Bearer null`},
        })
        .then(res => res.json())
        .then(res => {console.log(res)
        criarListaEmpresasSetor(res)})
        .catch(err => console.log(err))
    }
}

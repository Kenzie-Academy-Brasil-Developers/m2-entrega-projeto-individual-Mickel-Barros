export class Api{
    static async usuarioDepartamento(){
        const token = localStorage.getItem("@KenzieEmpresa:token")
        const isAdmin = localStorage.getItem("@KenzieEmpresa:isAdmin")
        if (isAdmin == true){
            return
        }
        const usuario = await fetch("http://localhost:6278/users/departments",{
            method: "GET",
            headers:{"Authorization":`Bearer ${token}`}
        })
        .then(res => res.json())
        .then(res => {console.log(res)
        })
        .catch(err => console.log(err))
    }
    static async usuarioCoworkers(){
        const token = localStorage.getItem("@KenzieEmpresa:token")
        const funcionarios = await fetch("http://localhost:6278/users/departments/coworkers",{
            method: "GET",
            headers:{"Authorization":`Bearer ${token}`}
        })
        .then(res => res.json())
        .then(res => {console.log(res)
        })
        .catch(err => console.log(err))
    }
    static async atualizarInfoUsuario(obj){
        const token = localStorage.getItem("@KenzieEmpresa:token")
        const isAdmin = localStorage.getItem("@KenzieEmpresa:isAdmin")
        if (isAdmin == true){
            return
        }
        const usuario = await fetch("http://localhost:6278/users",{
            method: "PATCH",
            headers:{"Authorization":`Bearer ${token}`,"Content-Type":"application/json"},
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(res => {console.log(res)
        })
        .catch(err => console.log(err))
    }
}

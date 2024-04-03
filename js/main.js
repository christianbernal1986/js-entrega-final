

// D.O.M

// Inputs

const formDom= document.querySelector("#formDom");
console.log(formDom)
const inputs= document.querySelectorAll("input");
console.log(inputs)
const usuarioDom= inputs[0]
console.log(usuarioDom)
const passwordDom= inputs[1]
console.log(passwordDom)
const enviar= inputs[2]
console.log(enviar)
const vacio= document.querySelector("#camposVacios")

let usuarios;
if(localStorage.getItem("usuarios")){
    usuarios=JSON.parse(localStorage.getItem("usuarios"))
}else{
    usuarios=[]
}

// Constructor de usuarios

class Usuario {
    constructor(usuario,password){
        this.usuario = usuario;
        this.password = password;
    }
}

// Guardar usuario

function guardarUsuario(usuario){
    return usuarios.push(usuario)
}

// Guardar ls
function guardarEnLS(arr) {
    return localStorage.setItem('usuarios',JSON.stringify(arr))
}

// Evento // Sweet alert
formDom.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    // Verificacion de campos vacios
    
    const usuarioValue = usuarioDom.value.trim();
    const passwordValue = passwordDom.value.trim();

    if (usuarioValue === '' || passwordValue === '') {
        Swal.fire("Por favor, completa todos los campos!");

        return; // Detenemos la ejecución si algún campo está vacío
    }
    const newUsuario=new Usuario(usuarioDom.value, passwordDom.value) 
    guardarUsuario(newUsuario) 
    guardarEnLS(usuarios)
    location.href="./pages/login.html"
})



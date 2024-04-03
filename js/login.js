
// Inputs

const formReg= document.querySelector("#formReg");
console.log(formReg)
const inputs= document.querySelectorAll("input");
console.log(inputs)
const usuarioR= inputs[0]
console.log(usuarioR)
const passwordR= inputs[1]
console.log(passwordR)
const enviar2= inputs[2]
console.log(enviar2)
const mensaje= document.querySelector("#mensaje")

// Inicio sesion      

function inicioSesion(usuarios) {
let user= usuarios.find((usuario) => {
    return usuario.usuario == usuarioR.value && usuario.password == passwordR.value;
})
const usuarioValue = usuarioR.value.trim();
const passwordValue = passwordR.value.trim();

if (usuarioValue === '' || passwordValue === '') {
    Swal.fire("Por favor, completa todos los campos!");
    // vacio.innerHTML='Por favor, completa todos los campos.';
    return; // Detenemos la ejecución si algún campo está vacío
}
// Sweet alert para usuario no encontrado
user ? location.href="../pages/calcular.html" : Swal.fire("Usuario no encontrado!"); //mensaje.innerHTML= "Usuario no encontrado"

}

// Recuperar ls
function recuperarLS() {
    return JSON.parse(localStorage.getItem("usuarios"))
}
// Ejecucion
const usuariosLS = recuperarLS()

// Evento
formReg.addEventListener("submit", (e) => {
    e.preventDefault()
    inicioSesion(usuariosLS)
})
// Swet alert Bienvanida

Swal.fire({
  position: "top-center",
  icon: "success",
  title: "Bienvenido",
  showConfirmButton: false,
  timer: 2000
});

// Inputs

const formCal= document.querySelector("#formCal");
console.log(formCal)
const inputs= document.querySelectorAll("input");
console.log(inputs)
const montoD= inputs[0]
console.log(montoD)
const cuotasD= inputs[1]
console.log(cuotasD)
const calcular= inputs[2]
console.log(calcular)
const salir= document.querySelector("#salir")
console.log(salir);


// Funcion calcular credito

      
 function calcularCredito(){
  const res = document.querySelector("#respuesta");
  const monto = montoD.value.trim();
  const cantidad = cuotasD.value.trim();

 // Validamos campos vacios // Sweet alert

  if (monto === '' || cantidad === '') {
      Swal.fire("Por favor, completa todos los campos!");
      return; // Detenemos la ejecución si algún campo está vacío
  }

  // Validar que los campos sean números

  if (isNaN(monto) || isNaN(cantidad)) {
      Swal.fire("Por favor, ingresa solo números en los campos correspondientes.");
      return; // Detenemos la ejecución si algún campo no es un número
  }

  let interes = 2.5;
  let interesCuota = interes * cantidad;
  let resultado = parseFloat(monto) * interesCuota / 100 + parseFloat(monto);
  let cuotas = resultado / parseFloat(cantidad);

  res.innerHTML = "Por el monto ingresado abonará " + cantidad + " cuotas de $" + Math.round(cuotas);
}

  // Evento // use un SetTimeOut para retrasar la funciom calcular
  // y un Sweet alert para simular una demora en el proceso
  
  formCal.addEventListener("submit", (e) => {
    e.preventDefault()
    let timerInterval;
    Swal.fire({
      title: "Calculando!",
      html: "en <b></b> milisegundos.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
    setTimeout(()=>{
      calcularCredito()
    },2000); 

  })
  
  // Evento salir con Sweet alert preguntando si estas seguro? y un SetTimeOut para retrasar el metodo "location"

  salir.addEventListener("submit", (e) =>{
    e.preventDefault()
    Swal.fire({
      title: "Estas seguro que quieres salir?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "salir!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Gracias por usar nuestros servivios",
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(()=>{
          location.href="../index.html"
        },1500); 
    
       
      }
      
    });
  })
      
      
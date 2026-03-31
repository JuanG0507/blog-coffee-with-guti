
  // evento de textarea

const datos = {
    nombre: "", 
    email: "",
    mensaje: ""
}

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

    // validar submit

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();


    const { nombre, email, mensaje } =  datos;

    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    console.log("Enviando Formulario");
});


function leerTexto(e) {
    //console.log(e.target.value)//
    datos[e.target.id] = e.target.value;

    console.log(e.target);


    console.log(datos);
}

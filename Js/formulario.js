const btnEnviar = document.querySelector('.boton--primario');
 
btnEnviar.addEventListener('Click', function(evento){
    console.log(evento);
    evento.preventDefault();
 
    //validar un formulario
 
 
    console.log('enviando formulario');
});


    // evento de textarea

const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

function leerTexto(e) {
    //console.log(e.target.value)//
    datos[e.target.id] = e.target.value;

    console.log(e.target);


    console.log(datos);
}

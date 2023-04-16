
/* Objeto Windows. Metodo alert */
window.alert("Hola!!! Bienvenido a este sitio");

/* Declarando una variable - Creando una cajita de dato */
let itemMensaje;

/* Asignar valor a la variable itemMensaje */
itemMensaje = window.document.getElementById("Mensaje");

/* Declarar y asignar valor en una variable */
let txtNombre = window.prompt("Ingrese su nombre");

/* Reemplazar el texto del primer párrafo */
itemMensaje.innerHTML = "¡Bienvenido " + txtNombre + " a este sitio web!";

/* Colocar nuevo contenido */
document.write("<p>Página elaborada por Jerico Webmaster</p>");

/* Mensajen en la consola - solo para desarrolladores */
console.log("Terminó todo el script.");
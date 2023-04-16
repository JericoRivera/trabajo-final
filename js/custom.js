/* Obtener refencia a todos los botones */
let botones = window.document.querySelectorAll("#catalogo > article > button");

/* Agregar el escucha del evento Clic, ejecutar metodo */
botones.forEach(element => {
    element.addEventListener("click", agregarCarrito);
});

/* Metodo para agregar el producto al carrito */
function agregarCarrito(producto) {

    /* Conseguí los datos de mi producto */
    let tituloProducto = producto.target.parentElement.querySelector("h3");
    let precioProducto = producto.target.parentElement.querySelector("p");
    let imagenProducto = producto.target.parentElement.querySelector("picture");


    /* Ahora colocar en el modal */
    let modalCuerpo = document.querySelector("#ventanaCarrito > div > div > div.modal-body");
    
    /* Condicional paea saber si está vacio */
    if(modalCuerpo.querySelector("p").innerHTML == "Su carrito está actualmente vacio."){
        modalCuerpo.innerHTML = "";
    }

    modalCuerpo.innerHTML += "<h3>"+tituloProducto.innerHTML+"</h3><p>"+precioProducto.innerHTML+"</p><picture>"+imagenProducto.innerHTML+"</picture>";

    /* Avisar que se agregó al carrito */
    alert("Se agregó correctamente el producto.");
}
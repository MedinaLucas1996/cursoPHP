// Objeto

const nombreProdcuto = "Monitor 20 de Pulgadas";
const precio = 300;
const disponible = true;


const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}



// console.log(producto.precio);
// console.log(producto.nombreProducto);   //////////// IPORTANTEEEEEE  ////////////
// console.log(producto.disponible);

// Agregar nuevas propiedades
producto.imagen = "imagen.jpg";

// Eliminar propiedades
delete producto.disponible;



console.log(producto);


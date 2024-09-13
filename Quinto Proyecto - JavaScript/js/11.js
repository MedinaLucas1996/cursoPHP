// Objetos

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}


// Forma anterior
// const nombreProducto = producto.nombreProducto;
// const precioProducto = producto.precio;
// const disponibleProducto = producto.disponible;

// console.log(nombreProducto);
// console.log(precioProducto);
// console.log(disponibleProducto);


// Destructuring

const { nombreProducto } = producto;
const { precio } = producto;
const { disponible } = producto;

console.log(nombreProducto);
console.log(precio);
console.log(disponible);


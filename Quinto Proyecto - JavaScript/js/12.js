// "use strict"; // Correr JS en modo estricto
//Objetos

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}


// FREEZE: No te permite modificar, agregar o eliminar ningun objeto
Object.freeze(producto);
console.log(Object.isFrozen(producto));

producto.imagen = 'imagen.jpg';


// SEAL: Solo permite modificar los objetos existentes
Object.seal(producto);
console.log(Object.isSealed(producto))

producto.imagen = 'imagen.jpg';


console.log(producto)
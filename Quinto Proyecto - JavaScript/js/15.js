// Array Method

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Television 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 }
];

// forEach
meses.forEach(function(mes){
    if (mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

// Includes
let resultado = meses.includes('Marzo');
console.log(resultado);

// Some ideal para arreglo de objetos
resultado = carrito.some( function(producto) {
    return producto.nombre === 'Celular PRO'
});


// Reduce
resultado = carrito.reduce (function(total,producto){
    return total + producto.precio
}, 0);


// Filter
resultado = carrito.filter( function(producto){
    return producto.precio > 400
});

resultado = carrito.filter( function(producto){
    return producto.nombre !== 'Celular'
});

console.log(resultado)
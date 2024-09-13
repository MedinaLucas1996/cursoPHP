// POO


/** Object Literal **/
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300
}

// Object Constructor

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.formatearCliente = function() {
    return `El cliente ${this.nombre}  ${this.apellido}`
}


function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

// Crear funciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`
};


const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);





const cliente = new Cliente('Lucas','Medina');

console.log(cliente)



function formatearProducto(producto) {
    return `El producto ${producto.nombre} tiene un precio de ${producto.precio}`
}


console.log( producto2.formatearProducto() );
console.log( producto3.formatearProducto() );

console.log( formatearProducto(producto2) );




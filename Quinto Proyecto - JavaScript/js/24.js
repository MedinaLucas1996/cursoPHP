// For Loop

for( let i = 0; i < 10; i++ ) {
    console.log( `Este código se repite: ${i}` );
}

for( let i = 1 ; i < 10; i++ ) {
    if( i % 2 === 0 ) {
        console.log( `Este número ${i} es PAR` );
    } else{
        console.log( `Este número ${i} es IMPAR` );
    }
}

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

for( let i = 0; i < carrito.length; i++ ) {
    console.log(carrito[i].precio);
}



// While Loop

let i = 20; // Indice o valor inicial

while( i < 10 ) { // Condicion

    console.log( `Este código se repite: ${i}` );

    i++; // Incremento
}




// Do While Loop

let x = 100; // Indice o valor inicial

do {
    console.log(x);

    i++; // Incremento
} while( i < 10 );
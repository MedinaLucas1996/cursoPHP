// querySelector
const heading = document.querySelector('.header__texto h2'); // Retorna 0 o 1 elementos
heading.textContent = 'Nuevo Heading';
console.log(heading);

// QuerySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto para enlaces';
enlaces[0].classList.add('nueva-clase')



// getElementById
const heading2= document.getElementById('heading2');
console.log(heading2);


// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A'); 

//Agregar el href
nuevoEnlace.href='nuevo-enlace.html';
// Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';
//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');


// Agregar al Documento
const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);


// Eventos

// console.log(1);
// window.addEventListener('load', function(){ // load espera a que JS y los archivos que dependen HTML esten listos.
//     console.log(2);
// });
// window.onload = function() { // Esto es lo mismo que arriba
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() {
//     console.log(4); // Solo espera por el HTML pero no espera el CSS o imagenes
// })


// console.log(5);

// window.onscroll = function() {
//     console.log('Scrolliing...');
// }


// Selecccionar elementos y asociarles un evento.
const btnEnviar = document.querySelector('.boton--primario')
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento); 
    evento.preventDefault();

// Validar un formulario

    console.log('Enviando Formulario...');
});

// Eventos de los inputs y textArea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    datos[e.target.id] = e.target.value;

    console.log(datos);
}

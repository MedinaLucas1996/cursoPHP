// Estructuras de Control


// IGUALACION
const puntaje = 1000;

if( puntaje == 1000 ) {
    console.log('Si el puntaje es 1000');
}else {
    console.log('No es igual')
}


// NEGACION
const puntaje1 = 1000;

if( puntaje1 !== 1000 ) {
    console.log('Si el puntaje es 1000');
}else {
    console.log('No es igual')
}


// Menores
const efectivo = 1000;
const carrito = 800;

if( efectivo < carrito ) {
    console.log('El usuario puede pagar');
} else {
    console.log('Fondos insuficientes');
}


// ELSE IF
const rol = 'ADMINISTRADOR'

if( rol === 'ADMINISTRADOR' ) {
    console.log('Acceso a todo el sistema');
} else if ( rol === "EDITOR" ){
    console.log('Eres editor, no puedes entrar pero no puedes hacer mucho)');
} else{
    console.log('No tienes permisos para acceder');
}
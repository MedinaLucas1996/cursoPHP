const usuarioAutenticado = new Promise ( (resolve,reject) => {
    const auth = false;

    if(auth) { 
        resolve('Usuario Autenticado'); //EL PROMISE SE CUMPLE
    } else {
        reject('No se pudo iniciar sesión'); // EL PROMISE NO SE CUMPLE
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))


// En los Promises existen 3 valors

// Pending : Nose ha cumplido pero tampoco se ha rechazado
// Fullfields : Ya se cumplió
// Rejected: Se ha rechazado o no se pudo cumplir
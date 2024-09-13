// This

const reservacion1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    total: 5000,
    pagado: false,
    informacion: function(  ) {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es ${this.total}`)
    }
}


const reservacion2 = {
    nombre: 'Pedro',
    apellido: 'Gomez',
    email: 'pgomez@gmail.com',
    total: 7000,
    pagado: true,
    informacion: function(  ) {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es ${this.total}`)
    }
}

reservacion1.informacion();
reservacion2.informacion();


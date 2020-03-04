var sacha = {
    nombre: 'Sacha',
    apellido: 'lifszync',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

const esAlta = ({ altura }) => altura > 1.8
const esBaja = ({ altura }) => altura <= 1.8

var personas = [sacha, alan, martin, dario, vicky, paula]

var acum = 0

personas.forEach(persona => {
    acum = acum + persona.cantidadDeLibros
});

console.log(`En total todos tienen ${acum} libros`)

//uso de reduce
const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros //la funcion recibe primero el acumulador y despues el objeto persona

var totalDeLibros = personas.reduce(reducer, 0) // recibe una funcion y el valor inicial del acumulador

console.log(`En total todos tienen ${totalDeLibros} libros`)
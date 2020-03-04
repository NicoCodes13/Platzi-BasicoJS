var sacha = {
    nombre: 'Sacha',
    apellido: 'lifszync',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const esAlta = ({altura}) => altura > 1.8
const esBaja = ({altura}) => altura <= 1.8

var personas = [sacha, alan, martin, dario, vicky, paula]

// const pasarAlturaACentimetros = (personas) => {
//     return {
//         ...personas, //se desglosa para que de esta forma no se modifique el array original 
//         altura: personas.altura*100 
//     }
// }
const pasarAlturaACentimetros = persona =>({ //al poner parentesis en una arrow funcion indica que lo que esta dentro de esto es lo que retorna
    ...persona,
    altura: persona.altura * 100
})

//Funcion map devuelve un nuevo arreglo y modifica cada uno de los valores internos segun sea pedido
var personasCms = personas.map(pasarAlturaACentimetros) //recibe una funcion y retorna un nuevo array

console.log(personasCms)
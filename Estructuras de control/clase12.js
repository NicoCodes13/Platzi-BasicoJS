var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszync',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}
var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13,
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `)
    if (persona.ingeniero === true) {
        console.log('ingeniero')
    }
    if (persona.cocinero) {
        console.log('Cocinero')
    }
    if (persona.cantante) {
        console.log('Cantante')
    }
    if (persona.dj) {
        console.log('DJ')
    }
    if (persona.guitarrista) {
        console.log('Guitarrista')
    }
    if (persona.drone) {
        console.log('Piloto de drone')
    }
}

const MAYORIA_DE_EDAD = 18 //variable constante

//una variable asignada a una función y arrow función
//al tener un solo parámetro se pueden obviar los paréntesis
// de manera implicita se retorna el valor de la comparacion si no tiene el return ni los {}
//si va a ser un parametro desestructurado se deben ponmer ({})
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
const esMayorDeEdad = ({ edad }) => edad < MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona) {
    if(!esMayorDeEdad(persona))
    {
        console.log('Acceso Denegado')
    }
}
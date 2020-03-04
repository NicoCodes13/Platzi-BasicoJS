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

const MAYORIA_DE_EDAD = 18 //variable constante

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
function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}
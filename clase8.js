//*Objeto
var sasha = { 
    nombre: 'Sasha',
    apellido: 'Lifszyc',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
}

function imprimirNombreEnMayusculas(persona) { 
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sasha)
imprimirNombreEnMayusculas(dario)

function cumpleaños(persona) { //objetos mandados como parametros se mandan como referencia 
    return{
        ...persona, //toma todos los parametros del objeto original
        edad: persona.edad + 1
    }
}
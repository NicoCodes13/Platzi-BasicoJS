//*Objeto
var sasha = { //derecha es la Key o clave y despues de : es el valor
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
    var {nombre} = persona //declarar la variable en relacion con la variable del mismo nombre del objeto
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sasha)
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({nombre: 'Pepito'}) //generando un objeto dentro de la llamada

//reto
function imprimirNombreYEdad(persona){
    document.write(`\n Hola mi nombre es ${persona.nombre} y mi edad es ${persona.edad} <br />`)
    // alert(`Hola mi nombre es ${persona.nombre} y mi edad es ${persona.edad}`)
    console.log(`Hola mi nombre es ${persona.nombre} y mi edad es ${persona.edad}`)
}

imprimirNombreYEdad(sasha)
imprimirNombreYEdad(dario)
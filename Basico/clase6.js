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

function imprimirNombreEnMayusculas({ nombre }) { //se obtiene directamente el atributo con {}
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sasha)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({nombre: 'Pepito'}) //generando un objeto dentro de la llamada
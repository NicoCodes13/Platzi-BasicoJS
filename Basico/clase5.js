var nombre = 'sasha' //variable global permite acceso desde cualquier funcion 

function imprimirNombreEnMayusculas(nombre){
    nombre = this.nombre.toUpperCase() //de esta manera la variable global no es modificada
    console.log(nombre)
}

imprimirNombreEnMayusculas()
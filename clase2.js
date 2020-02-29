//!Strings 
var nombre = 'Nicolas', apellido = 'Castañeda'

var nombreEnMayusculas = nombre.toUpperCase() //pasar todo a mayusculas
var apellidoEnMinusculas = apellido.toLowerCase() // pasar todo a minisculas

var primeraLetraDelNombre = nombre.charAt(0) //mostrar el caracter de la posicion x respeta si es mayuscula o minuscula
var cantidadDeLetrasDelNombre = nombre.length; // length es un atributo devuelte la cantidad de letras del nombre

//Concatenacion
var nombreCompleto = nombre + ' ' + apellido;
//Interpolacion de texto con comilla invertida ``
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`
// acceso a substrings (strings mas pequeños)
var str = nombre.substr(1, 3); //desde donde empieza y cuantos caracteres

//Desafio ultima letra del nombre
var desafioNombre = 'Laura'

var longitudNombre = desafioNombre.length - 1 //por que el conteo va desde 0
var ultimaLetra = desafioNombre.charAt(longitudNombre)
console.log(`La ultima letra de ${desafioNombre} es ${ultimaLetra}`)
// Fin del desafi
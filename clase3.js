//*Variables: numeros
var edad = 27

edad += 1 // aumenta en 1 o el valor deespues del igual


var peso = 75

peso -= 2; //decremnto constante

var sandwich = 1

peso = peso + sandwich

var jugarAlFutbol = 3

peso -= jugarAlFutbol

var precioDeVino = 200.3

var total = Math.round(precioDeVino * 100 * 3) / 100 //mejorar precicion 
var totalStr = total.toFixed(2) // cuantos decimales mostrar
var total2 = parseFloat(totalStr) // transformar de str a decimal
var pizza = 9

var personas = 2
var cantidadDePorcionesPorPersona = (pizza / personas).toFixed(2);
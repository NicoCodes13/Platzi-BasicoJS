var x = 4, y = '4'
// == comparar llevando los dos valores a un mismo tipo de dato
// === compara revisando que los valores sean del mismo tipo de dato !NOTE  usar siempre

var sacha = {
    nombre: 'sacha'
}
var otraPersona = {
    ...sacha
}

//NOTE  al comparar objetos JS lo hace preguntando por la referencia de la variable solo dara igual si son el mismo objeto 
//NOTE  compara si son el mismo tipo de objeto si se apunta al mismo sitio esto genera que si declaras un objeto como igual 
//NOTE  al otro al modificar alguno de los dos se modificaran ambos
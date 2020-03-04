// en JS se usan prototipos 
// Las clases de JS se usan con estos prototipos 

//NOTE this referencia al propietario o al que esta haciendo uso de a funcion

//NOTE  creando un prototipo
function Persona(nombre, apellido, altura) { //funciona como constructor es el prototipo
    this.nombre = nombre //La palabra this hace referencia al objeto que se esta creando
    this.apellido = apellido //implicitamente JS retorna this al llamarla con new
    this.altura = altura
}

Persona.prototype.saludar = function () { //metodos de una clase
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}


Persona.prototype.imprimirSoyAlto = function () {
    if (this.altura > 1.8) {
        return console.log(`${this.nombre} es alto porque mide ${this.altura}m`)
    } else {
        return console.log(`${this.nombre} no es alta porque mide ${this.altura}m`)
    }
}


//NOTE new crea un nuevo objeto usando de plantilla la funcion asignandola como prototipo
var sasha = new Persona('Sacha', 'Lifszyc', 1.75)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martinez', 1.86)

sasha.saludar()
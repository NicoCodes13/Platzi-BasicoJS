function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

//NOTE  en JS es impotante el declarar las cosas siempre antes de usarlas
//NOTE deben estar todas juntas 
Persona.prototype.soyAlto = function (){
    return this.altura > 1.8
}

Persona.prototype.imprimirSoyAlto = function () {
    if (this.soyAlto()) {
        return console.log(`${this.nombre} es alto porque mide ${this.altura}m`)
    } else {
        return console.log(`${this.nombre} no es alta porque mide ${this.altura}m`)
    }
}

var sasha = new Persona('Sacha', 'Lifszyc', 1.72)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martinez', 1.89)

sasha.saludar()

//this en las arrow funcions hace referencia al objeto global o al objeto que lo contenga
function heredaDe(prototipoHijo, prototipoPadre) { //creando herencia
    var fn = function () { } //funcion vacia
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructo = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8
}

Persona.prototype.imprimirSoyAlto = function () {
    if (this.soyAlto()) {
        return console.log(`${this.nombre} es alto porque mide ${this.altura}m`)
    } else {
        return console.log(`${this.nombre} no es alta porque mide ${this.altura}m`)
    }
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

//NOTE  para hacer polimorfismo toca hacerlo despues de hacer la herencia
Desarrollador.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}



var sasha = new Persona('Sacha', 'Lifszyc', 1.72)

sasha.saludar()

// la "herencia" funciona en que si se busca un metodo en una clase hija empieza a buscar hacia los padres hasta llegar al mayor
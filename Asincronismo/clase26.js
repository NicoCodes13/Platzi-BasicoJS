class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.altura = altura
    }

    saludar(fn) {
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido)
        }
    }

    soyAlto() {
        return this.altura > 1.8
    }

    imprimirSoyAlto() {
        if (this.soyAlto()) {
            return console.log(`${this.nombre} es alto porque mide ${this.altura}m`)
        } else {
            return console.log(`${this.nombre} no es alta porque mide ${this.altura}m`)
        }
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura) // llama el constructor de la super clase
    }
    saludar(fn) {
        var {nombre, apellido} = this
        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`ah mira no sabia que eras dev`)
    }
}

var sacha = new Persona('Sacha', 'Lifszync', 1.72)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.89)

sacha.saludar()
erika.saludar(responderSaludo) //al pasar la funcion se manda sin () y se debe evaluar si se usa o no en la funcion y posteriormente llamada
arturo.saludar(responderSaludo)

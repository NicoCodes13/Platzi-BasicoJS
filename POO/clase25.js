class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.altura = altura
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
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

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura) // llama el constructor de la super clase
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
}



var sasha = new Persona('Sacha', 'Lifszyc', 1.72)

sasha.saludar()

// la "herencia" funciona en que si se busca un metodo en una clase hija empieza a buscar hacia los padres hasta llegar al mayor
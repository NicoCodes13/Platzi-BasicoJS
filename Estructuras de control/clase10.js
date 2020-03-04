var sacha ={
    nombre: 'Sacha',
    apellido: 'Lifszync',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `)
    if(persona.ingeniero === true)
    {
        console.log('ingeniero')
    }
    if(persona.cocinero){
        console.log('Cocinero')
    }
    if(persona.cantante){
        console.log('Cantante')
    }
    if(persona.dj){
        console.log('DJ')
    }
    if(persona.guitarrista){
        console.log('Guitarrista')
    }
    if(persona.drone){
        console.log('Piloto de drone')
    }
}

function imprimirSiEsMayorDeEdad(persona)
{
    if(persona.edad >= 18 )
    {
        document.write(`${persona.nombre} es mayor de edad`)
    }else{
        document.write(`${persona.nombre} es menor de edad`)
    }
}
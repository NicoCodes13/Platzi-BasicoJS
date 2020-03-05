//NOTE  Para que todo llegue como lo deseamos se debe mantener el orden en todo el programa
const API_URL = 'https://swapi.co/api/' //url con la info
const PEOPLE_URL = 'people/:id' //para las personas
const opts = { crossDomain: true }


function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    //.fail() recibe un callback en caso de que falle algo
    $.get(url, opts, callback)
    .fail( ()=> console.log(`Sucedio un error no se pudo obtener el personaje ${id}`)
    )
}


obtenerPersonaje(1, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function (personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5, function (personaje) {
                    console.log(`Hola, yo soy ${personaje.name}`)

                    obtenerPersonaje(6, function (personaje) {
                        console.log(`Hola, yo soy ${personaje.name}`)

                        obtenerPersonaje(7, function (personaje) {
                            console.log(`Hola, yo soy ${personaje.name}`)

                        })
                    })
                })
            })
        })
    })
})

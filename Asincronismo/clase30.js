//NOTE  Para que todo llegue como lo deseamos se debe mantener el orden en todo el programa
const API_URL = 'https://swapi.co/api/' //url con la info
const PEOPLE_URL = 'people/:id' //para las personas
const opts = { crossDomain: true }


function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, function (persona) {
        console.log(`Hola, yo soy ${persona.name}`)
        if (callback) {
            callback()
        }
    })
}



obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4, function () {
                obtenerPersonaje(5, function () {
                    obtenerPersonaje(6, function () {
                        obtenerPersonaje(7)
                    })
                })
            })
        })
    })
})

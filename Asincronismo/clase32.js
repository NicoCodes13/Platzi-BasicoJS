//NOTE  Promesas, se entienden como valores que aun no conocemos, ahi va habber un valor cuando algo asincrono suceda y se resuelva
//NOTE puede ser sincrona o asincrona
//NOTE Estados
//NOTE estado pending- creada 
//NOTE estado fulfilled - se resolvio, se puede pasar a la funcion .then(que hacer) despues de sete se puede encadenar otra promesa
//NOTE estado rejected - fallo, se invoca la funcion .catch(que hacer)


const API_URL = 'https://swapi.co/api/' //url con la info
const PEOPLE_URL = 'people/:id' //para las personas
const opts = { crossDomain: true }

//Promesa
function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

        $.get(url, opts, function (data) {
            resolve(data)
        })
            .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedio un erro al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
    .then(function (personaje) {
        console.log(`El personaje 1 es ${personaje.name}`)
    })
    .catch(onError)
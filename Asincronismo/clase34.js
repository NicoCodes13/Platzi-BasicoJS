const API_URL = 'https://pokeapi.co/api/v2/'
const PEOPLE_URL = 'pokemon/:id'
const opts = { crossDomain: true }

//Promesa
function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

        $.get(url, opts, function (data) {
            resolve(data.name)
        })
            .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

var ids= []

for (let i = 1; i <= 150; i++) {
    ids.push(i)  
}

var promesas = ids.map(id => obtenerPersonaje(id))

Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)

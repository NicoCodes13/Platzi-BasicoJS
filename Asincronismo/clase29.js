//NOTE  haciendo request en paralelo
const API_URL = 'https://swapi.co/api/' //url con la info
const PEOPLE_URL = 'people/:id' //para las personas
const opts = { crossDomain: true }


function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url,opts, onPeopleRespones)
}

const onPeopleRespones = function (persona){
    console.log(`Hola, yo soy ${persona.name}`)
}


obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3) //no conocemos el orden de llegada de las respuestas ya que depende del server
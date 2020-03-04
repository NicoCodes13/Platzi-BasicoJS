//NOTE  haciendo request
const API_URL = 'https://swapi.co/api/' //url con la info
const PEOPLE_URL = 'people/:id' //para las personas

const LUKE_URL =`${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const OPTS = { crossDomain: true }

const onPeoleRespones = function (persona){
    console.log(`Hola yo soy, ${persona.name}`)
}

$.get(LUKE_URL,OPTS, onPeopleRespones) //obtiene la info de Luke
//la funcion solo se ejecuta si el request es exitoso

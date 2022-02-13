// Variables
const $form = document.querySelector('#poke-form')
const $input = document.querySelector('#poke-input')
const $pokeSprite = document.querySelector('#poke-sprite')
const $pokeName = document.querySelector('#poke-name')
const $pokeTypes = document.querySelector('#poke-types')

// Función para actualizar la informacion del pokemon
const showPokemonData = (data) => {
    $pokeSprite.src = data.sprite
    console.log($pokeName)
    $pokeName.textContent = `#${data.id} ${data.name}`
    $pokeTypes.innerHTML = ''
    data.types.forEach(({type})=>{
        const $type = document.createElement('div')
        $type.classList.add('type')
        $type.classList.add(`type-${type.name}`)
        $type.textContent = type.name
        $pokeTypes.appendChild($type)
    })
}

const xhr = new XMLHttpRequest

// Funcion para obtener los datos del pokemon deseado
const getPokemonData = (name)=>{
    fetch('https://pokeapi.co/api/v2/pokemon/'+name)
    .then(res=>{
        if(res.ok){
            return res.json()
        }
    })
    .then(json=>{
        if(!json) return;
        const neededData = {
            name: json.name,
            types: json.types,
            id: json.id,
            sprite: json.sprites.front_default
        }
        showPokemonData(neededData)
    })
    .catch(err => {
        console.error(err)
    })
}

// Evento para detectar la entrega del formulario
document.addEventListener('submit', (event)=>{
    event.preventDefault()
    if(event.target === $form){
        getPokemonData($input.value.toLowerCase())
    }
})
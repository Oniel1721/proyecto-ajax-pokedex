const $form = document.querySelector("#poke-form")
const $input = document.querySelector("#poke-input")

const $pokeSprite = document.querySelector("#poke-sprite")
const $pokeName = document.querySelector("#poke-name")
const $pokeTypes = document.querySelector("#poke-types")

const showPokemonData = (data)=>{
    $pokeSprite.src = data.sprite
    $pokeName.textContent = `#${data.id} ${data.name}`
    $pokeTypes.innerHTML = ''
    data.types.forEach((elements)=>{
        const $type = document.createElement("div")
        $type.classList.add('type')
        $type.classList.add('type-'+elements.type.name)
        $type.textContent = elements.type.name
        $pokeTypes.appendChild($type)
    })
}


const getPokemonData = (name)=>{
    fetch("https://pokeapi.co/api/v2/pokemon/"+name)
    .then((response)=>{
        if(response.ok){
            return response.json()
        }
    })
    .then((json)=>{
        if(!json) return;
        const neededData = {
            name: json.name,
            id: json.id,
            types: json.types,
            sprite: json.sprites.front_default
        }
        showPokemonData(neededData)
    })
    .catch((error)=>{
        console.log(error)
    })
}

document.addEventListener("submit", (event)=>{
    event.preventDefault()
    if(event.target === $form){
        getPokemonData($input.value.toLowerCase())
    }
})


const getPokemonData = ()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/")
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

getPokemonData()
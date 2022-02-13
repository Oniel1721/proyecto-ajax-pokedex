# Sección 8
## Finalizando Proyecto

Bien en esta sección vamos a concluir el proyecto, ya tenemos la función donde podemos buscar los datos sobre los pokemon, entonces nos hacen falta 2 cosas:

- Buscar al pokemon deseado por el usuario cuando llene el formulario.
- Mostrar la información del pokemon deseado en la interfaz gráfica.

### Manejo del formulario

Primero necesitamos obtener el elemento del formulario y del input utilizando el DOM y guardarlo en variables, para ello le pusimos un `ìd` a la etiqueta `form` y al etiqueta `input`, podemos obtener un elemento con id del HTML de la siguiente maneras:

```
const $form = document.querySelector('#poke-form')
const $input = document.querySelector('#poke-name')
```


Luego agregamos un evento en el documento con `document.addEventListener()` el cual recibe 2 parámetros, un string con el nombre del evento en este caso es `submit`, y una función que determina el comportamiento del programa cuando suceda el evento, esta función lleva como argumento un objeto que contiene el estado del evento.

```
document.addEventListener(submitEventName, (event)=>{
})
```

Cada evento tiene un comportamiento por defecto, en el caso del evento `submit` provoca que se recargue el sitio web, pero no queremos que esto suceda, por lo tanto, tenemos que detener ese comportamiento por defecto.

```
document.addEventListener(submitEventName, (event)=>{
    event.preventDefault() // este metodo detiene el comportamiento por defecto del evento
})
```

En la propiedad `event.target` se encuentra el elemento del DOM que provoco el evento, en nuestro caso, como tenemos solo un formulario ya sabemos que pertenece a la variable que creamos anteriormente `$form`, pero siempre les recomiendo como buena práctica, por si en un futuro agregan más formularios verificar que el `target` del evento sea el formulario deseado.

```
document.addEventListener(submitEventName, (event)=>{
    event.preventDefault()
    if(event.target === $form){
        
    }
})
```

Ya tenemos como manejar la entrega del formulario, ahora solamente nos hace falta llamar a la función que creamos en la sección pasada para que haga la petición a la API y nos traiga los datos de los pokemon.

```
document.addEventListener(submitEventName, (event)=>{
    event.preventDefault()
    if(event.target === $form){
        getPokemonData() // Llamamos a la función para traer los datos de los pokemon cuando el usuario complete el formulario
    }
})
```

Nos falta una última cosa, la función `getPokemonData()` trae los datos de todos los pokemon, entonces nos falta especificar que traiga solo los datos del pokemon que deseamos, para ello agreguemos un argumento a la función `getPokemonData()` donde le podamos especificar el nombre o id del pokemon deseado, y luego agregamos ese valor en la URL de la petición que realiza la función `fetch()`, y pasamos como parámetro el valor que contiene el `$input` (donde el usuario ingreso el nombre del pokemon) a la función `getPokemonData()`, esto dejaría nuestro código así:

```
const getPokemonData = (name)=>{
    fetch("https://pokeapi.co/api/v2/pokemon/"+name)
    .then(res=>{
        if(res.ok){
            return res.json()
        }
    })
    .then(json=>{
        if(!json) return; // si el json viene vacio detenemos la función, esto se hace para evitar errores indeseados.
        console.log(json)
    })
    .catch(err => {
        console.error(err)
    })
}

document.addEventListener(submitEventName, (event)=>{
    event.preventDefault()
    if(event.target === $form){
        getPokemonData($input.value.toLowerCase()) 
        // Pasamos el valor del input y tambien lo convertimos a minusculas con el metodo `toLowerCase()`, ya que la API de pokemon no acepta valores en mayúsculas
    }
})
```

Con esto ya se trae la información del pokemon deseado cuando el usuario llene el formulario.

### Mostrar datos en la interfaz.

Bien como vemos estamos imprimiendo en consola el JSON que proviene de la API, con ellos podremos darnos cuenta todos los datos que provienen sobre ese pokemon en específico, igual de todos modos no necesitamos tantos datos, en nuestro proyecto solo necesitaremos los siguientes datos:

- nombre se encuentra en `json.name`
- id se encuentra en `json.id`
- tipos se encuentra en `json.types`
- sprite se encuentra en `json.sprites.front_default`

Vamos a crear un nuevo objeto con los datos que necesitamos

```
const getPokemonData = (name)=>{
    fetch("https://pokeapi.co/api/v2/pokemon/"+name)
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
    })
    .catch(err => {
        console.error(err)
    })
}
```

Bien ahora vamos a crear una función que se encargara de presentar los datos en la interfaz gráfica.

```
const showPokemonData = (data) => {
    
}

const getPokemonData = (name)=>{
    fetch("https://pokeapi.co/api/v2/pokemon/"+name)
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
```

Vamos a crear variables donde almacenaremos los elementos del DOM donde se mostrara la información, cada elemento ya tiene su `id` en el HTML.

```
const $pokeSprite = document.querySelector('#poke-sprite')
const $pokeName = document.querySelector('#poke-name')
const $pokeTypes = document.querySelector('#poke-types')
```

Actualizamos la imagen y el texto del nombre e id, también limpiamos los tipos que se encuentren actualmente, para luego agregarlos.

```
const showPokemonData = (data) => {
    $pokeSprite.src = data.sprite // agregar sprite al src de la etiqueta img
    $pokeName.textContent = `#${data.id} ${data.name}` // actualizar el id y nombre
    $pokeTypes.innerHTML = '' // eliminar los datos que se encuentren en tipos, luego agregaremos los tipos
}
```

Bien, si te fijas bien, los datos de los tipos provienen en un array, ya que un pokemon puede tener uno o dos tipos, por lo tanto, por cada tipo que tenga el pokemon, agregaremos un `div` dentro de `$pokeTypes`, con el nombre del tipo y las clases necesarias para darle los estilos correspondientes.

```
const showPokemonData = (data) => {
    $pokeSprite.src = data.sprite
    $pokeName.textContent = `#${data.id} ${data.name}`
    $pokeTypes.innerHTML = ''
    data.types.forEach(({type})=>{ // ejecutamos el metodo forEach() para recorrer todo el array, pasamos una función como parametro, obtenemos la propiedad type
        // creamos una etiqueta div
        const $type = document.createElement('div') 
        // le agregamos la clase type para los estilos
        $type.classList.add('type') 
        // le agregamos la clase type-nombre del tipo para que le de el color correspondiente a cada tipo
        $type.classList.add(`type-${type.name}`) 
        // le agremamos el nombre del tipo como texto dentro del div
        $type.textContent = type.name 
        // añadimos el div que creamos dentro del elemento donde se presentaras los tipos
        $pokeTypes.appendChild($type)
    })
}
```


Y ya tenemos todo listo, podemos buscar el pokemon que deseemos tanto por nombre o por id y mostrara en pantalla.

El código de esta sección se encuentra en la siguiente rama del repositorio de GitHub:

[Rama finalizado](https://github.com/Oniel1721/proyecto-ajax-pokedex/tree/finalizado)

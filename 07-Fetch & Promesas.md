# Sección 7
## Fetch & Promesas

### ¿Qué es fetch?

Fetch es la función en JavaScript con la cual se pueden hacer peticiones a un servidor. Veamos como usarla aplicándola al proyecto.

Primero como buena práctica crearemos una función la cual se encargara de realizar la petición.

```
const getPokemonData = () => {
}
```

Luego llamamos al método fetch y le pasamos como primer parametro la [URL de la API](https://pokeapi.co/api/v2/pokemon/) como un string.

```
const getPokemonData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
}
```

Ya con esto en el momento que llamaremos a la función ejecutara una petición al servidor y este responderá, pero no tenemos programado como vamos a manejar la respuesta, para manejar la respuesta tenemos que saber lo que son las promesas en JavaScript.

### ¿Qué es una promesa?

Una promesa en JavaScript es similar a una promesa en la vida real. Cuando hacemos una promesa en la vida real, es una garantía de que vamos a hacer algo en el futuro. Porque las promesas solo se pueden hacer para el futuro.

Una promesa tiene 2 resultados posibles: se mantendrá cuando llegue el momento o no.

Esto también es lo mismo para las promesas en JavaScript. Cuando definimos una promesa en JavaScript, se resolverá cuando llegue el momento, o será rechazada.

En primer lugar, una Promesa es un objeto. Hay 3 estados del objeto Promesa:

Pendiente: estado inicial, antes de que la promesa tenga éxito o falle
Resuelto: Promesa completada
Rechazado: promesa fallida

Por ejemplo, cuando solicitamos datos del servidor mediante una Promesa, estará en modo pendiente hasta que recibamos nuestros datos.

Si logramos obtener la información del servidor, la Promesa se resolverá con éxito. Pero si no obtenemos la información, entonces la Promesa estará en el estado rechazado.

### Volviendo al código

Fetch retorna una promesa, y para manejar si la promesa fue resuelta lo hacemos con el método `then()`, la cual recibe como parámetro una función, y viene con un argumento el cual es la respuesta del servidor.

```
const getPokemonData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response)=>{
        console.log(response)
    })
}
```

Imprimiendo la respuesta en la consola veremos el estado de la respuesta, y lo que queremos es el JSON con los datos, pero antes de eso, dentro del objeto de la respuesta hay una propiedad llamada `ok` la cual contiene un `boolean` que determina si la acción de la petición fue realizada correctamente, para estar seguros pongamos un `if` para validar que todo haya salido bien. Y si todo sale bien podemos obtener el JSON de la respuesta, para eso llamamos al método `json()` y retornamos su valor.
```
const getPokemonData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response)=>{
        if(response.ok){
            return response.json()
        }
    })
}
```

El método `response.json()` también retorna otra promesa por lo cual deberemos manejarla con otro `then()` que igual recibe como parámetro una función y esta de argumento el objeto JSON con la información que deseamos.

```
const getPokemonData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response)=>{
        if(response.ok){
            return response.json()
        }
    })
    .then((json)=>{
        console.log(json)
    })
}
```

Por último no podemos olvidar especificar como se debería comportar el programa en el caso de que la promesa no se haya cumplido, para ello lo hacemos con el método `catch()` el cual recibe como parámetro una función con el argumente del error.

```
const getPokemonData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response)=>{
        if(response.ok){
            return response.json()
        }
    })
    .then((json)=>{
        console.log(json)
    })
    .catch((error)=>{
        console.error(error)
    })
}
```

### Nota importante

En este proyecto estamos haciendo una petición a un servidor para obtener información de una API, pero existen más formas de hacer peticiones, también puedes hacer una petición para añadir una información, actualizarla o eliminarla. Cuando usas una red social y publicas algo o envías un mensaje, lo que esta pasando es que se esta haciendo una petición a un servidor enviando la información a añadir, esta se envía en formato JSON, lo mismo para actualizarla o eliminarla. Las diferentes acciones que se realizan al hacer una petición a un servidor se llaman **Métodos**, los más comunes son `GET` `POST` `PATCH` `DELETE`, pero existen más de ellos que puedes buscar por tu cuenta.

La función `fetch` puede recibir un segundo parámetro el cual es un objeto donde puedes configurar la petición que vas a realizar, este objeto acepta la propiedad `method` la cual acepta como valor un string con un método HTTP, por defecto si no especifica este siempre será `GET`, ejemplo:

```
fetch("https://pokeapi.co/api/v2/pokemon/", {
    method: "POST"
})
```

Puedes investigar más sobre el tema buscando **Métodos HTTP**.

Ya con esto tenemos casi todo el trabajo hecho, nos vemos en la próxima sección.

El código de esta sección se encuentra en la siguiente rama del repositorio de GitHub:

[Rama seccion-7-fetch](https://github.com/Oniel1721/proyecto-ajax-pokedex/tree/seccion-7-fetch)

### Fuente

[Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
[Promesas](https://www.freecodecamp.org/espanol/news/promesas-en-javascript-es6/#:~:text=Una%20promesa%20en%20JavaScript%20es,pueden%20hacer%20para%20el%20futuro.)
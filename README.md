# Sección 1
## Introducción

Bienvenido al curso de AJAX de la ruta de aprendizaje de Cincinnatus. Soy Oniel Santos, egresado de Cincinnatus y Desarrollador de Software en intellisys. Y seré tu guía en este curso de AJAX.

### ¿Qué necesitas saber antes de iniciar este curso?

- Conocimiento básico en HTML
- Conocimiento básico en CSS
- Conocer la sintaxis básica de JavaScript

### Objetivo del curso

El objetivo de este curso es que al finalizar el curso el estudiante comprenda los conceptos de JavaScript asíncrono, además de llevarlos a la práctica, es por ello que en el transcurso de este curso haremos un proyecto utilizando esta tecnología.


### Secciones

- [Asincronía](#secci%C3%B3n-2)
- [Entorno del proyecto](#secci%C3%B3n-3)
- [HTML & CSS](#secci%C3%B3n-4) (opcional)
- [Modelo cliente-servidor](#secci%C3%B3n-5)
- [JSON & XML](#secci%C3%B3n-6)
- [Fetch & Promesas](#secci%C3%B3n-7)
- [Finalizando proyecto](#secci%C3%B3n-8)
- [Historia y actualidad de AJAX](#secci%C3%B3n-9) (opcional)
- [Conclusión](#secci%C3%B3n-10)

### ¿Qué es AJAX?

El nombre AJAX proviene del acrónimo en inglés de Asynchronous JavaScript And XML lo cual en español seria: JavaScript Asíncrono y XML. AJAX es un conjunto de técnicas de desarrollo web que permiten que las aplicaciones web funcionen de forma asíncrona, procesando cualquier solicitud al servidor en segundo plano. Si no entiendes esto último ahora no te preocupes a medida que avance el curso iras comprendiendo a que se refiere.


# Sección 2
## Asincronía

Volvamos a la explicación dada en el primero capítulo sobre AJAX
`El nombre AJAX proviene del acronimo en ingles de Asynchronous JavaScript And XML lo cual en español seria: JavaScript Asincrono y XML.`

Entonces para comprenderlo mucho mejor vamos a dividirlo en partes:

### JavaScript:

JavaScript es el lenguaje de programación de la web, toda la parte lógica e interactiva de una web está hecha con JavaScript, este lenguaje tiene la característica de realizar tareas de forma asíncrona, pero...

### ¿Qué es la Asincronía?

Cuando comenzamos a programar, normalmente realizamos tareas de forma síncrona, llevando a cabo tareas secuenciales que se ejecutan una detrás de otra, de modo que el orden o flujo del programa es sencillo y fácil de observar en el código:

```
primera_funcion();    // Tarea 1: Se ejecuta primero
segunda_funcion();    // Tarea 2: Se ejecuta cuando termina primera_funcion()
tercera_funcion();    // Tarea 3: Se ejecuta cuando termina segunda_funcion()
```

Pero en ciertas ocasiones necesitaremos realizar tareas que tienen que esperar a que ocurra un determinado suceso que no depende de nosotros, y reaccionar realizando otra tarea solo cuando dicho suceso ocurra.

Vamos a empezar con un ejemplo cotidiano, imagina que estas en tu casa haciendo distintas tareas, limpiar los platos, barrer, lavar la ropa... y tienes hambre, entonces realizas la tarea de llamar a un repartidor para que te lleve comida a tu casa, mientras esa tarea se está haciendo, continuas con tus demás tareas, y cuando llegue el repartidor con la comida, paras lo que estás haciendo, recibes la comida, comes, y luego continúas con las demás tareas. ¿Muy sencillo, no?

Ahora llevemos este ejemplo a la programación. JavaScript es un lenguaje no bloqueante, esto quiere decir que las tareas que realizamos no se quedan bloqueadas esperando ser finalizadas, y por consiguiente, evitando proseguir con el resto de tareas.

Imaginemos que la segunda_funcion() del primer ejemplo realiza una tarea que depende de otro factor, como por ejemplo un click de mouse del usuario. Si hablásemos de un lenguaje bloqueante, hasta que el usuario no haga click, JavaScript no seguiría ejecutando las demás funciones, sino que se quedaría bloqueado esperando a que se terminase esa segunda tarea.

Pero como JavaScript es un lenguaje no bloqueante, lo que hará es mover esa tarea a una lista de tareas pendientes a las que irá «prestándole atención» a medida que lo necesite, pudiendo continuar y retomar el resto de tareas a continuación de la segunda.

Entonces podemos concluir con que la asincronía se refiere al concepto de que más de una cosa ocurre al mismo tiempo, o múltiples cosas relacionadas ocurren sin esperar a que la previa se haya completado.

### ¿Y XML?

Lo más importante ahora es que comprendas que es la asincronía, XML lo dejaremos para otra sección.

### Fuente

[Mozilla Developer Network](https://developer.mozilla.org/es/docs/Glossary/Asynchronous)
[Lenguaje JS](https://lenguajejs.com/javascript/asincronia/que-es/)


# Sección 3
## Entorno del proyecto

Antes de empezar primero veamos que proyecto vamos a realizar:

El proyecto consiste en una pokedex, en la cual podremos ingresar el nombre de un pokemon o su número en la pokedex y nos mostrara la información básica del pokemon deseado.

El código de este proyecto se encontrará en un repositorio remoto en GitHub el código estará dividido en ramas dependiendo de la sección.

Ahora si vamos a empezar con el entorno del proyecto los pasos son los siguientes: 
- Descargar e instalar un editor de código, recomiendo Visual Studio Code.
- Crear carpeta para el proyecto en su PC y abrirla con VS Code.
- Instalar la extensión Live Server en su Visual Studio Code.
- Dentro de la carpeta del proyecto crear un archivo llamado `index.html`.
- Dentro de la carpeta del proyecto crear las siguientes carpetas: `styles`, `scripts` y `assets`.
- Dentro de la carpeta `styles` crear un archivo llamado `main.css`.
- Dentro de la carpeta `scripts` crear un archivo llamado `index.js`.

Nota* Los nombres de los archivos y carpetas pueden ser cualquiera, pero se deben respetar las extensiones de los archivos.

El código de esta sección se encuentra en la siguiente rama del repositorio de GitHub:

[Rama seccion-3-inicio](https://github.com/Oniel1721/proyecto-ajax-pokedex/tree/seccion-3-inicio)

### Link de descarga
[Visual Studio Code](https://code.visualstudio.com/Download)

Por ahora con eso estaría listo, nos vemos en la próxima lección.


# Sección 4
## HTML & CSS (Opcional)

Ya que el enfoque del curso es aprender AJAX esta sección es opcional, pero para que si desean conocer como se hizo la parte visual del proyecto en el video les explico.

El código de esta sección se encuentra en la siguiente rama del repositorio de GitHub:

[Rama seccion-4-html-and-css](https://github.com/Oniel1721/proyecto-ajax-pokedex/tree/seccion-4-html-and-css)


# Sección 5
## Modelo Cliente-Servidor & API

Veamos con más atención lo que queremos realizar en el proyecto.

Queremos que cuando el usuario ingrese el nombre del pokemon o su id, aparezca la información sobre el pokemon deseado, pero, aquí hay algo extraño. 
### ¿De dónde viene la información del pokemon que deseo?

Quizás puedas estar pensando que tengo la información de todos los pokemon guardadas en variables y cuando alguien intenta acceder a la información tengo una serie de `if` para saber cual pokemon mostrar.

Y déjame decirte que esa podría ser una solución, pero no es eficiente, ya que el usuario debería tener descargada la información de todos los Pokémon lo cual llenaría la memoria del dispositivo de tu usuario de mucha información que no necesita, y tardaría mucho cargar el sitio web.

### Entonces, ¿Cómo solucionamos este problema de la mejor manera?

¿Qué tal tenemos la información que el usuario necesita en otro lugar, al cual simplemente le pidas la información que necesites y el te responda con ella? Así evitaríamos tener que descargar toda esa información en el dispositivo del usuario, y solo tendría que cargar lo que necesita.

Bueno, pues ese sitio donde se va a guardar la información se llama una base de datos, y mediante un servidor, el cual se conecta la base de datos, procesa los datos y finalmente los sirve a quienes hayan hecho una petición a los datos. A esto se le llama modelo Cliente-Servidor, cuando un cliente (Sitio Web, Aplicación Mobile…) hace una petición a un servidor y este responde en consecuencia.

### ¿Y qué es una API?

Las API (Aplication Programming Interface o Interfaz de Programación de Aplicaciones) en resumidas cuentas son aplicaciones que sirven de intermediario entre 2 o más aplicaciones o servicios, en nuestro caso el servidor es una API

### OK ¿Y entonces Pokemon tiene una API?

Si, y puedes acceder a ella mediante URL:
[Poke-API](https://pokeapi.co/api/v2/pokemon/)

Si vas hacia esa URL en tu navegador web, verás en texto plano información sobre los Pokémon.

En la próxima sección vamos a entender como leer ese texto plano.

### Fuente

[Modelo Cliente-Servidor](https://www.crehana.com/blog/desarrollo-web/consiste-modelo-cliente-servidor/)
[API](https://www.crehana.com/blog/desarrollo-web/que-es-una-api/)

# Sección 6
## JSON & XML

Bien continuando con el tema anterior, vimos que cuando abríamos esta URL: [Poke-API](https://pokeapi.co/api/v2/pokemon/) en un navegador nos salía un montón de texto. 

Bueno por lo general cuando se hace una petición a un servidor este responde con la información solicitada con texto, y este texto está en formato JSON, si abres la URL en Google Chrome e instalas esta extensión [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh) podrás ver el texto un mas organizado, bien ahora te explico que es esto del formato JSON.

### ¿Qué es JSON?

JSON es un formato el cual facilita el almacenamiento y la transferencia de datos, es fácil de entender, ya que utiliza el concepto de `clave: valor`, en el cual tienes un campo o clave con un nombre único, y un valor para ese campo por ejemplo:

```
{
    "nombre": "Fulano",
    "edad": 15
}
```

Las claves siempre deben ser una cadena de texto en comillas dobles, y los valores pueden ser desde `string`, `number`, `boolean`, `null`, hasta `array` o incluso `object` con sus propias claves y valores, ejemplo:

```
{
    "string": "Este valor es un string",
    "number": 100,
    "boolean": true,
    "null": null,
    "array": [
        "Los arrays pueden tener en su interior cualquier tipo de dato",
        200,
        false,
        null
    ],
    "object": {
        "string": "un objeto puede tener sus propias claves y valores"
    }
}
```

### ¿Y XML?

JSON es el formato más utilizado para compartir información, pero existen otros formatos tales como `XML` el cual era muy utilizado antes y por eso el nombre de AJAX lleva la `X` de `XML`, pero al JSON ser tan utilizado y más fácil de entender este lo termino reemplazando casi completamente, de todos modos XML se quedó en el nombre de AJAX. 

### Fuente

[Nextu](https://www.nextu.com/blog/que-es-json/)


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


# Sección 9
## Historia y actualidad de AJAX (Opcional)

AJAX surgió como una solución a la necesidad de poder actualizar un sitio web parcialmente, ya que antes cuando se hacía una petición a un servidor, el sitio web tenía que recargarse completamente para poder actualizar la información. Gracias a AJAX ahora se puede hacer una petición sin tener que cargar completamente el sitio, mientras trabajaba la petición al servidor en segundo plano ósea de manera asíncrona.

Antes no existía `fetch`, AJAX se utilizaba con una clase de JavaScript llamada `XMLHttpRequest`, y mediante a varios eventos que tenía integrados esta clase, se podía manejar la respuesta y los errores de una petición, ya que tampoco existían las promesas. 

La primera versión de la clase `XMLHttpRequest` fue desarrollada por Microsoft que la introdujo en la versión 5.0 de Internet Explorer. Luego también fue soportada por más navegadores tales como Mozilla Firefox, pero surgió un problema, cada navegador tenía diferencias implementando esta clase, por lo tanto, los desarrolladores tenían que crear un código distinto para cada navegador.

Por ello surgieron soluciones de parte de la comunidad tales como `axios` la cual es una librería para manejar las peticiones HTTP, y en su momento resolvió el problema de tener que programar una solución distinta por navegador. De hecho, esta librería hoy día también sigue siendo muy utilizada.

Con el paso del tiempo Internet Explorer fue decayendo y surgió `fetch` una solución nativa de JavaScript para solucionar las falencias que tenía la clase `XMLHttpRequest`, hoy día se recomienda usar `fetch` o `axios` para las peticiones HTTP.


# Sección 10
## Conclusión

Felicitaciones por haber terminado este curso, aprendiste acerca de AJAX, como utilizarlo, que es una API, que es un servidor, como funcionan las peticiones a un servidor, que es la asincronía, e incluso realizaste un proyecto el cual puedes mostrárselo a tus amigos.

Espero que te haya gustado el curso, me gustaría saber que te pareció el curso, cualquier consejo, recomendación o cosa que no te haya gustado son bienvenidas, y me ayudaría mucho para mejor el contenido del mismo.

Te exhorto a que sigas practicando, existen muchas APIs gratuitas con las cuales puedes practicar y realizar más proyectos, acá te dejo algunas de ellas:

- [Rick And Morty API](https://rickandmortyapi.com/)
- [Star Wars API](https://swapi.dev/)
- [NASA API](https://api.nasa.gov/)
- [Dog API](https://dog.ceo/dog-api/)
- [Google Books API](https://developers.google.com/books)
- [Dragon Ball API](https://dragon-ball-api.herokuapp.com/documentation)

Esto es todo, continua con los demás cursos de la ruta de aprendizaje de Cincinnatus.

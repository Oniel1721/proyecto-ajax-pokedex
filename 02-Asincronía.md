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
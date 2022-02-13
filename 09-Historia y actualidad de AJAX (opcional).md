# Sección 9
## Historia y actualidad de AJAX (Opcional)

AJAX surgió como una solución a la necesidad de poder actualizar un sitio web parcialmente, ya que antes cuando se hacía una petición a un servidor, el sitio web tenía que recargarse completamente para poder actualizar la información. Gracias a AJAX ahora se puede hacer una petición sin tener que cargar completamente el sitio, mientras trabajaba la petición al servidor en segundo plano ósea de manera asíncrona.

Antes no existía `fetch`, AJAX se utilizaba con una clase de JavaScript llamada `XMLHttpRequest`, y mediante a varios eventos que tenía integrados esta clase, se podía manejar la respuesta y los errores de una petición, ya que tampoco existían las promesas. 

La primera versión de la clase `XMLHttpRequest` fue desarrollada por Microsoft que la introdujo en la versión 5.0 de Internet Explorer. Luego también fue soportada por más navegadores tales como Mozilla Firefox, pero surgió un problema, cada navegador tenía diferencias implementando esta clase, por lo tanto, los desarrolladores tenían que crear un código distinto para cada navegador.

Por ello surgieron soluciones de parte de la comunidad tales como `axios` la cual es una librería para manejar las peticiones HTTP, y en su momento resolvió el problema de tener que programar una solución distinta por navegador. De hecho, esta librería hoy día también sigue siendo muy utilizada.

Con el paso del tiempo Internet Explorer fue decayendo y surgió `fetch` una solución nativa de JavaScript para solucionar las falencias que tenía la clase `XMLHttpRequest`, hoy día se recomienda usar `fetch` o `axios` para las peticiones HTTP.
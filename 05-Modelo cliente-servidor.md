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
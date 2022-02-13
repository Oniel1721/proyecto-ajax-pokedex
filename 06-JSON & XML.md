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
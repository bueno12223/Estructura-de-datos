# Arrays y string

## **Array**

## es una colección de información

**Arrays estáticos** son aquellos que se quedaran fijos debido a que definimos cuantos espacios tendremos, es decir que le diremos a la maquina cuantos slots deberá usar

**Arrays dinámicos** son aquellos que podemos mutar

### Apuntes

- Los arrays son como una lista con indices numerales consecutivas
- Tambien son conocidas como listas
- Tenemos diferentes métodos construidos por el lenguaje
    - Push ⇒ Agregar un elemento al final del array
    - Pop ⇒ Borra el último elemento
    - Unshift ⇒ Agrega un elemento al inicio del array
    - Shift ⇒ Borra el primer elemento
    - Splice ⇒ Agrega un elemento en una parte del array
- Si nosotros agregamos un elemento al inicio debe haber ciertas operaciones que deben suceder
- Existen dos formas de arrays<h3>Array estático</h3>
    - **Estáticos** ⇒ Definimos cuantos slots exactamente vamos a usar
    - **Dinámicos** ⇒ JS Maneja de forma por defecto

![https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0018-bb9c50e8-c3c7-4a7b-85d7-7c724472edce.jpg](https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0018-bb9c50e8-c3c7-4a7b-85d7-7c724472edce.jpg)

La computadora sabe de dónde a donde esta cada información o en este caso el numero exactamente

![https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0020-46f00bbe-dbd1-44a5-8920-d5e04aae2b95.jpg](https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0020-46f00bbe-dbd1-44a5-8920-d5e04aae2b95.jpg)

- La computadora de inicio es darle una cantidad de slots considerable
- Si es que pasara el límite buscara más espacio en memoria del que está pidiendo la lista
    - Para eso copiara la información y la trasladara a donde encuentre conveniente
    - Los espacios anteriores los libera

Es posible terminar o llenar una memoria con un array dinánimo
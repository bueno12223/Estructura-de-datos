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

## String

son datos inmutables, es decir no se pueden modificar, es decir si tenemos un `var x = "hola"` este se guardará como un array

![https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0026-887fd846-664a-4beb-ba3b-07df1309ebbf.jpg](https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0026-887fd846-664a-4beb-ba3b-07df1309ebbf.jpg)

# Hash Table

Las Hash Table funcionan similar a un Array, solo que en vez de índices numéricos se tienen índices o keys en caracteres, entonces es necesario una función intermedia que convierte el key en caracteres en índice numérico.

La diferencia es que tienen un paso extra que se convierte en caja negra la cual es una **hash function** Funciona de una manera similar a los arreglos debido a que accedemos a través de un numero

[Copy of Métodos](https://www.notion.so/3962bc2d237c43db95fcb11d56b7084d)

### Colisión de Hash Table

En ocasiones podemos pasar un key distintito puede generar el mismo hash colisionando con el anterior. Esto podrá depender de la cantidad de espacio disponible

## ejemplos

Algunos buenos hash para backend

- **uuid** [https://www.npmjs.com/package/uuid](https://www.npmjs.com/package/uuid)
- **bcrypt** [https://www.npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt)
- **shortid** [https://www.npmjs.com/package/shortid](https://www.npmjs.com/package/shortid)

Linked List son simplemente un conjunto de nodos ordenados que contienen los valores que necesitemos (numbers, strings, boolean, etc). Cada uno tiene un valor y una referencia a un siguiente nodo.

![https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0038-df338d63-caf1-4bcb-86c2-f8cd72e9db73.jpg](https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0038-df338d63-caf1-4bcb-86c2-f8cd72e9db73.jpg)

### Métodos

- Prepend ⇒ Agregar un nodo al inicio
- Append ⇒ Agregar un nodo al final
- Lookup / Search ⇒ Buscar un nodo
- Insert ⇒ insertar un nodo en la lista
- Delete ⇒ Borrar un nodo

### Singly Linked List 🔗

Tenemos un nodo, Se compone de dos factores

- Valor
- Valor del Next

![https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0041-11c13a63-e3f2-4978-af91-aa1281aa6d9d.jpg](https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0041-11c13a63-e3f2-4978-af91-aa1281aa6d9d.jpg)

Si deseamos llegar a algún lugar, debemos empezar del Head hasta el lugar especificado

No podemos regresar una vez hemos avanzado en un lugar, sera necesario volver a hacer otro recorrido desde el HEAD

Lo característico de esta lista es que sus valores están relacionados con su nodo actual y el siguiente
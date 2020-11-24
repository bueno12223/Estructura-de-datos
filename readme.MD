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

## doubly linked list 🔗

tiene el mismo comportamiento que una simply linked list, pero con la particularidad de que esta SI puede regresar. Aún necesita ir moviéndose una por una, pero ahora si lo desea puede regresar porque ya conoce quién es su elemento anterior y también quién es el siguiente, es decir, ya no es necesario repetir el ciclo.

![https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0048-79182a24-5d63-4cce-9c4e-b57a1603b0f7.jpg](https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0048-79182a24-5d63-4cce-9c4e-b57a1603b0f7.jpg)

- Tiene tres valores, los que ya conocemos
    - Value
    - Next
- El que caracteriza es el valor **previo**
    - Prev
- Esto nos ayuda si es que deseamos buscar un valor en particular nos evita volver a recorrer la estructura
    - Es decir que para buscar cosas es más rápido
- La forma en la que se guarda en memoria los objetos es similar a singly pero con dos direcciones

> ¿Cómo se guarda esto en memoria?

![https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0049-773eaa22-d463-4820-a8f0-f915cb4aef31.jpg](https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0049-773eaa22-d463-4820-a8f0-f915cb4aef31.jpg)

un nodo conoce su previo y anterior

**¿como se ve esto?**

```jsx
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null; // ahora hay un nuevo valor llamado prev
	}
}

class MyDoubleLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			prev: null // como solo ingresamos uno no hay prev
		}
		this.tail = this.head;
		this.length = 1;
	}
	append(value) {
		const newNode = new Node(value);
		newNode.prev = this.tail; // en esta linea de codigo el
	// head aun es el valor previo
		this.tail.next = newNode;
		this.tail = newNode;

		this.length++;

		return this;
	}

	prepend(value) {
		const newNode = new Node(value);
		if (this.head) {
			this.head.prev = newNode;
			newNode.next = this.head
		} else {
			this.tail = newNode;
		}

		this.head = newNode;

		this.length++;
		return this;
	}

	deleteFirst() {
		if (!this.head) { return null }

		this.head = this.head.next;
		if (this.head) {
			this.head.prev = null;
		} else {
			this.tail = null;

		}
		this.length--;
		return this;
	}

	deleteLast() {
		if (!this.tail) { return null }
		this.tail = this.tail.prev;
		if (this.tail) {
			this.tail.next = null;
		} else {
			this.head = null;
		}
		this.length--;
		return this;
	}

}
let myDoublyLinkedList = new MyDoubleLinkedList(1);
```

# Stack 🧦

básicamente es una pila, es decir, algo que estás apilando, lo primero que entra se queda hasta abajo y lo último que entra se queda hasta arriba, de ahí su nombre LIFO, Las In (El último que entra), First Out (Es el primero que sale).

![https://static.platzi.com/media/user_upload/Post%20Instagram%20%2816%29-df8cddab-7877-455b-b38e-3d11bae157f1.jpg](https://static.platzi.com/media/user_upload/Post%20Instagram%20%2816%29-df8cddab-7877-455b-b38e-3d11bae157f1.jpg)

> **¿Cómo se ve esto en código?**

```jsx
class Node {
    constructor(value){
        this.value = value
        this.prev = null
    }
}

class Stack{
    constructor(){
        this.top = null
        this.bot = null
        this.lenght = 0
    }

    push(value){
        let newNode = new Node(value)
        if (this.lenght == 0){
            this.bot = newNode
        }
        newNode.prev = this.top
        this.top = newNode
        this.lenght++
        return this
    }
}
```

Creamos una clase con los valores de *top bottom y length*  que indican cual esta arriba cual abajo y cuan largo es este

luego creamos el metodo **push** que se le pasa un valor, verificamos si el stack esta vacio, si es así el top y el bottom es este valor y largo = 1

en caso que no este valor lo pasamos por node para que tenga su next luego le damos un proposito a esta variable para que no se borre, decimos que el top ahora es este nuevo valor y acabamos
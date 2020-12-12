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

# Queues 🚶‍♂️

Una **cola** o **queue** es una estructura de datos muy similar a una Pila. Cuando usamos una Pila, ésta opera con una modalidad LIFO (Last In First Out), mientras que con una Cola es **FIFO** (**First In First Out**), es decir, siempre el primer elemento que agreguemos, será el primero que saquemos de ella.

> Ejemplo: Un escenario común es cuando vamos al banco, Llegamos y lo primero que haces es tomar un turno, inmediatamente nos damos cuenta que ya había 10 personas primero que tú por lo que automáticamente deduces que ellos serán atendidos primero que tú. Si nos damos cuenta en este escenario el primer cliente que llego y solicito un turno sera el que sea atendido primero y tú que llegaste al último serás atendido hasta el final.

Tenemos diferentes métodos para trabajar con el primer elemento, es decir el que entra y sale

- Enqueue ⇒ Agregar un elemento al final de la línea
- Dequeue ⇒ Remover el primer elemento de la línea
- Peek ⇒ Tomar el primer elemento de la línea

```jsx
class Nodo {
    constructor(valor) {
        this.value = valor;
        this.next = null;
    }
}

class Cola{
    constructor () {
        // Elemento Superior
        this.top = null;
        // Elemento Inferior
        this.bottom = null;

        this.length = 0;
    }

    // Seleccionar el primer ingresado
    peek () {
        return this.bottom;
    }

    // Agregar al final de la cola
    enQueues (valor) {
        const NewNodo = new Nodo(valor);

        if (this.length === 0) {
            this.bottom = NewNodo;
            this.top = NewNodo;
            this.length++;
            return this;
        }

        this.top.next = NewNodo;
        this.top = NewNodo;
        this.length++;
        return this;
    }

    // Mostrar el último elemento
    getBottom () {
        return this.top;
    }

    // Eliminar al primero
    deQueues () {
        // Validar si hay elementos para borrar
        if (this.length === 0) {
            return "No hay datos para borrar";
        }

        // Validar si al borrar la Pila quedará vacia
        if (this.length === 1) {
            this.top = null;
            this.bottom = null;
            this.length--;
            return this;
        }
        
        // Borrar
        this.bottom = this.bottom.next;
        this.length--;
        return this;
    }
}

const Newcola = new Cola();
Newcola.enQueues(1)
Newcola.enQueues(2)
Newcola.enQueues(3)
// Result: 1 (bottom) - 2 - 3 (top) [length=3]

Newcola.deQueues()
// Result: 2 (bottom) - 3 (top) [length=2]

Newcola.deQueues()
// Result: 3 (bottom)(top) [length=1]

Newcola.deQueues()
// Result: "No hay datos para borrar" [length=0]
```

# Trees 🌳

---

### Anatomía de un tree

![https://static.platzi.com/media/user_upload/Captura%20de%20pantalla%20%2880%29-94056aa2-6210-4293-ba89-da62b71d5681.jpg](https://static.platzi.com/media/user_upload/Captura%20de%20pantalla%20%2880%29-94056aa2-6210-4293-ba89-da62b71d5681.jpg)

- Root o Raiz: Es el nodo superior de todo el arbol, si sabes HTML(lo mas probable es que si) seria como en el DOM el HTML es el elemento root o más bien el padre
- Parent / Padre: Contienen ramas que apuntan a otros nodos
- Child / Hijos: Es un nodo conectado directamente con otro cuando se aleja de la raiz
- Lead / Hojas: Un nodo sin hijos
- Sibling / Hermanos: Son un conjunto de nodos que vienen del mismo padre
- Sub Tree / Sub Arbol: Son arboles que estan dentro de nodos
- Arm / Baso: Es la conexión entre un nodo y otro

### Perfect binary tree

Este tipo de arboles en concreto lo que hacen es que sus nodos se van multiplicando y van aumentando y a esto se le llama árbol balanceado porque tiene la misma cantidad de nodos en ambos lados, un ejemplo visual seria algo así:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7298a844-d34b-4714-ba84-a82c22cf1126/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7298a844-d34b-4714-ba84-a82c22cf1126/Untitled.png)

### Binary Search Trees

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3ffde0f2-d11c-4106-9885-4e36587c01df/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3ffde0f2-d11c-4106-9885-4e36587c01df/Untitled.png)

- Una de las reglas es que los números que van de aumento van en el derecho y decremento en el lado izquierdo
- Nos ayuda a buscar entre grandes cantidades de datos que podemos llegar a tener con la técnica “**divide y vencerás**”

### Binary Search Trees: unbalanced tree

Existen árboles que no están balanceados, para ello existen ciertos algoritmos que nos ayudan a balancearlos

---

Los **métodos** que contienen esta estructura de datos son los siguientes:

- Search ⇒ Buscar por un nodo
- Insert ⇒ Insertar un nodo
- Delete ⇒ Borrar un nodo


### Edge List

- Esta manera se representará de una lista de arrays que van a representar nuestro grafo
- Cada array sera una conexión de nuestro grafo

```jsx
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3]
];

```

### Adjacent List

- Cada nodo sera un índice, por lo cual los representamos en cada índice de la lista con que nodos está conectado

```jsx
//            ===== INDICES =====
//              0    1       2          3
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];

```

- también se puede representar en un objeto o hash tables
- Esto nos ayuda de una manera más visual porque tenemos numerados los indices
- Todo va por orden

### Hash Table

Ponemos el índice y con quien conecta

```jsx
const graph = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2]
};

```

### Adjacent Matrix

- Es una representación en una matriz de que nodos están conectados, pero esta funciona con ceros y unos
    - cada 0 representara una conexión nula
    - cada 1 representa que hay una conexión con dicho nodo
- Representación en matriz

```jsx
const graph = [
// ==== NODOS ====
// 1  2  3  4 
  [0, 0, 1, 0], // 0
  [0, 0, 1, 1], // 1
  [1, 1, 0, 1], // 2
  [0, 1, 1, 0]  // 3
];

```

- representación en un objeto

```jsx
const graph = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0]
};
```

### Como se ve en código

```jsx
class graphs {
    constructor(){
        this.nodes = 0
        this.adjasonList = {};
    }
    addVertex(value){
        this.adjasonList[value] = []
        this.nodes++
    }
    addEdge(node1, node2){
        this.adjasonList[node1].push(node2)
        this.adjasonList[node2].push(node1)
    }
}
const myGraph = new graphs()
```
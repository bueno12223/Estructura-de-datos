

class Node {
     constructor(value) {
         this.value = value,
         this.next = null
     };
}

class queue {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head

        this.lenght = 0
    }
    quie(value) {
        let newNode = new Node(value)
        if(this.lenght){
            newNode.next = this.head
            this.head = newNode
            this.lenght++
            return this
        }
        this.head = newNode
        this.tail = newNode
        this.lenght = 1
        
    }
    head(value){
        let newNode = new Node(value)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.lenght++
    }
    insert(index, value){
        let newNode = new Node(value)
        let indice = this.searhIndex(index -1)
        let pointer = this.indice.next
       this.indice.next = newNode
       this.newNode.next = pointer
       this.lenght++  
    }
    searhIndex(index){
    for( let i = 0; i < index; i++ ){
        this.head = this.head.next
    }
}
}

let mySinglyLinkedList = new MyDobleLinkedList(1)
mySinglyLinkedList.append(2)
mySinglyLinkedList.append(3)

console.log(mySinglyLinkedList)
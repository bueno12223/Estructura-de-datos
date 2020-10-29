

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
}

let mySinglyLinkedList = new MyDobleLinkedList(1)
mySinglyLinkedList.append(2)
mySinglyLinkedList.append(3)

console.log(mySinglyLinkedList)
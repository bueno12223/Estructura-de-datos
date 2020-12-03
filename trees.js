class node {
    constructor(value){
    this.left = null
    this.right = null
    this.value = value}
}
class binaryTree {
    constructor(){
        this.root

    }
    insert(value){
        let newNode = new node(value)
        let curreNode = this.root
        for( let bandera = false; bandera = false;)
        if(curreNode < newNode && curreNode.left == null){
              curreNode.left = newNode
              return bandera = true
        } else if(curreNode > newNode && curreNode.right == null){
                curreNode.right = newNode
                return bandera = true
        }else if(curreNode < newNode && curreNode.left == true){
             curreNode = curreNode.left
             return bandera = false
        }else if(curreNode > newNode && curreNode.right == true){
             curreNode = curreNode.right
             return bandera = false
        }else{
            newNode = this.root.value
            return this.root = new Node(value)
        }
        
       
}
}
const tree = new binaryTree()




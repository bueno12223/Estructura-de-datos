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
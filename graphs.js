class graphs {
    constructor(){
        this.nodes = 0
        this.adjasonList = {};
    }
    addVertex(value){
        this.adjasonList[value] = []
        this.nodes++
    }
}
const myGraph = new graphs()
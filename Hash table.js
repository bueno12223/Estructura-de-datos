class myArray {
    constructor(){
        this.length = 0
        this.data = {}
    }
    get(index){
        return this.data[index]
    }
    push(item){
        this.data[this.length] = item
        this.length++
        return this.data
    }
    pop(){
        this.length--
    }

}
const arrayt = new myArray();
arrayt.push('Diego'); // este item metelo en array data y ponlo en X indice, sumale 1 al largo
// y regresame el data con el nuevo elemento

console.log(arrayt)
arrayt.pop()
console.log(arrayt)
arrayt.push('manu');
console.log(arrayt)

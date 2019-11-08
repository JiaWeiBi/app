const STORE = {
    TraceStack: {
        data: [],
        push(obj){
            return this.data.push(obj);
        },
        pop(){
            return this.data.pop()
        }
    }
}

module.exports = STORE;
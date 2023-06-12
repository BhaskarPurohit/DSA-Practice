class Stack {
    constructor(){
    this.stack = []
    }
    push(ele){
        this.stack.push(ele)
    }
    // push(){
    //     if(/*this is empty*/){
    //         return "stack is empty"
    //     }
    //     return this.stack.pop()
    // }
    pop(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.stack.pop()
    }

    peek(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return this.stack[this.stack.length -1]
    }
    isEmpty(){
        return this.stack.length === 0 
    }
    size(){
        return this.stack.length
    }
}


const stack = new Stack()  //create new object
stack.push(10)
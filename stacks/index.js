//Both Stacks and Queues are called Linear DS
/**
 * Stacks: LIFO/FILO
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//!LinkedList Implementation
class StackUsingLinkedList {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        console.log(this.top); // should return top item
        return this
    }

    //My Method
    push(value) {
        const newNode = new Node(value);

        newNode.next = this.top;
        this.top = newNode;
        if (!this.length) {
            this.bottom = newNode;
        }

        this.length++;
        return this;
    }

    //course method
    _push(value) {
        const newNode = new Node(value);

        if (!this.length) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.length++;
        return this;
    }

    //My Method
    pop() {
        if (!this.top) {
            console.error("Stack is empty");
            return this;
        }
        this.top = this.top.next;
        if (this.length === 1) {
            this.bottom = null;
        }
        this.length--;
        return this;
    }

    print() {

    }

}

const stackUsingLinkedList = new StackUsingLinkedList();
stackUsingLinkedList
    .push('google')
    .push('udemy')
    .push('discord')
    // .peek()
    .pop()
    .pop()
    .pop()
    ._push('google')
    ._push('udemy')
    ._push('discord')


// console.log(stackUsingLinkedList);

class StackUsingArray {
    constructor() {
        this.data = [];
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    push(value) {
        this.data.push(value);
        return this;
    }

    pop() {
        this.data.pop();
        return this;
    }


}

const stackUsingArray = new StackUsingArray();
stackUsingArray
    .push(1)
    .push(2)
    .pop()
    .pop()
console.log(stackUsingArray)
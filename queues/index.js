/**
 * Queues: FIFO/LILO
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class QueueUsingLinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.length) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
        return this;
    }

    dequeue() {
        if (!this.length) {
            console.log('queue is empty');
            return this;
        }

        this.first = this.first.next;

        if (this.length === 1) {
            this.last = null;
        }

        this.length--;
        return this;
    }
}

const queueUsingLinkedList = new QueueUsingLinkedList();

queueUsingLinkedList
    .enqueue('Matt')
    .enqueue('John')
    .enqueue('Joy')
    // .enqueue('Sam')
    .dequeue();

console.log(queueUsingLinkedList);
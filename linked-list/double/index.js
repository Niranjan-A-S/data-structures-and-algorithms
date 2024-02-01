/**
 * In a doubly linked list we can traverse the backwards also
 * In a DLL the first node point towards the second node and seconds point towards the next node and also the first node
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;

        this.length++;
        return this;
    }

    traverseToIndex(index) {
        let currentIndex = this.head;
        let counter = 0;

        while (index !== counter) {
            currentIndex = currentIndex.next;
            counter++;
        }

        return currentIndex;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this;
    }

    //check for the authenticity of this method
    remove(index) {
        if (index < 0 || index >= this.length) {
            console.error("Invalid index");
            return this;
        }

        if (index === 0) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
        } else if (index === this.length - 1) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            const nodeToRemove = this.traverseToIndex(index);
            const prevNode = nodeToRemove.prev;
            const nextNode = nodeToRemove.next;

            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        }

        this.length--;
        return this;
    }

}

const dLinkedList = new DoublyLinkedList(1);

dLinkedList
    .append(4)
    // .append(3)
    // .prepend(2, 2)
    .insert(1, 2)
console.log(dLinkedList);
/**
 * !Linked List
 * It is a list of nodes which are connected to each other
 * Each node has a value and a pointer to the next node
 * First node is called head and last node is called tail 
 * The tail points to null
 * A Pointer is nothing but reference to another place in memory.
 * It  does not point to value but addresses.
 * In JS because of the garbage collector if nothing is pointing to the  data location the memory will be erased
 */

/**
 * !Why LinkedList?
 * prepend O(1)
 * append O(1)
 * lookup O(n)
 * insert O(n)
 * delete O(n)
 */

//*10 --> 5 --> 16
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this
    }
    //my method
    insert(index, value) {
        //check for  params

        if (index === 0) {
            this.prepend(value);
            return this;
        }

        if (index >= this.length) {
            this.append(value);
            return this
        }

        const newNode = new Node(value);
        let current = this.head;
        let currentIndex = 0;
        let prev = null;

        while (current && currentIndex < index) {
            prev = current;
            current = current.next;
            currentIndex++;
        }

        if (index === currentIndex) {
            prev.next = newNode;
            newNode.next = current;
        }
        this.length++;
        return this;
    }

    //course method
    _insert(index, value) {
        //check for params

        if (index >= this.length) {
            this.append(value);
            return this;
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next

        leader.next = newNode;
        newNode.next = holdingPointer;

        this.length++;
        return this;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (index !== counter) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }   

    remove(index) {
        // Check for an empty list
        if (this.length === 0) {
            console.error("Cannot remove from an empty list.");
            return;
        }

        // Check for a valid index
        if (index < 0) {
            console.error("Invalid index.");
            return;
        }

        if (index === 0) {
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
            }
        }

        else if (index >= this.length - 1) {
            const leader = this.traverseToIndex(this.length - 2);
            leader.next = null;
            this.tail = leader;
        }
        else {
            const leader = this.traverseToIndex(index - 1);
            const nodeToBeRemoved = leader.next
            leader.next = nodeToBeRemoved.next;
        }

        this.length--;
        return this;
    }

    get(index) {
        //check for params
        if (index >= this.length) {
            index = this.length - 1;
        }
        const node = this.traverseToIndex(index);
        return node.value
    }

    printList() {
        let current = this.head;
        const array = [];
        while (current !== null) {
            array.push(current.value);
            current = current.next;
        }
        console.log(array);
    }

}

const linkedList = new LinkedList(1);
linkedList
    .append(4)
    .append(5)
    .prepend(0)
    .insert(2, 3)
    ._insert(2, 2)
    .remove(4)
    .printList()

console.log(linkedList.get(0));
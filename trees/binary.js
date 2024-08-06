/**
 * Each nodes can have only one zero or two nodes
 * A perfect binary tree is one in which all the leaf nodes are  the same level and the nodes will have either two or zero children
 * A perfect binary tree is desirable because the number of nodes at each level doubles as we go down
 * The number of nodes at the last level is equal to the sum of no of nodes at all other levels plus 1 |
 * Also number nodes at level n  = 2^n
 */

/**
 * !O(logN)
 * Total number of nodes in Perfect Binary Tree = 2^h - 1 where h is the height (ie number of levels)
 * ie number fo nodes n = 2^h-1
 * !ie log n = h (log 100 = 2 ie 10^2 -= 100)
 * which can be concludes as number of steps to reach to a particular node
 * O(logN) is using the method of divide and conquer
 */

//!Binary Search Tree is a BT which preserves relationship
//!All the nodes to the right and left of the parent node keeps on increasing and decreasing respectively

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
        return this;
    }

    lookup(value) {
        if (!this.root) return false;
        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode.value) return currentNode;

            currentNode = value < currentNode.value ? currentNode.left : currentNode.right
        }

        return false;
    }

    remove(value) {
        if (!this.root) return false;

        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            }
            else if (currentNode.value === value) {
                if (!currentNode.right) {
                    if (!parentNode) {
                        parentNode.left = currentNode.left
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                        }
                        else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }

                } else if (!currentNode.right) {

                }
            };
        }
    }
}

const bst = new BinarySearchTree();
//     9
//  4     20
//1  6  15  170

bst
    .insert(9)
    .insert(4)
    .insert(6)
    .insert(20)
    .insert(170)
    .insert(15)
// .insert(6) 

console.log(bst.lookup(6));

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
//!hash tables are nothing but objects in JS

/**
 * In a hash table the object keys undergoes a hash function and the both keys and values are stored inside the memory location
 * ?A Hash function generates a unique value of fixed length for the given input. For the given input value it always gives the same hash value. And it is oneway.
 * In hash tables the for the given key a hash value is generated and based on this value memory index or location address is decided.
 */

//!Time Complexities
/**
 * insert O(1)
 * lookup O(1)
 * delete O(1)
 * search O(1)
 */

//!Hash Collisions
//When hash collisions occur ie different properties are mapped to same location it gets converted like a linked-list(very basic understanding).
//During collision it slows down the reading and writing by O(n/k) where k is the size of the hash table ie O(n)

//https://en.wikipedia.org/wiki/Hash_table This resource has resolutions to hash collisions

//!Maps
/**
 * Insertion Order is maintained
 * Any data type can be the key
 */

//!Sets
/**
 * Insertion Order is maintained
 * Any data type can be the key
 * Stores only keys not values
 * No duplicate items
 */

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    generateHash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        const address = this.generateHash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value])
    }

    get(key) {
        const address = this.generateHash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) return currentBucket[i][1]
            }
        }
    } //this is going to be O(1) because the chances of collisions are negligible

    keys() {
        const keysArray = [];
        this.data.forEach(item => {
            if (item) {
                keysArray.push(item[0][0]);
            }
        })
        return keysArray;
    }
}

const hashTable1 = new HashTable(50);
hashTable1.set('grapes', 1000);
hashTable1.set('apples', 54);
hashTable1.keys('apples', 54);
console.log(hashTable1.get('grapes'));
console.log(hashTable1.get('apples'));

"use strict";

//?Operations
/**
 * lookup O(1)
 * insert/remove at  end of the array O(1) (push pop)
 * insert/remove at the beginning of the array O(n) (shift, unshift)
 *  delete O(n)
 */

const strings = ['a', 'b', 'c', 'd']
/**
 * 4 items
 * A 32 bit system
 * 4 shelves of 8 bytes
 * so 4 * 4  = requires 16 bytes of memory to store this array
 */

//splice O(n)

//!there are two types of array static and dynamic. In static arrays we have to mention the size of the array before initializing it
//!In JS the arrays are dynamically typed they automatically allocate the memory for the new items to be added in a array
//!In case of static arrays when we want to insert a new item we have to copy the entire array move it to a new location in the memory and add more space

class _Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        const value = this.data[index];
        console.log(value);
        return value;
    }

    push(value) {
        this.data[this.length] = value;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index); //O(n)
        this.length--;
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
    }

    map(callback) {
        for (let i = 0; i < this.length; i++) {
            this.data[i] = callback(this.data[i]);
        }

        return this.data;
    }

    //this also works
    _unshift(value) {
        let temp = this.data[0];
        for (let i = 0; i <= this.length; i++) {
            this.data[i] = value;
            value = temp;
            temp = this.data[i + 1];
        }
        return ++this.length;
    }

    //standard approach
    unshift(value) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = value;
        return ++this.length;
    }

    shift() {
        const firstItem = this.data[0];
        this.shiftPosition(0);
        this.length--;
        return firstItem;
    }
}


const newArray = new _Array();
newArray.push('Hi');
newArray.push('You');
newArray.push('!');
// newArray.get(0);
// newArray.pop();
newArray.delete(0);
newArray.map(item => `Modified ${item}`)
// console.log(newArray);

//!Strings can be treated as arrays in any questions

/**
 * Given a string reverse the characters of the string and return it.
 * @param string
 * @output string | undefined
 */
function reverseString(str) {
    const length = str.length;
    if (!str || length < 2 || typeof str !== 'string') return 'Hmm that is not good';
    const array = [];
    for (let index = length - 1; index >= 0; index--) {
        array.push(str[index]);
    }
    return array.join('')
}

const reverseString2 = (str) => str.split('').reverse().join('')

const string = "Hello I am Here"
reverseString2(string);

/**
 * Given two sorted arrays return the sorted array which is obtained by merging these two arrays.
 * @param two arrays
 * @output array
 * Given a  = [0.3.4.31] and b = [4,6,30] return [0,3,4,4,6,30,31]
 */


function mergeSortedArrays(arr1, arr2) {
    //Check Input
    getNonEmptyArray(arr1, arr2);
    return sort([...arr1, ...arr2])
}
//using built in sort
function sort(array) {
    return array.sort((a, b) => a - b)
}

function getNonEmptyArray(arr1, arr2) {
    if (!arr1.length) {
        return arr2;
    }
    if (!arr2.length) {
        return arr1;
    }
}

const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];

//course approach
function mergeSortedArrays2(arr1, arr2) {
    getNonEmptyArray(arr1, arr2);
    const mergedArray = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1
    let j = 1;
    while (arr1Item || arr2Item) {
        if (arr2Item === undefined || arr1Item < arr2Item) {
            mergedArray.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        } else {
            mergedArray.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }
    console.log(mergedArray);
    return mergedArray;
}

mergeSortedArrays2(array1, array2)


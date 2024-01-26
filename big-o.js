/**
 * Good code should be: 
 * Scalable 
 * Readable
 */

//!Time Complexity

const nemo = ['nemo'];
const largeArray = new Array(100).fill('nemo');

function findNemo(array) {
    const t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') console.log('Found Nemo!')
    }
    const t1 = performance.now();
    console.log(`Call to find nemo took ${t1 - t0} milliseconds`)
}

// findNemo(largeArray);

//Big O is the measure of how long an algorithm for a program takes to run irrespective of the specs of the computer
// In simple terms it is the scale of no of operations increasing with the number of inputs

// !The BIg O of the above function is O(n) or Linear Complexity

//! Another Big O Notation is Constant time ie O(1) ie does not depend upon the number of  inputs
// for eg: 
function logSingleBox(boxes) {
    console.log(boxes[0]);
}
// logSingleBox([1, 2, 3, 4]);
//Here no matter the number of inputs for the boxes increase the no of operation remains the same.

function funChallenge(input) {
    let a = 10;//O(1)
    a = 50 + 3;//O(1)

    for (let i = 0; i < input.length; i++) {//O(n)
        anotherFunction();//O(n)
        let stranger = true;//O(n)
        a++;//O(n)
    }
    return a;//O(1)
}
//O(n) Linear Time (3+ 4n)


//!Big O Calculation Rules
/**
 * Worst Case - Assume that you will get  worst inputs meaning you might have to do costly operations
 * Remove Constants - We only cares when the function scales or inputs are getting larger and larger
 * Different terms for inputs - It means that suppose when have two sets of inputs then we have to consider each of them separately ie O(m + n)
 * Drop the non dominant terms - Suppose we have both linear time and quadratic time for the same input within the same function then we choose only quadratic time
 */

//Log all pairs of array
const array = [1, 2, 3, 4, 5];
const logAllPairs = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
}

// logAllPairs(array)
//Here what we see is a nested loop So the time complexity will be of Quadratic Time O(n^2 )
//If different sets of inputs are nested then the Big O  is O(m*n)

//!O(n!)
//This is the worst Big O of all
//This is like adding a loop for all the elements in the array or more correctly adding loop for every element you are adding

//!Scalability of the code depends on Speed and Memory

//!Space Complexity
/**
 * How much memory is being used
 * When a function is run the variables and others are stored in a heap and the function calls are tracked using a stack
 * In space complexity we only care about declarations and assignments that are happening inside the function and not the inputs
 * 
 */
function boo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('boo..');
    }
}

// boo([1, 2, 3, 4, 5])
//This function has a space complexity of O(1) since only one variable (i) is using the memory
function test(n) {
    let temp;
    for (let i = 0; i < n.length; i++) {
        temp[i] = 'hi';
    }
    return temp;
}
// test(6);
//Space Complexity is O(n) here
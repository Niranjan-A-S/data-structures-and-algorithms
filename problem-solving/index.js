//!Skills
/**
 * Analytic
 * Coding
 * Problem Solving
 * Communication
 */

//Given two arrays, write a function  that let's the user know  whether these two arrays contain any common items.

/**
 * 2 parameters - arrays - no size limit - 
 * returns true or false
 */

const arrayA = ['a', 'b', 'x', 's', 'f'];
const arrayB = ['a', 'q', 'r', 't', 'h'];

//Brute Force Approach  
const hasCommonItems1 = (arrayA, arrayB) => {
    if (!(arrayA.length || arrayB.length)) {
        return false;
    }
    return arrayA.some(item => arrayB.includes(item))
};
hasCommonItems1(arrayA, arrayB);
/**
 * Space Complexity: O(1)
 * Time Complexity: O(m*n)
 */

//Better approach using hash tables
const hasCommonItem2 = (arrayA, arrayB) => {
    if (!(arrayA.length || arrayB.length)) {
        return false;
    }
    //creating a mapper from array A
    const mapper = {};
    for (const item of arrayA) {
        if (!mapper[item]) {
            mapper[item] = true;
        }
    };
    //checking if the items of arrayB exist in the mapper
    return Boolean(arrayB.find(item => item in mapper));
}
hasCommonItem2(arrayA, arrayB);
/**
 * Space Complexity: O(m)
 * Time Complexity: O(m+n)
 */

const hasCommonItems3 = (arrayA, arrayB) => {
    //check for errors
    if (!(arrayA?.length || arrayB?.length)) {
        return false;
    }
    //loop through the first array and create an object where the properties === items in the array
    const tally = {};
    for (let i = 0; i < arrayA.length; i++) {
        const item = arrayA[i];
        if (!tally[item]) {
            tally[item] = true;
        }
    }

    //loop through the second array and check if item in second array exist on created object
    for (let i = 0; i < arrayB.length; i++) {
        if (tally[arrayB[i]]) {
            return true;
        }
        return false;
    }
}
/**
 * Space Complexity: O(m)
 * Time Complexity: O(m+n)
 */

//Along with this communicate with interviewer about modularizing the code in the function

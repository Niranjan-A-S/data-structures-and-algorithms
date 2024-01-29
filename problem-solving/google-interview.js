/**
 * Problem Statement: Given a collection of ordered numbers find the pair of numbers that add up to the number given;
 * [1,2,3,9] Sum = 8 NO numbers
 * [1,2,4,4] Sum = 8 (4,4)
 * 
 * The array is ordered
 * numbers are integers and can be negative
 */

const collection = [1, 2, 3, 4];
const sumValue = 8;

//!Brute force
const hasPairWithSum = (array, sum) => {
    for (let i = 0; i < array.length; i++) {
        const firstNumber = array[i];
        for (let j = 0; j < array.length; j++) {
            const secondNumber = array[j];
            if (firstNumber + secondNumber === sum) {
                return true;
            }
        }
    }
    return false;
}
//!Time Complexity: O(n^2)
hasPairWithSum(collection, sumValue);

//!Better Approach
const hasPairWithSum2 = (array, sum) => {
    const set = new Set();
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (set.has(element)) {
            return true;
        }
        set.add(sum - element);
    }
    return false;
}
//!Time Complexity: O(n)
hasPairWithSum2(collection, sumValue);
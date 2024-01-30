/**
Given an integer array nums, find the  subarray with the largest sum, and return its sum.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
 */


/**
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 */
const moveZeroes = (nums) => {
    let nonZeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            //swapping
            [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
            nonZeroIndex++;
        }
    }
};
// const array = [0, 0, 1]
// moveZeroes(array);


/**
 Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 */

function containsDuplicate(nums) {
    const tally = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in tally) return true;
        tally[nums[i]] = true;
    }
    return false
};


/**
 Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

Constraints:
1 <= nums.length <= 105j
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 */

const rotateOnce = (arr) => {
    //check for array validity
    if (!Array.isArray(arr)) throw new Error('Not a valid array');

    //validate against array length
    const arrLength = arr.length;
    if (arrLength <= 1) return arr;

    const lastItem = arr.pop();
    arr.unshift(lastItem);
}

const rotateArray = (arr, k) => {
    while (k !== 0) {
        rotateOnce(arr);
        k--;
    }
}
//Big O => O(k*n) 

const k = 3;
// rotateArray(array, k)

//better approach
function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

function rotate(nums, k) {
    const length = nums.length;
    const lastIndex = length - 1;
    k = k % length; //Handle the case where k is greater than the array length

    //reverse the entire array
    reverse(nums, 0, lastIndex);

    //Reverse the first k elements
    reverse(nums, 0, k - 1);

    //Reverse the remaining elements
    reverse(nums, k, lastIndex)
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7];
rotate(array, k);


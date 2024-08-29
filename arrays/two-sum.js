/**
 * Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

function twoSum(array, target) {
    const map = {};
    for (let i = 0; i < array.length; i++) {
        if (map.hasOwnProperty(target - array[i])) {
            return [map[target - array[i]], i];
        } else {
            map[array[i]] = i;
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9));
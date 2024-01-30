/**
 * !First recurring character
 Given an array  = [2,5,1,2,3,5,1,2,4];
 It should return 2
 */

//BruteForce Approach
const getFirstRecurringCharacter = (array) => {
    for (let i = 0; i < array.length; i++) {
        const a = array[i];
        for (let j = 0; j < array.length; j++) {
            const b = array[j];
            if (a === b) {
                return a;
            }
        }
    }
}
//O(n^2) Time
//O(1) Space

//Better Approach
const getFirstRecurringCharacter2 = (array) => {
    const map = {};
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        if (map[element] !== undefined) {
            return element;
        }
        map[element] = true
    }
}
//O(n) Time
//O(1) Space


getFirstRecurringCharacter([2, 2, 1, 2, 3, 5, 1, 2, 4])
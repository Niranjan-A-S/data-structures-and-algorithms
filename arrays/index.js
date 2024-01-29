//?Operations
/**
 * lookup O(1)
 * insert/remove at  end of the array O(1) (push pop)
 * insert/remove at the beginning of the array O(n) (shift, unshift)
 *  delete O(n)
 */

const strings = ['a', 'b', 'c', 'd'];
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
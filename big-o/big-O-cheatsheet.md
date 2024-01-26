# Big O Cheat Sheet:

- **O(1) Constant**: No loops
- **O(log N) Logarithmic**: Usually for searching algorithms with sorted data (e.g., Binary Search)
- **O(n) Linear**: For loops, while loops through n items
- **O(n log(n)) Log Linear**: Usually for sorting operations
- **O(n^2) Quadratic**: Every element in a collection needs to be compared to every other element (Two nested loops)
- **O(2^n) Exponential**: Recursive algorithms that solve a problem of size N
- **O(n!) Factorial**: Adding a loop for every element
  - Iterating through half a collection is still O(n)
  - Two separate collections: O(a * b)

## What can cause time in a function?

- Operations (+, -, *, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside function calls (function())

### Rule Book

1. Always worst case
2. Remove constants
3. Different inputs should have different variables (O(a+b), A and B arrays nested would be O(a*b))
   - `+` for steps in order
   - `*` for nested steps
4. Drop non-dominant terms

## What causes Space complexity?

- Variables
- Data Structures
- Function Calls
- Allocations

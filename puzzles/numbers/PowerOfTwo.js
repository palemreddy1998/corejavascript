console.log(isPowerOfTwo(4)); // true
console.log(isPowerOfTwo(64)); // true
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(0)); // false
console.log(isPowerOfTwo(-1)); // false
//Given an integer, determine if it is a power of 2. If so, return that number, else return -1. (0 is not a power of two)
// For the non-zero case:
function isPowerOfTwo(number) {
    // `&` uses the bitwise n.
    // In the case of number = 4; the expression would be identical to:
    // `return (4 & 3 === 0)`
    // In bitwise, 4 is 100, and 3 is 011. Using &, if two values at the same
    // spot is 1, then result is 1, else 0. In this case, it would return 000,
    // and thus, 4 satisfies are expression.
    // In turn, if the expression is `return (5 & 4 === 0)`, it would be false
    // since it returns 101 & 100 = 100 (NOT === 0)

    return number & (number - 1) === 0;
}

// For zero-case:
function isPowerOfTwoZeroCase(number) {
    return (number !== 0) && ((number & (number - 1)) === 0);
}
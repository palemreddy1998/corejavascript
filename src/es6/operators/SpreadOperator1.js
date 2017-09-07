function def2() {
    return Math.max(...[-1, 5, 11, 3]);
    //return Math.max([-1, 5, 11, 3]);
}

console.log(def2())

//Array.prototype.push() appends all of its arguments as elements to its receiver. There is no method that destructively appends an Array to another one.
const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];

arr1.push(...arr2);
console.log(arr1)

//The spread operator can also (non-destructively) turn the contents of its operand into Array elements. That means that it becomes an alternative to the Array method concat().
const arr3 = ['a', 'b'];
const arr4 = ['c'];
const arr5 = ['d', 'e'];

console.log([...arr3, ...arr4, ...arr5]);
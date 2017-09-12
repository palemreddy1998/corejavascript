//entries
var a = ['a', 'b', 'c'];
var iterator = a.entries();

console.log(iterator.next().value); // [0, 'a']
console.log(iterator.next().value); // [1, 'b']
console.log(iterator.next().value); // [2, 'c']

//concat
var arr1 = ['a', 'b', 'c'];
var arr2 = ['d', 'e', 'f'];

var arr3 = arr1.concat(arr2);
console.log(arr3)

//filter must be useful in arrow functions
var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
var longWords = words.filter(word => word.length > 6);
console.log(longWords)
var limit = words.filter(f => f==="limit");
console.log(limit[0])

//join
var a = ['Wind', 'Rain', 'Fire'];
console.log(a.join());    // 'Wind,Rain,Fire'
console.log(a.join('-')); // 'Wind-Rain-Fire'

//pop(remove)
var a = [1, 2, 3];
a.pop();
console.log(a); // [1, 2]
a.pop();
console.log(a); // [1]

//push(add)
var b = [1, 2, 3];
b.push(4);
console.log(b); // [1, 2,3,4]
b.push(5);
console.log(b); // [1,2,3,4,5]

//slice
var a = ['zero', 'one', 'two', 'three'];
var sliced = a.slice(1, 3);

console.log(a);      // ['zero', 'one', 'two', 'three']
console.log(sliced.toString()); // ['one', 'two']
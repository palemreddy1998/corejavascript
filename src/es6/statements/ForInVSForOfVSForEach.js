//Difference between for...of and for...in
//The for...in loop will iterate over all enumerable properties of an object.

//The for...of syntax is specific to collections, rather than all objects. It will iterate in this manner over the elements of any //collection that has a [Symbol.iterator] property.

//foreEach and forof behave similar

Object.prototype.objCustom = function() {}; 
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
  console.log("in1->"+i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log("in2->"+i); // logs 0, 1, 2, "foo"
  }
}

iterable.forEach(function loop(i){
  console.log("foreach1->"+i); // logs 3, 5, 7
})

for (let i of iterable) {
  console.log("of1->"+i); // logs 3, 5, 7
}

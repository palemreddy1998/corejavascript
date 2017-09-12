//array to set
var array1 = new Array("a","b","c","d","e","a","b");
console.log(array1)
let unique = [...new Set(array1)];
console.log(unique)

//set to array
let array2 = [...unique];
console.log(array2)


const set = new Set(['red', 'green', 'blue']);
for (const x of set) {
    console.log(x);
}
//As you can see, Sets preserve iteration order. That is, elements are always iterated over in the order in which they were inserted.

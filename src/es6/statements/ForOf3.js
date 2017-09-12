// Array-like, but not iterable!
const arrayLike = { length: 2, 0: 'a', 1: 'b' };

//for (const x of arrayLike) { // TypeError
    //console.log(x);
//}

for (const x of Array.from(arrayLike)) { // OK
    console.log(x);
}

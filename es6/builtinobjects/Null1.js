//When checking for null or undefined, beware of the differences between equality (==) and identity (===) operators, as the former performs type-conversion.
console.log(typeof null)          // "object" (not "null" for legacy reasons)
console.log(typeof undefined)     // "undefined"
console.log(null === undefined)   // false
console.log(null  == undefined )  // true
console.log(null === null)        // true
console.log(null == null)         // true
console.log(!null)                // true
console.log(isNaN(1 + null))      // false
console.log(isNaN(1 + undefined)) // true


console.log(undefined === undefined)        // true
console.log(undefined == undefined)         // true

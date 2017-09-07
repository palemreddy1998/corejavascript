console.log(NaN == NaN) //false
console.log(NaN === NaN) //false

console.log(isNaN == isNaN) //true
console.log(isNaN === isNaN) //true

console.log(isNaN(NaN));       // true
console.log(isNaN(undefined)); // true
console.log(isNaN({}));        // true

console.log(isNaN(true));      // false
console.log(isNaN(null));      // false
console.log(isNaN(37));        // false

// strings
console.log(isNaN('37'));      // false: "37" is converted to the number 37 which is not NaN
console.log(isNaN('37.37'));   // false: "37.37" is converted to the number 37.37 which is not NaN
console.log(isNaN('123ABC'));  // true:  parseInt("123ABC") is 123 but Number("123ABC") is NaN
console.log(isNaN(''));        // false: the empty string is converted to 0 which is not NaN
console.log(isNaN(' '));       // false: a string with spaces is converted to 0 which is not NaN

// dates
console.log(isNaN(new Date()));                // false
console.log(isNaN(new Date().toString()));     // true

// This is a false positive and the reason why isNaN is not entirely reliable
console.log(isNaN('blabla'));   // true: "blabla" is converted to a number.
                   // Parsing this as a number fails and returns NaN
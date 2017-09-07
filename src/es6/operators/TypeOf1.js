// Numbers
console.log(typeof 37 === 'number');
console.log(typeof 3.14 === 'number');
console.log(typeof(42) === 'number');
console.log(typeof Math.LN2 === 'number');
console.log(typeof Infinity === 'number');
console.log(typeof NaN === 'number'); // Despite being "Not-A-Number"
console.log(typeof Number(1) === 'number'); // but never use this form!


// Strings
console.log(typeof '' === 'string');
console.log(typeof 'bla' === 'string');
console.log(typeof '1' === 'string'); // note that a number within a string is still typeof string
console.log(typeof (typeof 1) === 'string'); // typeof always returns a string
console.log(typeof String('abc') === 'string'); // but never use this form!


// Booleans
console.log(typeof true === 'boolean');
console.log(typeof false === 'boolean');
console.log(typeof Boolean(true) === 'boolean'); // but never use this form!
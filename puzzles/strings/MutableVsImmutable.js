//Variables created by let are mutable:

let foo = 'abc';
foo = 'def';
console.log(foo); // def

//Constants, variables created by const, are immutable – you can’t assign different values to them:
const foo1 = 'abc';
foo1 = 'def'; // TypeErro

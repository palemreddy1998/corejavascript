//In arrow functions, this is set lexically, i.e. it's set to the value of the enclosing execution context's this. In global code, it will be set to the global object:
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true
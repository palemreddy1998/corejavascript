//To pass the value of this from one context to another, use call, or apply:
// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {a: 'Custom'};

// This property is set on the global object
var a = 'Global';

function whatsThis(arg) {
    return this.a;  // The value of this is dependent on how the function is called
}

console.log(whatsThis());          // Returns 'Global'
console.log(whatsThis.call(obj));  // Returns 'Custom'
console.log(whatsThis.apply(obj)); // Returns 'Custom'


//Where a function uses the this keyword in its body, its value can be bound to a particular object in the call using the call or apply methods which all functions inherit from Function.prototype.
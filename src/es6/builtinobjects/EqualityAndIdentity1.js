//Equality (==)
//Identity / strict equality (===)

console.log(1    ==  1)         // true
console.log('1'  ==  1 )        // true
console.log(1    == '1' )       // true
console.log(0    == false)      // true
console.log(0    == null)       // false
var object1 = {'value': 'key'}, object2 = {'value': 'key'};
console.log(object1 == object2) //false
console.log(0    == undefined)  // false
console.log(null == undefined)  // true

//Identity / strict equality (===)
console.log(" === ")
console.log(3 === 3)   // true
console.log(3 === '3') // false
var object1 = {'value': 'key'}, object2 = {'value': 'key'};
console.log(object1 === object2) //false

//Non-identity / strict inequality (!==)
console.log(" !== ")
console.log(3 !== '3') // true
console.log(4 !== 3)   // true
console.log(5 !== 5)   // false
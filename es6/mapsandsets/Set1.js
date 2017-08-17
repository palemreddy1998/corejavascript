//let s = new Set();
let s = new WeakSet();
//works with only set
//s.add(1).add(2).add("three")
//s.add("hello").add("goodbye").add("hello")

//works with only weakset
let value1 = {foo:1}
let value2 = {bar:1}
s.add(value1).add(value2)
s.size === 2
s.has("hello") === true
//for (let key of s.values()) { // insertion order
//    console.log(key)
//}

//s.forEach(function iter1(element) {
    //console.log(element);
//})

console.log(s.has(value1))
console.log(s.has(value2))
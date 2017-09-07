let m = new Map()
//let m = new WeakMap()
let s = Symbol()
m.set("Palem", 42)
m.set("Reddy", 32)
m.size === 2
//for (let [ key, val ] of m.entries())
//    console.log(key+" = "+val)

m.forEach(function iter1(elementKey,elementValue) {
    console.log(elementKey+" = "+elementValue)
})


console.log(m.entries());
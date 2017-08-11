let m = new Map()
let s = Symbol()
m.set("alex", 42)
m.set("charlie", 32)
m.size === 2
for (let [ key, val ] of m.entries())
    console.log(key+" = "+val)

m.forEach(function iter1(elementKey,elementValue) {
    console.log(elementKey+" = "+elementValue)
})
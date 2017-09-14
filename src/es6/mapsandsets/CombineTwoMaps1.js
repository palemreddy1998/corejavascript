const map1 = new Map()
.set(1, 'a1')
.set(2, 'b1')
.set(3, 'c1');

const map2 = new Map()
.set(2, 'b2')
.set(3, 'c2')
.set(4, 'd2');

let combinedMap  = new Map([...map1,...map2])
console.log(...combinedMap)

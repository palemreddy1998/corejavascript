let s = new Set()
s.add("hello").add("goodbye").add("hello")
s.size === 2
s.has("hello") === true
for (let key of s.values()) { // insertion order
    console.log(key)
}

s.forEach(function iter1(element) {
    console.log(element);
})
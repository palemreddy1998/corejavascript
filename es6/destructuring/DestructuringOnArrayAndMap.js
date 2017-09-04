const arr = ['a', 'b'];
for (const [index, element] of arr.entries()) {
    console.log(index, element);
}

const map = new Map();
map.set('one',1)
map.set('two',2)
for (const [key, value] of map.entries()) {
    console.log(key, value);
}

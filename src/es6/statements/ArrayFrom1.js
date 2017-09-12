const bar = ["a", "b", "c"];
Array.from(bar);
for (let i of Array.from(bar)){
   console.log(i)
}
// ["a", "b", "c"]

Array.from('foo');
for (let j of Array.from('foo')){
    console.log(j)
}

// ["f", "o", "o"]§
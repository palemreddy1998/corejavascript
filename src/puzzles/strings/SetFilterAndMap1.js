//set filter
const set = new Set([1, 2, 3]);
let filterSet = new Set([...set].filter(a=>a===2));
console.log(filterSet);

//set map
let mapSet = new Set([...set].map(b=>b*2));
console.log(mapSet);

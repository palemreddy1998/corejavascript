//union
let set1 = new Set([1,2,3]);
let set2 = new Set([4,5,6]);

let union = new Set([...set1,...set2])
console.log(union);

//intersect- 3
let set3 = new Set([1,2,3]);
let set4 = new Set([4,3,6]);

let interset = new Set([...set3].filter(s=>set4.has(s)));
console.log(interset)

//difference - 1,2
let difference = new Set([...set3].filter(s=>!set4.has(s)));
console.log(difference)


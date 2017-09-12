const originalMap = new Map()
.set(1, 'a')
.set(2, 'b')
.set(3, 'c');

console.log(originalMap)
//usage of spread operator and destructuring 
let filterMap = new Map([...originalMap].filter(([key,value])=>key===2));
console.log(filterMap)

const salaryMap = new Map()
.set('a', 1000)
.set('b', 2000)
.set('c', 3000);


console.log(salaryMap)
let filterSalaryMap = new Map([...salaryMap].map(([key,value])=>(value*2)));
console.log(filterSalaryMap)


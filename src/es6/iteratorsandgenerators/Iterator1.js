const arr = ['a', 'b'];
const iterator = arr[Symbol.iterator]();

for (const x of iterator) {
    console.log(x); // a
    //break;
}


let array2 = [10,20,30,40,50];
let iterator2 = array2[Symbol.iterator]();

for(let j of iterator2){
    console.log(j)
}
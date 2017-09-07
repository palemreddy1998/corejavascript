//The for...of statement creates a loop iterating over iterable objects (including Array, Map, Set, String, TypedArray, arguments object//and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

let iterable = [10, 20, 30];

for(let a of iterable){
  console.log("first iterable a->"+a);
}

//You can use const instead of let too, if you don't reassign the variable inside the block.
for(const b of iterable){
  console.log("second iterable b->"+b);
}

//iterating over a string
let iterable3 = 'boo';

for(let c of iterable3){
  console.log("third iterable c->"+c);
}

//iterating over a typed Array
let iterable4 = new Uint8Array([0x00, 0xff]);

for(let d of iterable4){
  console.log("fourth iterable d->"+d);
}

//iterating over a map
let iterable5 = new Map([['a', 1], ['b', 2], ['c', 3]]);

for(let [key,value] of iterable5){
  console.log("fifth iterable key->"+key+" value->"+value);
}

for (let entry of iterable5) {
  console.log(entry);
}

//iterating over a map
let iterable6 = new Set([1, 1, 2, 2, 3, 3]);

for(let e of iterable6){
  console.log(e);
}

//Iterating over a DOM collection
//Iterating over DOM collections like NodeList: the following example adds a read class to paragraphs that are direct descendants of an //article:
let articleParagraphs = document.querySelectorAll('article > p');

for (let paragraph of articleParagraphs) {
  //console.log(paragraph.classList.add('read'));
  console.log(paragraph);
}


//Closing iterators
//In for...of loops, abrupt iteration termination can be caused by break, continue[4], throw or return[5]. In these cases, the iterator //is closed.
function* foo(){ 
  yield 1; 
  yield 2; 
  yield 3; 
}; 

for (let o of foo()) { 
  console.log(o); 
  break; // closes iterator, triggers return
}

//Iterating over generators
function* gen1(){
  yield 100;
  yield 200;
  yield 300;
  yield* anotherGenerator(400);//* in yeild only if you need to call another generator
}

function* anotherGenerator(i){
  yield 500+i;
}

for(let p of gen1()){
  console.log("generators p ->"+p);
}

console.log("generator with next ->"+gen1().next().value);
console.log("generator with next ->"+gen1().next().value);
console.log("generator with next ->"+gen1().next().value);
console.log("generator with next ->"+gen1().next().value);


//Do not reuse generators
//Generators should not be re-used, even if the for...of loop is terminated early, for example via the break keyword. Upon exiting a loop//, the generator is closed and trying to iterate over it again does not yield any further results.

var gen = (function *(){
  yield 1;
  yield 2;
  yield 3;
})();
for (let o of gen) {
  console.log(o);
  break;  // Closes iterator
}

// The generator should not be re-used, the following does not make sense!
for (let o of gen) {
  console.log(o); // Never called.
}

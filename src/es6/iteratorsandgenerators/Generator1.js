function* gen1() {
    yield* ["a","b","c"]
}

console.log(gen1().next());
console.log(gen1().next());
console.log(gen1().next());

for(let c of gen1()){
    console.log(c);
}
//You can think of generators as processes (pieces of code) that you can pause and resume:

function* genFunc() {
    // (A)
    console.log('First');
    yield;
    console.log('Second');
}

console.log(genFunc().next());
console.log(genFunc().next());
//generators can also receive input and send output via yield.

function* genFuncWithReturn() {
    yield 'a';
    yield 'b';
    return 'result';
}

for (const x of genFuncWithReturn()) {
    console.log(x);
}

//Throwing an exception from a generator
function* genFunc() {
    throw new Error('Problem!');
}
const genObj = genFunc();
genObj.next(); // Error: Problem!

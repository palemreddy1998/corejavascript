/*

Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.

Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead. When the iterator's next() method is called, the generator function's body is executed until the first yield expression, which specifies the value to be returned from the iterator or, with yield*, delegates to another generator function. The next() method returns an object with a value property containing the yielded value and a done property which indicates whether the generator has yielded its last value as a boolean. Calling the next() method with an argument will resume the generator function execution, replacing the yield statement where execution was paused with the argument from next(). 

A return statement in a generator, when executed, will make the generator done. If a value is returned, it will be passed back as the value. A generator which has returned will not yield any more values.
*/

//simple example
function* idMaker() {
  var index = 0;
  while (index < 3)
    yield index++;
      return true;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined

//Example with yield*
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
    return true;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
  return true;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20

//Passing arguments into Generators
function* logGenerator() {
  console.log(yield);
  console.log(yield);
  console.log(yield);
}

var gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen.next(); 
gen.next('pretzel'); // pretzel
gen.next('california'); // california
gen.next('mayonnaise'); // mayonnaise


//Return statement in a generator
function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

var gen = yieldAndReturn()
console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
console.log(gen.next()); // { value: undefined, done: true }

//Generators are not constructable
function* f() {}
//var obj = new f; // throws "TypeError: f is not a constructor"

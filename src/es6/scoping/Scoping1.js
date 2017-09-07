
//Block scoping means that you can shadow variables within a function:
function func() {
  const foo = 5;
  if (true) {
     const foo = 10; // shadows outer `foo`
     console.log(foo); // 10
  }
  console.log(foo); // 5
}

console.log(func())


// The variable is immediately initialized, by setting it to undefined. - var
//The variable remains uninitialized. - let
//const variables work similarly to let variables, but they must have an initializer (i.e., be set to a value immediately) and can’t be changed.

const arr = [];
for (var i=0; i < 3; i++) {
    arr.push(() => i);
}
console.log(arr.map(x => x())); // [3,3,3]
//Every i in the bodies of the three arrow functions refers to the same binding, which is why they all return the same value.

const arr1 = [];
for (let i=0; i < 3; i++) {
    arr1.push(() => i);
}
console.log(arr1.map(x => x())); // [0,1,2]
//This time, each i refers to the binding of one specific iteration and preserves the value that was current at that time. Therefore, each arrow function returns a different value.


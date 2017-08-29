
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

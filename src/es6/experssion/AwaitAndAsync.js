//The await operator is used to wait for a Promise. It can only be used inside an async function.
//If a Promise is passed to an await expression, it waits for the Promise's resolution and returns the resolved value.

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}


async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();

//If the value is not a Promise, it converts the value to a resolved Promise, and waits for it.
async function f2() {
  var y = await 20;
  console.log(y); // 20
}
f2();
//If the Promise is rejected, the rejected value is thrown.

async function f3() {
  try {
    var z = await Promise.reject(30);
  } catch(e) {
    console.log(e); // 30
  }
}
f3();


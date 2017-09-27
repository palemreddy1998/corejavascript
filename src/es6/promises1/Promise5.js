// A Promise is a container for an asynchronously delivered value
function asyncFunc() {
    const blank = [];
    setTimeout(() => blank.push('DONE'), 100);
    return blank;
}
const blank = asyncFunc();
// Wait until the value has been filled in
setTimeout(() => {
    const x = blank[0]; // (A)
    console.log('Result: '+x);
}, 200);

//With Promises, you don’t access the eventual value via [0] (as in line A), you use method then() and a callback.
//Inside a function, the value of this depends on how the function is called.
function f1() {
    return this;
}
// In a browser:
//f1() === window; // the window is the global object in browsers

// In Node:
console.log(f1() === global);
//console.log(f1());
let x = 3;
//var x = 3;
function func(randomize) {
    if (randomize) {
        let x = Math.random();
        //var x = Math.random();
        return x;
    }
    return x;
}
console.log(func(false)); // 3


//let and const behave more strictly and throw more exceptions
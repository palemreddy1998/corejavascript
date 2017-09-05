//First, they are less verbose than traditional function expressions:

const arr = [1, 2, 3];
const squares = arr.map(x => x * x);
console.log(squares)

// Traditional function expression:
const squares1 = arr.map(function (x) { return x * x });
//Second, their this is picked up from surroundings (lexical). Therefore, you don’t need bind() or
// that = this, anymore.
console.log(squares1)

//The following variables are all lexical inside arrow functions:
//arguments,super,this,new.target
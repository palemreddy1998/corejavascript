//Array destructuring (works for all iterable values):
const iterable = ['a', 'b'];
const [x, y] = iterable;
console.log([x, y])

//Destructuring helps with processing return values:

const [all, year, month, day] =
    /^(\d\d\d\d)-(\d\d)-(\d\d)$/
    .exec('2999-12-31');
console.log([all, year, month, day])
    

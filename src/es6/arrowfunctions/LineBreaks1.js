// const func1 = (x, y) // SyntaxError
//     => {
//     return x + y;
// };
const func2 = (x, y) => // OK
{
    return x + y;
};
const func3 = (x, y) => { // OK
    return x + y;
};

// const func4 = (x, y) // SyntaxError
//     => x + y;
// const func5 = (x, y) => // OK
// x + y;

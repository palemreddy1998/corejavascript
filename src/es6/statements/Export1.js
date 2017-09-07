function cube(x) {
    return x * x * x;
}
const foo = Math.PI + Math.SQRT2;
// exports a function declared earlier
export { cube, foo };

// exports a constant
export const foo1 = Math.sqrt(2);
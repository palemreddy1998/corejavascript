function* gen1() {
    yield* ["a","b","c"]
}

console.log(gen1().next());
console.log(gen1().next());
console.log(gen1().next());

for(let c of gen1()){
    console.log(c);
}
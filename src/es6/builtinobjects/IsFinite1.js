console.log(isFinite(Infinity));  // false
console.log(isFinite(NaN));       // false
console.log(isFinite(-Infinity)); // false

console.log(isFinite(0));         // true
console.log(isFinite(2e64));      // true
console.log(isFinite(910));       // true

console.log(isFinite(null));      // true, would've been false with the
                     // more robust Number.isFinite(null)

console.log(isFinite('0'));       // true, would've been false with the
                     // more robust Number.isFinite("0")
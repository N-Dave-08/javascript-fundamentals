// NaN means Not-A-Number, which JavaScript's way of representing
// the result of an operation that should return a number but
// cannot since there is no real number to represent it.

console.log(parseInt("")); // prints: NaN
console.log(parseFloat("some string")); // prints: NaN

// Math that cannot return a real number
console.log(Math.sqrt(-1)); // prints: NaN

// any math that involves a string (besides + since that will concatinate string)
console.log("string" * 7); // prints: NaN

// any oparations that has NaN in it
console.log(NaN * 3); // prints: NaN

// ==== how to check for NaN ====

// this does not work since these equality checks will return false
// because NaN will always return false when compared to any other value,
// even another NaN.
NaN == NaN;
NaN === NaN;

// instead of using normal equality check, we need to use isNaN()
// isNaN(value);

// isNaN will return true if the variable passed to it is NaN or
// if the variable will be Nan after it is coerced into a number.
console.log(isNaN("string")); // true
console.log(isNaN(NaN)); // true

// Number.isNaN does not do any coercion and will only return true
// if the value passes to it is NaN.
console.log(Number.isNaN("string")); // false
console.log(Number.isNaN(NaN)); // true

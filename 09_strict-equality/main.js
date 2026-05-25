// ==== loose equality ====
// checks if both values have the same values regardless of types

console.log(1 == "1");
console.log(0 == false);
console.log(0 == "");
//true

console.log(1 != "1");
// false

// good use case because it treats null and undefined as the same "empty value" check
console.log(null == undefined);
// true

// ==== strict equality ====
// checks if both values have the same values and types

console.log(1 === "1");
console.log(0 === false);
console.log(0 === "");
// false

console.log(1 === 1);
//true

console.log(1 !== "1");
// true

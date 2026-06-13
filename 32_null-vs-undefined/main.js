// ================================
// NULL vs UNDEFINED DEMO
// ================================

console.log("=== BASIC VALUES ===");

let a = null;
let b;

console.log("a (null):", a); // null
console.log("b (undefined):", b); // undefined

// ================================
// STRICT vs LOOSE EQUALITY
// ================================

console.log("\n=== EQUALITY CHECKS ===");

console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false

console.log("null == 0:", null == 0); // false
console.log("undefined == 0:", undefined == 0); // false

// ================================
// TYPE CHECKING
// ================================

console.log("\n=== TYPE CHECKING ===");

console.log("typeof null:", typeof null); // object (JS bug)
console.log("typeof undefined:", typeof undefined); // undefined

// ================================
// FUNCTION BEHAVIOR
// ================================

console.log("\n=== FUNCTION PARAMETERS ===");

function showValues(x) {
  console.log("x:", x);
}

showValues(); // undefined (missing argument)
showValues(null); // null (explicit empty value)

// ================================
// OBJECT PROPERTIES
// ================================

console.log("\n=== OBJECT PROPERTIES ===");

const user = {
  name: "Dave",
  age: undefined,
  address: null,
};

console.log("user.name:", user.name); // Dave
console.log("user.age:", user.age); // undefined
console.log("user.address:", user.address); // null
console.log("user.email:", user.email); // undefined (non-existent)

// ================================
// PRACTICAL CHECK PATTERN
// ================================

console.log("\n=== PRACTICAL CHECK ===");

function printValue(value) {
  if (value == null) {
    console.log("Value is missing (null or undefined)");
  } else {
    console.log("Value exists:", value);
  }
}

printValue(null);
printValue(undefined);
printValue("Hello");

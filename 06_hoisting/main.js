// Hoisting in JavaScript is the behavior where declarations are moved to the top of their scope during the compilation phase before code execution.

const sumConst = (a, b) => a + b;

console.log(`sumFunc(1, 2) => ${sumFunc(1, 2)}`);
console.log(`sumConst(3, 4) => ${sumConst(3, 4)}`);

// function still works even when called first before declaring
function sumFunc(a, b) {
  return a + b;
}

// hoisting also works in var

// javascript automatically do this:
// var a = undefined;
// console.log(a)
// a = 2

console.log(a); // prints: undefined

var a = "hi";

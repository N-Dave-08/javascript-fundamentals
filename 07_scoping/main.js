import { exportedVar } from "./moduleScript.js";

console.log(exportedVar);

// Variables declared inside a module are not accessible outside unless explicitly exported.
// If a variable is not exported from moduleScript.js, importing it will cause an error.
// console.log(moduleVar);

const a = 1;

function test() {
  const b = 2;
  console.log("test: ", a, b);
}

test();

// reference error because const b is defined inside the test()
// console.log(a, b);

// Global scope allows variables to be accessed from other non-module scripts.
// type="module" forces this script to defer and execute AFTER non-module scripts.
// This timing ensures 'globalVar' exists in the global scope before we try to log it.
console.log(globalVar);

// ==== block and function scope ====

function scope() {
  const a = 1;
  var c = 3;

  if (true) {
    const b = 2;
    var d = 4;
    console.log(a, b);
  }
  // console.log(a, b); error because b is declared inside the if block

  console.log(c, d); // works because var is function-scoped
}

scope();

{
  const a = "hello";

  {
    console.log(a); // works because const a is a block-scoped, and it can be accessed in the entire block
  }
}

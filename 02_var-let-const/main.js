// var is function-scoped, meaning it can be accessed anywhere
// inside the function where it is declared

if (true) {
  var varVariable = "This is true";
}

// varVariable can still be accessed outside the if block
// because var is not block-scoped

// Since there is no surrounding function,
// varVariable is declared in the global scope

// var variables can also be re-assigned by redeclaring the variable
var varVariable = "This is false";

console.log(varVariable);

// var can also be used before declaring it
console.log(varVariableSecond);

var varVariableSecond = "before declaring";

console.log(varVariableSecond);

if (true) {
  let letVariable = "This is true";
}

if (true) {
  const constVariable = "This is true const";
  let letVariable = "This is true let";
  letVariable = "This is false let";

  console.log(constVariable);
  console.log(letVariable);
}

// let and const cannot be accessed outside the if block
// because it is block-scoped
// console.log(constVariable);
// console.log(letVariable);

// let and const are mostly the same except const are not allowed to redeclare a variable
let numA = 1;
numA = 2;
console.log("let variable", numA);

// const numB = 1;
// numB = 2;

// console.log("const variable", numB);

// but const allows to change the propertis of an object
const user = { name: "Doe" };

user.name = "Alice";

console.log(user);

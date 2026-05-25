let myName = "Jacob";

// printName forms a closure because it can access
// variables from its outer (lexical) scope
function printName() {
  console.log(myName);
}

myName = "Joey";

printName();

myName = "Susan";

printName();
// closures keep access to variables from their outer scope,
// so printName always sees the current value of myName
// prints: Susan

// ==== common example ====
// outerFunction creates a scope with outerVariable
// and returns innerFunction which "remembers" outerVariable (closure)
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    // innerFunction still has access to outerVariable even after outerFunction finishes
    console.log("Outer Variable:", outerVariable);
    console.log("Inner Variable:", innerVariable);
  };
}

// outerFunction runs and returns innerFunction with outerVariable stored in closure
const newFunction = outerFunction("outside");

// innerFunction executes and still remembers outerVariable = "outside"
newFunction("inside");

// arrow function version of closure example
const outerArrowFunc = (outerArrowVariable) => {
  // returns a function that closes over outerArrowVariable
  return (innerArrowVariable) => {
    // inner function can still access outerArrowVariable due to closure
    console.log("outer arrow variable:", outerArrowVariable);
    console.log("inner arrow variable:", innerArrowVariable);
  };
};

// outerArrowFunc returns inner function with outerArrowVariable preserved (closure)
const newArrowFunction = outerArrowFunc("outside");

// inner function executes and still remembers outerArrowVariable = "outside"
newArrowFunction("inside");

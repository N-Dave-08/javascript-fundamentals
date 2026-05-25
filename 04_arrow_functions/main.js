{
  function sum(a, b) {
    return a + b;
  }

  let sum = (a, b) => a + b;

  function isPositive(number) {
    return number >= 0;
  }

  let isPositive = (number) => number >= 0;

  function randomNumber() {
    return Math.random;
  }

  let randomNumber = () => Math.random;

  document.addEventListener("click", function () {
    console.log("click");
  });

  document.addEventListener("click", () => console.log("click"));
}

class Person {
  constructor(name) {
    // this refers to the object being created
    this.name = name;
  }

  printNameArrow() {
    setTimeout(() => {
      // Arrow functions do NOT create their own `this`
      // They inherit `this` from the surrounding scope

      // Here, `this` still refers to the person object
      console.log("Arrow: " + this.name);
    }, 100);
  }

  printNameFunction() {
    setTimeout(function () {
      // Regular functions create their own `this`

      // Inside setTimeout, this no longer refers
      // to the person object

      // In browsers, `this` usually becomes `window`
      // so this.name is undefined or empty
      console.log("Function: " + this.name);
    }, 100);
  }
}

let person = new Person("Bob");

person.printNameArrow(); // Prints: Arrow: Bob
person.printNameFunction(); // Prints: Function:

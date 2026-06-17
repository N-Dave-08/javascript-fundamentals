// =====================================================
// ===== Higher-Order Functions (HOF)
// =====================================================
//
// A Higher-Order Function is a function that:
//
// 1. Takes another function as an argument (callback)
// 2. Returns another function
// 3. Or both
//
// Callback = the function you PASS in
// HOF = the function that ACCEPTS or RETURNS functions
//
// =====================================================

// =====================================================
// ===== Passing a Function as an Argument
// =====================================================

function greet(name) {
  console.log(`Hello ${name}`);
}

// HOF (because it receives a function as parameter)
function processUser(callback) {
  callback("Dave"); // callback function is executed here
}

// callback = greet
processUser(greet);

// =====================================================
// ===== Another Example
// =====================================================

function add(a, b) {
  return a + b;
}

// HOF (takes function as argument)
function calculate(callback) {
  return callback(10, 20);
}

// callback = add
console.log(calculate(add));

// =====================================================
// ===== Returning a Function
// =====================================================

// HOF (returns a function)
function multiplyBy(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = multiplyBy(2);

console.log(double(5));

// =====================================================
// ===== Function Factory
// =====================================================

function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const triple = createMultiplier(3);

console.log(triple(5));

// =====================================================
// ===== forEach
// =====================================================

const numbers = [1, 2, 3];

// HOF = forEach
// callback = function(number)
numbers.forEach(function (number) {
  console.log(number);
});

// =====================================================
// ===== map
// =====================================================

// HOF = map
// callback = function(number)
const doubled = numbers.map(function (number) {
  return number * 2;
});

// =====================================================
// ===== filter
// =====================================================

// HOF = filter
// callback = function(number)
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

// =====================================================
// ===== find
// =====================================================

const users = [
  { id: 1, name: "Dave" },
  { id: 2, name: "Bob" },
];

// HOF = find
// callback = function(user)
const user = users.find(function (user) {
  return user.id === 2;
});

// =====================================================
// ===== some
// =====================================================

// HOF = some
// callback = function(number)
const hasEven = numbers.some(function (number) {
  return number % 2 === 0;
});

// =====================================================
// ===== every
// =====================================================

const allEven = [2, 4, 6];

// HOF = every
// callback = function(number)
allEven.every(function (number) {
  return number % 2 === 0;
});

// =====================================================
// ===== reduce
// =====================================================

// HOF = reduce
// callback = function(sum, number)
const total = numbers.reduce(function (sum, number) {
  return sum + number;
}, 0);

// =====================================================
// ===== sort
// =====================================================

// HOF = sort
// callback = function(a, b)
const ages = [30, 20, 40, 10];

ages.sort(function (a, b) {
  return a - b;
});

// =====================================================
// ===== Advanced Example: Logger Wrapper
// =====================================================

// HOF (returns a function)
function withLogging(callback) {
  return function (...args) {
    console.log("Function started");

    // callback = original function passed in
    const result = callback(...args);

    console.log("Function ended");

    return result;
  };
}

function subtract(a, b) {
  return a - b;
}

const loggedSubtract = withLogging(subtract);

// callback inside HOF = subtract
console.log(loggedSubtract(10, 5));

// =====================================================
// ===== Advanced Example: Execute Multiple Times
// =====================================================

// HOF = repeat
// callback = function inside repeat
function repeat(callback, times) {
  for (let i = 0; i < times; i++) {
    callback();
  }
}

repeat(function () {
  console.log("Hello");
}, 3);

// =====================================================
// ===== Real World Use Case #1
// =====================================================

// HOF = addEventListener
// callback = function inside
// button.addEventListener("click", function () {
//   console.log("Button clicked");
// });

// =====================================================
// ===== Real World Use Case #2
// =====================================================

// HOF = setTimeout
// callback = function inside
setTimeout(function () {
  console.log("Executed after 1 second");
}, 1000);

// =====================================================
// ===== Real World Use Case #3
// =====================================================

const apiUsers = [
  { firstName: "Dave", lastName: "Cruz" },
  { firstName: "Bob", lastName: "Smith" },
];

// HOF = map
// callback = function(user)
const formattedUsers = apiUsers.map(function (user) {
  return {
    fullName: `${user.firstName} ${user.lastName}`,
  };
});

// =====================================================
// ===== Real World Use Case #4
// =====================================================

// HOF = filter
// callback = function(product)
const products = [
  { name: "Laptop", inStock: true },
  { name: "Phone", inStock: false },
  { name: "Keyboard", inStock: true },
];

const availableProducts = products.filter(function (product) {
  return product.inStock;
});

// =====================================================
// ===== Custom Higher-Order Function
// =====================================================

// HOF = execute
// callback = function inside execute
function execute(callback) {
  console.log("Before callback");

  callback();

  console.log("After callback");
}

execute(function () {
  console.log("Inside callback");
});

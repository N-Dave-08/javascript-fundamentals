// =====================================================
// ===== Higher-Order Functions (HOF)
// =====================================================
//
// A Higher-Order Function is a function that:
//
// 1. Takes another function as an argument.
// 2. Returns another function.
// 3. Or both.
//
// Functions in JavaScript are first-class citizens,
// meaning they can be:
//
// - stored in variables
// - passed to functions
// - returned from functions
//
// =====================================================

// =====================================================
// ===== Passing a Function as an Argument
// =====================================================

function greet(name) {
  console.log(`Hello ${name}`);
}

function processUser(callback) {
  callback("Dave");
}

processUser(greet);

// =====================================================
// ===== Another Example
// =====================================================

function add(a, b) {
  return a + b;
}

function calculate(callback) {
  return callback(10, 20);
}

console.log(calculate(add));

// 30

// =====================================================
// ===== Returning a Function
// =====================================================

function multiplyBy(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = multiplyBy(2);

console.log(double(5));

// 10

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

// 15

// =====================================================
// ===== forEach
// =====================================================

const numbers = [1, 2, 3];

numbers.forEach(function (number) {
  console.log(number);
});

// 1
// 2
// 3

// =====================================================
// ===== map
// =====================================================

const doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(doubled);

// [2, 4, 6]

// =====================================================
// ===== filter
// =====================================================

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

// [2]

// =====================================================
// ===== find
// =====================================================

const users = [
  {
    id: 1,
    name: "Dave",
  },
  {
    id: 2,
    name: "Bob",
  },
];

const user = users.find(function (user) {
  return user.id === 2;
});

console.log(user);

// { id: 2, name: 'Bob' }

// =====================================================
// ===== some
// =====================================================

const hasEven = numbers.some(function (number) {
  return number % 2 === 0;
});

console.log(hasEven);

// true

// =====================================================
// ===== every
// =====================================================

const allEven = [2, 4, 6];

console.log(
  allEven.every(function (number) {
    return number % 2 === 0;
  }),
);

// true

// =====================================================
// ===== reduce
// =====================================================

const total = numbers.reduce(function (sum, number) {
  return sum + number;
}, 0);

console.log(total);

// 6

// =====================================================
// ===== sort
// =====================================================

const ages = [30, 20, 40, 10];

ages.sort(function (a, b) {
  return a - b;
});

console.log(ages);

// [10, 20, 30, 40]

// =====================================================
// ===== Advanced Example:
// ===== Logger Wrapper
// =====================================================

function withLogging(callback) {
  return function (...args) {
    console.log("Function started");

    const result = callback(...args);

    console.log("Function ended");

    return result;
  };
}

function subtract(a, b) {
  return a - b;
}

const loggedSubtract = withLogging(subtract);

console.log(loggedSubtract(10, 5));

// Function started
// Function ended
// 5

// =====================================================
// ===== Advanced Example:
// ===== Execute Multiple Times
// =====================================================

function repeat(callback, times) {
  for (let i = 0; i < times; i++) {
    callback();
  }
}

repeat(function () {
  console.log("Hello");
}, 3);

// Hello
// Hello
// Hello

// =====================================================
// ===== Real World Use Case #1:
// ===== Event Listeners
// =====================================================

// button.addEventListener(
//   "click",
//   function () {
//     console.log(
//       "Button clicked"
//     );
//   }
// );

// addEventListener is a Higher-Order Function
// because it accepts another function.

// =====================================================
// ===== Real World Use Case #2:
// ===== setTimeout
// =====================================================

setTimeout(function () {
  console.log("Executed after 1 second");
}, 1000);

// =====================================================
// ===== Real World Use Case #3:
// ===== API Data Transformation
// =====================================================

const apiUsers = [
  {
    firstName: "Dave",
    lastName: "Cruz",
  },
  {
    firstName: "Bob",
    lastName: "Smith",
  },
];

const formattedUsers = apiUsers.map(function (user) {
  return {
    fullName: `${user.firstName} ${user.lastName}`,
  };
});

console.log(formattedUsers);

// [
//   { fullName: 'Dave Cruz' },
//   { fullName: 'Bob Smith' }
// ]

// =====================================================
// ===== Real World Use Case #4:
// ===== Filtering Data
// =====================================================

const products = [
  {
    name: "Laptop",
    inStock: true,
  },
  {
    name: "Phone",
    inStock: false,
  },
  {
    name: "Keyboard",
    inStock: true,
  },
];

const availableProducts = products.filter(function (product) {
  return product.inStock;
});

console.log(availableProducts);

// =====================================================
// ===== Real World Use Case #5:
// ===== Express Middleware
// =====================================================

// app.use(
//   function (req, res, next) {
//     console.log(req.url);
//
//     next();
//   }
// );

// Middleware is a Higher-Order Function
// because Express accepts a function.

// =====================================================
// ===== Real World Use Case #6:
// ===== React
// =====================================================

// products.map(function (product) {
//   return (
//     <ProductCard
//       key={product.id}
//       product={product}
//     />
//   );
// });

// =====================================================
// ===== Custom Higher-Order Function
// =====================================================

function execute(callback) {
  console.log("Before callback");

  callback();

  console.log("After callback");
}

execute(function () {
  console.log("Inside callback");
});

// Before callback
// Inside callback
// After callback

// =====================================================
// ===== Most Common Higher-Order Functions =====
//
// forEach()
// map()
// filter()
// find()
// some()
// every()
// reduce()
// sort()
//
// =====================================================

// =====================================================
// ===== Mental Model
//
// Normal Function
// ↓
// Works with values.
//
// Higher-Order Function
// ↓
// Works with functions.
//
// =====================================================

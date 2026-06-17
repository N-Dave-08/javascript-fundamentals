function* simpleGenerator() {
  // Runs until the first yield
  console.log("Before 1");
  yield 1; // Pause here and return 1

  // Continues from where it paused
  console.log("After 1");
  console.log("Before 2");
  yield 2; // Pause here and return 2

  // Continues again
  console.log("After 2");
  console.log("Before 3");
  yield 3; // Pause here and return 3

  // Runs only after the final next()
  console.log("After 3");
}

// Creates a new generator object.
// Nothing inside the function runs yet.
const generatorObject = simpleGenerator();

// Creates another completely separate generator.
const generatorObject2 = simpleGenerator();

// Starts executing until `yield 1`
console.log(generatorObject.next());
// Output:
// Before 1
// { value: 1, done: false }

// Resumes after `yield 1` and pauses at `yield 2`
console.log(generatorObject.next());
// Output:
// After 1
// Before 2
// { value: 2, done: false }

// This is a different generator, so it starts from the beginning again.
console.log(generatorObject2.next());
// Output:
// Before 1
// { value: 1, done: false }

// Continues from its own paused state.
console.log(generatorObject2.next());
// Output:
// After 1
// Before 2
// { value: 2, done: false }

// ===== Use Case: Generating IDs one at a time =====

function* generateId() {
  let id = 1;

  // Keep generating IDs forever
  while (true) {
    // Return the current ID and pause here
    yield id;

    // Runs when next() is called again
    id++;
  }
}

// Create a new generator instance
const generatorId = generateId();

// Each next() resumes the generator and returns the next ID
console.log(generatorId.next()); // { value: 1, done: false }
console.log(generatorId.next()); // { value: 2, done: false }
console.log(generatorId.next()); // { value: 3, done: false }
console.log(generatorId.next()); // { value: 4, done: false }
console.log(generatorId.next()); // { value: 5, done: false }
console.log(generatorId.next()); // { value: 6, done: false }
console.log(generatorId.next()); // { value: 7, done: false }
// and so on...

// Create another generator instance
const generatorId2 = generateId();

// Starts back at 1 because this is a completely new generator
console.log(generatorId2.next()); // { value: 1, done: false }

// ===== Iterator Example =====

const names = ["Bob", "John", "Jane"];

// Get the array's iterator
const iterator = names[Symbol.iterator]();

// Each next() returns the next item in the array
console.log(iterator.next()); // { value: "Bob", done: false }
console.log(iterator.next()); // { value: "John", done: false }
console.log(iterator.next()); // { value: "Jane", done: false }

// No more items left
console.log(iterator.next()); // { value: undefined, done: true }

// ===== Custom Iterator =====

function createIterator(array) {
  let index = 0;

  return {
    next() {
      // If there are still items left
      if (index < array.length) {
        return {
          value: array[index++],
          done: false,
        };
      }

      // No more items left
      return {
        value: undefined,
        done: true,
      };
    },
  };
}

const customIterator = createIterator(["Bob", "John", "Jane"]);

console.log(customIterator.next()); // { value: "Bob", done: false }
console.log(customIterator.next()); // { value: "John", done: false }
console.log(customIterator.next()); // { value: "Jane", done: false }
console.log(customIterator.next()); // { value: undefined, done: true }

// ===== Passing Values into a Generator =====

function* greet() {
  // Pause and wait for a value
  const name = yield;

  // Runs after next("Dave")
  console.log(`Hello ${name}`);
}

const greetGenerator = greet();

greetGenerator.next(); // Start the generator
greetGenerator.next("Dave"); // Pass a value into the generator

// ===== yield* =====

function* numbers() {
  yield 1;
  yield 2;
}

function* allNumbers() {
  // Yield everything from another generator
  yield* numbers();

  yield 3;
  yield 4;
}

const allNumbersGenerator = allNumbers();

console.log(allNumbersGenerator.next()); // { value: 1, done: false }
console.log(allNumbersGenerator.next()); // { value: 2, done: false }
console.log(allNumbersGenerator.next()); // { value: 3, done: false }
console.log(allNumbersGenerator.next()); // { value: 4, done: false }
console.log(allNumbersGenerator.next()); // { value: undefined, done: true }

// ===== return() =====

function* count() {
  yield 1;
  yield 2;
  yield 3;
}

const countGenerator = count();

console.log(countGenerator.next()); // { value: 1, done: false }

// End the generator immediately
console.log(countGenerator.return("Finished"));
// { value: "Finished", done: true }

// Generator is already finished
console.log(countGenerator.next());
// { value: undefined, done: true }

// ===== throw() =====

function* errorGenerator() {
  try {
    yield 1;
    yield 2;
  } catch (error) {
    console.log("Caught:", error.message);
  }
}

const errorGen = errorGenerator();

console.log(errorGen.next()); // { value: 1, done: false }

// Throw an error inside the generator
errorGen.throw(new Error("Something went wrong"));

// ===== for...of =====

function* colors() {
  yield "red";
  yield "green";
  yield "blue";
}

// for...of automatically calls next()
for (const color of colors()) {
  console.log(color);
}

// ===== Generator is an Iterator =====

function* letters() {
  yield "A";
  yield "B";
}

const letterGenerator = letters();

// Generators already have a next() method
console.log(letterGenerator.next()); // { value: "A", done: false }
console.log(letterGenerator.next()); // { value: "B", done: false }
console.log(letterGenerator.next()); // { value: undefined, done: true }

// ===== Real World Use Case =====

// Pretend these came from an API
const pages = [["Post 1", "Post 2"], ["Post 3", "Post 4"], ["Post 5"]];

function* getPosts() {
  // Yield one page at a time
  for (const page of pages) {
    yield page;
  }
}

const postsGenerator = getPosts();

// User clicks "Load More"
console.log(postsGenerator.next().value);
// ["Post 1", "Post 2"]

// User clicks "Load More" again
console.log(postsGenerator.next().value);
// ["Post 3", "Post 4"]

// User clicks "Load More" again
console.log(postsGenerator.next().value);
// ["Post 5"]

// No more pages left
console.log(postsGenerator.next());
// { value: undefined, done: true }

// Why use a generator here?

// Without generators:

// Load everything at once
// const allPosts = [
//   "Post 1",
//   "Post 2",
//   "Post 3",
//   "Post 4",
//   "Post 5",
// ];

// You might fetch or store more data than the user needs.

// With a generator:

// Load data only when needed.
// Keep track of the current page automatically.
// Pause until the user requests more data.

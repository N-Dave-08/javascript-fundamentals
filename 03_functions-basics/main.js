function print() {
  console.log("Hello");
  console.log("Bye");
}

print();

// parameters are the variables listed in the function definition
// in this case, the parameters are a and b
function add(a, b) {
  console.log(a + b);
}

// arguments are the actual values passed into the function when calling it
// in this case, the arguments are 1 and 2
add(1, 2);

function sum(a, b) {
  return a + b;

  // this part will never run because it is after return
  console.log("Never will run");
}

console.log(sum(2, 2));

function sayWords(a, b) {
  console.log(a);
  console.log(b);
}

sayWords("Hi");
// Prints:
// Hi
// undefined

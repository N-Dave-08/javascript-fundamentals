// callback is a function that is passed as an argument to another function, so it can be executed later.

// functions in javascript are just objects
// objects that you can call with parenthesis and pass in arguments in

function print(value) {
  console.log(value);
}

console.dir(print);
console.log({ name: "Jacob", age: 24 });

print("hello");

function useCallback(callback) {
  callback("Hi");
}

// same function reference assigned to another variable
// and then invoked later
// const callback = print;
// callback("Hi");

print.bye = "bye";
console.log(print.bye);

useCallback(print); // passing the function reference (not executed)
// useCallback(print()); // executes print immediately, then passes its return value (undefined) to useCallback

// using arrow functions
useCallback((value) => console.log(value));

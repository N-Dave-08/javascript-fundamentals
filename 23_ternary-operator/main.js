const num = 4;
let result;

// if (num >= 50) {
//   result = "not to fifty";
// } else {
//   result = "it could be worse";
// }

// Good use case of a ternary operator because it is based on
// two possible outcomes and returns a value.
result = num >= 50 ? "not to fifty" : "it could be worse";
console.log(result);

// converting else if
// but this is a bad practice because it is much harder to read than a number if statement
// result =
//   num === 0
//     ? "you have nothing"
//     : num < 10
//       ? "you have very little"
//       : "you have a lot";

console.log(result);

const user = {};

// Bad use case of a ternary operator because it is not being used
// to return or assign a value.
// user.valid ? user.save() : user.printErrors();

// Better to use an if statement here because we are executing
// two different actions (saving or printing errors).
if (user.valid) {
  user.save();
} else {
  user.printErrors();
}

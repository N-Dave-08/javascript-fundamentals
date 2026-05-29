// if statements = if a condition is true, execute some code
//                 if not, do something else

let age = 25; // prints "legal age"
// let age = 16; // prints "not legal age"

if (age >= 18) {
  console.log("legal age");
} else {
  console.log("not legal age");
}

let isStudent = true;
// if true, prints "you are a student" if
// if false, prints "you are not a student"

if (isStudent) {
  console.log("you are a student");
} else {
  console.log("you are not a student");
}

// ==== nested if statements ====
let userAge = 0;
let hasLicense = true;

if (userAge >= 16) {
  console.log("you are old enough to drive");

  if (hasLicense) {
    console.log("you have your license");
  } else {
    console.log(
      "you are old enough to have license, but you do not have your license yet",
    );
  }
} else {
  console.log("you are too young for license");
}

// ==== else if ====
if (userAge >= 18) {
  console.log("you are allowed to enter this site");
} else if (userAge === 0) {
  console.log("you cannot enter, you were just born");
} else if (userAge < 0) {
  console.log("your age cannot be below zero");
} else {
  console.log("you must be 18+ to enter this site");
}

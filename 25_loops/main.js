// loops - way to repeat a block of code multiple times

// for loop
console.log("==== for loop ====");
for (
  let i = 1; // initial expression, i is short for index
  i <= 3; // condition, the loop will run as long as the condition is true
  i++ // increment expression
) {
  console.log("Hello world", i);
}

// displaying odd numbers
console.log("==== displaying odd numbers ====");
for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) console.log("index =", i);
}

// from 5 to 1
console.log("==== 5 to 1 ====");
for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log("index =", i);
}

// break
console.log("==== break ====");
for (let i = 1; i <= 5; i++) {
  console.log("index =", i);

  // stop when index reached 3
  if (i === 3) break;
}

// loop through an array
console.log("==== loop through an array ====");
const fruits = ["apple", "banana", "orange", "pineapple"];

for (let i = 0; i < fruits.length; i++) {
  const element = fruits[i];
  console.log(element);
}

// another way, for of loop
// easier but slower than for loop
console.log("==== for of loop ====");
for (fruit of fruits) {
  console.log(fruit);
}

// cleaner code
console.log("==== cleaner for of ====");
for (fruit of fruits) console.log(fruit);

// for in loop
console.log("==== for in loop ====");
const user = { firstName: "John", lastName: "Doe" };
for (key in user) console.log(user[key]);
// equivalent to user[firstName], user[LastName]

// while loop
console.log("==== while loop ====");
{
  let i = 0;
  while (
    i < 10 // condition, execute the code until this is true
  ) {
    i++;
    // if (i === 5) break; // if reaches index 5, stop the loop
    if (i === 5) continue; // stop in index 5, then continue to the next index
    console.log(i);
  }
}

// do while loop
console.log("==== do while loop ====");
{
  let i = 0;
  do {
    // do always runs the first time before checking the condition
    i++;
    console.log(i);
  } while (i < 10);
}

// for each function
console.log("==== for each ====");
const animals = ["dog", "fish", "cat", "bird", "fox"];

animals.forEach((animal) => {
  console.log(animal);
});

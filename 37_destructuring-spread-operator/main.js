const letters = ["A", "B", "C", "D", "E", "F"];
const nums = ["1", "2", "3", "4", "5", "6"];

// const a = letters[0];
// const b = letters[1];
const [A, B] = letters; // cleaner way
const [a, , c, ...rest] = letters;

console.log(A); // prints: A
console.log(B); // prints: B
console.log(c); // prints: C
console.log(rest); // prints: the rest of the letters ['D', 'E', 'F']

const allElements = [...letters, ...nums];

console.log(allElements); // prints: ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6']

const newArray = letters.concat(nums);

console.log(newArray); // prints: ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6']

function math(a, b) {
  return [a + b, a * b, a / b];
}

const [sum, multiply, division = "no division"] = math(2, 3);

console.log(sum); // prints: 5
console.log(multiply); //prints: 6
console.log(division); // prints: 0.666666 or "no division" if there is not value assigned

const personOne = {
  name: "Charlie",
  age: 42,
  address: {
    city: "Quezon City",
    state: "NCR",
  },
};

const personTwo = {
  name: "Bob",
  age: 28,
  favoriteFood: "Pie",
  address: {
    city: "Manila",
    state: "NCR",
  },
};

const personThree = {
  age: 33,
  favoriteFood: "Bacon",
};

const {
  name: firstName = "John", // defaults to "John"
  age,
  favoriteFood = "Cake", // defaults to "Cake"
  //   ...rest
  address: { city },
} = personTwo;

const combined = { ...personOne, ...personThree }; // elements from personThree overrides elements from personOne

console.log(firstName);
console.log(age);
console.log(favoriteFood);
console.log(city);

console.log(combined);

function printUser({ name, age, favoriteFood = "Chicken" }) {
  console.log(
    `Name is: ${name}. Age is ${age}. Favorite food is ${favoriteFood}`,
  );
}

printUser(personOne);

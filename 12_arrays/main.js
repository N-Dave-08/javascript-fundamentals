const a = ["apple", "banana", "orange", "grape"];

a.push("mango"); // adds mango
a.push(3); // we can add any type of value
a.push([1, "tuna"]); // adding aray inside an array

console.log(a);
console.log(a[0]); // prints: apple
console.log(a[4][0]); // prints: m of "mango"
console.log(a[6][1]); // prints: tuna of the nested array

const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

// filter creates a new array based on the condition
const filteredItems = items.filter((item) => item.price <= 100);
console.log(filteredItems);

// map creates a new array by transforming each element
// from the original array
const itemNames = items.map((item) => item.name);
console.log(itemNames);

// find returns the first element that matches the condition.
// If no element matches, it returns undefined.
const foundItems = items.find((item) => item.name === "Book");
console.log(foundItems);

// forEach executes a function once for each element in the array.
// Unlike map() or filter(), it does not return a new array.
items.forEach((item) => {
  console.log(item.name);
});

// some checks if at least one element passes the condition
const hasCheapItems = items.some((item) => item.price <= 100);
console.log(hasCheapItems); // true

// check if every single item pass the condition
const hasExpensiveItems = items.every((item) => item.price <= 100);
console.log(hasExpensiveItems);

// reduce() combines all array items into a single value
const totalPrice = items.reduce(
  (
    currentTotal, // accumulated value from previous iteration
    item, // current item in the array
  ) => item.price + currentTotal, // add current item's price to accumulated total
  0, // initial value of currentTotal
);

console.log(totalPrice);

// reduce() equivalent for getting the total price with the use of for loop
let forTotalPrice = 0;

for (let i = 0; i < items.length; i++) {
  forTotalPrice = forTotalPrice + items[i].price;
}

console.log(forTotalPrice);

// includes() checks if an array contains the given value
const nums = [1, 2, 3, 4, 5];

const includesTwo = items.includes(2);
console.log(includesTwo); // true, because nums includes 2

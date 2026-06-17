// =====================================================
// ===== Creating a Map =====
// =====================================================

// Create an empty map
const person = new Map();

console.log(person); // Map(0) {}

// =====================================================
// ===== Adding Values =====
// =====================================================

// Add key-value pairs
person.set("name", "Dave");
person.set("age", 22);
person.set("country", "Philippines");

console.log(person);

// =====================================================
// ===== Getting Values =====
// =====================================================

console.log(person.get("name")); // Dave
console.log(person.get("age")); // 22

// =====================================================
// ===== Checking if a Key Exists =====
// =====================================================

console.log(person.has("name")); // true
console.log(person.has("address")); // false

// =====================================================
// ===== Number of Entries =====
// =====================================================

console.log(person.size); // 3

// =====================================================
// ===== Deleting a Key =====
// =====================================================

person.delete("country");

console.log(person);

// =====================================================
// ===== Clearing the Entire Map =====
// =====================================================

// person.clear();
// console.log(person);

// =====================================================
// ===== Creating a Map with Initial Values =====
// =====================================================

const user = new Map([
  ["name", "Bob"],
  ["age", 30],
  ["isAdmin", true],
]);

console.log(user);

// =====================================================
// ===== Iterating Through a Map =====
// =====================================================

// Each item is [key, value]
for (const [key, value] of user) {
  console.log(key, value);
}

// =====================================================
// ===== Iterating Through Keys =====
// =====================================================

for (const key of user.keys()) {
  console.log(key);
}

// =====================================================
// ===== Iterating Through Values =====
// =====================================================

for (const value of user.values()) {
  console.log(value);
}

// =====================================================
// ===== Iterating Through Entries =====
// =====================================================

for (const entry of user.entries()) {
  console.log(entry);
}

// =====================================================
// ===== Why Map Instead of Object? =====
// =====================================================

const object = {};

object[1] = "One";
object["1"] = "Another One";

console.log(object);
// { '1': 'Another One' }

// Object keys become strings.

const map = new Map();

map.set(1, "One");
map.set("1", "Another One");

console.log(map);
// Map(2) {
//   1 => 'One',
//   '1' => 'Another One'
// }

// =====================================================
// ===== Objects as Keys =====
// =====================================================

const admin = {
  id: 1,
};

const roles = new Map();

// Use an object as the key
roles.set(admin, "Administrator");

console.log(roles.get(admin));
// Administrator

// =====================================================
// ===== Arrays as Keys =====
// =====================================================

const numbers = [1, 2, 3];

const arrayMap = new Map();

arrayMap.set(numbers, "Some numbers");

console.log(arrayMap.get(numbers));
// Some numbers

// =====================================================
// ===== Functions as Keys =====
// =====================================================

function sayHello() {}

const functionMap = new Map();

functionMap.set(sayHello, "Greeting function");

console.log(functionMap.get(sayHello));

// =====================================================
// ===== Advanced Example: Frequency Counter =====
// =====================================================

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = new Map();

for (const fruit of fruits) {
  // Get current count
  const currentCount = fruitCount.get(fruit) ?? 0;

  // Update count
  fruitCount.set(fruit, currentCount + 1);
}

console.log(fruitCount);

// Output:
// Map(3) {
//   'apple' => 3,
//   'banana' => 2,
//   'orange' => 1
// }

// =====================================================
// ===== Converting Object -> Map =====
// =====================================================

const personObject = {
  name: "Dave",
  age: 22,
};

const personMap = new Map(Object.entries(personObject));

console.log(personMap);

// =====================================================
// ===== Converting Map -> Object =====
// =====================================================

const backToObject = Object.fromEntries(personMap);

console.log(backToObject);

// =====================================================
// ===== Reference Equality (VERY IMPORTANT) =====
// =====================================================

const users = new Map();

users.set({ id: 1 }, "Dave");

// Different object in memory
console.log(users.get({ id: 1 }));
// undefined

const dave = {
  id: 1,
};

users.set(dave, "Dave");

console.log(users.get(dave));
// Dave

// =====================================================
// ===== Real World Use Case #1: API Cache =====
// =====================================================

const userCache = new Map();

async function getUser(id) {
  // Return cached user
  if (userCache.has(id)) {
    console.log("From cache");

    return userCache.get(id);
  }

  console.log("Fetching user...");

  // Pretend this came from an API
  const user = {
    id,
    name: `User ${id}`,
  };

  // Save to cache
  userCache.set(id, user);

  return user;
}

// getUser(1);
// getUser(1);
// getUser(1);

// Output:
// Fetching user...
// From cache
// From cache

// =====================================================
// ===== Real World Use Case #2: User Sessions =====
// =====================================================

const sessions = new Map();

sessions.set("abc123", {
  userId: 1,
});

sessions.set("xyz789", {
  userId: 2,
});

console.log(sessions.get("abc123"));

// { userId: 1 }

// =====================================================
// ===== Real World Use Case #3: Graph =====
// =====================================================

const graph = new Map();

graph.set("A", ["B", "C"]);
graph.set("B", ["A", "D"]);
graph.set("C", ["A"]);
graph.set("D", ["B"]);

console.log(graph);

// =====================================================
// ===== Real World Use Case #4: Shopping Cart =====
// =====================================================

const cart = new Map();

// productId => quantity
cart.set(101, 2);
cart.set(205, 1);
cart.set(101, 3);

console.log(cart);

// Add one more item
const currentQuantity = cart.get(205) ?? 0;

cart.set(205, currentQuantity + 1);

console.log(cart);

// =====================================================
// ===== Nested Maps =====
// =====================================================

const employees = new Map();

employees.set(1, new Map());

employees.get(1).set("name", "Dave");

employees.get(1).set("role", "Developer");

console.log(employees);

// =====================================================
// ===== Most Common Methods =====
//
// map.set(key, value)
// map.get(key)
// map.has(key)
// map.delete(key)
// map.clear()
// map.size
// map.keys()
// map.values()
// map.entries()
//
// =====================================================

// =====================================================
// ===== Creating a Set =====
// =====================================================

// Create an empty set
const set = new Set();

console.log(set); // Set(0) {}

// =====================================================
// ===== Adding Values =====
// =====================================================

// Add unique values
set.add(1);
set.add(2);
set.add(3);

console.log(set);
// Set(3) { 1, 2, 3 }

// =====================================================
// ===== Duplicate Values Are Ignored =====
// =====================================================

set.add(1);
set.add(2);

console.log(set);
// Still:
// Set(3) { 1, 2, 3 }

// =====================================================
// ===== Creating a Set from an Array =====
// =====================================================

const numbersSet = new Set([1, 2, 2, 3, 3, 4]);

console.log(numbersSet);
// Set(4) { 1, 2, 3, 4 }

// =====================================================
// ===== Checking if a Value Exists =====
// =====================================================

console.log(numbersSet.has(2)); // true
console.log(numbersSet.has(100)); // false

// =====================================================
// ===== Number of Values =====
// =====================================================

console.log(numbersSet.size); // 4

// =====================================================
// ===== Deleting Values =====
// =====================================================

numbersSet.delete(2);

console.log(numbersSet);
// Set(3) { 1, 3, 4 }

// =====================================================
// ===== Clearing the Entire Set =====
// =====================================================

// numbersSet.clear();
// console.log(numbersSet);

// =====================================================
// ===== Iterating Through a Set =====
// =====================================================

const fruitsSet = new Set(["apple", "banana", "orange"]);

for (const fruit of fruitsSet) {
  console.log(fruit);
}

// apple
// banana
// orange

// =====================================================
// ===== values() =====
// =====================================================

for (const value of fruitsSet.values()) {
  console.log(value);
}

// =====================================================
// ===== keys() =====
//
// In a Set, keys and values are the same.
// =====================================================

for (const key of fruitsSet.keys()) {
  console.log(key);
}

// =====================================================
// ===== entries() =====
// =====================================================

for (const entry of fruitsSet.entries()) {
  console.log(entry);
}

// [ 'apple', 'apple' ]
// [ 'banana', 'banana' ]
// [ 'orange', 'orange' ]

// =====================================================
// ===== Array -> Set =====
// =====================================================

const duplicateNumbers = [1, 2, 2, 3, 3, 4];

const uniqueNumbers = new Set(duplicateNumbers);

console.log(uniqueNumbers);

// =====================================================
// ===== Set -> Array =====
// =====================================================

const numbersArray = [...uniqueNumbers];

console.log(numbersArray);
// [1, 2, 3, 4]

// =====================================================
// ===== Most Common Use Case:
// ===== Remove Duplicates
// =====================================================

const ids = [1, 2, 2, 3, 3, 4, 4];

const uniqueIds = [...new Set(ids)];

console.log(uniqueIds);
// [1, 2, 3, 4]

// =====================================================
// ===== Real World Use Case #1:
// ===== Track Online Users
// =====================================================

const onlineUsers = new Set();

onlineUsers.add(1);
onlineUsers.add(2);
onlineUsers.add(3);

console.log(onlineUsers.has(2));
// true

onlineUsers.delete(2);

console.log(onlineUsers);

// =====================================================
// ===== Real World Use Case #2:
// ===== Search History
// =====================================================

const searchHistory = new Set();

searchHistory.add("react");
searchHistory.add("node");
searchHistory.add("react");

console.log([...searchHistory]);

// ['react', 'node']

// =====================================================
// ===== Real World Use Case #3:
// ===== Visited Pages
// =====================================================

const visitedPages = new Set();

visitedPages.add("/home");
visitedPages.add("/about");
visitedPages.add("/contact");
visitedPages.add("/home");

console.log(visitedPages);

// Set(3) {
//   '/home',
//   '/about',
//   '/contact'
// }

// =====================================================
// ===== Objects in Sets =====
// =====================================================

const usersSet = new Set();

const daveUser = {
  id: 1,
};

usersSet.add(daveUser);

console.log(usersSet.has(daveUser));
// true

// =====================================================
// ===== Reference Equality
// ===== VERY IMPORTANT
// =====================================================

const admins = new Set();

admins.add({
  id: 1,
});

console.log(
  admins.has({
    id: 1,
  }),
);
// false

// Because:

console.log({ id: 1 } === { id: 1 });
// false

// Objects are compared by reference.

// =====================================================
// ===== Advanced Example:
// ===== Graph Traversal (Visited Nodes)
// =====================================================

const visited = new Set();

visited.add("A");
visited.add("B");

console.log(visited.has("A"));
// true

console.log(visited.has("C"));
// false

// =====================================================
// ===== Most Common Methods =====
//
// set.add(value)
// set.has(value)
// set.delete(value)
// set.clear()
// set.size
// set.values()
// set.keys()
// set.entries()
//
// =====================================================

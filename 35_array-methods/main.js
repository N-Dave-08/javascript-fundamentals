const people = [
  { name: "Jacob", age: 27 },
  { name: "Emma", age: 22 },
  { name: "Michael", age: 31 },
  { name: "Sophia", age: 25 },
  { name: "Daniel", age: 29 },
  { name: "Olivia", age: 24 },
  { name: "James", age: 35 },
  { name: "Isabella", age: 28 },
];

// Object.groupBy()
// Syntax:
// Object.groupBy(array, callback)

// The callback runs for every item in the array.
// Whatever the callback RETURNS becomes the group key.
const groupByNameObject = Object.groupBy(
  people,
  (person) => person.name, // group by the person's name
);

console.log(groupByNameObject);
/*
{
  Jacob: [{ name: "Jacob", age: 27 }],
  Emma: [{ name: "Emma", age: 22 }],
  ...
}
*/

// Group by the first letter of the name
const groupByFirstLetter = Object.groupBy(
  people,
  (person) => person.name[0], // get the first character of the name
);

console.log(groupByFirstLetter);

// Map.groupBy()
// Syntax:
// Map.groupBy(array, callback)

// Works similarly to Object.groupBy(),
// but returns a Map instead of a plain object.
const groupByNameMap = Map.groupBy(
  people,
  (person) => person.name, // group by the person's name
);

console.log(groupByNameMap);
/*
Map(8) {
  'Jacob' => [{ name: "Jacob", age: 27 }],
  'Emma' => [{ name: "Emma", age: 22 }],
  ...
}
*/

const addPerson = people.push({ name: "Allen", age: 37 });
// push(item)
// Adds an item to the END of the array.
// Returns the new array length.
console.log(people);

const removeLastPerson = people.pop();
// pop()
// Removes the LAST item.
// Returns the removed item.
console.log(people);

const removeFirstPerson = people.shift();
// shift()
// Removes the FIRST item.
// Returns the removed item.
console.log(removeFirstPerson, people);

const addPersonAtFirstIndex = people.unshift({
  name: "First Person",
  age: 25,
});
// unshift(item)
// Adds an item to the BEGINNING.
// Returns the new array length.
console.log(people);

const changeValue = people.with(0, {
  name: "Changed",
  age: 21,
});
// with(index, value)
// Creates a NEW array with one item replaced.
// Does NOT mutate the original array.
console.log(people); // original array
console.log(changeValue); // copied array with index 0 changed

const getValue = people.at(-1);
// at(index)
// Gets the value at an index.
// Negative indexes count from the end.
console.log(getValue);

const replaceEveryElement = people.fill({
  name: "Replaced",
  age: 24,
});
// fill(value)
// Replaces EVERY element with the given value.
// Mutates the original array.
console.log(people);

const replaceOnlySecondAndThird = people.fill({ name: "Only", age: 24 }, 1, 3);
// fill(value, start, end)
// Replaces items from start up to (but not including) end.
console.log(people);

const reverse = people.reverse();
// reverse()
// Reverses the array in place.
// Mutates the original array.
console.log(people);

const removeSpecificElements = people.splice(1, 3);
// splice(start, deleteCount)
// Removes items starting at index 1.
// Returns the removed items.
// Mutates the original array.
console.log(people);

const sort = people.sort();
// sort()
// Sorts the array in place.
// Mutates the original array.
console.log(people);

const sortNoMutating = people.toSorted();
// toSorted()
// Returns a sorted COPY.
// Does NOT mutate the original array.
console.log(sortNoMutating);
console.log(people);

const reverseNoMutating = people.toReversed();
// toReversed()
// Returns a reversed COPY.
// Does NOT mutate the original array.
console.log(reverseNoMutating);
console.log(people);

const spliceNoMutating = people.toSpliced(1, 3);
// toSpliced(start, deleteCount)
// Returns a COPY with items removed.
// Does NOT mutate the original array.
console.log(spliceNoMutating);
console.log(people);

const nums = [
  [1, 2],
  [3, 4],
];

const flat = nums.flat();
// flat()
// Flattens the array by ONE level.
console.log(flat);

const flatAll = nums.flat(Number.POSITIVE_INFINITY);
// flat(depth)
// Flattens the array to the given depth.
// Infinity means flatten everything.
console.log(flatAll);

const flatMap = nums.flatMap((num) => [num, num * 2]);
// flatMap(callback)
// Runs map() and then flat(1).
// Equivalent to:
// array.map(...).flat()
console.log(flatMap);

const findLast = people.findLast((person) => person.age > 20);
// findLast(callback)
// Starts from the END of the array.
// Returns the first item that matches the condition.
// Returns undefined if nothing matches.
console.log(findLast);

const totalAge = people.reduceRight((sum, person) => sum + person.age, 0);
// reduceRight(callback, initialValue)
// Goes from RIGHT to LEFT.
// sum = accumulator (stores the running result)
// person = current item
// 0 = starting value of sum
// Returns one final value.
console.log(totalAge);

console.log(Array.isArray(people));
// true

console.log(Array.isArray([1, 2, 3]));
// true

console.log(Array.isArray("hello"));
// false

console.log(Array.isArray({ name: "Jacob" }));
// false

console.log(Array.isArray(null));
// false

const A = new Set([1, 2, 3, 4]);
const B = new Set([3, 4, 5, 6]);

console.log(A);
// Set(4) { 1, 2, 3, 4 }

// add(value)
// Adds a value to the Set.
A.add(5);
console.log(A);

// delete(value)
// Removes a value.
// Returns true if removed.
A.delete(5);
console.log(A);

// has(value)
// Checks if a value exists.
console.log(A.has(3)); // true
console.log(A.has(10)); // false

// clear()
// Removes everything.
const numSet = new Set([1, 2, 3]);
numSet.clear();
console.log(numSet); // Set(0) {}

// size
// Returns the number of values.
console.log(A.size); // 4

// values()
// Returns an iterator of the values.
console.log(A.values());

// keys()
// Same as values() because Sets have no keys.
console.log(A.keys());

// entries()
// Returns [value, value] pairs.
console.log(A.entries());

// forEach(callback)
// Runs a function for each value.
A.forEach((value) => {
  console.log(value);
});

// union(otherSet)
// Combines both Sets.
console.log(A.union(B));
// Set {1, 2, 3, 4, 5, 6}

// intersection(otherSet)
// Keeps only common values.
console.log(A.intersection(B));
// Set {3, 4}

// difference(otherSet)
// Values in A but not in B.
console.log(A.difference(B));
// Set {1, 2}

// symmetricDifference(otherSet)
// Values that exist in only one Set.
console.log(A.symmetricDifference(B));
// Set {1, 2, 5, 6}

const C = new Set([1, 2]);

// isSubsetOf(otherSet)
// Is every value in this Set inside the other Set?
console.log(C.isSubsetOf(A));
// true

// isSupersetOf(otherSet)
// Does this Set contain every value of the other Set?
console.log(A.isSupersetOf(C));
// true

// isDisjointFrom(otherSet)
// Do the Sets share no values?
console.log(A.isDisjointFrom(B));
// false

console.log(new Set([7, 8]).isDisjointFrom(A));
// true

const numbers = [1, 2, 2, 3, 3, 4];

// Remove duplicates using Set.
const unique = [...new Set(numbers)];

console.log(unique);
// [1, 2, 3, 4]

const set = new Set([1, 2, 3]);

// Convert Set to Array.
const arr = [...set];

console.log(arr);
// [1, 2, 3]

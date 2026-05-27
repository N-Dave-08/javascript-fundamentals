let a = 10;
let b = "Hi";

let c = a;
c = c + 1;

let d = [1, 2]; // arrays are reference types
let e = d;

/*
Before push():

d ──┐
    ├──> <0,01> = [1, 2]
e ──┘

Both variables point to the same array object.
*/

e.push(3);

/*
After push():

d ──┐
    ├──> <0,01> = [1, 2, 3]
e ──┘

d and e will prints the same [1, 2, 3] even we just pushed 3 in the e

The shared array was modified,
so both d and e reflect the change.
*/

e = [3, 4, 5];

/*
After reassignment:

d ───────────> <0,01> = [1, 2, 3]

e ───────────> <0,02> = [3, 4, 5]

e now references a completely new array.
d still points to the original array.
*/

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);

console.log(`d = ${d}`); // [1, 2, 3]
console.log(`e = ${e}`); // [3, 4, 5]

let f = [1, 2]; // ──> <0,01>

// let g = f;
// g ──> <0,01>
// true because both variables reference the SAME array object

let g = [1, 2]; // ──> <0,02>
// false because this creates a NEW array object in memory

console.log(`f === g ${f === g}`);
console.log(`f == g ${f == g}`);

let h = [1, 2]; // ──> <0,01>

console.log(`h = ${h}`); // prints: [1, 2]

add(h, 3);

console.log(`h = ${h}`); // prints: [1, 2, 3]
// because "array" and "h" both reference <0, 01>,

function add(
  array, // ──> <0,01>
  element, // 3
) {
  array.push(element);
  /*

  h ───────────> [1, 2, 3]
  array ────────┘
  
  */
}

let i = [1, 2]; // —→ <0,01>

console.log(`h = ${i}`); // [1, 2]

addAssign(i, 3);

console.log(`h = ${i}`); // [1, 2]

function addAssign(array, element) {
  // array → copy of reference <0,01>

  /*
  Before reassignment:

  h      ───────────> <0,01> = [1, 2]
  array  ───────────┘
  */

  array = [element]; // new object created <0,02>

  /*
  After reassignment:

  h      ───────────> <0,01> = [1, 2]   (UNCHANGED)
  array  ───────────> <0,02> = [3]      (NEW reference only inside function)
  */
}

let j = [1, 2]; // j → <0,01>

console.log(`j = ${j}`); // [1, 2]

add(j, c);

console.log(`j = ${j}`); // [1, 2, 5]

function add(array, element) {
  /*
  Before function execution:

  j      ───────────> <0,01> = [1, 2]
  array  ───────────┘

  element = copy of c (primitive value)
  */

  element = element + 2;

  /*
  After update:

  element = 5 (only local variable changes)
  */

  array.push(element);

  /*
  After push():

  j      ───────────> <0,01> = [1, 2, 5]
  array  ───────────┘

  Same array object is mutated,
  so both j and array reflect [1, 2, 5]
  */
}

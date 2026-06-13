// recursion is when a function calls itself inside the function
// 2 parts:
// base case —→ when to stop
// recursive case —→ when the function calls itself

function countdown(n) {
  if (n === 0) {
    console.log("Done!");
    return;
    // BASE CASE RETURN:
    // stops THIS function call immediately
    // returns undefined to the previous caller
    // no more code runs below this point
  }

  console.log(n);
  countdown(n - 1);
  // recursive call:
  // current function PAUSES here
  // it waits until countdown(n - 1) fully finishes
  // AFTER it finishes, THIS function also finishes
  // then it implicitly returns undefined
}

countdown(5);

// CALL STACK FLOW:
// countdown(5)
//  → countdown(4)
//    → countdown(3)
//      → countdown(2)
//        → countdown(1)
//          → countdown(0) → "Done!" + return
// then everything unwinds back up:
// countdown(1) returns undefined
// countdown(2) returns undefined
// countdown(3) returns undefined
// countdown(4) returns undefined
// countdown(5) returns undefined

function factorial(n) {
  if (n === 1) return 1;
  // BASE CASE RETURN:
  // stops recursion
  // returns 1 to the previous function call

  return n * factorial(n - 1);
  // IMPORTANT RETURN FLOW:
  // 1. factorial(n - 1) is executed first
  // 2. JS waits for that result (this is the "stack building")
  // 3. when result comes back, multiply it by n
  // 4. return the FINAL computed value upward
}

console.log(factorial(5));

// RETURN FLOW (VERY IMPORTANT):
// factorial(5)
// = 5 * factorial(4)
// = 5 * (4 * factorial(3))
// = 5 * (4 * (3 * factorial(2)))
// = 5 * (4 * (3 * (2 * factorial(1))))
// = 5 * (4 * (3 * (2 * 1)))
// = 120

// UNWINDING (returning values upward):
// factorial(1) → returns 1
// factorial(2) → returns 2 * 1 = 2
// factorial(3) → returns 3 * 2 = 6
// factorial(4) → returns 4 * 6 = 24
// factorial(5) → returns 5 * 24 = 120

function sumRange(n) {
  if (n === 1) return 1;
  // BASE CASE RETURN:
  // stops recursion
  // returns 1 to previous function call

  return n + sumRange(n - 1);
  // WAIT PHASE:
  // JS first calls sumRange(n - 1)
  // current function PAUSES until result comes back
  // RETURN PHASE:
  // adds current n to returned value
  // then passes result upward
}

console.log(sumRange(5));

// RETURN FLOW:
// sumRange(5)
// = 5 + sumRange(4)
// = 5 + 4 + sumRange(3)
// = 5 + 4 + 3 + sumRange(2)
// = 5 + 4 + 3 + 2 + sumRange(1)
// = 15

// UNWINDING (RETURNING BACK UP):
// sumRange(1) → returns 1
// sumRange(2) → returns 2 + 1 = 3
// sumRange(3) → returns 3 + 3 = 6
// sumRange(4) → returns 4 + 6 = 10
// sumRange(5) → returns 5 + 10 = 15

function printChildrenRecursive(t) {
  if (t.children.length === 0) {
    return;
    // BASE CASE RETURN:
    // if there are no children, stop recursion for this branch
    // this prevents going deeper into an empty node
  }

  t.children.forEach((child) => {
    console.log(child.name);
    // prints the current child name before going deeper

    printChildrenRecursive(child);
    // RECURSIVE CALL:
    // we go one level deeper into the tree
    // each child becomes a new "current tree"
    // function repeats until it reaches a leaf node (no children)
  });

  // IMPORTANT IDEA:
  // this function does NOT return a value upward
  // it only performs actions (console.log + traversal)
}

const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        {
          name: "Kyle",
          children: [],
        },
        {
          name: "Sohpia",
          children: [],
        },
      ],
    },
  ],
};

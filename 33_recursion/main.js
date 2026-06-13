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

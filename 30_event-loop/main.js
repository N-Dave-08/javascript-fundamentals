console.clear();

console.log("=================================");
console.log("JAVASCRIPT EVENT LOOP PLAYGROUND");
console.log("=================================");

/*
=================================
EXAMPLE 1: SYNCHRONOUS CODE
=================================
*/

console.log("\nEXAMPLE 1");

console.log("1");
console.log("2");
console.log("3");

/*
Output:
1
2
3
*/

/*
=================================
EXAMPLE 2: setTimeout
=================================
*/

console.log("\nEXAMPLE 2");

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

/*
Output:
A
C
B

Why?
- A runs immediately.
- setTimeout callback is sent to Web APIs.
- C runs immediately.
- Callback enters Task Queue.
- Event Loop moves callback to Call Stack.
*/

/*
=================================
EXAMPLE 3: Promise Microtask
=================================
*/

console.log("\nEXAMPLE 3");

console.log("1");

Promise.resolve().then(() => {
  console.log("2");
});

console.log("3");

/*
Output:
1
3
2

Why?
Promise callbacks go to the Microtask Queue.
Microtasks execute before Tasks.
*/

/*
=================================
EXAMPLE 4: Promise vs setTimeout
=================================
*/

console.log("\nEXAMPLE 4");

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

/*
Output:
A
D
C
B

Order:
1. Synchronous
2. Microtasks
3. Tasks
*/

/*
=================================
EXAMPLE 5: Multiple Promises
=================================
*/

console.log("\nEXAMPLE 5");

console.log("start");

Promise.resolve().then(() => {
  console.log("promise 1");
});

Promise.resolve().then(() => {
  console.log("promise 2");
});

Promise.resolve().then(() => {
  console.log("promise 3");
});

console.log("end");

/*
Output:
start
end
promise 1
promise 2
promise 3
*/

/*
=================================
EXAMPLE 6: Async/Await
=================================
*/

console.log("\nEXAMPLE 6");

async function test() {
  console.log("inside function - 1");

  await Promise.resolve();

  console.log("inside function - 2");
}

test();

console.log("outside function");

/*
Output:
inside function - 1
outside function
inside function - 2

await creates a microtask.
*/

/*
=================================
EXAMPLE 7: Event Loop Challenge
=================================
*/

console.log("\nEXAMPLE 7");

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

Promise.resolve().then(() => {
  console.log("4");
});

console.log("5");

/*
Try to guess before running.

Output:
1
5
3
4
2
*/

/*
=================================
EXAMPLE 8: Nested Event Loop
=================================
*/

console.log("\nEXAMPLE 8");

setTimeout(() => {
  console.log("timeout 1");

  Promise.resolve().then(() => {
    console.log("promise inside timeout");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("promise 1");
});

console.log("main");

/*
Output:
main
promise 1
timeout 1
promise inside timeout
*/

/*
=================================
EXAMPLE 9: Interview Question
=================================
*/

console.log("\nEXAMPLE 9");

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
  })
  .then(() => {
    console.log("Promise 2");
  });

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");

/*
Output:
Start
End
Promise 1
Promise 2
Timeout 1
Timeout 2
*/

/*
=================================
FINAL RULE
=================================

1. Run all synchronous code first.

2. Execute ALL microtasks.
   - Promise.then()
   - catch()
   - finally()
   - await

3. Execute ONE task.
   - setTimeout()
   - setInterval()
   - DOM events

4. Repeat forever.

Remember:

Call Stack
    ↓
Microtask Queue
    ↓
Task Queue

Microtasks always have higher priority than Tasks.
*/

class Test {
  constructor(name) {
    this.name = name;
  }
}

// Global scope variables
// These stay alive because they are reachable globally
const globalTest = new Test("globalTest");
const globalString = "globalString";

/*
MEMORY NOW

Global Scope
 ├── globalTest   --> { name: "globalTest" }
 └── globalString --> "globalString"
*/

{
  // Block scope variables
  // These exist only inside this block
  const innerTest = new Test("innerTest");
  const innerString = "innerString";

  /*
  MEMORY NOW

  Global Scope
   ├── globalTest   --> { name: "globalTest" }
   └── globalString --> "globalString"

  Block Scope
   ├── innerTest   --> { name: "innerTest" }
   └── innerString --> "innerString"
  */

  console.log(innerTest.name);
  console.log(innerString);
}

// Block ended
// innerTest and innerString are now unreachable

/*
MEMORY NOW

Global Scope
 ├── globalTest   --> { name: "globalTest" }
 └── globalString --> "globalString"

Garbage Collection Candidates
 ├── { name: "innerTest" }
 └── "innerString"

JavaScript will remove them later
because nothing references them anymore.
*/

// use to demo allocations on timeline
document.addEventListener("click", (e) => {
  const a = `${e.clientX} Position`;
  console.log(a);
});

const map = new WeakMap();
let i = 0;

setInterval(() => {
  map.set({ i }, `Index ${i}`);
  i++;
});

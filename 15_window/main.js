/*
========================================
WINDOW OBJECT IN JAVASCRIPT
========================================

Definition:
The "window" object is the global object in the browser.

It represents:
- the browser window/tab
- the global scope for browser JavaScript
- access to browser features like:
  - document
  - location
  - history
  - localStorage
  - alert
  - setTimeout
  - console
  - etc.

In browsers:

window === global object

Meaning:

var x = 10;

is similar to:

window.x = 10;

========================================
BASIC WINDOW OBJECT
========================================
*/

console.log(window);

/*
prints the entire browser window object

Contains:
- document
- location
- history
- console
- alert
- fetch
- setTimeout
- localStorage
- and many more browser APIs
*/

/*
========================================
WINDOW.DOCUMENT
========================================

The document object represents the HTML page.
*/

console.log(window.document);

/*
same as:

console.log(document);

because "document" is a property of window
*/

/*
========================================
WINDOW === THIS
========================================
*/

console.log(window === this); // true (in global browser scope)

/*
because the global "this" in browsers
points to the window object
*/

/*
========================================
GLOBAL VARIABLES
========================================
*/

var appName = "My App";

console.log(window.appName); // "My App"

/*
var declarations become properties of window

IMPORTANT:
let and const DO NOT become properties of window
*/

let age = 20;

console.log(window.age); // undefined

/*
========================================
WINDOW ALERT
========================================
*/

window.alert("Hello from window object!");

/*
same as:

alert("Hello from window object!");

because methods inside window can be accessed directly
*/

/*
========================================
WINDOW CONSOLE
========================================
*/

window.console.log("Hello");

/*
same as:

console.log("Hello");
*/

/*
========================================
WINDOW LOCATION
========================================

Provides information about the current URL
*/

console.log(window.location);

/*
Useful properties:
*/

console.log(window.location.href); // full URL
console.log(window.location.pathname); // current path

/*
Redirect user:
*/

// window.location.href = "https://google.com";

/*
========================================
WINDOW INNER WIDTH / HEIGHT
========================================

Gets browser viewport size
*/

console.log(window.innerWidth);
console.log(window.innerHeight);

/*
========================================
WINDOW SETTIMEOUT
========================================
*/

window.setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);

/*
same as:

setTimeout(...)
*/

/*
========================================
WINDOW SETINTERVAL
========================================
*/

let count = 0;

const interval = setInterval(() => {
  count++;

  console.log(`Count: ${count}`);

  if (count === 3) {
    clearInterval(interval);
  }
}, 1000);

/*
Runs every second until cleared
*/

/*
========================================
WINDOW LOCALSTORAGE
========================================

Stores data in browser storage
*/

window.localStorage.setItem("username", "Dave");

console.log(window.localStorage.getItem("username"));

/*
Data remains even after page refresh
*/

/*
========================================
WINDOW DOCUMENT METHODS
========================================
*/

const heading = document.querySelector("h1");

/*
querySelector() searches the DOM
*/

console.log(heading);

/*
========================================
WINDOW FETCH
========================================

Used for API requests
*/

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

/*
========================================
IMPORTANT CONCEPT
========================================

These are all technically from window:

window.alert()
window.console.log()
window.document
window.setTimeout()

But JavaScript allows shorthand:

alert()
console.log()
document
setTimeout()

because they belong to the global window object.
*/

/*
========================================
MENTAL MODEL
========================================

window
│
├── document
├── console
├── localStorage
├── history
├── location
├── alert()
├── setTimeout()
├── fetch()
└── etc...

The browser gives us the "window" object,
and almost everything in browser JavaScript
comes from it.
========================================
*/

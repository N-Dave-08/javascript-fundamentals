/*
========================================
DOCUMENT OBJECT IN JAVASCRIPT
========================================

Definition:
The "document" object represents the HTML page loaded in the browser.

It is part of the BOM/DOM system and is a property of "window".

window.document === document  // true

It allows JavaScript to:
- read HTML content
- change HTML structure
- modify styles
- handle events
- create/remove elements
========================================
*/

console.log(document);

// shows the entire HTML document structure

/*
========================================
BASIC DOM TREE IDEA
========================================

HTML is converted into a tree structure:

document
 └── html
      ├── head
      └── body
           ├── h1
           ├── p
           └── div
*/

/*
========================================
SELECTING ELEMENTS
========================================
*/

// Select by ID
// <div id="title">title</div>
const title = document.getElementById("title");
console.log(title);

// Select by class
// <div class="item">item</div>
const items = document.getElementsByClassName("item");
console.log(items);

// Select by tag name
// <p>paragraph</p>
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// Modern way (recommended)

// HTML:
// <div class="item">item 1</div>
// <div class="item">item 2</div>

const firstItem = document.querySelector(".item");
// returns ONLY the first matching element

const allItems = document.querySelectorAll(".item");
// returns NodeList of ALL matching elements

/*
querySelector → returns first match
querySelectorAll → returns all matches (NodeList)
*/

/*
========================================
CHANGING CONTENT
========================================
*/

const heading = document.querySelector("h1");

heading.textContent = "Hello World";
/*
textContent:
- changes only text
- ignores HTML tags
*/

heading.innerHTML = "<span>New HTML Content</span>";
/*
innerHTML:
- can insert HTML structure
- more powerful but riskier (XSS risk)
*/

/*
========================================
CHANGING STYLES
========================================
*/

heading.style.color = "red";
heading.style.fontSize = "30px";

/*
Direct inline styling using JS
*/

/*
========================================
CREATING ELEMENTS
========================================
*/

const newElement = document.createElement("p");

newElement.textContent = "This is a new paragraph";

document.body.appendChild(newElement);

/*
Steps:
1. create element
2. add content
3. insert into DOM
*/

/*
========================================
REMOVING ELEMENTS
========================================
*/

const removeItem = document.querySelector(".item");

removeItem.remove();

/*
Removes element from DOM
*/

/*
========================================
EVENTS (VERY IMPORTANT)
========================================
*/

const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log("Button clicked!");
});

/*
Event flow:
User action → browser detects → JS runs callback
*/

/*
========================================
DOM VISUALIZATION
========================================

Before JS:

<body>
  <h1>Hello</h1>
</body>

After JS:

<body>
  <h1 style="color:red;">Hello World</h1>
  <p>This is a new paragraph</p>
</body>
*/

/*
========================================
IMPORTANT CONCEPT
========================================

document is NOT the HTML itself.

It is a LIVE OBJECT REPRESENTATION of the HTML.

That means:
- changing document changes the page instantly
- it's a bridge between JS and the browser UI
*/

/*
========================================
SHORT SUMMARY
========================================

document = entry point to the DOM

It allows:
✔ selecting elements
✔ modifying content
✔ changing styles
✔ creating/removing elements
✔ handling events
*/

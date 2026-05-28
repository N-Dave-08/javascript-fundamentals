const gradparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const divs = document.querySelectorAll("div");

// ====================
// NORMAL EVENT LISTENER
// ====================

// only works for existing divs

divs.forEach((div) => {
  div.addEventListener("click", () => {
    console.log("html created div clicked");
  });
});

// ====================
// EVENT DELEGATION
// ====================

// document listens for all clicks
// then checks if clicked element is a div

addGlobalEventListener("click", "div", () => {
  console.log("div was clicked");
});

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

// ====================
// NEW DIV
// ====================

// dynamically created div

const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "purple";

document.body.append(newDiv);

// ====================
// CAPTURING (top -> down)
// ====================

document.addEventListener(
  "click",
  () => {
    console.log("document capture");
  },
  true,
);

gradparent.addEventListener(
  "click",
  () => {
    console.log("grandparent capture");
  },
  true,
);

parent.addEventListener(
  "click",
  () => {
    console.log("parent capture");
  },
  true,
);

child.addEventListener(
  "click",
  () => {
    console.log("child capture");
  },
  true,
);

// ====================
// BUBBLING (bottom -> up)
// ====================

gradparent.addEventListener("click", () => {
  console.log("grandparent bubble");
});

parent.addEventListener("click", () => {
  console.log("parent bubble");
});

child.addEventListener("click", (e) => {
  console.log("child bubble");

  // stops bubbling upward

  e.stopPropagation();
});

// ====================
// ONCE
// ====================

// runs only once

child.addEventListener(
  "click",
  () => {
    console.log("clicked once only");
  },
  { once: true },
);

// FIRST CLICK
// clicked once only

// SECOND CLICK
// nothing happens

// ====================
// removeEventListener()
// ====================

child.addEventListener("click", printHi);

// remove after 2 seconds

setTimeout(() => {
  child.removeEventListener("click", printHi);
}, 2000);

// CLICK BEFORE 2 SECONDS
// HI

// CLICK AFTER 2 SECONDS
// nothing happens

function printHi() {
  console.log("HI, to be removed");
}

// ====================
// document bubble
// ====================

document.addEventListener("click", () => {
  console.log("document bubble");
});

// ====================
// CLICK CHILD
// ====================

// document capture
// grandparent capture
// parent capture
// child capture
// html created div clicked
// div was clicked
// child bubble
// clicked once only
// HI, to be removed

// parent bubble ❌ stopped
// grandparent bubble ❌ stopped
// document bubble ❌ stopped

// Reason:
// stopPropagation()
// stops bubbling upward

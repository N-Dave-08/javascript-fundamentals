// =========================
// DOM MANIPULATION
// =========================

// =========================
// SELECTING ELEMENTS
// =========================

const body = document.body;

console.log(body);

const container = document.querySelector("#container");

console.log(container);

const firstSpan = document.querySelector("span");

console.log(firstSpan);

const allSpans = document.querySelectorAll("span");

console.log(allSpans);

// NodeList loop
allSpans.forEach((span) => {
  console.log(span.textContent);
});

// =========================
// CREATING ELEMENTS
// =========================

const div = document.createElement("div");

console.log(div);

div.textContent = "Hello World";

body.append(div);

// create paragraph
const paragraph = document.createElement("p");

paragraph.textContent = "This is a paragraph";

body.append(paragraph);

// create button
const button = document.createElement("button");

button.textContent = "Click Me";

body.append(button);

// create image
const image = document.createElement("img");

image.src = "image.png";
image.alt = "Example Image";
image.width = 200;

body.append(image);

// create unordered list
const ul = document.createElement("ul");

body.append(ul);

// create list items
for (let i = 1; i <= 3; i++) {
  const li = document.createElement("li");

  li.textContent = `Item ${i}`;

  ul.append(li);
}

// =========================
// ADDING ELEMENTS
// =========================

// append()
const appendDiv = document.createElement("div");

appendDiv.textContent = "append() example";

body.append(appendDiv);

// append multiple values
body.append("Hello", "World");

// prepend()
const prependDiv = document.createElement("div");

prependDiv.textContent = "prepend() example";

body.prepend(prependDiv);

// appendChild()
const appendChildDiv = document.createElement("div");

appendChildDiv.textContent = "appendChild() example";

body.appendChild(appendChildDiv);

// before()
const beforeDiv = document.createElement("div");

beforeDiv.textContent = "Inserted Before Container";

container.before(beforeDiv);

// after()
const afterDiv = document.createElement("div");

afterDiv.textContent = "Inserted After Container";

container.after(afterDiv);

// insertBefore()
const insertBeforeDiv = document.createElement("div");

insertBeforeDiv.textContent = "insertBefore() example";

body.insertBefore(insertBeforeDiv, appendDiv);

// =========================
// MODIFYING TEXT
// =========================

const textDiv = document.createElement("div");

body.append(textDiv);

// textContent
textDiv.textContent = "Using textContent";

console.log(textDiv.textContent);

// innerText
textDiv.innerText = "Using innerText";

console.log(textDiv.innerText);

// difference example
console.log(container.textContent);
// includes hidden text

console.log(container.innerText);
// only visible text

// =========================
// MODIFYING HTML
// =========================

const htmlDiv = document.createElement("div");

body.append(htmlDiv);

// innerHTML
htmlDiv.innerHTML = `
  <h1>Title</h1>
  <p>Paragraph</p>
`;

console.log(htmlDiv.innerHTML);

// replace existing HTML
htmlDiv.innerHTML = `
  <ul>
    <li>HTML Item 1</li>
    <li>HTML Item 2</li>
  </ul>
`;

// insertAdjacentHTML()
htmlDiv.insertAdjacentHTML(
  "beforeend",
  `
    <strong>Inserted using insertAdjacentHTML</strong>
  `,
);

// =========================
// MODIFYING ATTRIBUTES
// =========================

const link = document.createElement("a");

link.textContent = "Go To Google";

body.append(link);

// setAttribute()
link.setAttribute("href", "https://google.com");

link.setAttribute("target", "_blank");

// getAttribute()
console.log(link.getAttribute("href"));

// hasAttribute()
console.log(link.hasAttribute("target"));

// removeAttribute()
link.removeAttribute("target");

// direct property access
link.href = "https://youtube.com";

// input attributes
const input = document.createElement("input");

body.append(input);

input.type = "password";
input.placeholder = "Enter Password";
input.required = true;

console.log(input.required);

// =========================
// MODIFYING DATA ATTRIBUTES
// =========================

const dataDiv = document.createElement("div");

body.append(dataDiv);

// set dataset values
dataDiv.dataset.userId = "123";
dataDiv.dataset.role = "admin";
dataDiv.dataset.isActive = "true";

console.log(dataDiv.dataset.userId);
console.log(dataDiv.dataset.role);
console.log(dataDiv.dataset.isActive);

// generated HTML:
// <div data-user-id="123"></div>

dataDiv.dataset.userName = "Dave";

console.log(dataDiv.dataset.userName);

// remove dataset
delete dataDiv.dataset.role;

// =========================
// MODIFYING CLASSES
// =========================

const classDiv = document.createElement("div");

classDiv.textContent = "Class Example";

body.append(classDiv);

// add class
classDiv.classList.add("active");

// add multiple classes
classDiv.classList.add("dark", "rounded");

// remove class
classDiv.classList.remove("dark");

// toggle class
classDiv.classList.toggle("hidden");

// contains()
console.log(classDiv.classList.contains("active"));

// replace()
classDiv.classList.replace("active", "enabled");

// className
classDiv.className = "box large red";

console.log(classDiv.className);

// =========================
// MODIFYING STYLES
// =========================

const styleDiv = document.createElement("div");

styleDiv.textContent = "Styled Div";

body.append(styleDiv);

// inline styles
styleDiv.style.backgroundColor = "tomato";
styleDiv.style.color = "white";
styleDiv.style.padding = "1rem";
styleDiv.style.margin = "1rem";
styleDiv.style.borderRadius = "10px";
styleDiv.style.fontSize = "2rem";

// hide element
styleDiv.style.display = "none";

// show again
styleDiv.style.display = "block";

// width and height
styleDiv.style.width = "200px";
styleDiv.style.height = "100px";

// border
styleDiv.style.border = "5px solid black";

// =========================
// REMOVING ELEMENTS
// =========================

const removeDiv = document.createElement("div");

removeDiv.textContent = "Remove Me";

body.append(removeDiv);

// remove()
removeDiv.remove();

// removeChild()
const parent = document.createElement("div");
const child = document.createElement("span");

child.textContent = "Child Element";

parent.append(child);

body.append(parent);

parent.removeChild(child);

// =========================
// REPLACING ELEMENTS
// =========================

const oldElement = document.createElement("div");

oldElement.textContent = "Old Element";

body.append(oldElement);

const newElement = document.createElement("div");

newElement.textContent = "New Element";

// replaceWith()
oldElement.replaceWith(newElement);

// replaceChild()
const parentReplace = document.createElement("div");

const child1 = document.createElement("p");
const child2 = document.createElement("p");

child1.textContent = "First Child";
child2.textContent = "Second Child";

parentReplace.append(child1);

body.append(parentReplace);

parentReplace.replaceChild(child2, child1);

// =========================
// CLONING ELEMENTS
// =========================

const original = document.createElement("div");

original.textContent = "Original Element";

body.append(original);

// cloneNode()
const clone = original.cloneNode(true);

body.append(clone);

// =========================
// EVENT LISTENERS
// =========================

const clickButton = document.createElement("button");

clickButton.textContent = "Click Button";

body.append(clickButton);

clickButton.addEventListener("click", () => {
  console.log("Button Clicked");
});

// mouseover
clickButton.addEventListener("mouseover", () => {
  clickButton.style.backgroundColor = "black";
  clickButton.style.color = "white";
});

// mouseleave
clickButton.addEventListener("mouseleave", () => {
  clickButton.style.backgroundColor = "";
  clickButton.style.color = "";
});

// =========================
// INPUT EVENTS
// =========================

const textInput = document.createElement("input");

textInput.placeholder = "Type something";

body.append(textInput);

textInput.addEventListener("input", () => {
  console.log(textInput.value);
});

// focus
textInput.addEventListener("focus", () => {
  console.log("Input Focused");
});

// blur
textInput.addEventListener("blur", () => {
  console.log("Input Blurred");
});

// =========================
// TODO LIST EXAMPLE
// =========================

const todoTitle = document.createElement("h2");

todoTitle.textContent = "Todo List";

body.append(todoTitle);

const todoInput = document.createElement("input");

todoInput.placeholder = "Enter Todo";

body.append(todoInput);

const todoButton = document.createElement("button");

todoButton.textContent = "Add Todo";

body.append(todoButton);

const todoList = document.createElement("ul");

body.append(todoList);

todoButton.addEventListener("click", () => {
  // prevent empty values
  if (todoInput.value === "") return;

  // create list item
  const li = document.createElement("li");

  li.textContent = todoInput.value;

  // create delete button
  const deleteButton = document.createElement("button");

  deleteButton.textContent = "Delete";

  li.append(deleteButton);

  // append to list
  todoList.append(li);

  // remove todo
  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  // toggle completed
  li.addEventListener("click", () => {
    li.classList.toggle("completed");

    if (li.classList.contains("completed")) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
  });

  // clear input
  todoInput.value = "";
});

// =========================
// TIMER EXAMPLE
// =========================

const timerDiv = document.createElement("div");

body.append(timerDiv);

let count = 0;

setInterval(() => {
  count++;

  timerDiv.textContent = `Timer: ${count}`;
}, 1000);

// =========================
// DARK MODE TOGGLE
// =========================

const darkModeButton = document.createElement("button");

darkModeButton.textContent = "Toggle Dark Mode";

body.append(darkModeButton);

darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
});

// =========================
// DYNAMIC CARD EXAMPLE
// =========================

const card = document.createElement("div");

card.style.border = "1px solid black";
card.style.padding = "1rem";
card.style.marginTop = "1rem";

const cardTitle = document.createElement("h3");

cardTitle.textContent = "Dynamic Card";

const cardDescription = document.createElement("p");

cardDescription.textContent =
  "This card was created completely using JavaScript.";

const cardButton = document.createElement("button");

cardButton.textContent = "Remove Card";

card.append(cardTitle, cardDescription, cardButton);

body.append(card);

cardButton.addEventListener("click", () => {
  card.remove();
});

// =========================
// ADDING ELEMENTS
// =========================

const body = document.body;

// append() can add text nodes and elements
body.append("Hello World", " Bye");

// create a new div element
const div = document.createElement("div");

// innerText respects styling and visibility
div.innerText = "hello";

// textContent includes all text exactly as written
div.textContent = "Hello World 2";

// append() adds elements at the end
body.append(div);

// appendChild() also adds elements
// works only with nodes/elements
body.appendChild(div);

// prepend() adds elements at the beginning
const prependDiv = document.createElement("div");
prependDiv.textContent = "Prepended Element";
body.prepend(prependDiv);

// insertBefore()
const anotherDiv = document.createElement("div");
anotherDiv.textContent = "Inserted Before";
body.insertBefore(anotherDiv, div);

// =========================
// READING TEXT CONTENT
// =========================

const container = document.querySelector("#container");

console.log(container.textContent);
// prints the exact content of the container
// includes hidden elements
// prints:
// Some Text
// Another Text

console.log(container.innerText);
// prints only visible text
// ignores display: none
// prints:
// Some Text

// =========================
// MODIFYING ELEMENT HTML
// =========================

// innerHTML allows HTML tags
const htmlDiv = document.createElement("div");

htmlDiv.innerHTML = `
  <strong>Bold Text</strong>
  <span>Normal Text</span>
`;

body.append(htmlDiv);

// replace content completely
htmlDiv.innerHTML = "<h1>Replaced HTML Content</h1>";

// =========================
// MODIFYING ELEMENT TEXT
// =========================

const textDiv = document.createElement("div");

textDiv.textContent = "Original Text";
body.append(textDiv);

// change text
textDiv.textContent = "Updated Text Content";

// =========================
// REMOVING ELEMENTS
// =========================

const removeDiv = document.createElement("div");

removeDiv.textContent = "This element will be removed";
body.append(removeDiv);

// removes the element from the DOM
removeDiv.remove();

// remove child example
const parent = document.createElement("div");
const child = document.createElement("span");

child.textContent = "Child Element";

parent.append(child);
body.append(parent);

// removeChild removes a specific child
parent.removeChild(child);

// =========================
// MODIFYING ATTRIBUTES
// =========================

const link = document.createElement("a");

link.textContent = "Visit Google";

// setAttribute(name, value)
link.setAttribute("href", "https://google.com");

// set target attribute
link.setAttribute("target", "_blank");

body.append(link);

// getAttribute()
console.log(link.getAttribute("href"));

// removeAttribute()
link.removeAttribute("target");

// direct property access
link.href = "https://youtube.com";

// =========================
// MODIFYING DATA ATTRIBUTES
// =========================

const dataDiv = document.createElement("div");

dataDiv.textContent = "Data Attribute Example";

// data-user-id="1234"
dataDiv.dataset.userId = "1234";

// data-role="admin"
dataDiv.dataset.role = "admin";

body.append(dataDiv);

// accessing dataset values
console.log(dataDiv.dataset.userId);
console.log(dataDiv.dataset.role);

// =========================
// MODIFYING CLASSES
// =========================

const classDiv = document.createElement("div");

classDiv.textContent = "Class Example";

body.append(classDiv);

// add classes
classDiv.classList.add("active");
classDiv.classList.add("dark");

// remove class
classDiv.classList.remove("dark");

// toggle class
classDiv.classList.toggle("hidden");

// check if class exists
console.log(classDiv.classList.contains("active"));

// replace class
classDiv.classList.replace("active", "enabled");

// =========================
// MODIFYING STYLES
// =========================

const styleDiv = document.createElement("div");

styleDiv.textContent = "Styled Element";

body.append(styleDiv);

// modifying inline styles
styleDiv.style.color = "white";
styleDiv.style.backgroundColor = "tomato";
styleDiv.style.padding = "1rem";
styleDiv.style.borderRadius = "8px";
styleDiv.style.fontSize = "2rem";

// hide element
styleDiv.style.display = "none";

// show element again
styleDiv.style.display = "block";

// =========================
// EVENT LISTENER EXAMPLE
// =========================

const button = document.createElement("button");

button.textContent = "Click Me";

body.append(button);

button.addEventListener("click", () => {
  console.log("Button Clicked");

  // dynamically modify styles
  button.style.backgroundColor = "black";
  button.style.color = "white";
});

// =========================
// REPLACING ELEMENTS
// =========================

const replaceOld = document.createElement("div");
replaceOld.textContent = "Old Element";

const replaceNew = document.createElement("div");
replaceNew.textContent = "New Element";

body.append(replaceOld);

// replaceWith()
replaceOld.replaceWith(replaceNew);

// =========================
// CLONING ELEMENTS
// =========================

const cloneDiv = document.createElement("div");

cloneDiv.textContent = "Original Element";

body.append(cloneDiv);

// true = deep clone
const clonedElement = cloneDiv.cloneNode(true);

body.append(clonedElement);

// =========================
// WORKING WITH INPUT VALUES
// =========================

const input = document.createElement("input");

input.type = "text";
input.placeholder = "Enter your name";

body.append(input);

input.addEventListener("input", () => {
  console.log(input.value);
});

// =========================
// PRACTICAL TODO EXAMPLE
// =========================

const todoInput = document.createElement("input");
const todoButton = document.createElement("button");
const todoList = document.createElement("ul");

todoInput.placeholder = "Add Todo";
todoButton.textContent = "Add";

body.append(todoInput, todoButton, todoList);

todoButton.addEventListener("click", () => {
  // create list item
  const li = document.createElement("li");

  li.textContent = todoInput.value;

  // skip empty input
  if (todoInput.value === "") return;

  // add class
  li.classList.add("todo-item");

  // remove item when clicked
  li.addEventListener("click", () => {
    li.remove();
  });

  // append to list
  todoList.append(li);

  // clear input
  todoInput.value = "";
});

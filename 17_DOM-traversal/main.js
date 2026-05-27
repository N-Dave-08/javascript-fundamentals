// const grandparent = document.getElementById("grandparent-id");
// const grandparent = document.querySelector("#grandparent-id");
// const grandparent = document.querySelector(".grandparent");

// const parents = Array.from(document.getElementsByClassName("parent"));
// const parent = document.querySelector(".parent");
// const parents = document.querySelectorAll(".parent"); // select all .parent
// const parents = Array.from(gradparent.children);
// const parentOne = parents[0];

const childOne = document.querySelector("#child-one");
const childTwo = childOne.nextElementSibling;

// const parent = childOne.parentElement;
// const grandparent = childOne.closest(".grandparent");

// const children = parentOne.children;

// changeColor(grandparent);

changeColor(childTwo.previousElementSibling);

// parents.forEach(changeColor);

// changeColor(parent);

// changeColor(parent);

function changeColor(element) {
  element.style.backgroundColor = "#333";
}

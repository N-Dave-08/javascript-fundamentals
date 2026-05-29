const addBoxButton = document.querySelector("[data-add-box]");
const grid = document.querySelector(".grid");
const boxes = document.querySelectorAll(".box");

// newly created boxes will not be able to adapt the "clicked" class
addBoxButton.addEventListener("click", () => {
  const box = document.createElement("div");
  box.classList.add("box");

  // this will solve the problem where new boxes does not adapt "clicked" class
  // but this is not ideal because we are duplicating our event listeners
  // event delegation is a better way
  // box.addEventListener("click", (e) => {
  //   box.classList.toggle("clicked");
  // });

  grid.append(box);
});

// this is event delegation
// we are selecting which element have "box" class and adding event listener to that
// document.addEventListener("click", (e) => {
//   if (e.target.matches(".box")) {
//     e.target.classList.toggle("clicked");
//   }
// });

// much cleaner way
function addGlobalEventListener(
  type, // "click", "mousemove", and etc.
  selector, // element i want to select like ".box"
  callback, // function
  parent = document, // defaults to document
) {
  // grid.addEventListner if you want to only select boxes inside the "grid"
  // document selects the entire page
  parent.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      callback(e);
    }
  });
}

addGlobalEventListener(
  "click",
  ".box",
  (e) => {
    e.target.classList.toggle("clicked");
  },
  grid, // we are only selecting grid, which only be affected by the event listener,
);

// only works in the pre-created boxes
// boxes.forEach((box) => {
//   box.addEventListener("click", (e) => {
//     box.classList.toggle("clicked");
//   });
// });

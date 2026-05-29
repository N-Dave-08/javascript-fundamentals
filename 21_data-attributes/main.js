const div = document.getElementById("test-div");

console.log(div.dataset);

console.log(div.dataset.firstName);

console.log(div.dataset.lastName);

// writing data attributes
div.dataset.test = "Hi";
console.log(div.dataset.test);
{
  /* <div
  id="test-div"
  data-test="Hi" // this is added
  data-first-name="Jacob"
  data-last-name="Morales"
  data-active
></div>; */
}

// updating data attributes
div.dataset.firstName = "Alice";
console.log(div.dataset.firstName); // prints: "Alice"
{
  /* <div
  id="test-div"
  data-first-name="Alice" // changed to Alice
  data-last-name="Morales"
  data-active
></div> */
}

delete div.dataset.active;
console.log(div.dataset.active);

{
  /* <div
  id="test-div"
  data-first-name="Alice"
  data-last-name="Morales"
  // data-active is removed
></div> */
}

// ==== Real World Exampe ====

const buttons = document.querySelectorAll("[data-modal-id]");
const modalContents = document.querySelectorAll("[data-modal-content]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = document.querySelector(button.dataset.modalId);

    modalContents.forEach((modalContent) =>
      modalContent.classList.remove("show"),
    );

    modalId.classList.add("show");
  });
});

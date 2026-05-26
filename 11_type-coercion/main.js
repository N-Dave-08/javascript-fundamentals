const form = document.querySelector("form");
const input = document.querySelector("input");
const errorMsg = document.querySelector("#error");
const successMsg = document.querySelector("#success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const numberOfChildren = parseInt(input.value); // this is explicit type coercion because we intentionally change the value type into int

  errorMsg.textContent = "";
  successMsg.textContent = "";

  // Avoid using if (!numberOfChildren) here because it performs
  // implicit boolean type coercion (truthy/falsy checking).
  //
  // parseInt() explicitly converts the input string into a number,
  // returning either a number or NaN.
  //
  // The problem is that 0 is a falsy value, so if the user enters "0",
  // it becomes 0 and incorrectly triggers the error condition.
  if (isNaN(numberOfChildren)) {
    errorMsg.textContent = "Please enter a number of children";
  } else {
    successMsg.textContent = "success!";
  }
});

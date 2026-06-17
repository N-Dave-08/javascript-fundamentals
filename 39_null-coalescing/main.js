// The nullish coalescing operator (??) only uses the default value
// when the value on the left is:
//   - null
//   - undefined
//
// It DOES NOT replace other falsy values like:
//   - 0
//   - ""
//   - false
//   - NaN
//
// This makes it safer than || when 0, "", or false are valid values.

function calculatePrice(price, taxes, description) {
  // If taxes is null or undefined, use 0.05.
  // Otherwise, keep the original value.
  taxes = taxes ?? 0.05;

  // If description is null or undefined, use "Default item".
  // An empty string ("") is considered a real value and will NOT
  // be replaced because "" is not null or undefined.
  description = description ?? "Default item";

  const total = price * (1 + taxes);

  console.log(`${description} With Tax: $${total}`);
}

calculatePrice(100, 0.07, "My item");
// taxes = 0.07
// description = "My item"
// Output: My item With Tax: $107

calculatePrice(100, 0, "My other item");
// taxes = 0
// Since 0 is NOT null or undefined, it is kept.
// Output: My other item With Tax: $100

calculatePrice(100, undefined, "");
// taxes = undefined → default to 0.05
// description = ""
// Empty string is NOT null or undefined, so it stays ""
// Output:  With Tax: $105

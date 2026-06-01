// Browser Storage in JavaScript refers to ways of storing data in a user's browser so it can be used later without needing a database or server request.

// | Storage Type     | Capacity | Expiration                      | Accessible By       | Common Use Cases                                                                                   |
// | ---------------- | -------- | ------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------- |
// | `localStorage`   | ~5-10 MB | Never expires (until deleted)   | JavaScript          | Theme preference (dark/light mode), language settings, shopping cart, remembering user preferences |
// | `sessionStorage` | ~5-10 MB | Cleared when tab/browser closes | JavaScript          | Multi-step forms, temporary data, search filters, storing data during a single browsing session    |
// | Cookies          | ~4 KB    | Can have expiration date        | JavaScript & Server | Authentication tokens, session IDs, "Remember Me" functionality, tracking user activity            |

localStorage.setItem("name", "Bob"); // saved to localStorage as key: name, value: Bob
console.log(localStorage.getItem("name")); // prints: Bob
localStorage.removeItem("name"); // removes an item from the localStorage

sessionStorage.setItem("name", "Alice"); // saved to sessionStorage as key: name, value: Bob
sessionStorage.setItem("name", "Jacob"); // updates the value of name to Jacob
console.log(sessionStorage.getItem("name"));
sessionStorage.removeItem("name"); // removes an item from the sessionStorage

// new Date(2027, 0, 1) creates Jan 1, 2027 in the local timezone (months are 0-indexed)
// toUTCString() converts that date to UTC timezone format required by cookies
document.cookie = "name=Cecil; expires=" + new Date(2027, 0, 1).toUTCString();

// adds new cookie
document.cookie =
  "lastName=Dexter; expires=" + new Date(2027, 0, 1).toUTCString();

console.log(document.cookie);

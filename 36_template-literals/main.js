// =============================
// SQL TAGGED TEMPLATE (DEMO)
// =============================

const id = "1; DROP TABLE users";

// Tagged template call
const a = sql`SELECT * FROM users where id=${id} asdasd ${2 + 2} asdfds`;

console.log(a);

// strings = fixed parts of the template
// values  = dynamic injected values
function sql(strings, ...values) {
  return values.reduce((finalString, value, index) => {
    // start with first string part
    // then insert value, then next string part
    return `${finalString} "${value}" ${strings[index + 1]}`;
  }, strings[0]);
}

// =============================
// QUERY SELECTOR TAGGED TEMPLATE
// =============================

function queryAll(strings, ...values) {
  // rebuild final selector string from pieces
  const string = values.reduce((finalString, value, index) => {
    return `${finalString}${value}${strings[index + 1]}`;
  }, strings[0]);

  // use final string as CSS selector
  return document.querySelectorAll(string);
}

// "di${"v"}" becomes "div"
const div = queryAll`di${"v"}`;

console.log(div);

// =============================
// KEY IDEA (IMPORTANT)
// =============================

/*
Tagged template literal flow:

queryAll`di${"v"}`

becomes:
strings = ["di", ""]
values  = ["v"]

JS does NOT join automatically.
Your function manually rebuilds the final string.

---

reduce() flow:

start = strings[0]

loop:
  add value
  add next string part

result = final reconstructed string
*/

// =============================
// SAFETY NOTE (IMPORTANT)
// =============================

/*
This SQL example is ONLY a demo.

Even if id contains:
"1; DROP TABLE users"

it is NOT automatically safe.

Real security comes from:
- keeping values separate from query string
- using parameterized queries (not string building)
*/

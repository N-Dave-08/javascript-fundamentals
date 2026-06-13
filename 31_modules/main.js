/*
  IMPORTING FROM A MODULE

  User
  ----
  This imports the DEFAULT export.

  Since it is the default export,
  we DO NOT use curly braces.

  The name "User" can technically be anything:

  import Banana from "./user.js"

  would still work.

  However, using the original name improves readability.
*/
import User, {
  /*
    NAMED IMPORTS

    These come from named exports.

    Named imports MUST match the exported name
    unless we rename them using "as".
  */
  printName as userName,
  printAge as userAge,
} from "./user.js";

/*
  Create an instance of the User class.
*/
const user = new User("Jacob", 21);

console.log(user);

/*
  Output:
  User { name: "Jacob", age: 21 }

  Notice that User was imported from another file.
  This demonstrates how modules allow code reuse.
*/
userName(user);

/*
  Output:
  User's name is Jacob
*/
userAge(user);

/*
  Output:
  User's age is 21
*/

/*
  ============================
  MENTAL MODEL OF MODULES
  ============================

  user.js

      exports
         ↓

      User
      printName
      printAge

         ↓

  main.js imports them and uses them.

  Modules help organize code into separate files
  while controlling what is publicly accessible.

  Without modules:

      Everything might end up in the global scope.

  With modules:

      Each file gets its own scope and only exposes
      what it explicitly exports.
*/

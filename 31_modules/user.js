/*
  This file is a module.

  Anything that is NOT exported remains private
  to this file.

  Other files can only access things that
  we explicitly export.
*/

/*
  DEFAULT EXPORT

  A module can have ONLY ONE default export.

  Use a default export when the file has
  one primary thing it is responsible for.

  Since this file mainly represents a User,
  making the User class the default export
  is a good choice.
*/
export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

/*
  NAMED EXPORT

  Multiple named exports can exist in a file.

  Named exports are imported using curly braces:

  import { printName } from "./user.js"
*/
export function printName(user) {
  console.log(`User's name is ${user.name}`);
}

/*
  Another named export.
*/
export function printAge(user) {
  console.log(`User's age is ${user.age}`);
}

/*
  Alternative syntax:

  class User {
    ...
  }

  function printName() {
    ...
  }

  function printAge() {
    ...
  }

  export default User;
  export { printName, printAge };

  Same result.

  However, exporting directly where something
  is declared is often easier to read.
*/

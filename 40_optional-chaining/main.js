class Person {
  constructor(name, address, hobbies, friends) {
    this.name = name;
    this.address = address;
    this.hobbies = hobbies;
    this.friends = friends;
  }

  print() {
    console.log(this);
  }
}

// Optional chaining can be used multiple times in one expression.
// If ANY part becomes null or undefined,
// JavaScript stops and returns undefined instead of throwing an error.

function printPersonInfo(person) {
  // Access nested object properties safely
  console.log("Street:", person?.address?.street);

  // Access nested arrays safely
  console.log("First Hobby:", person?.hobbies?.[0]);

  // Access nested objects inside arrays safely
  console.log("Best Friend:", person?.friends?.[0]?.name);

  // Access deep nested properties
  console.log("Best Friend Street:", person?.friends?.[0]?.address?.street);

  // Call a method safely
  person?.print?.();
}

const bob = new Person(
  "Bob",
  undefined,
  ["Bowling", "Swimming"],
  [
    {
      name: "Alice",
      address: {
        street: "Main Street",
        city: "Manila",
      },
    },
  ],
);

bob.print();

printPersonInfo(bob);

console.log("----------------");

printPersonInfo(undefined);

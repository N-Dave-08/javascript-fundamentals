// =====================================================
// ===== What is a Class? =====
// =====================================================

// A class is a blueprint (template) for creating objects.
//
// It allows us to group:
// - properties (data)
// - methods (behavior)
//
// into a single reusable structure.
//
// Think of it like this:
//
// Class  -> Blueprint of a house
// Object -> Actual house built from that blueprint
//
// Class  -> Recipe
// Object -> Actual cake made from the recipe
//
// We create objects from a class using the `new` keyword.

// =====================================================
// ===== Creating a Class =====
// =====================================================

class Person {
  // Runs when a new object is created
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Create instances (objects)
const person1 = new Person("Dave", 22);
const person2 = new Person("Bob", 30);

console.log(person1);
console.log(person2);

// =====================================================
// ===== Instance Methods =====
// =====================================================

class User {
  constructor(name) {
    this.name = name;
  }

  // Method belongs to every instance
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const user = new User("Dave");

user.greet();

// =====================================================
// ===== Properties and Methods =====
// =====================================================

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal("Dog");

dog.speak();

// =====================================================
// ===== this Keyword =====
// =====================================================

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  print() {
    console.log(`${this.brand} ${this.model}`);
  }
}

const car = new Car("Toyota", "Corolla");

car.print();

// =====================================================
// ===== Adding Methods =====
// =====================================================

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }
}

const calculator = new Calculator();

console.log(calculator.add(10, 5));

console.log(calculator.subtract(10, 5));

// =====================================================
// ===== Class Expressions =====
// =====================================================

const PersonClass = class {
  constructor(name) {
    this.name = name;
  }
};

const person = new PersonClass("Dave");

console.log(person);

// =====================================================
// ===== Getters =====
// =====================================================

class Employee {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Looks like a property
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const employee = new Employee("Dave", "Cruz");

console.log(employee.fullName);

// =====================================================
// ===== Setters =====
// =====================================================

class Account {
  constructor() {
    this._balance = 0;
  }

  set balance(amount) {
    if (amount < 0) {
      return;
    }

    this._balance = amount;
  }

  get balance() {
    return this._balance;
  }
}

const account = new Account();

account.balance = 5000;

console.log(account.balance);

// =====================================================
// ===== Static Methods =====
// =====================================================

class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

// Called on the class itself
console.log(MathUtils.add(10, 20));

// const math = new MathUtils();
// math.add(); ❌

// =====================================================
// ===== Static Properties =====
// =====================================================

class AppConfig {
  static APP_NAME = "My Application";
}

console.log(AppConfig.APP_NAME);

// =====================================================
// ===== Inheritance =====
// =====================================================

class Person2 {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

class Student extends Person2 {
  constructor(name, course) {
    // Calls parent's constructor
    super(name);

    this.course = course;
  }

  study() {
    console.log(`${this.name} is studying ${this.course}`);
  }
}

const student = new Student("Dave", "Information Systems");

student.greet();
student.study();

// =====================================================
// ===== Method Overriding =====
// =====================================================

class Animal2 {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal2 {
  speak() {
    console.log("Woof!");
  }
}

const myDog = new Dog();

myDog.speak();

// =====================================================
// ===== Calling Parent Methods =====
// =====================================================

class Animal3 {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Cat extends Animal3 {
  speak() {
    super.speak();

    console.log("Meow!");
  }
}

const cat = new Cat();

cat.speak();

// =====================================================
// ===== Public Fields =====
// =====================================================

class User2 {
  role = "User";

  constructor(name) {
    this.name = name;
  }
}

const user2 = new User2("Dave");

console.log(user2);

// =====================================================
// ===== Private Fields =====
// =====================================================

class BankAccount {
  // Private property
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const bank = new BankAccount();

bank.deposit(500);

console.log(bank.getBalance());

// console.log(bank.#balance); ❌

// =====================================================
// ===== Private Methods =====
// =====================================================

class PasswordManager {
  #encrypt(password) {
    return `encrypted-${password}`;
  }

  save(password) {
    return this.#encrypt(password);
  }
}

const manager = new PasswordManager();

console.log(manager.save("12345"));

// =====================================================
// ===== instanceof =====
// =====================================================

console.log(student instanceof Student);
// true

console.log(student instanceof Person2);
// true

console.log(student instanceof Array);
// false

// =====================================================
// ===== Real World Use Case #1:
// ===== User Model
// =====================================================

class UserModel {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  getProfile() {
    return `${this.name} (${this.email})`;
  }
}

const currentUser = new UserModel(1, "Dave", "dave@gmail.com");

console.log(currentUser.getProfile());

// =====================================================
// ===== Real World Use Case #2:
// ===== Shopping Cart Item
// =====================================================

class CartItem {
  constructor(product, price, quantity) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
  }

  getTotal() {
    return this.price * this.quantity;
  }
}

const laptop = new CartItem("Laptop", 50000, 2);

console.log(laptop.getTotal());

// =====================================================
// ===== Real World Use Case #3:
// ===== API Service
// =====================================================

class ApiService {
  async getUsers() {
    console.log("Fetching users...");

    // pretend API call
    return [
      {
        id: 1,
        name: "Dave",
      },
    ];
  }
}

const api = new ApiService();

api.getUsers().then(console.log);

// =====================================================
// ===== Most Common Things You'll Use =====
//
// class
// constructor()
// this
// methods
// static
// extends
// super()
// getters
// setters
// private fields (#)
// instanceof
//
// =====================================================

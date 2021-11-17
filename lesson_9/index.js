// const people = {
//   getName: function () {
//     return this.name;
//   },
// };
// const user = {
//   name: "Ilya",
//   __proto__: people,
// };
// const admin = {
//   name: "Vasy",
//   __proto__: people,
// };

// console.log(user.getName());
// console.log(admin.getName());

// function CreateUser(name, age) {
//   this.userName = name;
//   this.userAge = age;
//   this.sayHi = function () {
//     return `Hello! my name is ${this.userName}`;
//   };
// }

// const userOne = new CreateUser("Ilya", "31");
// const userTwo = new CreateUser("Max", "55");

// // console.log(userOne);
// // console.log(userTwo);
// console.log(userOne.sayHi());

// function CreateUser(name, age) {
//   this.userName = name;
//   this.userAge = age;
// }

// CreateUser.prototype.sayHi = function () {
//   return `Hello! my name is ${this.userName}`;
// };

// const userOne = new CreateUser("Ilya", "31");
// const userTwo = new CreateUser("Max", "55");

// console.log(userOne);
// console.log(userTwo);

// console.log(userTwo.sayHi());

// function forPostcard(from, to) {
//   this.userOne = from;
//   this.userTwo = to;
//   this.showMessege = function () {
//     return `Привет ${this.userTwo},  от чувака ${this.userOne}`;
//   };
// }

// const userOne = new forPostcard("Ilya", "Van");
// const varTwo = new forPostcard("whu", "true");

// console.log(varTwo.showMessege()); // Есть другие варианты решения

// class Parent {
//   constructor(name) {
//     this.name = name;
//   }
//   sayName() {
//     return `Привет, моё имя ${this.name}`;
//   }
// }

// const firstParent = new Parent("max");

// // console.log(firstParent);
// // console.log(firstParent.sayName());

// class Child extends Parent {
//   constructor(name, lastName) {
//     super(name);
//     this.lastName = lastName;
//   }
//   sayFullName() {
//     return `Моё полное имя ${this.lastName} ${this.name} `;
//   }
//   get lastName() {
//     return this.lastName;
//   }
//   set lastName(newValue) {
//     this.lastName = newValue;
//   }
//   getLastName() {
//     return this.lastName;
//   }
//   setLastName(newValue) {
//     this.lastName = newValue;
//   }
// }

// const firstChild = new Child("Ivan", "Petrov");

// console.log(firstChild);
// // console.log(firstChild.sayFullName());
// // console.log(firstChild.sayName());

// firstChild.setLastName("smirnow");
// firstChild.lastName("smirnow");

// console.log(firstChild.getLastName());
// console.log(firstChild.lastName);

class People {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return `Имя работника ${this.name} ${this.surname}`;
  }
}

const firstPeople = new People("Ivan", "Ivanov");
console.log(firstPeople.getFullName());

class Worker extends People {
  constructor(name, surname, rate, day) {
    super(name, surname);
    this.rate = rate;
    this.day = day;
  }
  getSalary() {
    return `${this.getFullName()} его заработная плата = ${
      this.day * this.rate
    }`;
  }
}

const firstWorker = new Worker("Semen", "Ivanovich", 1500, 20);
console.log(firstWorker.getSalary());

const secondWorker = new Worker("Ilya", "Pronin", 2600, 20);
console.log(secondWorker.getSalary());

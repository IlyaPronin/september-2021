// const isUserAuth = true;
// function checkAccess() {
//   if (isUserAuth) {
//     console.log("доступ есть");
//   } else {
//     console.log("доступа нет");
//   }
// }

// checkAccess();

//
// function writeMess() {
//   if (isUserAuth) {
//     console.log("доступ есть");
//   } else {
//     console.log("доступа нет");
//   }
// }

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(1, 0);
// sum(16, 4);

// function getName(name) {
//   console.log("до return");
//   return name;
//   console.log("после return");
// }

// const userName = getName("Ivan");
// console.log(userName);

// function getName(name) {
//   return;
// }

// const userName = getName("Ivan");
// console.log(userName);

// function getName(userName) {
//   return userName;
// }

// let name = "Alex";

// const nameUserOne = getName(name);
// console.log(getName(nameUserOne));

// name = "Ivan";

// const nameUserTwo = getName(name);
// console.log(nameUserTwo);

// let name = "alex";

// console.log(name, "1");

// function sayHi(userName) {
//   userName = "petr";
//   console.log(userName, "function");
// }

// sayHi(name);

// console.log(name, "2");

// let a = 0;
// let b = 0;

// function sum() {
//   a += 1;
//   b += 1;
//   console.log(a + b);
// }
// sum();

// function sum() {
//   const a = 0;
//   const b = 1;
//   console.log(a + b);
// }

// sum();
// sum();
// sum();

// let name = "";

// function userName() {
//   if (name) {
//     console.log(name + " привет!!");
//   } else {
//     console.log("привет гость");
//   }
// }

// userName();

// function stNamber(a, b = 1) {
//   console.log(a ** b);
// }
// stNamber(2, 2);
// stNamber(2, 8);
// stNamber(20);

// function sr(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// console.log(sr([1, 55, 4, 98, 2]));

// const sayName = function (name) {
//   return name;
// };
// console.log(sayName("ilya"));

// const getName = function () {
//   console.log("Ilya");
// };

// const getUserInfo = function (callBack) {
//   console.log("USER INFO");
//   callBack();
// };

// getUserInfo(getName);

function test() {
  console.log("test");
}

test();

const test2 = function () {
  console.log("test2");
};

test2();

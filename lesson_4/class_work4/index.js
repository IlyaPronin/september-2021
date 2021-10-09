// if (true) {
//   console.log("true");
// }

// if (0) {
//   console.log("false");
// }
// console.log("start");

// const value = -5;

// if (value > 0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// console.log("finish");

// console.log("start");

// let value;

// if (value === 0) {
//   console.log(value, "= 0");
// } else if (value > 1) {
//   console.log(value, ">1");
// } else if (value < -1) {
//   console.log(value, "<-1");
// } else {
//   console.log(value);
// }

// console.log("finish");

// const age = 2;
// const result = age >= 18 ? "доступ разрешен" : "доступ запрещен";
// console.log(result);

// switch ("Mary") {
//   case "ivan":
//     console.log("IVAN");
//     break;
//   case "Alex":
//     console.log("ALEX");
//     break;
//   case "max":
//     console.log("MAX");
//     break;
//   default:
//     console.log("Имя нет в списке");
// }
// console.log("finish");

// const cut1 = 50;
// const cut2 = 7070;
// const cut3 = 100;
// if (cut1 > cut2) {
//   cut1 > cut3 ? console.log(cut1) : console.log(cut3);
// } else if (cut2 > cut1) {
//   {
//     cut2 > cut3 ? console.log(cut2) : console.log(cut3);
//   }
// }

// let userRole = "a123";

// switch (userRole) {
//   case "admin":
//     console.log("ADMIN, age 30, like a cat");
//     break;
//   case "manager":
//     console.log("MANAGER");
//     break;
//   case "user":
//     console.log("USER");
//     break;
//   default:
//     console.log("Имя нет в списке");
// }

// const a = 100;
// const b = 1;
// const result1 = a || b;
// console.log(result1);

// const a = 10;
// const b = "";

// const result = a && b;
// console.log(result);

// const a = 1;
// const b = 20;
// const c = 3;
// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else {
//   console.log(c);
// }

// let i = 0;
// // while (i < 10) {
// //   console.log(i);
// //   i += 1;
// // }

// let newString = "привет";
// let a = 0;

// while (a < 10) {
//   console.log(newString);
//   a += 1;
// }

// let newString = "привет!!";

// for (let a = 0; a < 10; a++) {
//   console.log(newString);
// }

let N = 120;
let M = 2;
let day = 0;

// while (M <= N) {
//   console.log(day);
//   day += 1;
//   N = N / 2;
// }

for (let day = 0; M <= N; N = N / 2) {
  console.log(day);
  day += 1;
}

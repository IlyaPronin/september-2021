// let a = -3;
// if (a == 0) {
//   console.log("Верно");
// } else {
//   console.log("неверно");
// }

// let a = 0;
// if (a > 0) {
//   console.log("Верно");
// } else {
//   console.log("неверно");
// }

// let a = 1;
// if (a < 0) {
//   console.log("Верно");
// } else {
//   console.log("неверно");
// }

// let a = -3;
// if (a >= 0) {
//   console.log("Верно");
// } else {
//   console.log("неверно");
// }

// let a = 0;
// if (a <= 0) {
//   console.log("Верно");
// } else {
//   console.log("неверно");
// }

// let a = -3;
// if (a != 0) {
//   console.log("Верно");
// } else {
//   console.log("неверно");
// }

// let a = "тест";
// if (a == "test") {
//   console.log("Верно");
// } else {
//   console.log("неверно");
// }

// let a = 3;
// if (a === 1) {
//   console.log("Верно");
// } else {
//   console.log("неверно");
// }

// let test = 0;
// if (test == true) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }
// let test = 1;
// let result = test == true ? console.log("верно") : console.log("неверно");

// let test = false;
// if (test != true) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

// let test = true;
// let result = test != true ? console.log("верно") : console.log("неверно");

// let a = 2;
// if (a > 0 && a < 5) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

// let a = -3;
// if (a == 0 || a == 2) {
//   console.log((a = a + 7));
// } else {
//   console.log((a = a / 10));
// }

// let a = 0;
// let b = 6;
// if (a <= 1 && b >= 3) {
//   console.log((a = a + b));
// } else {
//   console.log((a = a - b));
// }

// let a = 0;
// let b = 9;
// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

// let num = 2;
// switch (num) {
//   case 1:
//     console.log("зима");
//     break;
//   case 2:
//     console.log("весна");
//     break;
//   case 3:
//     console.log("лето");
//     break;
//   case 4:
//     console.log("осень");
//     break;
// }

// let day = 12;
// if (day <= 10 && day > 0) {
//   console.log("первая декада");
// } else if (day <= 20 && day > 10) {
//   console.log("вторая декада");
// } else if (day <= 31 && day > 20) {
//   console.log("третья декада");
// } else {
//   console.log("нет такого дня");
// }

// let month = 17;
// if ((month <= 2 && month > 0) || month == 12) {
//   console.log("зима");
// } else if (month <= 5 && month > 2) {
//   console.log("весна");
// } else if (month <= 8 && month > 5) {
//   console.log("лето");
// } else if (month <= 11 && month > 8) {
//   console.log("осень");
// } else {
//   console.log("нет такого месяца");
// }

// let newString = "abcd";
// if (newString[0] == "a") {
//   console.log("да");
// } else {
//   console.log("нет");
// }

// let newString = "12345";
// if (newString[0] == "1") {
//   console.log("да");
// } else if (newString[0] == "2") {
//   console.log("да");
// } else if (newString[0] == "3") {
//   console.log("да");
// } else {
//   console.log("нет");
// }

// let newString = "975";
// let sum = `сумма цифр из числа = ${
//   +newString[0] + +newString[1] + +newString[2]
// }`;
// console.log(sum);

// let newString = "975659";
// let sumOne = +newString[0] + +newString[1] + +newString[2];
// let sumTwo = +newString[3] + +newString[4] + +newString[5];
// if (sumTwo === sumOne) {
//   console.log("да");
// } else {
//   console.log("нет");
// }

// Выведите столбец чисел от 1 до 100.

// let i = 1;
// while (i < 101) {
//   console.log(i);
//   i++;
// }

// for (let num = 1; num < 101; num++) {
//   console.log(num);
// }

// Выведите столбец чисел от 11 до 33.

// let i = 11;
// while (i < 34) {
//   console.log(i);
//   i++;
// }

// for (let i = 11; i < 34; i++) {
//   console.log(i);
// }

// Выведите столбец четных чисел в промежутке от 0 до 100.

// let i = 0;
// while (i < 100) {
//   i += 1;
//   if (i % 2 != 0) continue;
//   console.log(i);
// }

// for (let i = 0; i < 100; i++) {
//   if (i % 2 != 0) continue;
//   console.log(i);
// }

// С помощью цикла найдите сумму чисел от 1 до 100.
// let sum = 0;
// for (let i = 1; i < 101; i += 1) {
//   sum = i + sum;
// }
// console.log(sum);

// let sum = 0;
// let i = 1;
// while (i <= 100) {
//   sum = sum + i;
//   i += 1;
// }
// console.log(sum);

// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
// }

// Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и
// оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// let arr = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i < arr.length; i += 1) {
//   if (arr[i] > 10 || arr[i] < 3) continue;
//   console.log(arr[i]);
// }

// Дан массив с числами. Числа могут быть положительными и отрицательными.
//  Найдите сумму положительных элементов массива.

// let arr = [2, 5, -9, 0, 4, -55, 48, 101];
// let sum = 0;
// for (let i = 0; i < arr.length; i += 1) {
//   if (arr[i] < 0) continue;
//   sum = sum + arr[i];
// }

// console.log(sum);

// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if
// проверьте есть ли в массиве элемент со значением, равным 4.
//  Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// let arr = [1, 2, 5, 9, 13, 4, 10];
// let str = "Есть!";
// for (let i = 0; i < arr.length; i += 1) {
//   if (arr[i] === 4) {
//     console.log(str);
//   }
// }

// Дан массив числами, например: [10, 20, 30, 50, 235, 3000].
//  Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i += 1) {
//   arrStr = String(arr[i]);
//   if (arrStr[0] != 1 && arrStr[0] != 2 && arrStr[0] != 5) continue;
//   console.log(arrStr);
// }

//  Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9.
//   С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let str = "";
for (let i = 0; i < arr.length; i += 1) {
  str = str + "-" + arr[i];
}
console.log(str);

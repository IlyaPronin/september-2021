// function sayFullName(firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`;
// }

// // console.log(sayFullName("Ilya", "Pronin"));

// // console.log(sayFullName.call({ phrase: "Hello" }, "Ilya", "Pronin"));

// let boundName = sayFullName.bind({ phrase: "bAY" }, "Ilya", "Pronin");

// let boundName2 = sayFullName.bind({ phrase: "Hello" }, "Kate");

// console.log(boundName2("Petrova"));

// const town = {
//   townName: "London",
//   population: "13 ml",
//   getTownName: function () {
//     return this.townName;
//   },
//   getPopulation: function () {
//     return this.population;
//   },
//   setSomeValue: function (key, value) {
//     this[key] = value;
//   },
// };

// const town2 = {
//   townName: "Moscow",
//   population: "8 ml",
// };

// // console.log(town.getTownName.call(town2));
// console.log(town2);

// const bound = town.setSomeValue.bind(town2);

// bound("townName", "Paris");
// bound("population", "15");
// bound("contry", "ita");

// console.log(town2);

// function test() {
//   const a = 0;
//   console.log(this.a);
// }

// const bound = test.bind({ a: 10 });

// bound();

// function getFullName() {
//   const firstName = "Ilya";
//   function getSecondName(secondName) {
//     return `${firstName} ${secondName}`;
//   }
//   return getSecondName;
// }
// const closer = getFullName();
// console.log(closer());

// const getArea = (a) => {
//   return (b) => a * b;
// };

// const areaWithTen = getArea(10);
// console.log(areaWithTen(5));
// console.log(areaWithTen(10));
// console.log(areaWithTen(126));

// const areaWithFour = getArea(4);
// console.log(areaWithFour(3));
// console.log(areaWithFour(25));

// const getHeight = (a) => {
//   a = 10;
//   return (b, c) => a * b * c;
// };

// const someVolue = getHeight();
// console.log(someVolue(9, 50));

// const getVol = (height) => (Width, length) => height * Width * length;
// const getAll = getVol(10);
// console.log(getAll(4, 5));

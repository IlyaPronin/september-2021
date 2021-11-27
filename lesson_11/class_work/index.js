// try {
//   console.log("start");
//   console.log(value);
//   console.log("end");
// } catch (e) {
//   console.log("Произошла ошибка");
// }
// try {
//   //исключение работы блока try
//   console.log("start");
//   setTimeout(() => {
//     console.log(value);
//   }, 3000);
//   console.log("end");
// } catch (e) {
//   console.log("произошлаьошибка");
// }

// try {
//   console.log("start");
//   setTimeout(() => {
//     try {
//       console.log(value);
//     } catch (e) {
//       console.log("error");
//     }
//   }, 3000);
//   console.log("end");
// } catch (e) {
//   console.log("произошла ошибка");
// }

// const a = 10;
// try {
//   if (a === 10) {
//     throw new Error ("My costum error");
//   }
//   console.log(a);
// } catch (e) {
//   console.log(e.name, e.massege);
// }

// try {
//   try {
//     console.log(a);
//   } catch (e) {
//     if (e.name === "Error") {
//       console.log(e.name, e.massege);
//     } else {
//       throw new Error(e.massege);
//     }
//   }
// } catch (e) {
//   console.log(e.massege);
// } //dont work

const baseURL = "https://reqres.in/api";
const getResponseData = (data) => {
  console.log(data, "Done");
  const element = document.createElement("div");
  element.style.backgroundColor = "red";
  element.style.fontSize = "40";
  element.innerHTML = `Пользователь с id=${data.id},сoздан в ${data.createdAt}`;
  document.body.appendChild(element);
};
// const getRequest = (page, callback) => {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", `${baseURL}/users?page=${page}`);

//   xhr.send();

//   xhr.responseType = "json";

//   xhr.onload = function () {
//     callback(xhr.response.data);
//   };
// };

// getRequest(1, getResponseData);

const postRequestXHR = (body, callback) => {
  const xhr = new XMLHttpRequest();

  xhr.open("POST", `${baseURL}/users`);

  xhr.send(JSON.stringify(body));

  xhr.responseType = "json";

  xhr.onload = function () {
    callback(xhr.response);
  };
};

postRequestXHR({ name: "Neo", job: "Men" }, getResponseData);

const getRequest = async (page) => {
  const res = await fetch(`${baseURL}/users?page${page}`);
  const data = await res.json();
  console.log(data);
};
getRequest(1);

const postRequest = async (body) => {
  const res = await fetch(`${baseURL}/users`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  const data = await res.json();
  getResponseData(data);
};

postRequest({ name: "Neo", job: "Men" });

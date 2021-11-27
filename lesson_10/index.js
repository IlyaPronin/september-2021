//window-global-globalThis
// let myId = document.getElementById("my_Id");
// console.log(myId);

// let myLovelyDiv = document.getElementsByClassName("my_div");

// const div = myLovelyDiv[0];

// div.innerHTML += "poka";

// console.log(div);

// let newDiv = document.createElement("div");
// newDiv.className = "test_div";
// newDiv.innerHTML = "text";

document.body.style.margin = 0;

let header = document.createElement("header");
header.className = "page-header";
header.innerHTML = "Zаголовок";
header.style.background = "#ff000";
header.style.height = "60px";
document.body.prepend("header");

let section = document.createElement("section");
section.className = "page-section";
// section.innerHTML = "Привет";
header.after(section);

let list = document.createElement("ol");
list.className = "list";
section.prepend(list);

for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.className = "list-element";
  li.innerHTML = `элемент списка номер ${i}`;
  list.after(li);
}

let inputWrapper = document.createElement("div");
inputWrapper.className = "inputWrapper";
inputWrapper.style.display = "flex";
inputWrapper.style.flexDirection = "column";
inputWrapper.style.gap = "10px";
inputWrapper.style.width = "150px";
list.after(inputWrapper);

let input = document.createElement("input");
input.type = "text";
list.after(inputWrapper);

let button = document.createElement("button");
button.className = "btn";
button.innerHTML = "добавить TO DO";
// button.onclic = () => console.log("вы нажали кнопку");
input.after(button); //проверить посмотреть

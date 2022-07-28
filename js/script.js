const root = document.querySelector(`#root`);

let list = document.querySelector("ul");

let item = document.querySelector("li");

let tmp = "";

// const productList = [
//   {
//     firstText: "Hello World!",

//     secondText: "Hello World! - second",

//     thirdText: "Hello World! - third",

//     fourthText: "Hello World! - fourth",
//   },
//   {
//     fivth: "5",
//     sixth: "asdfghjkl",

//   },
// ];

// let i;

// for (let i = 5; i > 0; i--) {
//   // tmp = tmp + i;
//   console.log(i);
// }

// let h = [1, 2, 3, "apple", "pineApple",];

// let i;

// for (i = 0; i <= h.length; i++) {
//   console.log(h[i]);
// }

// item.textContent = "item1";
// item.textContent = "item2";

// item.value = "red";

let shoppingList = ["Apple", "Banana", "Pinapple"];

let lists = document.createElement("ul");

root.append(lists);

for (let i = 0; i < shoppingList.length; i++) {
  let li = document.createElement("li");

  li.textContent = shoppingList[i];
  lists.append(li);
}

let table = document.createElement("table");

root.append(table);

for (let i = 0; i < shoppingList.length; i++) {
  let tr = document.createElement("tr");
  let td = document.createElement("td");

  td.textContent = shoppingList[i];

  table.append(tr);

  tr.append(td);
}

let colorful = {
  red: Math.random() * 255,
  green: Math.random() * 255,
  blue: Math.random() * 255,
};

lists.style.color = `rgb(${colorful.red}, ${colorful.green}, ${colorful.blue})`;

let classRoot = document.querySelector(".root");

classRoot.style.display = "flex";
classRoot.style.flexWrap = "wrap";
classRoot.style.gap = "10px";

for (let i = 0; i < 12; i++) {
  let items = document.createElement("article");

  classRoot.append(items);

  let h2 = document.createElement("h2");

  h2.style.color = "red";
  h2.style.fontSize = "25px";
  h2.textContent = "Hello";
  items.prepend(h2);

  let p = document.createElement("p");
  p.textContent = "123 asdfghjkl; 123 asdfghjkl;' 123 asdfghjkl;'";

  items.append(p);

  items.style.flexBasis = "30%";
  items.style.border = "2px solid black";
}

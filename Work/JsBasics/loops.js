// map() to do something to each item in a collection and create a new collection containing the changed items
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]


// filter() to test each item in a collection, and create a new collection containing only items that match
function lCat(cat) {
  return cat.startsWith("L");
}

const cat = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cat.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]


const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  for (const contact of contacts) {
    const splitContact = contact.split(":");
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }
});

// Challenges
// Task 2
// const myArray = ["tomatoes", "chick peas", "onions", "rice", "black beans"];
// const list = document.createElement("ul");
// const section = document.querySelector("section");
// section.appendChild(list);

// for (let arr of myArray){
//     const item= document.createElement("li")
//     item.textContent= arr
//     list.appendChild(item)
// }


// Task 3
let i = 500;
const par = document.createElement("p");
const section = document.querySelector("section");
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

do {
  if (isPrime(i)) {
    para.textContent += `${i}, `;
  }
  i--;
} while (i > 1);

section.appendChild(para);
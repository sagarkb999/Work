// const buttonA= document.querySelector("#button_A")
// const headingA= document.querySelector("#heading_A")

// let count= 1

// buttonA.onclick = () => {
//         buttonA.textContent = "Try again!";
//         headingA.textContent= `${count} so far`;
//         count += 1;
// };

// Math
const myInt = 5;
const myFloat = 6.667;
// console.log(myInt);
// console.log(myFloat);

const num = "20";
// console.log(Number(num) + 2)

// console.log(Math.pow(7, 3))

const single = "Single quotes Double quotes Backtick";
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

// STring Methods
console.log(single.includes("quot"));
console.log(single.startsWith("quotes"));
console.log(single.endsWith("quotes"));

console.log(single.indexOf("quotes"));
console.log(single.indexOf("z"));

console.log(single.slice(0, 6));
console.log(single.slice(8));

console.log(single.toUpperCase());
console.log(single.toLowerCase());
console.log(single.replace("Single", "Triple"));
console.log(single.replaceAll("quotes", "commas"));


// Arrays
const shopping= ["bread", "milk", "cheese", "hummus", "noodles", ["Rajalaxmi","Aditi", "Satya",  "Sagar"]]

console.log(shopping.length) // 5
console.log(shopping[5][2]) // Satya
console.log(shopping.indexOf("Sagar")) // -1

shopping.push("pizza")
console.log(shopping)
shopping.pop("noodles")
console.log(shopping) // ["bread", "milk", "cheese", "hummus", "noodles", ["Rajalaxmi","Aditi", "Satya",  "Sagar"]]
shopping.shift()
console.log(shopping)// ["milk", "cheese", "hummus", "noodles", ["Rajalaxmi","Aditi", "Satya",  "Sagar"]]

// I want to remove Edinburgh
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle", "Amsterdam"];
// const edin= cities.indexOf("Edinburgh")
// cities.splice(edin, 3)
console.log(cities) // [ 'Manchester', 'Liverpool' ]

for (const items of shopping){
    console.log(items)
}

function doubles(number){
    return number *2;
}
const nums = [5,10,15];
const doubled= nums.map(doubles)
console.log(doubled)

function isLong(val){
    return val.length > 8
}
const long= cities.filter(isLong)
console.log(long)

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const city= data.split(",")
console.log(city)

console.log(city.length)
console.log(city[city.length-1]) // Carlisle

const joined= city.join("-")
console.log(joined)

const arr= joined.split("-")
const str= arr.toString()
console.log(str)

//Array CHallenge

// Part 1
products= ["Underpants:6.99",
"Socks:5.99",
"T-shirt:14.99",
"Trousers:31.99",
"Shoes:23.99"]

// Part 2
let sum=0;
for(const prod of products){
  const prodsplit= prod.split(":")
  const name= prodsplit[0]
  const price= Number(prodsplit[1])
  console.log(`${name} - ${price}`)
  sum+= price
  console.log(sum)

}
// Part 3

// Part 4

// Part 5
// let itemText = 0;

// const listItem = document.createElement("li");
// listItem.textContent = itemText;
// list.appendChild(listItem);

// // Part 6

// totalBox.textContent = `Total: $${total.toFixed(2)}`;
cities.unshift("London")
console.log(cities)
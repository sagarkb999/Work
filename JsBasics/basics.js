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

const num= "20"
// console.log(Number(num) + 2)

// console.log(Math.pow(7, 3))

const single = 'Single quotes Double quotes Backtick';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

// STring Methods
console.log(single.includes("quot"))
console.log(single.startsWith("quotes"))
console.log(single.endsWith("quotes"))

console.log(single.indexOf("quotes"))
console.log(single.indexOf("z"))

console.log(single.slice(0,6))
console.log(single.slice(8))

console.log(single.toUpperCase())
console.log(single.toLowerCase())
console.log(single.replace("Single", "Triple"))
console.log(single.replaceAll("quotes", "commas"))

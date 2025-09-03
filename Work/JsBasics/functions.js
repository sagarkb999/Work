// const nums= [2,4,6,8]

// console.log(nums.map(item => item *2))

// const text= document.querySelector("#textBox")
// const output= document.querySelector("#output")

// text.addEventListener("keydown", (event) => {
//     output.textContent= `You pressed ${event.key}.`
// })

const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.querySelector("p");

// function chooseName(){
//     const randomNumber = Math.floor(Math.random() * names.length)
//     const choice=  names[randomNumber]
//     para.textContent= choice
// }

// chooseName()

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function chooseItem(array) {
  const choice = array[random(0, array.length)];
  return choice;
}

para.textContent = chooseItem(names);
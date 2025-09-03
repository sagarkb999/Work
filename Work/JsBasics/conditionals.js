const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
for(const cont of contacts){
const contactSplit= cont.split(":")

// console.log(contactSplit)
for(const i of contactSplit){
        if (i[0] === "Sarah"){
            console.log(`Sarah's number is `+ i)
        }
    }
  }



// const output = document.querySelector(".output");
// output.textContent = "";

// let i = 10;

// while (i >= 0) {
//   const para = document.createElement("p");
//   if (i === 10) {
//     para.textContent = `Countdown ${i}`;
//   } else if (i === 0) {
//     para.textContent = "Blast off!";
//   } else {
//     para.textContent = i;
//   }

//   output.appendChild(para);

//   i--;
// }

let season = "summer";
let response;

if (season === "summer") {
  response = "It's probably nice and warm where you are; enjoy the sun!";
} else if (season === "winter") {
  response = "I hope you are not too cold. Put some warm clothes on!";
} else {
  response =
    "I don't know what the season is where you are. Hope you are well.";
}

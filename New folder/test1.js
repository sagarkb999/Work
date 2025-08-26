async function populate(){
    // Async: function waits for the data to be fetched
    const requestURL= "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    
    const request= new Request(requestURL); // request object using url
    const response= await fetch(request) // request to server
    const superHeroes= await response.json(); //reads response & converts to JS object

    populateHeader(superHeroes)
    populateHeroes(superHeroes)
}

function populateHeader(obj){
    const header= document.querySelector("header");
    const myH1= document.createElement("h1");
    myH1.textContent= obj.squadName;
    header.appendChild(myH1)

    const myPara= document.createElement("p");
    myPara.textContent= `Hometown : ${obj.homeTown} // Formed: ${obj.formed}`
}

function populateHeroes(obj){
    const section= document.querySelector("section")
    const heroes= obj.members;

    for (const hero of heroes) {
        const myArticle= document.createElement("article"); // Hero's info
        const myH2= document.createElement("h2"); //name
        const myPara1= document.createElement("p"); // identity
        const myPara2= document.createElement("p"); // age
        const myPara3= document.createElement("p"); // superpowers
        const myList= document.createElement("ul"); // list to hold all superpoers
        
        // Filling Data
        myH2.textContent= hero.name;
        myPara1.textContent= `Secret Identity: ${hero.secretIdentity}`;
        myPara2.textContent= `Age: ${hero.age}`;
        myPara3.textContent= `Superpowers: `;

        // Iterating through superpowers list
        const superPowers= hero.powers;
        for (const power of superPowers){
            const listItem= document.createElement("li");
            listItem.textContent= power;
            myList.appendChild(listItem)
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
    }
}
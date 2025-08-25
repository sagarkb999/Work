const blogs = [
  {
    id: 1,
    name: "Rajalaxmi",
    type: "developer",
    description: "Rajalaxmi is a React developer who loves building fast and scalable apps.Rajalaxmi is a React developer who loves building fast and scalable apps.Rajalaxmi is a React developer who loves building fast and scalable apps.Rajalaxmi is a React developer who loves building fast and scalable apps.Rajalaxmi is a React developer who loves building fast and scalable apps. ",
  },
  {
    id: 2,
    name: "Aditi",
    type: "designer",
    description: "Aditi is a UI/UX designer who focuses on clean design and usability.Aditi is a UI/UX designer who focuses on clean design and usability.Aditi is a UI/UX designer who focuses on clean design and usability.Aditi is a UI/UX designer who focuses on clean design and usability.Aditi is a UI/UX designer who focuses on clean design and usability. ",
  },
  {
    id: 3,
    name: "Satya",
    type: "developer",
    description: "Satya is a full-stack developer with strong knowledge in TypeScript and Node.js.Satya is a full-stack developer with strong knowledge in TypeScript and Node.js.Satya is a full-stack developer with strong knowledge in TypeScript and Node.js.Satya is a full-stack developer with strong knowledge in TypeScript and Node.js.Satya is a full-stack developer with strong knowledge in TypeScript and Node.js. ",
  },
  {
    id: 4,
    name: "Sagar",
    type: "product",
    description: "Sagar explores product discovery, metrics, and roadmap prioritization.Sagar explores product discovery, metrics, and roadmap prioritization.Sagar explores product discovery, metrics, and roadmap prioritization.Sagar explores product discovery, metrics, and roadmap prioritization.Sagar explores product discovery, metrics, and roadmap prioritization. ",
  },
];


// Initial choice/value
let showFull = false;
let sorted = false;
let typeParam = "All";

// Selecting the buttons-html elemnts
const blogList= document.getElementById("blogList")
const toggleBtn = document.getElementById("toggleBtn");
const sortBtn = document.getElementById("sortBtn");
const typeFilter = document.getElementById("typeFilter");

// adding eventlisteners
toggleBtn.addEventListener("click", 
  ()=> {
    showFull = !showFull; // Used to toggle
    toggleBtn.textContent = showFull ? "Show Less" : "Show More";
        renderBlogs();
  }
)

sortBtn.addEventListener("click", ()=>{
  sorted= !sorted;
  sortBtn.textContent= showFull ? "Unsort" : "Sort"
}
)













// Helper functions
function getDescription(desc, showFull){
  return showFull ? 
    desc 
    : (desc.length > 90 
      ? desc.slice(0, 90)+ "..."
      : desc)
}

function renderBlogs() {
  blogList.innerHTML = "";

  let filtered = typeParam === "All" ? blogs : blogs.filter(blog => blog.type === typeParam);
  let displayed = [...filtered];

  if (sorted) displayed.sort((a, b) => a.name.localeCompare(b.name));

  displayed.forEach(blog => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${blog.name}</strong> <br>
      ${getDescription(blog.description)} <br>
      <em>Type: ${blog.type}</em>
    `;
    blogList.appendChild(li);
  });
}

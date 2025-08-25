// Blogs as array of objects
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
//State variables
let showFull = false;
let sorted = false;
let typeParam = "All";

// DOM element grabbing
const blogList = document.getElementById("blogList");
const toggleBtn = document.getElementById("toggleBtn");
const sortBtn = document.getElementById("sortBtn");
const typeFilter = document.getElementById("typeFilter");

// Unique types for dropdown
const uniqueTypes = ["All", ...new Set(blogs.map(blog => blog.type))];  // collecting unique blog types and puts ALL

// Populate dropdown filters
uniqueTypes.forEach((type) => {
  const option = document.createElement("option");
  option.value = type;
  option.textContent = type;
  typeFilter.appendChild(option);
});

// Slicing upto 90 chars..
function getDescription(desc) {
  return showFull ? desc : (desc.length > 90 ? desc.slice(0, 90) + "..." : desc);
}

function renderBlogs() {
  blogList.innerHTML = "";

  let filtered = typeParam === "All" ? blogs : blogs.filter(blog => blog.type === typeParam); // FIltering of blogs
  let displayed = [...filtered];

  if (sorted) displayed.sort((a, b) => a.name.localeCompare(b.name)); //compares 2 strngs alphabeticlly

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

toggleBtn.addEventListener("click", () => {
  showFull = !showFull;
  toggleBtn.textContent = showFull ? "Show Less" : "Show More";
  renderBlogs();
});

sortBtn.addEventListener("click", () => {
  sorted = !sorted;
  sortBtn.textContent = sorted ? "Unsort" : "Sort by Name";
  renderBlogs();
});

typeFilter.addEventListener("change", (e) => {
  typeParam = e.target.value;
  renderBlogs();
});

renderBlogs();

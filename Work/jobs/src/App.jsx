// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import { useState } from "react";

export default function App() {
  const [showFull, setShowFull] = useState(false);
  const [sorted, setSorted] = useState(false);
  const [typeParam, setTypeParam] = useState("All");

  // Dummy blogs data
  const blogs = [
    {
      id: 1,
      name: "Rajalaxmi",
      type: "developer",
      description: "Rajalaxmi is a React developer who loves building fast and scalable apps.Aditi is a React developer who loves building fast and scalable apps.Aditi is a React developer who loves building fast and scalable apps.Aditi is a React developer who loves building fast and scalable apps.Aditi is a React developer who loves building fast and scalable apps.Aditi is a React developer who loves building fast and scalable apps.",
    },
    {
      id: 2,
      name: "Aditi",
      type: "designer",
      description: "Aditi is a UI/UX designer who focuses on clean design and usability.Rajalaxmi is a UI/UX designer who focuses on clean design and usability.Rajalaxmi is a UI/UX designer who focuses on clean design and usability.Rajalaxmi is a UI/UX designer who focuses on clean design and usability.Rajalaxmi is a UI/UX designer who focuses on clean design and usability.Rajalaxmi is a UI/UX designer who focuses on clean design and usability.",
    },
    {
      id: 3,
      name: "Satya",
      type: "developer",
      description: "Satya is a full-stack developer with strong knowledge in TypeScript and Node.js.Satya is a full-stack developer with strong knowledge in TypeScript and Node.js.Satya is a full-stack developer with strong knowledge in TypeScript and Node.js.Satya is a full-stack developer with strong knowledge in TypeScript and Node.js.Satya is a full-stack developer with strong knowledge in TypeScript and Node.js.Satya is a full-stack developer with strong knowledge in TypeScript and Node.js.",
    },
  {
    id: "4",
    name: "Sagar",
    type: "product",
    description:
      "Sagar explores product discovery, metrics, and roadmap prioritization. He shares templates for PRDs and stakeholder alignment.Sagar explores product discovery, metrics, and roadmap prioritization. She shares templates for PRDs and stakeholder alignment.Sagar explores product discovery, metrics, and roadmap prioritization. She shares templates for PRDs and stakeholder alignment.Sagar explores product discovery, metrics, and roadmap prioritization. She shares templates for PRDs and stakeholder alignment.Sagar explores product discovery, metrics, and roadmap prioritization. She shares templates for PRDs and stakeholder alignment.Sagar explores product discovery, metrics, and roadmap prioritization. She shares templates for PRDs and stakeholder alignment.",
  },
  ];

  // a. Function to get description
  function getDescription(description, showFull) {
    if (showFull) return description;
    return (
      description.length > 90 ? description.slice(0, 90) + "..." : description
    );
  }

  // b. Filter blogs by type (use dropdown value)
  const filteredBlogs = typeParam === "All" ? blogs
      : blogs.filter((blog) => blog.type === typeParam);

  // c. Sort blogs by name if sorted is true
  const displayedBlogs = [...filteredBlogs];
  if (sorted) {
    displayedBlogs.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Create dropdown options dynamically
  const uniqueTypes = ["All", ...new Set(blogs.map((blog) => blog.type))];

  return (
    <div>
      <h2>Blog List</h2>

      <button onClick={() => setShowFull(!showFull)}>
        {showFull ? "Show Less" : "Show More"}
      </button>

      <button onClick={() => setSorted(!sorted)}>
        {sorted ? "Unsort" : "Sort by Name"}
      </button>

      {/* Dropdown filter */}
      <select value={typeParam} onChange={(e) => setTypeParam(e.target.value)}>
        <option value="All">All</option>
        <option value="developer">developer</option>
        <option value="designer">designer</option>
        <option value="product">product</option>
</select>


      <ul>
        {displayedBlogs.map((blog) => (
          <li key={blog.id}>
            <h3>{blog.name}</h3>
            <p>{getDescription(blog.description, showFull)}</p>
            <span>Type: {blog.type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
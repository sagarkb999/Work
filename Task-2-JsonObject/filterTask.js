let allJobs = []; // global variable to hold all jobs

// Fetch jobs and populate UI
async function populate() {
  const requestURL = "https://mocki.io/v1/9767a155-d962-476f-8b65-7f7888423156";
  const response = await fetch(requestURL);
  const jobsData = await response.json();

  allJobs = jobsData.jobs; // store data globally

  populateJobDetails(allJobs);
  setupFilter(allJobs);
}

// Populate job details
function populateJobDetails(jobs) {
  const mySection = document.querySelector("section");
  mySection.innerHTML = ""; // clear previous jobs

  for (const job of jobs) {
    const myArticle = document.createElement("article");
    const myH1 = document.createElement("h1"); // Title
    const myH2 = document.createElement("h2"); // Type
    const myPara = document.createElement("p"); // Description
    const companyName = document.createElement("h3");
    const companyDesc = document.createElement("p");
    const companyContact = document.createElement("p");

    // Filling Data
    myH1.textContent = job.title;
    myH2.textContent = `Job Type: ${job.type}`;
    myPara.textContent = `Job Description: ${job.description}`;
    companyName.textContent = `Company: ${job.company.name}`;
    companyDesc.textContent = job.company.description;
    companyContact.textContent = `Email: ${job.company.contactEmail} | Phone: ${job.company.contactPhone}`;

    myArticle.appendChild(myH1);
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara);
    myArticle.appendChild(companyName);
    myArticle.appendChild(companyDesc);
    myArticle.appendChild(companyContact);

    mySection.appendChild(myArticle);
  }
}

// Setup filter dropdown
function setupFilter(jobs) {
  const filter = document.getElementById("jobFilter");

  // get unique titles
  const titles = [...new Set(jobs.map(job => job.title))];

  // add options
  titles.forEach(title => {
    const option = document.createElement("option");
    option.value = title;
    option.textContent = title;
    filter.appendChild(option);
  });

  // add filter logic
  filter.addEventListener("change", () => {
    const selected = filter.value;
    if (selected === "all") {
      populateJobDetails(allJobs);
    } else {
      const filtered = allJobs.filter(job => job.title === selected);
      populateJobDetails(filtered);
    }
  });
}

const categoryElement = document.getElementById("categories");
const jobListingElement = document.getElementById("job-listing");
const searchField = document.querySelector('.search input');

const categories = [
  {
    name: "Artificial Intelligence",
    slug: "artificial_intelligence",
  },

  {
    name: "Backend Web Development",
    slug: "backend_development",
  },

  {
    name: "Copywriting",
    slug: "copywriting",
  },

  {
    name: "Customer Support",
    slug: "customer_support",
  },

  {
    name: "Design",
    slug: "design",
  },

  {
    name: "Frontend Engineering",
    slug: "frontend_engineering",
  },
  
  {
    name: "Frontend Developer",
    slug: "frontend-developer"
  }
];

const ListOfJobs = [
  {
    id: "101",
    title: "Full Stack Web Developer",
    description: "We build software for churches",
    company_name: "Planning Center",
    role: "Full-time",
    location: "Carlsbad, CA(Remote)",
    category: "software Enginnering",
    details: {
        title: "Full Stack Developer",
        company_name: "Planning Center",
        location: "Carlsbad, CA (Remote)",
        role: "Full-time",
        description: "We’re seeking a Full Stack Developer experienced in Ruby on Rails and React. You’ll work on building out new features from start to finish, refining existing features, improving performance, and ensuring the security of our customer’s data.",
        salary: "$200,000 USD",
        requirements: [
        "Reside in the United States",
        "Eligible to work in the United States (we are currently unable to offer employment to those with H-1B visas)",
        // "Be willing to travel four times each year to connect with the rest of the team (not during a pandemic)",
        "Experience in Ruby on Rails and React, with strong competency in at least one."
      ]
    },
  },

  {
    id: "102",
    title: "Enterprise Account Executive",
    description: "The study of data science in computer is our specialty",
    company_name: "Grafana Labs",
    location: " France",
    role: "Full-time",
    category: "Account Executive",
    details: {
      title: "Enterprise Account Executive",
      company_name: "Grafana Labs",
      description: "Grafana Labs is looking for an Enterprise Account Executive who will be responsible for prospecting and closing new business across the French region. You will identify, nurture and close opportunities with both new and existing customers. You will manage forecasts and track customer data. We're strong proponents of a consultative sales approach - learn about the customers needs first before talking about our products. Your expertise will be critical in helping articulate the value of our products, work with the customer during the trial phase and hand off a strong relationship to our Customer Success team.",
      role: "Full-time",
      salary: "...",
      location: "France",
      requirements: [
        "5+ Years of Experience in Infrastructure Technology Sales",
        "Experience using Salesforce",
        "Familiarity selling open source technology",
        "Familiarity selling open source technology"]
    },
  },

  {
    id: "103",
    title: "Social Media and Content Marketing Specialist",
    description: "We co-innovate with the world's most ambitious backgrounds",
    company_name: "Pip Decks",
    location: "Fully remote (with a base in Stockport, UK)",
    role: "Full-time",
    category: "Social Media",
    details: {
      title: "Social Media and Content Marketing Specialist",
      company_name: "Pip Decks",
      description: "Develop and execute social media strategies in line with Pip Decks' customer & business objectives. Create briefs and work with Pip Decks authors to produce high quality educational content for our audience. Create and edit high-quality, engaging content (graphic, social video, long-form text) for our social media platforms, including Instagram, Twitter, TikTok & LinkedIn.Engage with our online communities by managing daily posts and responding to followers. Monitor and report on engagement metrics and qualitative feedback.",
      role: "Full-time Employment",
      salary: "£27,500 - £32,000",
      location: "Fully remote (with a base in Stockport, UK)",
      requirements: [
        "<li>Proven work experience as a Social Media Content Creator / Manager or similar role.</li>",
        "<li>Strong graphic design, copywriting and video editing skills (and taste!).</li>",
        // "<li>Experience with influencer partnerships and collaborations is a plus.</li>",
        // "<li>Demonstrable success in managing and growing social media accounts.</li>",
    ]
    },
  },
  
  {
    id: "104",
    title: "Commerce Architect",
    description: "We co-innovate with the world's most ambitious backgrounds",
    company_name: "Bounteous",
    location: "Anywhere (Remote)",
    role: "Freelance",
    category: "Architectual",
    details: {
      title: "Commerce Architect",
      company_name: "Bounteous",
      // description: "Responsible for designing and leading all ecommerce development workstreams. Responsible for engineering process, including setting best practices around delivery, code quality, unit testing and integration into CI/CD. Accountable for overall Commerce architecture and Orchestration layer design. Accountable for all API designs and documentation.",
      role: "Freelance",
      salary: "...",
      location: "Anywhere(Remote)",
      requirements: ["We are seeking a Architect with a deep background in Commerce to join our growing team in the Consumer Business Unit with a focus on CPG, Retail and Travel and Hospitality industries. As an Architect you will be a client partner who builds consensus around end-to-end architecture (including dependencies and phasing)."]
    },
  },

  {
    id: "105",
    title: "Senior Data Scientist, Marketing",
    description: "As a senior data scientist, you will be responsible for controlling and manipulating the company datas.",
    company_name: "Loom",
    location: "Fully Remote",
    role: "Full-time",
    category: "Data Science",
    details: {
      title: "Senior Data Scientist, Marketing",
      company_name: "Loom",
      // description: "As a Senior Data Scientist on the Loom data team, you'll help drive highly influential projects, related to measurement, marketing acquisition, expansion and customer engagement. You will work closely with the executive team as your role will be crucial in helping Loom drive revenue and business growth.",
      role: "Full-time",
      salary: "...",
      location: "Fully Remote",
      requirements: [
        "<li>5+ years of experience in turning data into insights and recommendations</li>",
        "<li>Strong communication skills with the ability to synthesize insights into compelling stories</li>",
        // "<li>Experience with the SaaS customer lifecycle from acquisition to retention</li>",
        // "<li>A Bachelor's Degree in a quantitative field or higher</li>",
        // "<li>Proficiency at Google Analytics and other common marketing tools is a plus</li>"
    ]
    },
  },

  {
    id: "106",
    title: "Product Manager(B2C)",
    description: "A person who's good with managing things(businesses for example.).",
    company_name: "ORTNEC SERVICES LTD",
    location: "Canada or Remotely",
    role: "Full-time",
    category: "Manager",
    details: {
      title: "Product Manager(B2C)",
      company_name: "ORTNEC SERVICES LTD",
      // description: "As B2C Business Owner, you will be responsible for the success of the Customer business side of the overall B2B2C organization. A strong understanding of the B2C business including Product Management, and Operations is required. You will be a key member of a highly collaborative leadership team, overseeing marketing and new product development activities. In alignment with Corporate goals and strategies, you will be responsible for achieving sustainable and profitable sales growth.",
      // role: "Full-time",
      salary: "800-1000USD",
      location: "Canada or Remotely",
      requirements: [
        "<li>Bachelor's Degree in Data Analytics/Mathematics, Finance, Economics or Marketing</li>",
        "<li>A track record for delivering consistent results and business growth</li>",
        // "<li>Excellent business acumen, communication and analytic skills</li>",
        // "<li>Strong analytical skills, driven by metrics not emotions</li>"
    ]
    },
  },

  {
    id: "107",
    title: "Systems and CRM Adminidtrator",
    description: "You will be responsible for owning and executing the delivery of everything related to Salesforce that is tailored to our business needs.",
    company_name: "Corvee",
    location: "United States (Remote)",
    role: "Full-time",
    category: "Administration",
    details: {
      title: "Systems and CRM Adminidtrator",
      company_name: "Corvee",
      // description: "As a Systems and CRM Manager, you will be maintaining and delivering the most creative and robust applications on the Salesforce platform. You will be responsible for owning and executing the delivery of everything related to Salesforce that is tailored to our business needs. You will work directly with Management and other departments to understand the user needs and provide detailed requirements.",
      // role: "Full-time",
      salary: "401k",
      location: "United States (Remote)",
      requirements: [
        "<li>Bachelor’s degree or equivalent experience</li>",
        "<li>4+ years of relevant hands-on Salesforce configuration experience</li>",
        // "<li>Experience with Salesforce configuration options, data model/architecture, and security mode</li>",
        // "<li>Salesforce Administrator certification or equivalent experience</li>"
    ]
    },
  },

  {
    id: "108",
    title: "Web Developer",
    description: "Web Development",
    company_name: "Hope International",
    location: "Lancaster, PA",
    role: "Full-time",
    category: "Developer",
    details: {
      title: "Web Developer",
      company_name: "Hope International",
      // description: "Develop and implement code to create a seamless and visually captivating user experience across our web properties. (e.g. PHP/MySQL, JavaScript, HTML, CSS, troubleshooting, debugging) Develop, and maintain the organization’s websites, ensuring an exceptional user experience with a focus on usability and captivating visual design.",
      // role: "Full-time",
      salary: "$50,000 – $60,000",
      location: "Lancaster, PA",
      requirements: ["Personal confession of Christian faith and commitment to the mission and vision of HOPE International. Proficient knowledge of HTML5, CSS3, PHP/MySQL, and JavaScript, with the ability to write clean, maintainable, and cross-browser-compatible code. Bachelor’s degree (computer science, web development, or related degree preferred)."]
    },
  },
];


function displayJobListing() {
  jobListingElement.innerHTML = "";
  ListOfJobs.forEach((ListOfJob) => {
    jobListingElement.innerHTML += `
        <div id="${ListOfJob.id}" onclick="displayPopup('${ListOfJob.id}')" class="div1">
        <div class="div1-holder">
            <div class="phase1">
                <div class="d">
                <img id="logo" src="./deel-icon-300-removebg-preview.png" alt="img">
                </div>
                <div class="company-info">
                    <h1>${ListOfJob.title}</h1>
                    <b>${ListOfJob.company_name}</b> <br> <p>${ListOfJob.description}</p>
                </div>
            </div>
            <div class="phase2">
                <p>${ListOfJob.location}</p>
                <b>${ListOfJob.role}</b>
            </div>
        </div>
    </div>
        `;
  });
}
// execute function
displayJobListing();



function displayPopup(id) {
  console.log("id:", id)
  const job = ListOfJobs.find((job) => job.id === id);
  // console.log(job)

  document.getElementById("popupTitle").textContent = job.title;
  document.getElementById("popupDescription").textContent = job.description;
  document.getElementById("popupCompanyName").textContent = "Company: " + job.company_name;
  document.getElementById("popupLocation").textContent = "Location: " + job.location;
  document.getElementById("popupRole").textContent = "Role: " + job.role;

  const detailsList = document.getElementById("popupDetails");
  detailsList.innerHTML = "<h4>Requirements:</h4><ul>";

  job.details.requirements.forEach((requirement) => {
    detailsList.innerHTML += "<li>" + requirement + "</li>";
  });

  detailsList.innerHTML += "</ul>";

  const popup = document.getElementById("jobPopup");
  popup.style.display = "block";
}




function closePopup() {
  const popup = document.getElementById("jobPopup");
  popup.style.display = "none";
}


// displayPopup('107');

function displayCategories() {
  categories.forEach((category) => {
    categoryElement.innerHTML += `<option value="${category.slug}">${category.name}</option>`;
  });
}
//execute function
displayCategories();


// event listeners
categoryElement.addEventListener("change", function(e) {
  const categorySelected = e.target.value.trim();

  if(categorySelected === 'all'){
    displayJobListing(ListOfJobs);
  }
  else {
    const filteredJobs = filterJobsByCategory(categorySelected);
    displayJobListing(filteredJobs)
  }
  // ListOfJobs.filter(ListOfJob => {
  //       return ListOfJob.category === e.target.value.trim();
  //   })
    console.log(ListOfJobs);
});

function filterJobsByCategory(category){
  return ListOfJobs.filter(job => job.category === category);
}


//add functionality to the search field
searchField.addEventListener('input', function(e) {
  userSearch = e.target.value.trim().toLowerCase();
  console.log(userSearch);

  jobListingElement.innerHTML = "";

  ListOfJobs.forEach((ListOfJob) => {
    const jobTitle = ListOfJob.title.trim().toLowerCase();
    const jobDescription = ListOfJob.description.trim().toLowerCase();
    const companyName = ListOfJob.company_name.trim().toLowerCase();
    const location = ListOfJob.location.trim().toLowerCase();
    const jobRole = ListOfJob.role.trim().toLowerCase();


    if(jobTitle.includes(userSearch) || jobDescription.includes(userSearch) || companyName.includes(userSearch) || location.includes(userSearch) || jobRole.includes(userSearch)) {
      jobListingElement.innerHTML += `
      <div id="${ListOfJob.id}" onclick="displayPopup()" class="div1">
      <div class="div1-holder">
          <div class="phase1">
              <div class="d">
                  <img id="logo" src="./deel-icon-300.png" alt="img">
              </div>
              <div class="company-info">
                  <h1>${ListOfJob.title}</h1>
                  <b>${ListOfJob.company_name}</b> <br> <p>${ListOfJob.description}</p>
              </div>
          </div>
          <div class="phase2">
              <p>${ListOfJob.location}</p>
              <b>${ListOfJob.role}</b>
          </div>
      </div>
  </div>`;
    }
  })
});


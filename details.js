const requirementsContainerEl = document.getElementById("requirements");
const jobTitleEl = document.getElementById("job-title");
const jobDescriptionEl = document.getElementById("job-description");

const jobs = JSON.parse(localStorage.getItem("jobs"));

const url = new URL(window.location).searchParams;

const jobId = url.get("id");

// const jobDetail = jobs.find((job) => job.id === jobId)

// console.log(jobDetail, jobId);

const jobRequirement = jobs.find((job) => job.id === jobId);
displayJobTitle(jobRequirement.title);
displayJobDescription(jobRequirement.description)
displayRequirements(jobRequirement.details.requirements)
console.log(jobRequirement);

let details = document.querySelector("wrapper");


function displayRequirements(requirements) {

    const ulEl = document.createElement("ul");

    for (const requirement of requirements) {
        ulEl.insertAdjacentHTML("beforeend", `
            <li>${requirement}</li>
        `)
    }

    requirementsContainerEl.insertAdjacentElement("beforeend", ulEl)

}


function displayJobTitle(jobTitle) {
    jobTitleEl.textContent = jobTitle; 
}

function displayJobDescription(jobDescription) {
    jobDescriptionEl.insertAdjacentHTML("beforeend", `
    <p>${jobDescription}</p>
    `)
}
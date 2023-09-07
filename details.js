const requirementsContainerEl = document.getElementById("requirements");
const jobTitleEl = document.getElementById("job-title");
const jobDescriptionEl = document.getElementById("job-description");
const backArrowEl = document.querySelector(".back-to-remote");

// styles
backArrowEl.style.cursor = 'pointer';



const jobs = JSON.parse(localStorage.getItem("jobs"));

const url = new URL(window.location).searchParams;

const jobId = url.get("id");


const jobRequirement = jobs.find((job) => job.id === jobId);
// console.log(jobRequirement);

function displayRequirements(requirements) {

    const ulEl = document.createElement("ul");

    for (const requirement of requirements) {
        ulEl.insertAdjacentHTML("beforeend", `
            <li>${requirement}</li>
        `)
    }

    requirementsContainerEl.insertAdjacentElement("beforeend", ulEl)
}
displayRequirements(jobRequirement.details.requirements);


function displayJobTitle(jobTitle) {
    jobTitleEl.textContent = jobTitle; 
}
displayJobTitle(jobRequirement.details.title);


function displayJobDescription(jobDescription) {
    jobDescriptionEl.insertAdjacentHTML("beforeend", `
    <p>${jobDescription}</p>
    `)
}
displayJobDescription(jobRequirement.details.description);


// Event Listener
backArrowEl.addEventListener('click', function() {
    window.location.href="list.html"
});


document.addEventListener('scroll', function() {

})
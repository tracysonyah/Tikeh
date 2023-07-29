const popUp = document.querySelector('.job-popup');
const popUp2 = document.querySelector('.job-popup2');
const popUp3 = document.querySelector('.job-popup3');
const popUp4 = document.querySelector('.job-popup4');
const popUp5 = document.querySelector('.job-popup5');
const popUp6 = document.querySelector('.job-popup6');
const popUp7 = document.querySelector('.job-popup7');
const popUp8 = document.querySelector('.job-popup8')
const searchField = document.querySelector('.search input');
const jobDivs = document.querySelectorAll('.middle-body > div');
const buttons = document.querySelectorAll('.butt button');
// console.log(jobDivs)

const filterArea = document.getElementsByTagName('select');

function bringJobCategory() {

}
filterArea.addEventListener('change', bringJobCategory)

function displayPopup() {
    console.log('me')
    popUp.style.display = 'block';
} 

function displaysecondPopup() {
    popUp2.style.display = 'block';
}

function displaythirdpopup() {
    popUp3.style.display = 'block';
}

function displayfourthpopup() {
    popUp4.style.display = 'block';
}

function displayfifthpopup() {
    popUp5.style.display = 'block';
}

function displaysixthpopup() {
    popUp6.style.display = 'block';
}

function displayseventhpopup() {
    popUp7.style.display = 'block';
}

function displayeighthpopup() {
    popUp8.style.display = 'block';
}


document.addEventListener('click', function(event) {
    if(event.target !== popUp || event.target !== popUp2 || event.target !== popUp3 || event.target !== popUp4 || event.target !== popUp5 || event.target !== popUp6 || event.target !== popUp7 || event.target !== popUp8) {
        console.log('no popup')
        popUp.style.display = 'none';
        popUp2.style.display = 'none';
        popUp3.style.display = 'none';
        popUp4.style.display = 'none';
        popUp5.style.display = 'none';
        popUp6.style.display = 'none';
        popUp7.style.display = 'none';
        popUp8.style.display = 'none';
    }
});

// filterArea.addEventListener('change', selectJobs)

searchField.addEventListener('input', function(e) {
    const userSearch = e.target.value.trim().toLowerCase();
    // console.log(value);
    const jobDivsArray = Array.from(jobDivs)
    console.log(jobDivsArray)

    jobDivsArray.forEach((jobDiv) => {
        const jobTitle = jobDiv.querySelector('h1').innerText.toLowerCase();
        console.log(jobTitle);
        const company = jobDiv.querySelector('b').innerText.toLowerCase();
        console.log(company);
        const location = jobDiv.querySelector('p').innerText.toLowerCase();
        console.log('location')
        const timeServed = jobDiv.querySelector('b').innerText.toLowerCase();
        console.log(timeServed)

        if(jobTitle.includes(userSearch) || company.includes(userSearch) || location.includes(userSearch) || timeServed.includes(userSearch)) {
            jobDiv.style.display = 'block';
        }
        else {
            jobDiv.style.display = 'none';
        }
    });
})

// const popUp = document.querySelector('.job-popup');
// const popUp2 = document.querySelector('.job-popup2');
// const popUp3 = document.querySelector('.job-popup3');
// const popUp4 = document.querySelector('.job-popup4');
// const popUp5 = document.querySelector('.job-popup5');
// const popUp6 = document.querySelector('.job-popup6');
// const popUp7 = document.querySelector('.job-popup7');
// const popUp8 = document.querySelector('.job-popup8')
// const searchField = document.querySelector('.search input');
// const jobDivs = document.querySelectorAll('.middle-body > div');
// const buttons = document.querySelectorAll('.butt button');
// // console.log(jobDivs)

// const filterArea = document.getElementsByTagName('select');


// function displayPopup() {
//     console.log('me')
//     popUp.style.display = 'block';
// } 

// function displaysecondPopup() {
//     popUp2.style.display = 'block';
// }

// function displaythirdpopup() {
//     popUp3.style.display = 'block';
// }

// function displayfourthpopup() {
//     popUp4.style.display = 'block';
// }

// function displayfifthpopup() {
//     popUp5.style.display = 'block';
// }

// function displaysixthpopup() {
//     popUp6.style.display = 'block';
// }

// function displayseventhpopup() {
//     popUp7.style.display = 'block';
// }

// function displayeighthpopup() {
//     popUp8.style.display = 'block';
// }


// document.addEventListener('click', function(event) {
//     if(event.target === popUp || event.target === popUp2 || event.target === popUp3 || event.target === popUp4 || event.target === popUp5 || event.target === popUp6 || event.target === popUp7 || event.target === popUp8) {
//         console.log('no popup')
//         popUp.style.display = 'none';
//         popUp2.style.display = 'none';
//         popUp3.style.display = 'none';
//         popUp4.style.display = 'none';
//         popUp5.style.display = 'none';
//         popUp6.style.display = 'none';
//         popUp7.style.display = 'none';
//         popUp8.style.display = 'none';
//     }
// });

// searchField.addEventListener('input', function(e) {
    
//     const userSearch = e.target.value.trim().toLowerCase();
//     // console.log(value);
//     const jobDivsArray = Array.from(jobDivs)
//     console.log(jobDivsArray)

//     jobDivsArray.forEach((jobDiv) => {
//         const jobTitle = jobDiv.querySelector('h1').innerText.toLowerCase();
//         console.log(jobTitle);
//         const company = jobDiv.querySelector('b').innerText.toLowerCase();
//         console.log(company);
//         const location = jobDiv.querySelector('p').innerText.toLowerCase();
//         console.log('location')
//         const timeServed = jobDiv.querySelector('b').innerText.toLowerCase();
//         console.log(timeServed)

//         if(jobTitle.includes(userSearch) || company.includes(userSearch) || location.includes(userSearch) || timeServed.includes(userSearch)) {
//             jobDiv.style.display = 'block';
//         }
//         else {
//             jobDiv.style.display = 'none';
//         }
//     });
// })

// const listOfJobs = [
//     {
//         jobTitle: "Full Stack Developer",
//         company: "Planning Center",
//         location: "Carlsbad, CA (Remote)",
//         timeServed: "Full-time",
//         description: "We build software for churches",
//         salary: "$200,000 USD",
//         requirements: [
//         "Reside in the United States",
//         "Eligible to work in the United States (we are currently unable to offer employment to those with H-1B visas)",
//         "Be willing to travel four times each year to connect with the rest of the team (not during a pandemic)",
//         "Experience in Ruby on Rails and React, with strong competency in at least one.",
//     ],
//     },

//     {
//         jobTitle: "Full Stack Developer",
//         company: "Planning Center",
//         description: "We’re seeking a Full Stack Developer experienced in Ruby on Rails and React. You’ll work on building out new features from start to finish, refining existing features, improving performance, and ensuring the security of our customer’s data.",
//         requirements: ["Reside in the United States", "Eligible to work in the United States (we are currently unable to offer employment to those with H-1B visas)", "Be willing to travel four times each year to connect with the rest of the team (not during a pandemic)", "Experience in Ruby on Rails and React, with strong competency in at least one."],
//         salary: "$200,000 USD",
//         role: "Full-time",
//         location: "Carlsbad, CA (Remote)"
//     },
// ]


const burgerMenu = document.querySelector('.ri-menu-line');
const navigationMenu = document.querySelector('.navi')


burgerMenu.addEventListener('click', function() {
  navigationMenu.classList.toggle('toggleNav');
  console.log('hello')
})
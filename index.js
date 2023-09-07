// const burgerMenu = document.querySelector('.ri-menu-line');
const burgerMenu = document.querySelector('.hamburger')
const navigationMenu = document.querySelector('.navi');


burgerMenu.addEventListener('click', function() {
  navigationMenu.classList.toggle('toggleNav');
  navigationMenu.style.left = '0px';
  navigationMenu.style.top = '0px';
  navigationMenu.style.height = '20px';
  navigationMenu.style.backgroundColor = 'transparent';
  navigationMenu.style.backdropFilter = 'blur(5px)';
  navigationMenu.style.height = '400px'
  
  console.log('hello');
})
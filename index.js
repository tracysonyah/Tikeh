const burgerMenu = document.querySelector('.ri-menu-line');
const navigationMenu = document.querySelector('.navi');

burgerMenu.addEventListener('click', function() {
  navigationMenu.classList.toggle('toggleNav');
  console.log('hello')
})

document.addEventListener('scroll', function() {
  navigationMenu.style.display = 'none';
  // navigationMenu.style.display = 'block'
})
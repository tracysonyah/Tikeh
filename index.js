const burgerMenu = document.querySelector('.ri-menu-line');
const navigationMenu = document.querySelector('.navi');

burgerMenu.addEventListener('click', function() {
  navigationMenu.classList.toggle('toggleNav');
  // navigationMenu.style.display = 'block';
  // navigationMenu.style.marginRight = '300px'

  console.log('hello')
})

document.addEventListener('scroll', function() {
  // navigationMenu.style.display = 'none';
})
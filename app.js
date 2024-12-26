const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const menuItem = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', toggleMenu);

document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  header.style.backgroundColor = scrollPosition > 250 ? '#29323c' : 'transparent';
});

menuItem.forEach((item) => {
  item.addEventListener('click', toggleMenu);
});

function toggleMenu() {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
}
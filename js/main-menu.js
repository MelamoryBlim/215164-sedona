var menuToggle = document.querySelector('.main-menu__toggle');
var menuMain = document.querySelector('.main-menu');

if (menuMain.classList.contains('main-menu--nojs')) {
  menuMain.classList.remove('main-menu--nojs');
  menuMain.classList.add('main-menu--closed');
};

menuToggle.addEventListener('click', function() {
  if (menuMain.classList.contains('main-menu--closed')) {
    menuMain.classList.remove('main-menu--closed');
    menuMain.classList.add('main-menu--opened');
  } else {
      menuMain.classList.add('main-menu--closed');
      menuMain.classList.remove('main-menu--opened');
    }
});
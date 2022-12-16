const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const overlay = document.querySelector('.overlay');

//Function that removes hidden from the list of overlay's classes.
const openMenu = function() {
  overlay.classList.remove('hidden');
};

//Function that adds hidden to the list of overlay's classes.
const closeMenu = function() {
  overlay.classList.add('hidden');
}

//Makes it so that clicking the open menu button executes the openMenu function.
openMenuBtn.addEventListener('click', openMenu);

//Makes it so that clicking the close menu button executes the closeMenu function.
closeMenuBtn.addEventListener('click', closeMenu);

const burger = document.querySelector('#burger-menu-button');
const menu = document.querySelector('#burger-menu-nav');

burger.addEventListener('click', () => {
    menu.classList.toggle('disp');
});
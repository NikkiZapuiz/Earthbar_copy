const burgerButton = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerButton.addEventListener('click' , () => {
    navbarMenu.classList.toggle('is-active');
});
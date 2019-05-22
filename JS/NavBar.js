// Hamburger Menu
let navLinks = document.querySelectorAll('li');

let menu = document.querySelector('.menu');

function openMenu() {
    navLinks.forEach(e => e.classList.toggle('not-hidden'));
}

menu.addEventListener('click', openMenu);
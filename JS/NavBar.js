const navLinks = document.querySelectorAll('li');

const menu = document.querySelector('.menu');

// function openMenu() {
//     if (navLinks[1].style.display == 'block') {
//         navLinks.forEach(e => e.style.display = 'none');
//     } else {
//         navLinks.forEach(e => e.style.display = 'block');
//     }
// }

function openMenu() {
    navLinks.forEach(e => e.classList.toggle('not-hidden'));
}

menu.addEventListener('click', openMenu);
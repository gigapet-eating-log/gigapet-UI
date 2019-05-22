let heroSection = document.querySelector('.hero-section');

let heroCopy = heroSection.children[0]

window.addEventListener("load", function(e) {
    heroCopy.classList.remove('fade');
})
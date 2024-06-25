const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');

// Function to add 'active' class to the current nav link
function setActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
}

// Add scroll event listener
window.addEventListener('scroll', setActiveLink);

// Set active link on page load
setActiveLink();
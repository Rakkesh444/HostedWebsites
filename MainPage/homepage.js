// Navbar
window.addEventListener('scroll', () => {
    let navbar = document.querySelector('nav');
    navbar.classList.toggle("Sticky", window.scrollY > 0);
})
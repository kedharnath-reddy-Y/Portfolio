// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll-to-top button functionality
window.addEventListener('scroll', () => {
    document.body.classList.toggle('scrolled', window.scrollY > 200);
});

function scrollToHome() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}

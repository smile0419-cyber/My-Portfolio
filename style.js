const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});

const mobile_menu_open = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-menu");

mobile_menu_open.addEventListener("click", () => {
    
    mobile_menu.classList.toggle("open");
    console.log("clicked");

});
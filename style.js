const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});


const observerOptions = {
    root: null,
    threshold: 0.5 // セクションの50%が画面に見えたときに発火
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // アニメーションを追加
            observer.unobserve(entry.target); // 観察を停止
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

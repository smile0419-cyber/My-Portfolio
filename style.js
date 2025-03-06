// Intersection Observerの設定
const sections = document.querySelectorAll('.section');

const observerOptions = {
    root: null, // ビューポートを監視対象
    threshold: 0.5 // セクションが50%見えたらアニメーション開始
};

// Intersection Observerのコールバック関数
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // visibleクラスを追加してアニメーションをトリガー
            observer.unobserve(entry.target); // 観察を停止
        }
    });
}, observerOptions);

// セクションごとにObserverを適用
sections.forEach(section => {
    observer.observe(section);
});

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
});

// ハンバーガーメニューの開閉
document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".mobile-menu").classList.toggle("active");
});
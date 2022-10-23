const nav = document.getElementById('nav');
const navBtn = document.querySelector('.nav-bars-btn');
const closeBtns = document.querySelectorAll('#nav .close-btn');
const reviews = document.querySelectorAll('.review');
const expandBtn = document.querySelectorAll('.review .expand');
const collapseBtn = document.querySelectorAll('.review .collapse');

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        nav.classList.remove('show');
        nav.classList.add('collapse');
    });
});

navBtn.addEventListener('click', () => {
    nav.classList.add('show');
    nav.classList.remove('collapse');
});

expandBtn.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        reviews[idx].classList.add('show');
    });
});

collapseBtn.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        reviews[idx].classList.remove('show');
    });
});
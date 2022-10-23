const nav = document.getElementById('nav');
const navBtn = document.querySelector('.nav-bars-btn');
const closeBtns = document.querySelectorAll('#nav .close-btn');

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

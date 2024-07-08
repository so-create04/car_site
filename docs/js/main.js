let btn = document.querySelector('.header__toggle-btn');
let menuopen = document.querySelector('.menu-open');
let menuclose = document.querySelector('.menu-close');
let bar = document.querySelector('.header__menu-bar');
let mask = document.querySelector('.header__mask');
btn.onclick = () => {
    bar.classList.toggle('close');
    menuopen.classList.toggle('toClose');
    menuclose.classList.toggle('toOpen');
    if (window.innerWidth <= 768) {
        mask.classList.toggle('header__maskOpen');
    }
}

window.addEventListener('resize', () => {
    const bar = document.querySelector('.header__menu-bar');
    if (window.innerWidth <= 768) {
        bar.classList.add('close');
        bar.classList.add('header__side-bar');
        menuopen.classList.add('toClose');
        menuclose.classList.add('toOpen');
    } else {
        bar.classList.remove('close');
        bar.classList.remove('header__side-bar');
        menuopen.classList.remove('toClose');
        menuclose.classList.remove('toOpen');
    }
});

// Initial check
document.addEventListener('DOMContentLoaded', () => {
    const bar = document.querySelector('.header__menu-bar');
    if (window.innerWidth <= 768) {
        bar.classList.add('close');
        bar.classList.add('header__side-bar');
        menuopen.classList.toggle('toClose');
        menuclose.classList.toggle('toOpen');
    }
});

// 送信ボタンの操作
document.addEventListener('DOMContentLoaded', (event) => {
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', () => {
        alert('送信されました');
    });
});
// select elements

const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const navCenter = document.querySelector('.nav-center');


menuBtn.addEventListener('click', () => {
    navCenter.classList.add('showlinks')
})

closeBtn.addEventListener('click', () => {
    navCenter.classList.remove('showlinks')
})


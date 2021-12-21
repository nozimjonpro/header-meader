const elHambergur = document.querySelector('.hambergur');
const elHeader = document.querySelector('.header');

elHambergur.addEventListener('click', ()=>{
    elHeader.classList.toggle('header--active')
})
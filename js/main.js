const elHambergur = document.querySelector('.hambergur');
const elHeader = document.querySelector('.header');
const elClose = document.querySelector('.hambergur--second')

elHambergur.addEventListener('click', ()=>{
    elHeader.classList.toggle('header--active')
});

elClose.addEventListener('click', ()=>{
    elHeader.classList.toggle('header--active')
})
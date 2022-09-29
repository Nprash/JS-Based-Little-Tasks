const containerel = document.querySelector('.container');
const btnel = document.querySelector('.btn');
const popupcontainerel = document.querySelector('.popup-container');
const closeiconel = document.querySelector('.close-icon');

btnel.addEventListener('click', ()=>{
    containerel.classList.add("active");
    popupcontainerel.classList.remove('active');
})

closeiconel.addEventListener("click", ()=>{
    popupcontainerel.classList.add('active');
    containerel.classList.remove("active");

})
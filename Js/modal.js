const btnopen = document.querySelector("#book-now");
const btnclose = document.querySelector("#close-popup");
const modal = document.querySelector("#modal");
const container = document.querySelector("#modal-container");

btnopen.addEventListener("click",()=>{
    modal.showModal();
    modal.style.cssText = 'animation:slide-in 1s ease; animation-fill-mode: forwards;';
})

btnclose.addEventListener("click",()=>{
    modal.close();
})
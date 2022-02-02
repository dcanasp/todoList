const btnIngresar = document.querySelector(".mainContainer_text_button");
const iniciarSesionModal = document.getElementById("logIn");
const closeModal = document.querySelector(".closeModal");

btnIngresar.addEventListener("click", ()=>{
    iniciarSesionModal.style.display = "flex";
})

closeModal.addEventListener("click", ()=>{
    iniciarSesionModal.style.display = "none";
})
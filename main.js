const Container = document.querySelector(".container");

const magnifier = document.querySelector(".magnifier");
const body = document.querySelector("body")

magnifier.addEventListener("click", animateinput)
  
function animateinput() {
  Container.classList.toggle("active");
  
}


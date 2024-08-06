const navbar = document.querySelector("#navbar")
const btn = document.querySelector(".hamburger_menu")


btn.addEventListener("click", e => {
  navbar.classList.toggle("active")

  if(btn.attributes.src.value == "./images/icon-hamburger.svg"){
    btn.src = "./images/icon-close.svg"
  }else{
    btn.src = './images/icon-hamburger.svg'
  }
})
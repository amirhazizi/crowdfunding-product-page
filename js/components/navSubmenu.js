const submenu = document.querySelector(".submenu")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")

// submenu toggle click event
menuBtn.addEventListener("click", () => {
  submenu.classList.add("active-modal")
  menuBtn.classList.add("disable-btn")
  closeBtn.classList.remove("disable-btn")
})
closeBtn.addEventListener("click", () => {
  submenu.classList.remove("active-modal")
  menuBtn.classList.remove("disable-btn")
  closeBtn.classList.add("disable-btn")
})

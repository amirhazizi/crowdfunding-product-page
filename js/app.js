const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const bootmarkBtn = document.getElementById("bookmark-btn")
const backProjectBtn = document.getElementById("back-this-project-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const submenu = document.querySelector(".submenu")
const selectionModal = document.querySelector(".selection-modal")

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
// bookmark click event
bootmarkBtn.addEventListener("click", () => {
  if (bootmarkBtn.classList.contains("bookmarked"))
    bootmarkBtn.lastElementChild.textContent = "Bookmark"
  else bootmarkBtn.lastElementChild.textContent = "Bookmarked"
  bootmarkBtn.classList.toggle("bookmarked")
})
backProjectBtn.addEventListener("click", () => {
  selectionModal.classList.add("active-modal")
})
closeModalBtn.addEventListener("click", () => {
  selectionModal.classList.remove("active-modal")
})

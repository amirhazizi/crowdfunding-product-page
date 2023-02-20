const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const bootmarkBtn = document.getElementById("bookmark-btn")
const backProjectBtn = document.getElementById("back-this-project-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const submenu = document.querySelector(".submenu")
const selectionModal = document.querySelector(".selection-modal")
const projectBtns = document.querySelectorAll(".project-btn")
const modalProjects = document.querySelectorAll(".modal-project")
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
  showModal(selectionModal.offsetTop)
  modalProjects.forEach((modalproject) => {
    if (modalproject.classList.contains("selected-project")) {
      modalproject.classList.remove("selected-project")
    }
  })
})
closeModalBtn.addEventListener("click", () => {
  selectionModal.classList.remove("active-modal")
})
projectBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalProjects.forEach((modalproject) => {
      if (modalproject.classList.contains("selected-project")) {
        modalproject.classList.remove("selected-project")
      }
      if (btn.dataset.id !== "mahogany-special-edition") {
        if (btn.dataset.id === modalproject.dataset.id) {
          showModal(modalproject.offsetTop)
          modalproject.classList.add("selected-project")
          // console.log(btn, modalproject)
        }
      }
    })
  })
})
function showModal(pos) {
  selectionModal.classList.add("active-modal")
  window.scrollTo({
    left: 0,
    top: pos,
  })
}

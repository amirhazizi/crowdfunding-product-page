const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const bootmarkBtn = document.getElementById("bookmark-btn")
const backProjectBtn = document.getElementById("back-this-project-btn")
const backets = document.querySelectorAll(".backet")
const bar = document.querySelector("#bar")
const closeModalBtn = document.getElementById("close-modal-btn")
const submenu = document.querySelector(".submenu")
const selectionModal = document.querySelector(".selection-modal")
const successModal = document.querySelector(".success-modal")
const gotitBtn = document.querySelector("#gotit-btn")
const projectBtns = document.querySelectorAll(".project-btn")
const modalProjects = document.querySelectorAll(".modal-project")
const formProjects = document.querySelectorAll(".project-form")

let sumbacket = 89914
let totalbacket = 5007

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
  scrollWindow(selectionModal.offsetTop)
  selectionModal.classList.add("active-modal")
  modalProjects.forEach((modalproject) => {
    diactiveproject(modalproject)
  })
})
closeModalBtn.addEventListener("click", () => {
  selectionModal.classList.remove("active-modal")
})
modalProjects.forEach((modalproject) => {
  modalproject.addEventListener("click", () => {
    modalProjects.forEach((modalproject) => {
      diactiveproject(modalproject)
    })
    if (modalproject.dataset.id !== "mahogany-special-edition")
      modalproject.classList.add("selected-project")
  })
})
projectBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalProjects.forEach((modalproject) => {
      diactiveproject(modalproject)
      if (btn.dataset.id !== "mahogany-special-edition") {
        if (btn.dataset.id === modalproject.dataset.id) {
          scrollWindow(modalproject.offsetTop)
          selectionModal.classList.add("active-modal")
          modalproject.classList.add("selected-project")
        }
      }
    })
  })
})
formProjects.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const value = parseInt(form.getElementsByTagName("input")[0].value)
    console.log(value)
    calculateBackets(value)
    modalProjects.forEach((modalproject) => {
      diactiveproject(modalproject)
    })
    scrollWindow(0)
    selectionModal.classList.remove("active-modal")
    successModal.classList.add("active-modal")
    setTimeout(() => {
      successModal.classList.remove("active-modal")
    }, 4000)
  })
})
gotitBtn.addEventListener("click", () => {
  successModal.classList.remove("active-modal")
})
// domcontentloaded
window.addEventListener("DOMContentLoaded", () => {
  backets.forEach((backet) => {
    let intialValue = 0
    let value = 0
    if (backet.dataset.id === "sum-backet") value = sumbacket
    else if (backet.dataset.id === "total-backet") value = totalbacket
    let increment = Math.ceil(value / 200)
    const increaseValue = setInterval(() => {
      intialValue += increment
      if (intialValue > value) {
        backet.textContent = `${Math.floor(value / 1000)},${value
          .toString()
          .slice(-3)}`
        clearInterval(increaseValue)
        return
      }
      backet.textContent = intialValue
    }, 1)
  })
  const barWidth = Math.floor(sumbacket / 1000)
  bar.style.width = `${barWidth}%`
})
function scrollWindow(pos) {
  window.scrollTo({
    left: 0,
    top: pos,
  })
}
function diactiveproject(modalproject) {
  if (modalproject.classList.contains("selected-project")) {
    modalproject.classList.remove("selected-project")
  }
}
function calculateBackets(value) {
  sumbacket += value
  totalbacket++
  const barWidth = Math.floor(sumbacket / 1000)
  bar.style.width = `${barWidth}%`
  backets.forEach((backet) => {
    backet.innerHTML = 0
    let updateValue = sumbacket
    if (backet.dataset.id === "total-backet") {
      updateValue = totalbacket
    }
    backet.textContent = `${Math.floor(updateValue / 1000)},${updateValue
      .toString()
      .slice(-3)}`
  })
}

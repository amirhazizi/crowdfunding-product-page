// bookmark click event
const bootmarkBtn = document.getElementById("bookmark-btn")
bootmarkBtn.addEventListener("click", () => {
  if (bootmarkBtn.classList.contains("bookmarked"))
    bootmarkBtn.lastElementChild.textContent = "Bookmark"
  else bootmarkBtn.lastElementChild.textContent = "Bookmarked"
  bootmarkBtn.classList.toggle("bookmarked")
})

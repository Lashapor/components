console.log("loading..")

const cards = document.querySelectorAll(".card")

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)
  })
},
  {
    // element body view 1 = 100%
    threshold: 1,
    // parent element margin
    // rootMargin: "-100px"
  }
)

cards.forEach(card => {
  observer.observe(card)
})

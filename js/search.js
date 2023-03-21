const button = document.querySelector('.btn')
const search = document.querySelector('.search')

search.addEventListener('mouseenter', () => {
    search.classList.toggle('active')
})

search.addEventListener('mouseleave', () => {
    search.classList.toggle('active')
})
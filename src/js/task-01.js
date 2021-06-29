const categories = document.querySelector('#categories')
const itemEl = categories.querySelectorAll('.item')

console.log(`В списке ${itemEl.length} категории.`)

const item = document.querySelector('.item')
console.log(item.firstElementChild.textContent)
console.log(item.lastElementChild)




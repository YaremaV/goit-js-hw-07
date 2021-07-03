
const itemEl = document.querySelectorAll('.item');
console.log(`В списке ${itemEl.length} категории.`);
console.log('=================')

itemEl.forEach(item => {
    console.log(`Категория: ${item.firstElementChild.textContent}`);
    console.log( `Количество элементов: ${item.querySelectorAll('li').length}`
)
})

// const items = document.querySelector('.item');
// const title = items.firstElementChild;
// console.log(`Категория: ${title.textContent}.`);

// const listItem = items.lastElementChild;
// console.log(`Количество элементов: ${listItem.querySelectorAll('li').length}.`);
// console.log('=================')

// const productsEl = items.nextElementSibling;
// console.log(`Категория: ${productsEl.querySelector('h2').textContent}.`);
// console.log(`Количество элементов: ${productsEl.querySelectorAll('li').length}.`);
// console.log('=================')

// const techEl = productsEl.nextElementSibling;
// console.log(`Категория: ${techEl.querySelector('h2').textContent}.`);
// console.log(`Количество элементов: ${techEl.querySelectorAll('li').length}.`);

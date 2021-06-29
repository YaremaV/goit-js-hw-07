const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients')

const createIngredientList = elements => {
  return elements.map(element => {
    const elementList = document.createElement('li');
    elementList.textContent = element;

    return elementList;
  })
}

const listRef = createIngredientList(ingredients);
ingredientsRef.append(...listRef)

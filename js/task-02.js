console.log('Execise-02');

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('ul#ingredients');

const elementRef = ingredients.map(el => {
  const itemRef = document.createElement('li');
  itemRef.textContent = el;
  itemRef.classList.add('item');

  return itemRef;
});

listRef.append(...elementRef);

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
const itemRef = document.createElement('li');
itemRef.textContent = ingredients;
itemRef.classList.add('item');
listRef.append(itemRef);
console.log(listRef);

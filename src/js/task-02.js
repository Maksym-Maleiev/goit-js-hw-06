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

const firstItemRef = document.createElement('li');
firstItemRef.textContent = 'Potatoes';
firstItemRef.classList.add('item');

const secondItemRef = document.createElement('li');
secondItemRef.textContent = 'Mushrooms';
secondItemRef.classList.add('item');

const thirdItemRef = document.createElement('li');
thirdItemRef.textContent = 'Garlic';
thirdItemRef.classList.add('item');

const fourthItemRef = document.createElement('li');
fourthItemRef.textContent = 'Tomatos';
fourthItemRef.classList.add('item');

const fifthItemRef = document.createElement('li');
fifthItemRef.textContent = 'Herbs';
fifthItemRef.classList.add('item');

const lastItemRef = document.createElement('li');
lastItemRef.textContent = 'Condiments';
lastItemRef.classList.add('item');

listRef.append(
  firstItemRef,
  secondItemRef,
  thirdItemRef,
  fourthItemRef,
  fifthItemRef,
  lastItemRef
);

console.log(listRef);

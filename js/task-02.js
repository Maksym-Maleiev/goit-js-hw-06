const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul#ingredients");

const elements = ingredients.map(item => {
  const itemEl = document.createElement("li");
  itemEl.textContent = item;
  itemEl.classList.add("item");
  
  return itemEl;
});

console.log(elements);

list.append(...elements);




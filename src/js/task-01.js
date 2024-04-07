const items = document.querySelectorAll('.item');
console.log(items);

items.forEach(number => {
  console.log(`Number of categories: ${number}`);
});

const title = document.querySelectorAll('.item h2');
console.log(title);

title.forEach(el => {
  console.log(`Category: ${el.textContent}`);
});

console.log('Execise-01');

const list = document.querySelector('ul#categories');
// console.log(list);

const items = list.children;
// console.log(items);

// console.log(`Number of categories: ${items.length}`);

const sum = items => {
  let numbers = 0;

  for (let i = 0; i < items.length; i += 1) {
    numbers += 1;
  }

  return numbers;
};

console.log(sum(list.children));

const title = document.querySelectorAll('.item h2');
// console.log(title);

title.forEach(el => {
  console.log(`Category: ${el.textContent}`);
});

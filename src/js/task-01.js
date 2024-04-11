console.log('Execise-01');

const countCategory = () => {
  const itemEl = document.querySelectorAll('.item');
  let numbers = 0;

  itemEl.forEach(() => {
    numbers += 1;
  });

  return `Number of categories: ${numbers}`;
};

console.log(countCategory());

/*
 *
 *
 */
const title = document.querySelectorAll('.item h2');
// console.log(title);

title.forEach(el => {
  console.log(`Category: ${el.textContent}`);
});

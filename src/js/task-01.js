console.log('Execise-01');

/*
 * First exercise
 */

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
 * Second exercise
 */

const countNumbersOfItems = () => {
  const itemEl = document.querySelectorAll('.item');
  const titleEl = document.querySelectorAll('h2');
  let numbers = 0;

  titleEl.forEach(item => {
    console.log(`Category: ${item.textContent}`);
  });

  itemEl.forEach(() => {
    numbers += 1;
  });

  return `Elements: ${numbers}`;
};

console.log(countNumbersOfItems());

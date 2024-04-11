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

const countNumbersOfCategory = () => {
  const itemEl = document.querySelectorAll('.item');
  const titleEl = document.querySelector('h2');
  let numbers = 0;

  titleEl.forEach(item => {
    numbers += 1;
    console.log(`Category: ${item.textContent}`);
  });

  return `Elements: ${numbers}`;
};

console.log(countNumbersOfCategory());

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
  const titleEl = document.querySelectorAll('h2');
  let numbers = 0;

  return titleEl.forEach(item => {
    numbers += 1;
    console.log(`Category: ${item.textContent}`);
    console.log(`Elements: ${numbers}`);
  });

  return numbers;
};

console.log(countNumbersOfItems());

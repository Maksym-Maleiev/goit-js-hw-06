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
  const titleEl = document.querySelectorAll('.item h2');
  const itemEl = document.querySelectorAll('ul li');
  let numbers = 0;
  console.log(itemEl);

  titleEl.forEach(item => {
    console.log(`Category: ${item.textContent}`);
  });

  itemEl.forEach(() => {
    numbers += 1;
    console.log(`Elements: ${numbers}`);
  });
};

console.log(countNumbersOfCategory());

console.log('Execise-01');

// const sum = items => {
//   let numbers = 0;

//   for (let i = 0; i < items.length; i += 1) {
//     numbers += 1;
//   }

//   return `Number of categories: ${numbers}`;
// };

// console.log(sum(list.children));

/*
 * Third method
 */
// const items = document.querySelectorAll('.item');
// let numbers = 0;

// items.forEach(() => {
//   numbers += 1;
// });

// console.log(`Number of categories: ${numbers}`);

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

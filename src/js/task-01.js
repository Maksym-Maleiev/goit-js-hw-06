console.log('Execise-01');

// const list = document.querySelector('ul#categories');
// console.log(list);

// const items = list.children;
// console.log(items);

/*
 * First method
 */
// console.log(`Number of categories: ${items.length}`);

/*
 * Second method
 */
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
const items = document.querySelectorAll('.item');
// let numbers = 0;

// items.forEach(() => {
//   numbers += 1;
// });

// console.log(`Number of categories: ${numbers}`);

const sumItems = items => {
  let numbers = 0;

  items.forEach(() => {
    numbers += 1;
  });
};

/*
 *
 *
 */
const title = document.querySelectorAll('.item h2');
// console.log(title);

title.forEach(el => {
  console.log(`Category: ${el.textContent}`);
});

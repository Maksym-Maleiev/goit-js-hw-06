const list = document.querySelector('ul');
const sumCategories = list.children.length;
console.log(`Number of categories: ${sumCategories}`);

// const list = document.querySelector('ul');
// console.log(list);

// const items = list.children;
// console.log(items);

// const sum = items => {
//   items.forEach(item => {
//     console.log(`Number of categories: ${item}`);
//   });
// };

const title = document.querySelectorAll('.item h2');
console.log(title);

const child = document.querySelectorAll('.item ul li');
console.log(child);

title.forEach(el => {
  console.log(`Category: ${el.textContent}`);
});

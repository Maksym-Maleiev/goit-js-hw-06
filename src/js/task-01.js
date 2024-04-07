const list = document.querySelector('ul');
const sumCategories = list.children.length;
console.log(`Number of categories: ${sumCategories}`);

const title = list.querySelectorAll('h2');
console.log(title);

list.children.forEach((title, number) => {
  console.log(`Category: ${title.textContent}`);
});

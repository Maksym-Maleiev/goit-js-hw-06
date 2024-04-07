// const list = document.querySelector('ul');
// const sumCategories = list.children.length;
// console.log(`Number of categories: ${sumCategories}`);

const list = document.querySelector('ul');
console.log(list);

const items = list.children;
console.log(items);

const sum = items => {
  items.forEach(item => {
    console.log(`Number of categories: ${item}`);
  });
};

sum();

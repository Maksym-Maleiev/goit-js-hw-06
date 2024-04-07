const list = document.querySelector('ul');
console.log(list);

const items = list.children;
console.log(items);

const title = document.querySelectorAll('.item h2');
console.log(title);

title.forEach(el => {
  console.log(`Category: ${el.textContent}`);
});

const list = document.querySelector('ul');
console.log(list);

const allCategories = list.children;
console.log(allCategories);

const sum = () => {
  allCategories.forEach(item => {
    console.log(`Number of categories: ${(item += 1)}`);
  });
};

sum();

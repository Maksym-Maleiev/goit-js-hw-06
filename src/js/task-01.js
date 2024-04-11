console.log('Execise-01');

const categoryRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryRef.length}`);

categoryRef.forEach(item => {
  const titleRef = item.querySelector('h2');
  const itemRef = item.querySelectorAll('li');

  console.log(`Category: ${titleRef.textContent}`);
  console.log(`Elements: ${itemRef.length}`);
});

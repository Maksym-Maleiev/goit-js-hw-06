
// const categoriesUl = Array.from(document.querySelectorAll("ul#categories>li.item")
// );
// console.log(`Number of categories: ${categoriesUl.length}`);


// const items = document.querySelectorAll('.item');
// items.forEach((element) => {
//     const title = element.querySelector('h2').innerHTML;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Category: ${title} / Elements: ${itemsLength}`);
// });

// =============================================

const categoriesUl = document.querySelector('#categories');
console.log(`Number of categories:`, categoriesUl.children.length);

const itemEl = document.querySelectorAll('.item');
itemEl.forEach(element => {
    const title = element.querySelector('h2');
    console.log(`Category: ${title.textContent}`);
    const number = element.querySelectorAll('li');
    console.log(`Elements: ${number.length}`);
});


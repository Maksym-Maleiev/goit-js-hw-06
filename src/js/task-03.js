console.log('Exercise_03');

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const listRef = document.querySelector('.gallery');
// const markup = images.map(img => {
//   const itemRef = document.createElement('li');
//   const imgRef = document.createElement('img');
//   imgRef.setAttribute('src', img.url);
//   imgRef.setAttribute('alt', img.alt);
//   itemRef.append(imgRef);

//   return itemRef;
// });

// listRef.append(...markup);

// document.body.appendChild(listRef);

const listRef = document.querySelector('.gallery');
const markup = images
  .map(el => `<li><img src = ${el.url} alt = ${el.alt}></li>`)
  .join('');

listRef.insertAdjacentHTML('afterbegin', markup);

document.body.appendChild(listRef);

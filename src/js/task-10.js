console.log('Exercise_10');

const refs = {
  box: document.querySelector('.box'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

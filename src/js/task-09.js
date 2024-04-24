console.log('Exercise_9');

const refs = {
  box: document.querySelector('.widget'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

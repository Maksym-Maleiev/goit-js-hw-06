console.log('Exercise_10');

const refs = {
  control: document.querySelector('#controls input'),
  creatBtn: document.querySelector('button[data-create]'),
  removeBtn: document.querySelector('button[data-destroy]'),
  box: document.querySelector('#boxes'),
};

const onCountChange = e => {
  const { value } = e.target;

  const arr = Array(Number(value))
    .fill('')
    .map(() => `<div></div>`);

  refs.box.insertAdjacentHTML('beforeend', arr.join(''));
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.control.addEventListener('input', onCountChange);

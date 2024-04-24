console.log('Exercise_10');

const refs = {
  control: document.querySelector('#controls input'),
  creatBtn: document.querySelector('button[data-create]'),
  removeBtn: document.querySelector('button[data-destroy]'),
  box: document.querySelector('#boxes'),
};

const onCountClick = e => {
  const { value } = e.target;
  console.log(value);

  const arr = Array(Number(value))
    .fill('')
    .map(() => `<div class = 'item'></div>`);

  refs.box.insertAdjacentHTML('beforeend', arr.join(''));
};

const createBoxes = e => {};

const destroyBoxes = e => {};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.control.addEventListener('input', onCountClick);
refs.creatBtn.addEventListener('click', createBoxes);
refs.removeBtn.addEventListener('click', destroyBoxes);

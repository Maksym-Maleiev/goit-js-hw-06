console.log('Exercise_10');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  control: document.querySelector('#controls input'),
  creatBtn: document.querySelector('button[data-create]'),
  removeBtn: document.querySelector('button[data-destroy]'),
  box: document.querySelector('#boxes'),
};

refs.control.addEventListener('input', onCountClick);
refs.creatBtn.addEventListener('click', createBoxes);
refs.removeBtn.addEventListener('click', destroyBoxes);

let inputValue = 0;

const onCountClick = e => {
  inputValue = e.target.value;
};

let width = 30;
let height = 30;

const createBoxes = e => {
  const { value } = e.target;

  const arr = Array(Number(value))
    .fill('')
    .map(
      () =>
        `<div style ="width": ${width}px; "height": ${height}px; "background-color": ${getRandomHexColor()}></div>`
    );

  refs.box.insertAdjacentHTML('beforeend', arr.join(''));
};

const destroyBoxes = () => {
  refs.control.value = '';
  refs.box.value = '';
};

// const { value } = e.target;
// console.log(value);

// const arr = Array(Number(value))
//   .fill('')
//   .map(() => `<div class = 'item'></div>`);

// refs.box.insertAdjacentHTML('beforeend', arr.join(''));

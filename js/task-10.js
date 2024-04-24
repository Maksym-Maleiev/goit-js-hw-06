console.log('Exercise_10');

const refs = {
  control: document.querySelector('#controls input'),
  creatBtn: document.querySelector('button[data-create]'),
  removeBtn: document.querySelector('button[data-destroy]'),
  box: document.querySelector('#boxes'),
};

const onCountClick = e => {
  e.target.value;
};

const createBoxes = () => {
  let width = 30;
  let height = 30;
  const { value } = refs.control;

  Array(Number(value))
    .fill('')
    .map(() => {
      refs.box.insertAdjacentHTML(
        'beforeend',
        `<div style="width: ${width}px; height: ${height}px;
        background-color: ${getRandomHexColor()};"></div >`
      );

      width += 10;
      height += 10;
    });
};

const destroyBoxes = () => {
  refs.control.value = '';
  refs.box.innerHTML = '';
  width = 30;
  height = 30;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.control.addEventListener('input', onCountClick);
refs.creatBtn.addEventListener('click', createBoxes);
refs.removeBtn.addEventListener('click', destroyBoxes);

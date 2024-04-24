console.log('Exercise_9');

const refs = {
  box: document.querySelector('.widget'),
  text: document.querySelector('.color'),
  btn: document.querySelector('.change-color'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onChangeBgColor = () => {
  refs.text.innerHTML = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
};

refs.btn.addEventListener('click', onChangeBgColor);

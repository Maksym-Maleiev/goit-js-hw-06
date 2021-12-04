function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const btn = document.querySelector('.change-color');
// btn.addEventListener('click', change_color);

// function change_color() {
// document.body.style.background = getRandomHexColor();
// }

// ================


const chandeBtn = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

chandeBtn.addEventListener('click', onChangeBtnClick);

function onChangeBtnClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanEl.textContent = color;
};


// const spanColorRef = document.querySelector('.color');
// const buttonChangeColorRef = document
// .querySelector('.change-color')
// .addEventListener('click', onBtnChangeColorClick );

// function onBtnChangeColorClick () {
//   const color = getRandomHexColor();
//   document.body.style.backgroundColor = color;
//   spanColorRef.textContent = color;
//   console.log(spanColorRef.textContent)
// };

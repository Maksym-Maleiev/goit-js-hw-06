// const wrap_button = {
//   sub: document.querySelector("[data-action='increment']"),
//   add: document.querySelector("[data-action='decrement']"),
//   span: document.querySelector('#value'),
//   wrapper: document.querySelector('#counter'),
// };
// let counterValue = 0;
// const increment = () => {
//   counterValue += 1;

//   document.getElementById('value').textContent = counterValue;
// };

// const decrement = () => {
//   counterValue -= 1;

//   document.getElementById('value').textContent = counterValue;
// };
// wrap_button.sub.addEventListener('click', increment);
// wrap_button.add.addEventListener('click', decrement);


// =======================

const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const spanEl = document.querySelector('#value');

let counterValue = 0;

const onDecrementBtnClick = () => {
  counterValue -= 1;

  spanEl.textContent = counterValue;
};

const onIncrementBtnClick = () => {
  counterValue += 1;

  spanEl.textContent = counterValue;
  
};

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

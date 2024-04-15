console.log('Exercise_04');

const btnDecrement = document.querySelector('button[data-action="decrement"]');
console.log(btnDecrement);

btnDecrement.addEventListener('click', () => {});

const btnIncrement = document.querySelector('button[data-action="increment"]');
console.log(btnIncrement);

btnIncrement.addEventListener('click', () => {});

const counterValue = function ({ initialValue = 0, step = 1 } = {}) {
  this.value = initialValue;
  this.step = step;
};

const counter
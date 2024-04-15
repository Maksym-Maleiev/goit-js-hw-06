console.log('Exercise_04');

const btnDecrement = document.querySelector('button[data-action="decrement"]');
console.log(btnDecrement);

btnDecrement.addEventListener('click', e => {
  e += 1;
});

const btnIncrement = document.querySelector('button[data-action="increment"]');
console.log(btnIncrement);

const counterValue = document.querySelector('span#value');
console.log(counterValue);

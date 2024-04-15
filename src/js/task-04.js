console.log('Exercise_04');

const minusBtnRef = document.querySelector('button[data-action="decrement"]');
console.log(minusBtnRef);

const plusBtnRef = document.querySelector('button[data-action="increment"]');
console.log(plusBtnRef);

const counterRef = document.getElementById('value');
console.log(counterRef);

let counterValue = 0;

minusBtnRef.addEventListener('click', () => {
  counterValue -= 1;
  counterRef.innerHTML = counterValue;
});

plusBtnRef.addEventListener('click', () => {});

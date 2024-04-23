console.log('Exercise_7');

const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

console.log(inputRef);
console.log(spanRef);

const onRangeChange = e => {
  spanRef = e.target.value;
  console.log(e.target.value);
};

refs.inputRef.addEventListener('input', onRangeChange);

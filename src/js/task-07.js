console.log('Exercise_7');

const refs = {};

const inputRef = document.querySelector('input#font-size-control');
const spanRef = document.querySelector('span#text');

console.log(inputRef);
console.log(spanRef);

const onRangeChange = e => {
  spanRef.style.fontSize = `${e.target.value}px`;
};

inputRef.addEventListener('input', onRangeChange);

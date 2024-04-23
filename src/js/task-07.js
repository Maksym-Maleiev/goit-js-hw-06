console.log('Exercise_7');

const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

console.log(inputRef);
console.log(spanRef);

const onRangeChange = e => {
  spanRef.style.fontSize = e.target.value;
  console.log(spanRef.textContent.style.fontSize);
};

inputRef.addEventListener('input', onRangeChange);

console.log('Exercise_7');

const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

const onRangeChange = e => {
  spanRef.textContent.style.fontSize = e.target.value;
};

inputRef.addEventListener('input', onRangeChange);

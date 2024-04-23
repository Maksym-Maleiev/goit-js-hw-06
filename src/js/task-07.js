console.log('Exercise_7');

const refs = {
  inputRef: document.querySelector('#font-size-control'),
  spanRef: document.querySelector('#text'),
};
console.log(refs.spanRef);

const onRangeChange = e => {
  refs.inputRef.textContent = e.currentTarget.value;
  refs.spanRef.style.fontSize = e.currentTarget.value;
};

refs.inputRef.addEventListener('input', onRangeChange);

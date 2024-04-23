console.log('Exercise_7');

const refs = {
  inputRef: document.querySelector('#font-size-control'),
  spanRef: document.querySelector('#text'),
};
console.log(refs.inputRef);
console.log(refs.spanRef);

const onRangeChange = e => {
  refs.spanRef.textContent = e.target.value;
  console.log(e.target.value);
};

refs.inputRef.addEventListener('input', onRangeChange);

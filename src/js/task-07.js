console.log('Exercise_7');

const refs = {
  inputRef: document.querySelector('#font-size-control'),
  spanRef: document.querySelector('#text'),
};
console.log(refs.inputRef);
console.log(refs.spanRef);

const onRangeChange = e => {
  refs.spanRef.style.fontSize = e.currentTarget.value;
  console.log(e.currentTarget.value);
};

refs.inputRef.addEventListener('input', onRangeChange);

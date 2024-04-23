console.log('Exercise_7');

const refs = {
  inputRef: document.querySelector('#font-size-control'),
  spanRef: document.querySelector('#text'),
};

const onRangeChange = e => {
  refs.inputRef.min = e.target;
  refs.inputRef.max = e.target;
};

refs.inputRef.addEventListener('input', onRangeChange);

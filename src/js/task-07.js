console.log('Exercise_7');

const refs = {
  inputRef: document.querySelector('#font-size-control'),
  spanRef: document.querySelector('#text'),
};

const onRangeChange = e => {
  refs.inputRef.min = e.refs.spanRef.style.fontSize;
  refs.inputRef.max = e.refs.spanRef.style.fontSize;
};

refs.inputRef.addEventListener('input', onRangeChange);

console.log('Exercise_7');

const refs = {
  inputRef: document.querySelector('#font-size-control'),
  spanRef: document.querySelector('#text'),
};

const onRangeChange = e => {
  const { value } = refs.spanRef.style.fontSize;

  refs.inputRef.min = e.value;
  refs.inputRef.max = e.refs.spanRef.style.fontSize;
};

refs.inputRef.addEventListener('input', onRangeChange);

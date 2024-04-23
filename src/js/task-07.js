console.log('Exercise_7');

const refs = {
  inputRef: document.querySelector('#font-size-control'),
  spanRef: document.querySelector('#text'),
};

const onRangeChange = e => {
  const { value } = e.target;

  refs.inputRef.textContent = value;
  refs.spanRef.style.fontSize = value;
};

refs.inputRef.addEventListener('input', onRangeChange);

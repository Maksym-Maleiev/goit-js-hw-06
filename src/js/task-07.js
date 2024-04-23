console.log('Exercise_7');

const refs = {
  inputRef: document.querySelector('#font-size-control'),
  spanRef: document.querySelector('#text'),
};

const onChangeFontSize = e => {
  const { value } = e.target;

  refs.inputRef.min = `${value}px`;
  refs.inputRef.max = `${value}px`;
};

refs.inputRef.addEventListener('input', onChangeFontSize);

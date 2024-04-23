console.log('Exercise_7');

const refs = {
  range: document.querySelector('input#font-size-control'),
  span: document.querySelector('span#text'),
};

const onRangeChange = e => {
  span.style.fontSize = `${e.target.value}px`;
};

range.addEventListener('input', onRangeChange);

console.log('Exercise_6');

const refs = {
  textInputRef: document.querySelector('#validation-input'),
};

const onChangeInput = e => {
  if (e.currentTarget.lenght > 6) {
    refs.textInputRef.classList.add('');
  }
};

refs.textInputRef.addEventListener('input', onChangeInput);

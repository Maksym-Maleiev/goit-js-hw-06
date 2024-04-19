console.log('Exercise_6');

const refs = {
  textInputRef: document.querySelector('#validation-input'),
};

const onChangeInput = e => {
  if (e.currentTarget.value.length < 6) {
    refs.textInputRef.classList.toggle('invalid');
  } else {
    refs.textInputRef.classList.toggle('valid');
  }
};

refs.textInputRef.addEventListener('input', onChangeInput);

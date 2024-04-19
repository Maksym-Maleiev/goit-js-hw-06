console.log('Exercise_6');

const refs = {
  textInputRef: document.querySelector('#validation-input'),
};

const onChangeInput = e => {
  if (e.currentTarget.value.length < 6) {
    refs.textInputRef.classList.add('invalid');
    refs.textInputRef.classList.remove('valid');
  } else {
    refs.textInputRef.classList.add('valid');
    refs.textInputRef.classList.remove('invalid');
  }
};

refs.textInputRef.addEventListener('input', onChangeInpu);

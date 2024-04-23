console.log('Exercise_8');

const formRef = document.querySelector('.login-form');
// console.log(formRef);

function onSubmit(e) {
  preventDefault();

  const form = e.target;
  const login = form.elements.email.value;
  const password = form.elements.password.value;
}

formRef.addEventListener('submit', onSubmit);

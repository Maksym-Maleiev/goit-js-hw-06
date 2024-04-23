console.log('Exercise_8');

const formRef = document.querySelector('.login-form');
// console.log(formRef);

function onSubmit(e) {
  preventDefault();

  const form = e.target;
  const login = form.elements.email.value;
  const password = form.elements.password.value;

  if (login === '' || password === '') {
    return console.log('Необхідно заповнити всі поля');
  }

  // reset();
}

formRef.addEventListener('submit', onSubmit);

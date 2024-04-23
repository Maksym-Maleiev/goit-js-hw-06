console.log('Exercise_8');

const formRef = document.querySelector('.login-form');
// console.log(formRef);

function onSubmit(e) {
  e.preventDefault();

  const user = {
    login: e.target.elements.email.value,
    password: e.target.elements.password.value,
  };

  // const form = e.target;
  // const login = form.elements.email.value;
  // const password = form.elements.password.value;

  if (user.login === '' || user.password === '') {
    return alert('Необхідно заповнити всі поля!');
  }

  console.log(`Login: ${user.login}, Password: ${user.password}`);
  user.reset();
}

formRef.addEventListener('submit', onSubmit);

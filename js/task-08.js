console.log('Exercise_8');

const formRef = document.querySelector('.login-form');

function onSubmit(e) {
  e.preventDefault();

  const user = {
    login: e.target.elements.email.value,
    password: e.target.elements.password.value,
  };

  const { login, password } = user;

  if (login === '' || password === '') {
    return alert('Необхідно заповнити всі поля!');
  }

  console.log(`Login: ${login}, Password: ${password}`);
  e.target.reset();
}

formRef.addEventListener('submit', onSubmit);

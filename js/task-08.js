// const form = document.querySelector(".login-form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password }
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     return alert("Please fill in all the fields!");
//   }

//   console.log(`Email: ${email.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

// =======================


const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
  const { email, password } = event.currentTarget.elements;

  if (email.value.trim() === '' || password.value.trim() === "") 
    return alert("Please fill in all the fields!");

  const formData = new FormData(event.currentTarget);

const dataFormValue = {};
  formData.forEach((value, name) => {
    dataFormValue[name] = value;
  });

console.log(dataFormValue);

  formEl.reset();
};

// const refs = {
//     input: document.querySelector('#name-input'),
//     nameLabel: document.querySelector('#name-output'),
// };

// refs.input.addEventListener('input', onInputChange);

// function onInputChange(event) {
//     if (event.currentTarget.value < 1) {
//         refs.nameLabel.textContent = "Anonymous";
//     } else {
// refs.nameLabel.textContent = event.currentTarget.value;
//     }
    
// }

// ============================

const inputField = document.querySelector('#name-input');
const outputField = document.querySelector('#name-output');


function onInputChange(event) {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value.trim() === '') {
        outputField.textContent = "Anonymous";
    } else {
        outputField.textContent = event.currentTarget.value.trim();
    }
};

inputField.addEventListener('input', onInputChange);
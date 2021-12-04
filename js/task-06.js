// const inputEl = document.querySelector('#validation-input');

// inputEl.addEventListener('blur', inputBlur);

// function inputBlur(event) {
//         const inputLength = event.currentTarget.value.length;

//         if (inputLength === Number(inputEl.dataset.length)) { 
//         inputEl.classList.remove('invalid');
//         inputEl.classList.add('valid');
//     } else {
//         inputEl.classList.remove('valid');
//         inputEl.classList.add('invalid');
//     }
// }

// ========================


const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (inputEl.value.trim().length == inputEl.dataset.length) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
}
};
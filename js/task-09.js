function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
btn.addEventListener('click', change_color);

function change_color() {
document.body.style.background = getRandomHexColor();
}

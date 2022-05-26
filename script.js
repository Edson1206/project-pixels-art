// Função para criar o quadrado de pixels:
function makePixelSquares() {
  const size = 5;
  const frame = document.getElementById('pixel-board');
  for (let index = 1; index <= size; index += 1) {
    const line = document.createElement('div');
    frame.appendChild(line);
    for (let index2 = 1; index2 <= size; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      line.appendChild(pixel);
    }
  }
}
makePixelSquares();

// Função para definir qual cor será selecionada:

const palette = document.getElementsByClassName('color');

function selectColor(origin) {
  for (let index = 0; index < palette.length; index += 1) {
    palette[index].classList.remove('selected');
  }
  origin.target.classList.add('selected');
}

for (let index = 0; index < palette.length; index += 1) {
  palette[index].addEventListener('click', selectColor);
}

const addColorPixel = document.getElementsByClassName('pixel');

function selectPixel(origin) {
  origin.target.style.backgroundColor = window.getComputedStyle(document.querySelector('.selected'), null).getPropertyValue('background-color');
}

for (let index = 0; index < addColorPixel.length; index += 1) {
  addColorPixel[index].addEventListener('click', selectPixel);
}

window.onload = function black() {
  palette[0].classList.add('selected');
  black();
};

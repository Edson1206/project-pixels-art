const colorRandomOne = document.querySelector('#random-color-1');
const colorRandomTwo = document.querySelector('#random-color-2');
const colorRandomThree = document.querySelector('#random-color-3');
const addColorPixel = document.querySelectorAll('.pixel');
const palette = document.querySelectorAll('.color');
const clearBoard = document.querySelector('#clear-board');
const colorRandomButton = document.querySelector('#color-random-button');
const board = document.querySelector('#pixel-board');
const createBoardButton = document.querySelector('#generate-board');
const inputBox = document.querySelector('#board-size');

// Função para "pegar" a cor selecionada na palheta:

function selectColor(origin) {
  palette.forEach((e) => e.classList.remove('selected'));

  origin.target.classList.add('selected');
}

palette.forEach((e) => e.addEventListener('click', selectColor));

// Função para "pintar" o pixel com a cor selecionada:

function selectPixel(origin) {
  const { target } = origin;
  target.style.backgroundColor = window.getComputedStyle(document.querySelector('.selected'), null)
    .getPropertyValue('background-color');
}

addColorPixel.forEach((e) => e.addEventListener('click', selectPixel));

// Evento do botão de reset dos pixels:

function cleanPixels() {
  document.querySelectorAll('.pixel').forEach((e) => {
    e.style.backgroundColor = 'white';
  });
}

clearBoard.addEventListener('click', () => {
  cleanPixels();
});

// Função para gerar cores aleatórias:

function generateRandomColor() {
  const r = () => Math.floor(Math.random() * 256);
  const color = `rgb(${r()}, ${r()}, ${r()})`;
  return color;
}

const colors = [colorRandomOne, colorRandomTwo, colorRandomThree];

colors.forEach((e) => { e.style.backgroundColor = generateRandomColor(); });

colorRandomButton.addEventListener('click', () => {
  colors.forEach((e) => { e.style.backgroundColor = generateRandomColor(); });
});

// Função que gera o quadro de pixels com tamanho definido pelo usuário:

function buildRow(number) {
  const divRow = document.createElement('div');
  divRow.className = 'row';
  for (let index = 0; index < number; index += 1) {
    const pixels = document.createElement('div');
    pixels.className = 'pixel';
    divRow.appendChild(pixels);
    pixels.addEventListener('click', selectPixel);
  }
  board.appendChild(divRow);
}

function buildBoard(number) {
  board.innerHTML = '';
  for (let index = 0; index < number; index += 1) {
    buildRow(number);
  }
}

// Evento do botão que cria o quadro de pixels:

createBoardButton.addEventListener('click', () => {
  let number = 0;
  if (inputBox.value === '') {
    alert('Board inválido!');
  } else {
    number = Math.min(Math.max(inputBox.value, 5), 50);
    buildBoard(number);
  }
});




const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
const message = document.querySelector('#action-message');
let score = document.querySelector('#score');
let result = 0;
let currentTime = timeLeft.textContent;
let timerId = null;

function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole');
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add('mole');
  hitPosition = randomPosition.id;
}

square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if (id.id === hitPosition) {
      result++;
      score.textContent = result;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, 1000);
}

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerId);
    square.forEach(square => square.classList.remove('mole'));
    message.textContent = `Game over! Your final score is ${result}.`;
  }
}

moveMole();
timerId = setInterval(countDown, 1000);

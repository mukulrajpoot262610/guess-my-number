const container = document.querySelector(".container");
const inputField = document.querySelector(".input-field");

const btnAgain = document.getElementById("btnAgain");
const btnCheck = document.getElementById("btnCheck");

const mysteryNumber = document.getElementById("mystery-number");
const labelCorrect = document.getElementById("label-correct");
const labelScore = document.getElementById("label-score");
const labelHighscore = document.getElementById("label-highscore");

let value = Number(inputField.value);
let number = Math.floor(Math.random() * 50);

let life = 10;
let highscore = 0;

const checkLogic = () => {
  if (value > 51 || value < 0) {
    labelCorrect.textContent = "❌ Invalid !";
    labelScore.textContent = `💖 Life: ${--life}`;
  } else if (number > value) {
    labelCorrect.textContent = "🔽 Too Low !";
    labelScore.textContent = `💖 Life: ${--life}`;
  } else if (number === value) {
    labelCorrect.textContent = "🎉 Correct Number !";
    mysteryNumber.textContent = number;
    container.style.backgroundColor = "green";
    labelHighscore.textContent = `🎯 Highscore: ${highscore+=(life)}`
  } else if (number < value) {
    labelScore.textContent = `💖 Life: ${--life}`;
    labelCorrect.textContent = "🔼 Too High !";
  }
};

const gameOver = () => {
    if(life < 0) {
        container.style.backgroundColor = 'red';
        labelCorrect.textContent = '😭 Game Over !'
        labelCorrect.classList.add('error');
}
}

const lifeCounter = () => {};

btnCheck.addEventListener("click", () => {
  value = Number(inputField.value);
  checkLogic();
  gameOver();
  inputField.value = "";
});

btnAgain.addEventListener('click', () => {
    number = Math.floor(Math.random() * 50);
    inputField.value = "";
    labelCorrect.textContent = "";
    labelScore.textContent = `💖 Life: ${life=10}`;
    container.style.backgroundColor = '#333'
    labelCorrect.classList.remove('error')
    mysteryNumber.textContent = '?';
})

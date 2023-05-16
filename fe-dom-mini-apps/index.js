let count = 0;

const correctAnswer = document.querySelector("input[value='correct']");
const incorrectAnswer = document.querySelector("input[value='option']");
const submitBtn = document.querySelectorAll(
  "#submit-1, #submit-2, #submit-3, #submit-4, #submit-5"
);

console.log(correctAnswer);

submitBtn.forEach((button) => {
  button.addEventListener("click", getCorrectAnswer);
});

function getCorrectAnswer(event) {
  const clickedBtn = event.target;

  if (correctAnswer.checked) {
    count++;
    clickedBtn.innerText = "That's correct!🎉";
    clickedBtn.removeEventListener("click", getCorrectAnswer);
  } else {
    clickedBtn.innerText = "Ooops! That's incorrect!❌";
    clickedBtn.removeEventListener("click", getCorrectAnswer);
  }
}

const finished = document.getElementById("submit-5");
finished.addEventListener("click", getScore);

function getScore() {
  const score = document.getElementById("tellScore");
  score.innerHTML = `You've scored ${count}/5 points!🏆`;
}

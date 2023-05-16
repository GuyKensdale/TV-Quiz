//need a button for each question when user is ready to submit
correctAnswer.removeEventListener("click", getCorrectAnswer);
incorrectAnswer.removeEventListener("click", getIncorrectAnswer);

correctAnswer.innerText = "That's correct!🎉";

    incorrectAnswer.innerText = "Ooops! That's incorrect!❌";

incorrectAnswer.removeEventListener("click", getIncorrectAnswer);
correctAnswer.removeEventListener("click", getCorrectAnswer);
declair a number per submit that is used with the submit

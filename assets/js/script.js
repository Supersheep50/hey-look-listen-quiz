import {
    questions
} from "./trivia-questions"

let gameBox = document.getElementsByClassName("game-box");
let questionBox = document.getElementsByClassName("question-box")
let gameQuestions = document.getElementsByClassName("game-questions")
let answerBox = document.getElementsByClassName("answer-box");
let buttonA = document.getElementsByClassName("btn-a")
let buttonB = document.getElementsByClassName("btn-b")
let buttonC = document.getElementsByClassName("btn-c")
let currentQuestion = null;
let repeatedQuestion = [];

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener("click", startGame, {
        once: true
    })
})

/** Begin Quiz */
function startGame() {

    gameBox.style.display = "none";
    content.style.display = "block";
    renderNextQuestion();

}

function renderNextQuestion() {
    resetButtons();
    if (isMaximumQuestionsLimitReached()) {
        displayResult();
    } else {
        displayQuestion();
    }
}


/** Shows Questions */
function displayQuestion() {
    currentQuestion = getRandomQuestion();
    questionBox.innerText = currentQuestion.question;
    displayAnswers();
    handleClickEvent();
}

/**Shows Answers */

function displayAnswer() {
    buttonA.innerText = currentQuestion.options[0];
    buttonB.innerText = currentQuestion.options[1];
    buttonC.innerText = currentQuestion.options[2];

}

function getRandomQuestion() {
    currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    if (isMaximumQuestionsLimitReached()) {
        return false;
    } else if (repeatedQuestion.indexOf(currentQuestion) >= 0) {
        return getRandomQuestion();
    } else {
        repeatedQuestion.push(currentQuestion);
        return currentQuestion;
    }
}
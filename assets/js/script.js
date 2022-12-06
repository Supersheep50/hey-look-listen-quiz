/* jshint esversion: 11 */
document.getElementById("question-counter").innerText = questions.length;

let questionBox = document.getElementsByClassName("question-box")[0];
let buttonA = document.getElementsByClassName("btn-a")[0];
let buttonB = document.getElementsByClassName("btn-b")[0];
let buttonC = document.getElementsByClassName("btn-c")[0];
let startGame = document.getElementsByClassName("begin-quiz")[0];
let currentQuestion = null;
let repeatedQuestion = [];

document.addEventListener('DOMContentLoaded', () => {
    startGame.addEventListener("click", beginQuiz, {
        once: true
    })
})

/** Begin Quiz */
function beginQuiz() {

    renderNextQuestion();
}

function isMaximumQuestionsLimitReached() {
    if (repeatedQuestion.length >= 20) {
        return true;
    }
}

/** Renders the next question */
function renderNextQuestion() {
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

function displayAnswers() {
    buttonA.innerText = currentQuestion.choices[0];
    buttonB.innerText = currentQuestion.choices[1];
    buttonC.innerText = currentQuestion.choices[2];

}

/**Pulls a random question from the list */
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
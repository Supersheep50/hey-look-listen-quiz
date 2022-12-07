/* jshint esversion: 11 */
document.getElementById("question-counter").innerText = questions.length;

let startGame = document.getElementsByClassName("begin-quiz")[0];
let questionBox = document.getElementsByClassName("question-box")[0];
let buttonA = document.getElementsByClassName("btn-a")[0];
let buttonB = document.getElementsByClassName("btn-b")[0];
let buttonC = document.getElementsByClassName("btn-c")[0];
let answerButtons = document.getElementsByClassName("answer-btn");
let actionButtons = document.getElementsByClassName("action-btn");
let playAgainButton = document.getElementsByClassName("play-again")[0];
let buttons = document.getElementsByTagName("button");
let currentQuestion = null;
let repeatedQuestion = [];

document.addEventListener('DOMContentLoaded', () => {
    startGame.addEventListener("click", beginQuiz, {
        once: true
    });
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

function handleClickEvent() {
    handleMouseEvent();
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

function handleMouseEvent() {
    for (let answerButton of answerButtons) {
        answerButton.addEventListener("mousedown", checkAnswer);
        answerButton.addEventListener("mouseup", renderNextQuestion);
    }
    for (let actionButton of actionButtons) {
        actionButton.addEventListener("mousedown", styleActionButton);
        actionButton.addEventListener("mouseup", unStyleActionButton);
    }
}

function checkAnswer() {
    let answer = currentQuestion.answer;
    let response = this.innerText;
    if (answer === response) {
        this.style.backgroundColor = "gold";
        incrementScore();
    } else {
        this.style.backgroundColor = "black";
    }
}

function incrementScore() {
    score.innerText = ++scoreCount;
}

function displayActionButtons() {
    for (let answerButton of answerButtons) {
        answerButton.style.display = "none";
    }
    for (let actionButton of actionButtons) {
        actionButton.style.display = "inline-block";

        playAgainButton.addEventListener("click", newGame)
    }
}

function resetButtons() {
    for (let button of buttons) {
        button.style = null;
    }
}
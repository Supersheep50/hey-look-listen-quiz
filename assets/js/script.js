import {
    questions
} from ".trivia-questions.js";

let gameBox = document.getElementsByClassName("game-box");
let questionBox = document.getElementsByClassName("question-box")
let gameQuestions = document.getElementsByClassName("game-questions")
let answerBox = document.getElementsByClassName("answer-box");
let buttonA = document.getElementsByClassName("btn-a")
let buttonB = document.getElementsByClassName("btn-b")
let buttonC = document.getElementsByClassName("btn-c")
let beginQuiz = document.getElementsByClassName("begin-quiz");
let currentQuestion = null;

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener("click", beginQuiz, {
        once: true
    })
})

/** Shows Questions */
function displayQuestion() {
    questions = getRandomQuestion();
    gameQuestions.innerText = currentQuestion.question;
    displayAnswer();
    handleClickEvent();
}
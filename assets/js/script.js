let beginQuiz = document.getElementsByClassName("begin-quiz");
let gameBox = document.getElementsByClassName("game-box");
let questionBox = document.getElementsByClassName("question-box")
let gameQuestions = document.getElementsByClassName("game-questions")
let answerBox = document.getElementsByClassName("answer-box");
let buttonA = document.getElementsByClassName("btn-a")
let buttonB = document.getElementsByClassName("btn-b")
let buttonC = document.getElementsByClassName("btn-c")


document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener("click", beginQuiz, {
        once: true
    })
})
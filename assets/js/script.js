/* jshint esversion: 11 */
/**Declarations */
let startGame = document.getElementsByClassName("begin-quiz")[0];
let questionBox = document.getElementsByClassName("question-box")[0];
let buttonA = document.getElementsByClassName("btn-a")[0];
let buttonB = document.getElementsByClassName("btn-b")[0];
let buttonC = document.getElementsByClassName("btn-c")[0];
let answerButtons = document.getElementsByClassName("answer-btn");
let actionButtons = document.getElementsByClassName("action-btn");
let score = document.getElementsByClassName("score")[0];
let scoreCount = parseInt(score.innerText);
let playAgainButton = document.getElementsByClassName("play-again")[0];
let currentQuestion = null;
let repeatedQuestion = [];
var timers = [];
/**Load the DOM */
document.addEventListener('DOMContentLoaded', () => {
    startGame.addEventListener("click", beginQuiz, {
        once: true
    });
});
/** Begin Quiz */
function beginQuiz() {
    hideActionButtons();
    displayAnswerButtons();
    runTimer();
    renderNextQuestion();
}
/**Makes sure the quiz recognizes a max of 20 questions */
function isMaximumQuestionsLimitReached() {
    if (repeatedQuestion.length >= 20) {
        for (var i = 0; i < timers.length; i++) {
            clearTimeout(timers[i]);
        }
        return true;
    }
}
/** Renders the next question */
function renderNextQuestion() {
    if (isMaximumQuestionsLimitReached()) {
        displayResult();
    } else {
        resetButtons();
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
/**Add ability to click using a mouse or touch (Code adapted from MDN & Codeburst - credit in Readme) */
function handleClickEvent() {
    if (window.isTouchScreen) {
        handleTouchEvent();
    } else {
        handleMouseEvent();
    }
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
    if (repeatedQuestion.indexOf(currentQuestion) >= 0) {
        return getRandomQuestion();
    } else {
        repeatedQuestion.push(currentQuestion);
        return currentQuestion;
    }
}
/** Touch funtionality - code adapted from Codeburst - Credit in Readme */
window.addEventListener('touchstart', function onFirstTouch() {
    this.window.isTouchScreen = true;
}, false);

/** Adds functionality for mouse users and touch users- Code adpated from Codeburst and StackOverFlow - Credit in Readme */
function handleMouseEvent() {
    for (let answerButton of answerButtons) {
        answerButton.addEventListener("mousedown", checkAnswer);
        answerButton.addEventListener("mouseup", renderNextQuestion);
    }
}

function handleTouchEvent() {
    for (let answerButton of answerButtons) {
        answerButton.addEventListener("touchstart", checkAnswer);
        answerButton.addEventListener("touchend", renderNextQuestion);
    }
}
/** Checks if its the correct answer and adds 1 to the score if so (Some code from Love Maths project - credit in ReadMe) */
function checkAnswer() {
    let answer = currentQuestion.answer;
    let response = this.innerText;
    if (answer === response) {
        this.style.backgroundColor = "green";
        incrementScore();
    } else {
        this.style.backgroundColor = "red";
    }
}
/**Funciton to add to the scoreboard (Code from Love Maths prokect - credit in ReadMe) */
function incrementScore() {
    score.innerText = ++scoreCount;
}
/**Adds functionality for Play Again button and hide other buttons - Code adapted from StackOverFlow - credit in Readme */
function hideAnswerButtons() {
    for (let answerButton of answerButtons) {
        answerButton.style.display = "none";
    }
    document.getElementById("timer").style.display = "none";
    playAgainButton.addEventListener("click", newGame);
}

function hideActionButtons() {
    for (let actionButton of actionButtons) {
        actionButton.style.display = "none";
    }
}

function displayActionButtons() {
    for (let actionButton of actionButtons) {
        actionButton.style.display = "inline-block";
    }
}

function displayAnswerButtons() {
    for (let answerButton of answerButtons) {
        answerButton.style.display = "inline-block";
    }
}
/**Share Quiz code - Code adapted from Dev.to (Credit in ReadMe) */
let shareBtn = document.querySelector('.share-quiz');
let shareOptions = document.querySelector('.share-options');

shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
});

function copyQuiz() {
    let copyText = document.getElementById("copy-quiz");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}
/**Function for starting a New Game */
function newGame() {
    let timer;
    console.log("newGame is running");
    repeatedQuestion.length = null;
    scoreCount = 0;
    score.innerText = scoreCount;
    hideActionButtons();
    displayAnswerButtons();
    runTimer();
    document.getElementById("timer").style.display = "block";
    renderNextQuestion();
}
/**Resets button styling once you start a new game */
function resetButtons() {
    for (let answerButton of answerButtons) {
        answerButton.style.backgroundColor = null;
    }
}
/**Timer - some code from StackOverflow (in Readme Credits)*/
function runTimer() {
    let timer = 120;
    timers.push(interval = setInterval(function () {
        document.getElementById('timer').innerHTML = timer;
        timer--;
        if (timer <= -1) {
            document.getElementById('timer').innerHTML = timer;
            window.clearTimeout(interval);
            alert("Time up! Game Over!");
            displayResult();
        }
    }, 1000));
}
/**Quiz results (Some code used here from StackOverFlow - credit in Readme) */
function displayResult() {
    if (scoreCount >= 19) {
        questionBox.innerText = "Congrats! You don't suck!";
    } else if (scoreCount >= 15 && score < 19) {
        questionBox.innerText = "Congrats! You only suck a bit!";
    } else if (scoreCount >= 10 && score < 15) {
        questionBox.innerText = "Oh this isn't going well is it?";
    } else if (scoreCount >= 6 && score < 10) {
        questionBox.innerText = "Have you ever played a videogame?";
    } else {
        questionBox.innerText = "Yikes!!!";
    }
    hideAnswerButtons();
    displayActionButtons();
}
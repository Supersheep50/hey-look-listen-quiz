/* jshint esversion: 11 */

/**Declarations */
let startGame = document.getElementsByClassName("begin-quiz")[0];
let questionBox = document.getElementsByClassName("question-box")[0];
let buttons = document.getElementsByTagName("button");
let buttonA = document.getElementsByClassName("btn-a")[0];
let buttonB = document.getElementsByClassName("btn-b")[0];
let buttonC = document.getElementsByClassName("btn-c")[0];
let answerButtons = document.getElementsByClassName("answer-btn");
let actionButtons = document.getElementsByClassName("action-btn");
let score = document.getElementsByClassName("score")[0];
let scoreCount = parseInt(score.innerText);
let playAgainButton = document.getElementsByClassName("play-again")[0];
let shareResultsButton = document.getElementsByClassName("share-score")[0];
let answerBox = document.getElementsByClassName("answer-box")[0];
let currentQuestion = null;
let repeatedQuestion = [];

/**Load the DOM */
document.addEventListener('DOMContentLoaded', () => {
    startGame.addEventListener("click", beginQuiz, {
        once: true
    });
})
/** Begin Quiz */
function beginQuiz() {
    runTimer();
    renderNextQuestion();
}
/**Makes sure the quiz recognizes a max of 20 questions */
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
/**Add ability to click using a mouse (Code adapted from MDN - credit in Readme) */
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
    // if (isMaximumQuestionsLimitReached()) {
    //     displayResult();
    //     return false;
    // } else 
    if (repeatedQuestion.indexOf(currentQuestion) >= 0) {
        return getRandomQuestion();
    } else {
        repeatedQuestion.push(currentQuestion);
        return currentQuestion;
    }
}
/** Adds functionality for mouse users */
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
/**Styles Play Again button when in use */
function styleActionButton() {
    this.style.backgroundColor = "green";
}
/**Removes styling from Play Again button */
function unStyleActionButton() {
    this.style.backgroundColor = "null";
}
/**Adds functionality for Play Again button */
function hideButtons() {
    for (let answerButton of answerButtons) {
        answerButton.style.display = "none";
    }

    document.getElementById("timer").style.display = "none";
    playAgainButton.addEventListener("click", newGame);
}

/**Share Quiz code - Code adapted from Dev.to (Credit in ReadMe) */
let shareBtn = document.querySelector('.share-quiz');
let shareOptions = document.querySelector('.share-options');

shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
})

/**Function for starting a New Game */
function newGame() {
    console.log("newGame is running");
    repeatedQuestion.length = null;
    scoreCount = 0;
    score.innerText = scoreCount;
    resetTimer();
    renderNextQuestion();
}

/**Resets button styling once you start a new game */
function resetButtons() {
    for (let button of buttons) {
        button.style = null;
    }
}

/**Timer - some code from StackOverflow (in Readme Credits)*/
function runTimer() {
    let timer = 60;
    let interval = setInterval(function () {
        document.getElementById('timer').innerHTML = timer;
        timer--;
        if (timer === -1) {
            document.getElementById('timer').innerHTML = timer;
            clearTimeout(interval);
            alert("Time up! Game Over!");
            displayResult();
        }
    }, 1000);
};

function resetTimer() {
    document.getElementById("timer").style.display = "flex";
    runTimer();
}

/**Quiz results (Some code used here from StackOverFlow - credit in Readme) */
function displayResult() {
    if (scoreCount >= 19) {
        questionBox.innerText = "Congrats! You don't suck!";

    } else if (scoreCount >= 15 && score < 19) {
        questionBox.innerText = "Congrats! You only suck a bit!";
    } else if (scoreCount >= 10 && score < 14) {
        questionBox.innerText = "Oh this isn't going well is it?";
    } else if (scoreCount >= 6 && score < 9) {
        questionBox.innerText = "Have you ever played a videogame?";
    } else if (scoreCount >= 1 && score < 5) {
        questionBox.innerText = "Yikes!!!";
    }
    hideButtons();
}
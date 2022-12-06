 let questions = [{
         "question": "When was Metal Gear Solid Released?",
         "choices": ["1998", "2001", "2004"],
         "answer": "1998"
     }, {
         "question": "What is the name of the main protagonist in The Legend of Zelda: Ocarina of Time?",
         "choices": ["Zelda", "Link", "Jeff"],
         "answer": "Link"
     },

     {
         "question": "What is the worst game ever made?",
         "choices": ["Far Cry 5", "Far Cry 5", "Far Cry 5"],
         "answer": "Far Cry 5"
     },

     {
         "question": "What is Mario's brothers name?",
         "choices": ["Luigi", "Tony", "Sergio"],
         "answer": "Luigi"
     },

     {
         "question": "Who is the best looking member of HLL?",
         "choices": ["Owen", "Liam", "Kev"],
         "answer": "Jon"
     },

     {
         "question": "In what city is Resident Evil 2 set?",
         "choices": ["Badger City", "Fox City", "Racoon City"],
         "answer": "Racoon City"
     },

     {
         "question": "What is the name of Nintendo's orignal handheld console?",
         "choices": ["PSP", "Steam Deck", "Gameboy"],
         "answer": "Gameboy"
     },

     {
         "question": "In the Elder Scrolls, what is the name of the capital city of Tamriel?",
         "choices": ["Skyrim", "Cyrodiil City", "Cork"],
         "answer": "Cyrodiil City"
     },

     {
         "question": "What is the name of Geralt's horse in The Witcher 3?",
         "choices": ["Sarah", "Jessica", "Roach"],
         "answer": "Roach"
     },

     {
         "question": "It's in the game is a popular tagline for what major video-games company?",
         "choices": ["Naughty Dog", "Bethesda", "EA"],
         "answer": "EA"
     },

     {
         "question": "What is the name of Solid Snakes inner ear radio in Metal Gear Solid?",
         "choices": ["Codec", "Kodak", "Derek"],
         "answer": "Codec"
     },

     {
         "question": "What does HLL stand for?",
         "choices": ["Hey! Look! Listen! ", "Hey! Look! Larry!", "Hey! Look! Laryngitis!"],
         "answer": "Hey! Look! Listen!"
     },

     {
         "question": "Who is the leader of The Van Der Linde Gang in Red Dead Redemption 2?",
         "choices": ["German", "Dutch", "Swiss"],
         "answer": "Dutch"
     },

     {
         "question": "What does the 64 stand for in Nintendo 64?",
         "choices": ["The age of the creator of the console", "My Dad's current age", "The 64-bit CPU"],
         "answer": "The 64-bit CPU"
     },

     {
         "question": "How many Pokemon can you collect in Pokemon Red or Blue?",
         "choices": ["150", "1500", "15"],
         "answer": "150"
     },

     {
         "question": "What is the best selling video-game console of all time?",
         "choices": ["Nintendo Wii", "Sony PlayStation", "Sony PlayStation 2"],
         "answer": "Sony PlayStation 2"
     },

     {
         "question": "What is the best selling video-game of all time?",
         "choices": ["Minecraft", "Tetris", "Wii Sports"],
         "answer": "Minecraft"
     },

     {
         "question": "Who voices Batman in the video-game Batman: Arkham Asylum?",
         "choices": ["Ben Afleck", "Christian Bale", "Kevin Conroy"],
         "answer": "Kevin Conroy"
     },

     {
         "question": "Where can you listen to the HLL Podcast?",
         "choices": ["Any major streaming platform!", "The wireless", "The Podcast listening Ear Trumpet of Truth"],
         "answer": "Any major streaming platform!"
     },

     {
         "question": "Is the cake a lie?",
         "choices": ["Yes", "No", "Ask Glados"],
         "answer": "Ask Glados"
     }
 ];

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
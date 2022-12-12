# hey-look-listen-quiz

The Hey! Look! Listen! Quiz is a mutiple choice quiz game that is based off of the popular video game podcast. Users are asked 20 random video game questions and are given 60 seconds to answer as many questions as possible. 

The questions vary in difficult but the most important thing is to have fun! Some questions include inside jokes for fans of the podcast.

![Responsive Mockup](INSERTPhotos)

## Features 

### Existing Features

- __HLL Logo__

  - Featured at the top left of the page, the HLL logo lets users know the name of the quiz and podcast. To the right of the logo a title is also included in case users are not familair with the podcast.

![Logo]()

- __The Nav Bar__

  - This section allows users to navigate to the different sections of the website, About, FAQ and Rules.

![Game]()

- __The Question section__

  - The question section is where users can see the randomly generated questions created by the quiz.
  - Clicking Being Quiz will start the quiz and display the current question and 3 possible answers. 
  - Users are able to click one of the 3 possible options and get the question right or wrong.

![Question]()

__Play Again__

- There is a PLay Again button that allows users to quickly reply the game. Clicking this resets the score and timer.

![Play Again]()

- __The Score Area__

  - There is a score at the bottom of the question box that tracks the users current score in the quiz out of 20.
  - The score counter goes up for every right answer and stays the same for every wrong answer.

![score]()

__The Timer__

- At the bottom of the Question Area there is a timer. THe user has 60 seconds to complete the entire quiz. 
- The timer starts as soon as the user clicks Begin Quiz.
- If the timer gets to 0, it's Game Over!

![Timer]()

__About Section__ 

- This section provides information about the quiz and the podcast.

![About]()

__Rules__

- This section informs the user of the rules of the quiz and how to gather points.

![Rules]()

__FAQ__

- This section includes some light hearted FAQ's to add a bit of comedy to the page.

![FAQ]()

__Social Links__

- There is a social media icon for Twitter, Instagram and Spotify. Clicking each will bring you to the corresponding HLL page.

### Features Left to Implement

- I had hoped to integrate a way for people to also listen to the podcast while playing th quiz but ultimately ran out of time before I could make that happen. 

## Testing 

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your project’s features and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.


### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 11 functions in this file.
      - Function with the largest signature takes 2 arguments, while the median is 0.
      - Largest function has 10 statements in it, while the median is 3.
      - The most complex function has a cyclomatic complexity value of 4 while the median is 2.

### Fixed Bugs 

- Quiz was not recoginizing the correct answer. My styling on my answers was causing right answers to be seen as wrong answers.
- Timer was not counting down from 60 and acting erratically when starting a new game. 
- Background photo and Logo not showing up on live page.
- Play Again button would only work when all 20 questions had been answered.
- Score counter didnt stop at 20


### Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed. 

## Deployment

The project was deployed to GitHub Pages using the following steps...

Log in to GitHub and locate the [GitHub Repository]
At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
Click the the "Pages" link on the left-hand side of the screen.
Under "Source", click the dropdown called "None" and select "Main Branch".
The page will automatically refresh.
Scroll back down through the page to locate the now published site link in the "Pages" section.

## Credits 
### Content 

- All content provided by myslef and my podcast co-creators at @HLL. 
- All questions created by myself. 
- About, Rules and FAQ created myself.

### Media

- Background photo - Creative Bloc - https://www.creativebloq.com/news/top-video-game-character
- All other photos and logos were created by myself and Liam Sheahan for the @HLL podcast. They can all be found on Instagram here - https://www.instagram.com/hllpod/

### Code 

- Code ideas and content were adapted from my previous project, A History of the PlayStation.
- Some code used from course material and project Love Maths. 
- Code to build Timer used from [StackOverflow](https://stackoverflow.com/questions/29971898/how-to-create-an-accurate-timer-in-javascript)(https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz) and [edureka!](https://www.edureka.co/blog/creating-an-online-quiz-application-implementing-countdown-timer/)
- Advice, help and guidance for my whole project from my mentor Tim and my partner Steph. 



 
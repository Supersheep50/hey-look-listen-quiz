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

- Another feature idea

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

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-maths/


## Credits 

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project. 

### Content 

- The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- Background photo - Creative Bloc - https://www.creativebloq.com/news/top-video-game-character
- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site


 
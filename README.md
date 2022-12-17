# hey-look-listen-quiz

The Hey! Look! Listen! Quiz is a mutiple choice quiz game that is based off of the popular video game podcast. Users are asked 20 random video game questions and are given 60 seconds to answer as many questions as possible. 

The questions vary in difficult but the most important thing is to have fun! Some questions include inside jokes for fans of the podcast.

The HLL Podcast is a videogame podcast I have been a part of for nearly 2 years. We pick a different videogame or topic each week and chat about it. I've wanted to code something for it for a long time and a quiz felt likke the best idea!

Live Site [here](https://supersheep50.github.io/hey-look-listen-quiz/)

## Wireframes

- I had wireframes created for desktop, tablet and phone using Balsamiq but sadly they were lost when I was made redundant from Stripe. They were all on my work laptop.

![Responsive Mockup](/assets/images/hll-mockup.png)

## Features 

 __Responsive on all device sizes:__
    - [Mobile](/assets/images/mobile-responsiveness.png) 
    - [Tablet](/assets/images/tablet-responsiveness.png) 
    - [Desktop](/assets/images/desktop-responiveness.png)

__HLL Logo__

  - Featured at the top left of the page, the HLL logo lets users know the name of the quiz and podcast. To the right of the logo a title is also included in case users are not familair with the podcast. Clicking the logo brings you to the Spotify homepage of our podcast.

![Logo](/assets/images/hll-logo.jpeg)

 __The Nav Bar__

  - This section allows users to navigate to the different sections of the website, About, FAQ and Rules.

![Nav Bar](/assets/images/nav-bar.png)

 __The Question section__

  - The question section is where users can see the randomly generated questions created by the quiz.
  - Clicking Begin Quiz will start the quiz and display the current question and 3 possible answers. 
  - Users are able to click one of the 3 possible options and get the question right or wrong.

![Question Section](/assets/images/question-section.png)

__Play Again__

- There is a Play Again button that allows users to quickly replay the game. Clicking this resets the score and timer.

![Play Again](/assets/images/play-again.png)

 __The Score Area__

  - There is a score at the bottom of the question box that tracks the user's current score in the quiz out of 20.
  - The score counter goes up for every right answer and stays the same for every wrong answer.

![Score Area](/assets/images/score-area.png)

__The Timer__

- At the bottom of the Question Area there is a timer. The user has 60 seconds to complete the entire quiz. 
- The timer starts as soon as the user clicks Begin Quiz.
- If the timer gets to 0, it's Game Over!

![Timer](/assets/images/timer.png)

__Share Quiz__

- There is a button for users to share the quiz with friends on social media or copy the link.
- By clicking the copy button the user will copy the link to the quiz. 
- Clicking the social media icons lets them go to their social media homepage and sign in. They can then paste the link.
- There is also a close feature that you can click.

![Timer](/assets/images/share-quiz.png)

__About Section__ 

- This section provides information about the quiz and the podcast.

![About](/assets/images/about-section.png)

__Rules__

- This section informs the user of the rules of the quiz and how to gather points.

![Rules](/assets/images/rules-section.png)

__FAQ__

- This section includes some light hearted FAQ's to add a bit of comedy to the page.

![FAQ](/assets/images/faq-section.png)

__Social Links__

- There is a social media icon for Twitter, Instagram and Spotify. Clicking each will bring you to the corresponding HLL page.

![Social-Links](/assets/images/social-links.png)


### Features Left to Implement

- I had hoped to integrate a way for people to also listen to the podcast while playing the quiz but ultimately ran out of time before I could make that happen. I hope to add this at a later date.
- A highscore board is something I hope to add at a later date. 
- Tried to add question counter but ran out of time!
- Tried to add scrolling header but ran out of time to implement.

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Orbitron'font into the style.css file which is used on all pages throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used throughout the website to add social media icons and logos for aesthetic and UX purposes.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the wireframes during the design process.
    - I sadly lost my Balsamiq Wireframes after being made redundant from my last job and my laptop wiped clean.

## Testing 

### Manual Testing

- The quiz was manually tested on a Desktop PC, ASUS Laptop, MacBook Pro, Iphone Pro and Ipad Air. It was manually tested in both Chrome and Safari by myself and podcast co-creators.
- Dev tools used to make sure everything was responsive.

### Lighthouse Testing

- Used Lighthouse to test performance on Desktop and Mobile.
- Desktop

![Desktop Results](/assets/images/lighthouse-desktop.png)

- Mobile 

![Mobile Results](/assets/images/lighthouse-mobile.png)

### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)
    - [Results](/assets/images/w3c-html-results.png)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
    - [Results](/assets/images/w3c-css-results.png)
- JavaScript
    [Jshint validator](/assets/images/jshint-testing.png)
      - The following metrics were returned: 
      - There are 28 functions in this file.
      - Function with the largest signature take 0 arguments, while the median is 0.
      - Function with the largest signature take 0 arguments, while the median is 0.
      - Largest function has 10 statements in it, while the median is 3.
      - The most complex function has a cyclomatic complexity value of 8 while the median is 1.5.
      - Interval undefined - this is defined within the function is used.
      - Questions undefined - this is referring to questions.js which I am importing from another file after advice from mentor.
      - CopyQuiz unused - is called from within the HTMl.  
     
### Fixed Bugs 

- Quiz was not recognizing the correct answer. My styling on my answers was causing right answers to be seen as wrong answers.
- Timer was not counting down from 60 and acting erratically when starting a new game. I added in specific code to ensure the timer restarted from 60 when hitting Play Again or Begin Quiz.
- Background photo and Logo not showing up on live page - fixed by removing a / from my img tags in the html.
- Lighthouse testing score was slow. Converted photos to Webp and greatly improved score.
- Lighthouse testing showed accessiblity was low. Added the correct amount of alt tags.
- Got feedback that 60 seconds to do the quiz was too hard. Changed to 120 seconds.
- Timer didn't finish after quiz ended. Hitting Play Again would cause two timers to run at the same time - This turned out to be a very complex bug. After hours of researching using StackOverFlow, MDN and Open AI, I asked Tutor Support and we finally got there after 5 hours on the chat! We had to use a workaround with resetting the timer as my timer was originally created within a function and could not be implemented globally. 
- When the Share Results wasnt clicked you could still click the social media icons in the div. Added code to properly hide them when not in use.

### Unfixed Bugs

- None that I am aware of after lots and lots of testing. 

## Deployment

The project was deployed to GitHub Pages using the following steps...

Log in to GitHub and locate the [hey-look-listen repo](https://github.com/Supersheep50/hey-look-listen-quiz)
At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
Click the the "Pages" link on the left-hand side of the screen.
Under "Source", click the dropdown called "None" and select "Main Branch".
The page will automatically refresh.
Scroll back down through the page to locate the now published site link in the "Pages" section.

## Credits 
### Content 

- All content provided by the developer and my podcast co-creators at @HLL. 
- All questions created by the developer. 
- About, Rules and FAQ created by the developer.

### Media

- Background photo - Creative Bloc - https://www.creativebloq.com/news/top-video-game-character
- All other photos and logos were created by myself and Liam Sheahan for the @HLL podcast. They can all be found on Instagram here - https://www.instagram.com/hllpod/

### Code 

- Some ideas and content were adapted from my previous project, A History of the PlayStation.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) for general debugging.
- [W3-Schools](https://www.w3schools.com/) for some helpful tips on building quizzes in JS.
- Some code used from course material and previous project Love Maths to build the score counter. 
- Code to build Timer used from StackOverflow [here](https://stackoverflow.com/questions/29971898/how-to-create-an-accurate-timer-in-javascript) and [here](https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz) and [edureka!](https://www.edureka.co/blog/creating-an-online-quiz-application-implementing-countdown-timer/). Also credit to Ger from Tutor Support for helping me out in parts here.
- Code from this StackOverFlow [page](https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript) used to code Display Results section in my JS.
- Some code used from this StackOverFlow [page](https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array) to pull random questions for quiz.
- [Code Institute Sample Readme](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+CSSE_PAGPPF+2021_Q2/courseware/66cf361c769a41d496f5001fae6f9be7/3b5cd5dc8313462aa5975a3c9b9a1a3c/) for Readme layout.
- Code adapted for click event found on MDN [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event).
- Code adapted for Share Quiz function found [here](https://dev.to/kunaal438/how-to-make-a-share-button-html-awesome-button-effect-css-modern-web-coding-tutorial-2app) on Dev.to.
- Touch functionlaity added from Codeburst [here](https://codeburst.io/the-only-way-to-detect-touch-with-javascript-7791a3346685) and StackOverFlow [here](https://stackoverflow.com/questions/70827887/detect-click-vs-touch-in-javascript).
- Code adapted from MDN [here](https://www.w3schools.com/howto/howto_js_copy_clipboard.asp) to add copy button.
- Code adapted from StackOverFlow to hide buttons found [here](https://stackoverflow.com/questions/8685107/hiding-a-button-in-javascript).
- Advice, help and guidance for my whole project from my mentor Tim and my partner Steph. 

## Thank you!

- Massive thank you to my partner Steph! She was a constant source of advice, debugging and ideas. She is also the most patient person to ever exist.
- My mentor Tim for giving me great guidance and advice and JJ for his review! 
# Art Quiz App

## The Purpose of the Project

This is an art quiz app intended to test the user's knowledge of Great Women Artists and their artworks. This quiz was inspired by the recently published 'The Story of Art Without Men' by Katy Hessel, and hopes to promote an interest in the user to further explore the works of Great Women Artists throughout history and today.

<img src="readme/responsive.png">

### User Stories

- Home Page - As a visiting user, I want to be able to start the quiz immediately without having to introduce my name or age. I want to see the correct or incorrect answer after making my selection and I want to see my score recorded.

- End Section - As a visiting user, I want to see my final result after completing the quiz and have the option to take the quiz again.

- About Page - As a visiting user, I want to learn more about the quiz and find a link for further information about Great Women Artists.

### Features

- Nav Bar - the same nav-bar design appears on both pages of the site. The title of the quiz is visible in larger text and directly underneath are links taking the user to the About page or the Play page.

<img src="readme/nav-bar.png">

- Game Start Section - The user is presented with an image immediately on page load and can choose between four artists' names.

<img src="readme/game-section.png">

If the correct answer is selected, the option will turn green and the score tally at the bottom of the page will increase by 1. There is timeout handler to allow the user to process if they chose the correct/incorrect answer. The next image will then be shown.

<img src="readme/correct-answer.png">

If the incorrect answer is selected, the selected option will turn red. The score will not be updated. Again there is a timeout handler. Then the next image will be shown.

<img src="readme/incorrect-answer.png">

- Game-End Section - When the user has seen/answered eight images, they will be presented with their total correct score and the option to take the quiz again.

<img src="readme/end-section.png">

- Footer - The same footer structure is used on both pages. There are links to the typical social media sites and links to the coder's LinkedIn and the site's GitHub Repository page.

<img src="readme/footer.png">

- About Page - this page explains the idea behind the quiz and has a button with a link to start the quiz.

<img src="readme/about-section.png">

### Future Features

- Question options - I would like to add more question images and options to make the quiz bigger and more engaging.
- High Score Record - I would like to add a page which keeps a record of the names of the players with the highest scores.
- Links to learn more - I would like to add wikipedia links for each of the artists mentioned in the quiz so the user can easily learn more about an artwork or artist that they might like, further supporting the purpose of the project to educate people about Great Women Artists.

### Typography and Color

- Typography: The font Monserrat was chosen. It was developed as a result of the old posters and signs in the traditional Montserrat neighborhood of Buenos Aires. It is reminiscent of the urban typography that emerged in the first half of the twentieth century and has a clear, easily readable style. All the text on the site, except the answer options, is capitalized for stylistic purposes.

- Color-scheme - the colors blue and white were chosen to allow for adequate accessibility and readability and so as not to distract the user from the images that will be shown in the quiz. The background of the main section is a linear-gradiant selected from the SheCodes free access linear-gradiant library.

### Wireframes

- As the wireframes indicate, the idea for the project was to keep it as simple as possible. The site loads the quiz immediately. No time limit to answer each question was included so the user has time to think and read all the names in the options. The result area appears when the user reaches the end of the quiz. The About page was added to the project as it was being developed and built.
- The wireframes were made using wireframepro.mockflow.com.

<img src="readme/question-area-wireframes.png">
<img src="readme/end-of-quiz-result-area.png">

### Technology

- GitHub Desktop for commits/deploys
- VS Code
- CSS, HTML, JavaScript
- GoogleFonts
- https://gradients.shecodes.io/ - for background gradient code
- https://wireframepro.mockflow.com/ - for wireframe design
- FontAwesome for social media links
- https://www.iloveimg.com/ - to resize images
- https://ui.dev/amiresponsive - to check site responsiveness

### Testing

- HTML - https://validator.w3.org/ - no errors found
- CSS - https://jigsaw.w3.org/css-validator/ - no errors found
- JavaScript - https://jshint.com/ - no errors found

### Test Cases

#### Play Page

##### Game Section

1.
2.
3.
4.

##### End Section

1.
2.
3.
4.

#### About Page

1.
2.
3.
4.

### Supported Screens and Browsers

- The site is fully responsive. It presents well on small and medium-sized devices with no horizontal overflow, as well as on large screen devices.

- It is supported on Google Chrome, Microsoft Edge, Firefox and Safari.

### Bug Fixes

- After testing the HTML code for the site, I had to fix two minor errors on the <image> element - I had to include the alt and the src attributes. No other errors were found.

- After testing the CSS code for the site, I had to fix one minor error on the <image> element - I had to correct the value for max-height. No other errors were found.

- After testing the JavaScript code for the site, I had to fix one minor error - I had declared a variable for container/gameSecton but had never used it in the code. So, I updated the function displayEndSection () to fix the bug.

### Deployment

#### VS Code:

- I used the Code Institute template available on GitHub with VS Code as the editor for this project.

1. Create the file on the desktop
2. Open it in the VS Code desktop programme
3. Add the HTML files, Javascript files and assets folder with CSS file and images for the quiz.

#### GitHub Desktop application

- I used this application to conveniently commit and push changes to the GitHub repository for this project.

#### GitHub pages for deployment

- The steps I took to deploy the project:

1. naviagate to Settings on the GitHub repo page
2. click on Pages
3. click deploy from branch.

I sometimes had to manually update the repository by:

1. clicking on the 'Last deployed' link on the Pages page
2. clicking on 'Re-run all jobs' on the Actions page

The live link can be found here: https://barty-s.github.io/art-quiz-app/index.html

#### To clone the repo:

1. On GitHub click on the green <> Code button,
2. In the dropdown menu select Local and copy the url for the repository.
3. Create a file on your desktop and right click to open with code, ie your local environment.
4. On the welcome page select the option Clone Git Repo and paste the URL.
5. Save it to the folder you created on your desktop.

### Credits

#### Content

- 'Create a Quiz App using HTML, CSS & JavaScript' by CodeGeek https://www.youtube.com/watch?v=Opje9VBrNfg&t=1791s - this video was used for the structure of the Javascript code.
  While using this tutorial as a learning tool for this project, the code was customised as much as possible to fit the needs of the Art Quiz and to ensure plagiarism was avoided.
- https://stackoverflow.com/questions/5480945/refreshing-page-on-click-of-a-buttons - this site helped solve the problem I had with the code for restarting the quiz with the button click.
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-background - this site breaks down the specificities of flexbox.

#### Media

- Images sourced from Google with the Creative Commons License and used solely for educational purposes.
- Icon images - Font Awesome library https://fontawesome.com/
- Font - Google Font library https://fonts.google.com/

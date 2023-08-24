/**
 * This code was inspired by and customised from the video tutorial 'Create a Quiz App using HTML, CSS & JavaScript',
 * by CodeGeek https://www.youtube.com/watch?v=Opje9VBrNfg&t=1791s
 */

//List of variables to be used throughout the javascript code
import { questions } from "./questions.js";

let gameSection = document.getElementById("container");
let answerOptions = Array.from(document.getElementsByClassName("options-text"));
let currentQuestion = {};
let score = 0;
let listOfQuestions = [];
let questionImage = document.getElementById("question-image");
let scoreText = document.getElementById("score");
let questionCounter = 0;
let totalQuestions = 7;

// Main function to run the game, it calls the function that displays the questions
function startGame() {
  //use spread operator
  listOfQuestions = [...questions];
  displayNewQuestion();
}

/**
 * Function to generate a new question, randomly selected from list of questions.
 * If the question limit has been reached, the final result will be shown.
 */
function displayNewQuestion() {
  //when to display the final result
  if (questionCounter > totalQuestions) {
    displayEndSection();
  }

  questionCounter++;

  //to display a question at random from the question list
  let questionIndex = Math.floor(Math.random() * listOfQuestions.length);
  currentQuestion = listOfQuestions[questionIndex];

  //to set the image/text for the answer options, taking the info from the array (original code)
  questionImage.setAttribute("src", `assets/images/${currentQuestion.img}`);

  //to display the answer options associated with each image
  //use arrow function
  answerOptions.forEach((answerOption) => {
    let number = answerOption.dataset["option"];
    answerOption.innerText = currentQuestion["option" + number];
  });

  //splice the question just shown out of the array so it won't be shown again,
  listOfQuestions.splice(questionIndex, 1);
}

//Funtion called when question limit has been reached - shows final score and play again button (original code)
function displayEndSection() {
  gameSection.innerHTML = `
  <h2>Thank you for playing!</h2>
  <h3>🎉 Your score is ${score} 🎉</h3>
  <br>
  <button id="start-again" onClick="window.location.reload();">Take Quiz Again</button>
  `;
}

//to loop through the answer options
answerOptions.forEach(function (answerOption) {
  answerOption.addEventListener("click", (e) => {
    let selectedOption = e.target;

    //to show the number of the option selected by the user
    let selectedAnswer = selectedOption.dataset["option"];

    //to check if the answer is correct or incorrect and increase score counter accordingly
    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      increaseScore(1);
    }

    selectedOption.classList.add(classToApply);

    // to move on to the next question
    setTimeout(() => {
      selectedOption.classList.remove(classToApply);
      displayNewQuestion();
    }, 1000);
  });
});

//Function to increase the score if user answers correctly
function increaseScore(num) {
  score += num;
  scoreText.innerText = score;
}

function aboutPage() {
  confirm("Are you sure you want to leave the current quiz?");
}

startGame();

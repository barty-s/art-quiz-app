//List of questions imported from external JS file (original code)
import { QUESTIONS } from "./questions.js";

//List of variables to be used throughout the javascript code
let gameSection = document.getElementById("container");
let endSection = document.getElementById("end-section");
let finalScore = document.getElementById("final-score");
let submitAnswer = document.getElementById("answer-submit-btn");
let selectedOption = null;
let answerOptions = Array.from(document.getElementsByClassName("options-text"));
let currentQuestion = {};
let score = 0;
let listOfQuestions = [];
let questionImage = document.getElementById("question-image");
let scoreText = document.getElementById("score");
let questionCounter = 0;
let totalQuestions = 2;

// Main function to run the game, it calls the function that displays the questions using spread operator
function startGame() {
  listOfQuestions = [...QUESTIONS];
  displayNewQuestion();

  //to loop through the answer options
  answerOptions.forEach(function (answerOption) {
    answerOption.addEventListener("click", selectOption);
  });
}

// Function to handle the selection of an answer option
function selectOption() {
  // If an option is already selected, deselect it
  if (selectedOption) {
    selectedOption.classList.remove("selected");
  }
  // Set the selected option to the clicked option
  selectedOption = this;
  selectedOption.classList.add("selected");
  submitAnswer.classList.remove("hidden");
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

  submitAnswer.classList.add("hidden");
}

//Funtion called when question limit has been reached - shows final score and play again button (original code)
function displayEndSection() {
  gameSection.classList.add("hidden");
  endSection.classList.remove("hidden");
  endSection.classList.add("container");
  finalScore.innerHTML = `${score}`;
}

submitAnswer.addEventListener("click", submit);

function submit() {
  if (!selectedOption) {
    return;
  }
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
    selectedOption.classList.remove("selected");
    displayNewQuestion();
  }, 1000);
}

//Function to increase the score if user answers correctly
function increaseScore(num) {
  score += num;
  scoreText.innerText = score;
}

addEventListener("DOMContentLoaded", startGame);

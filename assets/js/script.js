/**
 * QUESTIONS js file contains an array of objects.
 * Each object contains an image, four answer options and the correct answer number.
 * There are 18 question objects to be used in the quiz.
 */
import { QUESTIONS } from "./questions.js";

//List of variables
let gameSection = document.getElementById("container");
let endSection = document.getElementById("end-section");
let finalScore = document.getElementById("final-score");
let submitAnswer = document.getElementById("answer-submit-btn");
let selectedOption;
let answerOptions = Array.from(document.getElementsByClassName("options-text"));
let currentQuestion = {};
let score = 0;
let listOfQuestions = [];
let questionImage = document.getElementById("question-image");
let scoreText = document.getElementById("score");
let questionCounter = 0;
let totalQuestions = 7;

//Functions to run the game

/**Adds eventlistener to selected option*/
function initializeAnswerOption(answerOption) {
  answerOption.addEventListener("click", selectOption);
}

/**Handles the selection of an answer option after being clicked*/
function selectOption() {
  if (selectedOption) {
    selectedOption.classList.remove("selected");
  }

  selectedOption = this;
  selectedOption.classList.add("selected");
  submitAnswer.classList.remove("hidden");
}

/**
 * Generates a new question randomly selected from the list of questions.
 * The image and answer options are then displayed.
 * And the question just shown is spliced out of the array so it won't be shown again
 */
function displayNewQuestion() {
  if (questionCounter > totalQuestions) {
    displayEndSection();
  }

  questionCounter++;

  let questionIndex = Math.floor(Math.random() * listOfQuestions.length);
  currentQuestion = listOfQuestions[questionIndex];

  questionImage.setAttribute("src", `assets/images/${currentQuestion.img}`);

  answerOptions.forEach(answerText);

  listOfQuestions.splice(questionIndex, 1);

  submitAnswer.classList.add("hidden");
}

/**Displays the text for each answer*/
function answerText(answerOption) {
  let number = answerOption.dataset.option;
  answerOption.innerText = currentQuestion["option" + number];
}

/**Shows the final score and play again button*/
function displayEndSection() {
  gameSection.classList.add("hidden");
  endSection.classList.remove("hidden");
  endSection.classList.add("container");
  finalScore.innerHTML = `${score}`;
}

/**
 * Handles the submit button when clicked.
 * Retrieves the number of the option selected by the user from the questions object.
 * Checks if the answer is correct or incorrect, and increases the score tally accordingly.
 * Then moves onto the next question after a short time-interval.
 */
function submit() {
  if (!selectedOption) {
    return;
  }

  let selectedAnswer = selectedOption.dataset.option;

  let classToApply =
    selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

  if (classToApply === "correct") {
    increaseScore(1);
  }

  selectedOption.classList.add(classToApply);

  setTimeout(clearSubmission, 1000);
}

/**Loads new image and question without any classes applied*/
function clearSubmission() {
  answerOptions.forEach(clearClasses);
  displayNewQuestion();
}

/**Removes classes on selected option after answer submission*/
function clearClasses(answerOption) {
  answerOption.classList.remove("correct");
  answerOption.classList.remove("incorrect");
  answerOption.classList.remove("selected");
}

/**Increases correct answer score*/
function increaseScore(num) {
  score += num;
  scoreText.innerText = score;
}

/**Runs the game*/
function startGame() {
  listOfQuestions = [...QUESTIONS];
  displayNewQuestion();
  answerOptions.forEach(initializeAnswerOption);
  submitAnswer.addEventListener("click", submit);
}

addEventListener("DOMContentLoaded", startGame);

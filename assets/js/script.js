//List of questions
import { QUESTIONS } from "./questions.js";

//List of variables to be used throughout the javascript code
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

//add eventlistener to selected option
function initializeAnswerOption(answerOption) {
  answerOption.addEventListener("click", selectOption);
}

//to handle the selection of an answer option after being clicked
function selectOption() {
  if (selectedOption) {
    selectedOption.classList.remove("selected");
  }

  selectedOption = this;
  selectedOption.classList.add("selected");
  submitAnswer.classList.remove("hidden");
}

//to generate a new question randomly selected from list of questions
function displayNewQuestion() {
  if (questionCounter > totalQuestions) {
    displayEndSection();
  }

  questionCounter++;

  let questionIndex = Math.floor(Math.random() * listOfQuestions.length);
  currentQuestion = listOfQuestions[questionIndex];

  //to display the image and answer options
  questionImage.setAttribute("src", `assets/images/${currentQuestion.img}`);

  answerOptions.forEach(answerText);

  //to splice the question just shown out of the array so it won't be shown again
  listOfQuestions.splice(questionIndex, 1);

  submitAnswer.classList.add("hidden");
}

//to display the text for each answer
function answerText(answerOption) {
  let number = answerOption.dataset.option;
  answerOption.innerText = currentQuestion["option" + number];
}

//to show final score and play again button
function displayEndSection() {
  gameSection.classList.add("hidden");
  endSection.classList.remove("hidden");
  endSection.classList.add("container");
  finalScore.innerHTML = `${score}`;
}

submitAnswer.addEventListener("click", submit);

//to handle the submit button when clicked
function submit() {
  if (!selectedOption) {
    return;
  }
  //to show the number of the option selected by the user
  let selectedAnswer = selectedOption.dataset.option;

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

//to increase correct answer score
function increaseScore(num) {
  score += num;
  scoreText.innerText = score;
}

//to run the game
function startGame() {
  answerOptions.forEach(initializeAnswerOption);
  listOfQuestions = [...QUESTIONS];
  displayNewQuestion();
}

addEventListener("DOMContentLoaded", startGame);

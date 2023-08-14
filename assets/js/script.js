/**
 * This code was inspired by and customised from the video tutorial 'Create a Quiz App using HTML, CSS & JavaScript',
 * by CodeGeek https://www.youtube.com/watch?v=Opje9VBrNfg&t=1791s
 */

//List of variables to be used throughout the javascript code
let gameSection = document.getElementById("container");
let answerOptions = Array.from(document.getElementsByClassName("options-text"));
let currentQuestion = {};
let score = 0;
let listOfQuestions = [];
let questions = [
  {
    img: "rosalba-carriera.jpg",
    option1: "Rosalba Carriera",
    option2: "Johann Zaffany",
    option3: "Angelica Kauffman",
    option4: "Mary Moser",
    answer: 1,
  },
  {
    img: "lady-butler.jpg",
    option1: "Marie Denise Villers",
    option2: "Anna Klumpke",
    option3: "Rosa Bonheur",
    option4: "Lady Butler",
    answer: 4,
  },
  {
    img: "frida-kahlo.jpg",
    option1: "Leonora Carrington",
    option2: "Frida Kahlo",
    option3: "Kara Leonor Fini",
    option4: " Eileen Agar",
    answer: 2,
  },
  {
    img: "georgia-o-keeffe.jpg",
    option1: "Anna Valdez",
    option2: "Georgia O Keeffe",
    option3: "Faith Wilding",
    option4: "Camilla Engstrom",
    answer: 2,
  },
  {
    img: "ellen-harding-baker.jpg",
    option1: "Emma Civey Stahl",
    option2: "Harriet Powers",
    option3: "Ellen Harding Baker",
    option4: "Edmonia Lewis",
    answer: 3,
  },
  {
    img: "anna_atkins.jpg",
    option1: "Anna Atkins",
    option2: "Emily Mary Osborn",
    option3: "Katsushika Oi",
    option4: "Joanna Boyce Wells",
    answer: 1,
  },
  {
    img: "hilma-af-klint.jpg",
    option1: "Tracy Thomason",
    option2: "Leah Guadagnoli",
    option3: "Georgiana Houghton",
    option4: "Hilma Af Klint",
    answer: 4,
  },
  {
    img: "berthe-morisot.jpg",
    option1: "Camille Claudel",
    option2: "Marie Braquemond",
    option3: "Berthe Morisot",
    option4: "Mary Cassatt",
    answer: 3,
  },
  {
    img: "georgette-chen.jpg",
    option1: "Florine Stettheimer",
    option2: "Georgette Chen",
    option3: "Pan Yuliang",
    option4: "Gwen John",
    answer: 2,
  },
  {
    img: "gabriele-munter.jpg",
    option1: "Kathe Kollwitz",
    option2: "Suzanne Valadon",
    option3: "Jacqueline Marval",
    option4: "Gabriele Munter",
    answer: 4,
  },
  {
    img: "kusama.jpg",
    option1: "Yayoi Kusama",
    option2: "Alma Thomas",
    option3: "Etel Adnan",
    option4: "Agnes Martin",
    answer: 1,
  },
  {
    img: "louise-bourgeois.jpg",
    option1: "Niki de Saint Phalle",
    option2: "Louise Bourgeois",
    option3: "Yoko Ono",
    option4: "Eva Hesse",
    answer: 2,
  },
  {
    img: "sonia-delaunay.jpg",
    option1: "Natalia Goncharova",
    option2: "Valentina Kulagina",
    option3: "Sonia Delaunay",
    option4: "Liubov Popova",
    answer: 3,
  },
  {
    img: "hannah-hoch.jpg",
    option1: "Lotte Laserstein",
    option2: "Jeanne Mammen",
    option3: "Sophie Taeuber-Arp",
    option4: "Hannah Hoch",
    answer: 4,
  },
  {
    img: "dora-maar.jpg",
    option1: "Dora Maar",
    option2: "Lee Miller",
    option3: "Meret Oppenheim",
    option4: "Eileen Agar",
    answer: 1,
  },
  {
    img: "dorothea-lange.jpg",
    option1: "Hannah Ryggen",
    option2: "Dorothea Lange",
    option3: "Charlotte Salomon",
    option4: "Kati Horna",
    answer: 2,
  },
  {
    img: "lee-krasner.jpg",
    option1: "Elaine de Kooning",
    option2: "Joan Mitchell",
    option3: "Lee Krasner",
    option4: "Helen Frankenthaler",
    answer: 3,
  },
  {
    img: "barbara-kruger.jpg",
    option1: "Barbara Kruger",
    option2: "Jenny Holzer",
    option3: "Cindy Sherman",
    option4: "Francesa Woodman",
    answer: 1,
  },
];
let questionImage = document.getElementById("question-image");
let scoreText = document.getElementById("score");
let questionCounter = 0;
let totalQuestions = 7;

// Main function to run the game, it calls the function that displays the questions
function startGame() {
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

  let questionIndex = Math.floor(Math.random() * listOfQuestions.length);
  currentQuestion = listOfQuestions[questionIndex];

  //to set the image/text for the answer options, taking the info from the array (original code)
  questionImage.setAttribute("src", `assets/images/${currentQuestion.img}`);

  //to display the answer options associated with each image
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

startGame();

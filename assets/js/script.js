/**
 * List of variables to be used through out the javasript code
 */
let gameSection = document.getElementById("container");
let answerOptions = Array.from(document.getElementsByClassName("options-text"));
let currentQuestion = {};
let acceptingAnswers = false;
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
    img: "klimt.jpg",
    option1: "Manet",
    option2: "Monet",
    option3: "Modigliani",
    option4: "Klimt",
    answer: 4,
  },
  {
    img: "kusama.jpg",
    option1: "Yayoi Kusama",
    option2: "Tracy Emin",
    option3: "Georgia O Keeffe",
    option4: "Louise Bourgeois",
    answer: 1,
  },
  {
    img: "louise-bourgeois.jpg",
    option1: "Frida Kahlo",
    option2: "Louise Bourgeois",
    option3: "Jackson Pollock",
    option4: "Mark Rothko",
    answer: 2,
  },
  {
    img: "lucio-fontana.jpg",
    option1: "Brancusi",
    option2: "Gerhard Richter",
    option3: "Lucio Fontana",
    option4: "Yves Klein",
    answer: 3,
  },
  {
    img: "malevich.jpg",
    option1: "Wassily Kandinsky",
    option2: "Piet Mondrian",
    option3: "Mark Rothko",
    option4: "Kazimir Malevich",
    answer: 4,
  },
  {
    img: "manet.jpg",
    option1: "Manet",
    option2: "Monet",
    option3: "Degas",
    option4: "Caillebotte",
    answer: 1,
  },
  {
    img: "michelangelo.jpg",
    option1: "Leonardo da Vinci",
    option2: "Michelangelo",
    option3: "Raphael",
    option4: "Donatello",
    answer: 2,
  },
  {
    img: "modigliani.jpg",
    option1: "Picasso",
    option2: "Renoir",
    option3: "Modigliani",
    option4: "Degas",
    answer: 3,
  },
  {
    img: "munch.jpg",
    option1: "Picasso",
    option2: "Monet",
    option3: "Munch",
    option4: "Malevich",
    answer: 3,
  },
  {
    img: "van-gogh.jpg",
    option1: "Van Gogh",
    option2: "Renoir",
    option3: "Monet",
    option4: "Cezanne",
    answer: 1,
  },
  {
    img: "whistler.jpg",
    option1: "Turner",
    option2: "Vermeer",
    option3: "Rembrandt",
    option4: "Whistler",
    answer: 4,
  },
];
let questionImage = document.getElementById("question-image");
let scoreText = document.getElementById("score");
let questionCounter = 0;
let totalQuestions = 2;

/**
 * Main function to run the game, it calls the function that displays the questions
 */
function startGame() {
  score = 0;
  listOfQuestions = [...questions];
  displayNewQuestion();
}

/**
 * Function to generate a new question, randomly selected from list of questions.
 * If the question limit has been reached, the final result will be shown.
 */
function displayNewQuestion() {
  //to display the final result
  if (listOfQuestions.length === 0 || questionCounter > totalQuestions) {
    displayEndSection();
  }

  questionCounter++;

  let questionIndex = Math.floor(Math.random() * listOfQuestions.length);
  currentQuestion = listOfQuestions[questionIndex];

  //to set the image/text for the answer options, taking the info from the array
  questionImage.setAttribute("src", `assets/images/${currentQuestion.img}`);

  //to display the answer options associated with each image
  answerOptions.forEach((answerOption) => {
    let number = answerOption.dataset["option"];
    answerOption.innerText = currentQuestion["option" + number];
  });

  //so the question just shown won't be shown again, splice it out of the array
  listOfQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
}

/**
 * Funtion called when question limit has been reached - shows final score
 */
function displayEndSection() {
  container.innerHTML = `
  <h2>Thank you for playing!</h2>
  <h3>🎉 Your score is ${score} 🎉</h3>
  <button id="start-again" onClick="window.location.reload();">Take Quiz Again</button>
  `;
}

answerOptions.forEach((answerOption) => {
  answerOption.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
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

/**
 * Function to increase the score if user answers correctly
 */
function increaseScore(num) {
  score += num;
  scoreText.innerText = score;
}

startGame();

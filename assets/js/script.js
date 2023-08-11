let gameSection = document.getElementById("container");
let answerOptions = Array.from(document.getElementsByClassName("options-text"));
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let listOfQuestions = [];
let questions = [
  {
    img: "botticelli.jpg",
    option1: "Botticelli",
    option2: "Bernini",
    option3: "Raphael",
    option4: "Donatello",
    answer: 1,
  },
  {
    img: "caillebotte.jpg",
    option1: "Manet",
    option2: "Monet",
    option3: "Degas",
    option4: "Caillebotte",
    answer: 4,
  },
  {
    img: "frida-kahlo.jpg",
    option1: "Tracey Emin",
    option2: "Frida Kahlo",
    option3: "Kara Walker",
    option4: "Louise Bourgeois",
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
    img: "gormley.jpg",
    option1: "Alexander Calder",
    option2: "Mark Rothko",
    option3: "Antony Gormley",
    option4: "Henry Moore",
    answer: 3,
  },
  {
    img: "hans-holbein-younger.jpg",
    option1: "Hans Holbein, the Younger",
    option2: "Johannes Vermeer",
    option3: "Rembrandt",
    option4: "Hans Holbein, the Elder",
    answer: 1,
  },
  {
    img: "harring.jpg",
    option1: "Andy Warhol",
    option2: "Roy Lichtenstein",
    option3: "Robert Indiana",
    option4: "Keith Harring",
    answer: 4,
  },
  {
    img: "hokusai.jpg",
    option1: "Hiroshige",
    option2: "Kuniyoshi",
    option3: "Hokusai",
    option4: "Utamaro",
    answer: 3,
  },
  {
    img: "jeff-koons.jpg",
    option1: "Gerhard Richter",
    option2: "Jeff Koons",
    option3: "Claes Oldenberg",
    option4: "Andy Warhol",
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

function startGame() {
  score = 0;
  listOfQuestions = [...questions];
  displayNewQuestion();
}

function displayNewQuestion() {
  if (listOfQuestions.length === 0 || questionCounter > totalQuestions) {
    displayEndSection();
  }

  questionCounter++;

  let questionIndex = Math.floor(Math.random() * listOfQuestions.length);
  currentQuestion = listOfQuestions[questionIndex];

  //to set the image/text for the answer options, taking the info from the array
  questionImage.setAttribute("src", `assets/images/${currentQuestion.img}`);

  answerOptions.forEach((answerOption) => {
    let number = answerOption.dataset["option"];
    answerOption.innerText = currentQuestion["option" + number];
  });

  //so the question just shown won't be shown again, splice it out of the array
  listOfQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
}

function displayEndSection() {
  container.innerHTML = `
  <h2>Thank you for playing!</h2>
  <h3>Your score is ${score}!</h3>
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

    //to show if the answer is correct or incorrect and increase score counter
    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      increaseScore(1);
    }

    selectedOption.classList.add(classToApply);

    setTimeout(() => {
      selectedOption.classList.remove(classToApply);
      displayNewQuestion();
    }, 1000);
  });
});

function increaseScore(num) {
  score += num;
  scoreText.innerText = score;
}

startGame();

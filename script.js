const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: 1
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    answer: 0
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Brain", "Heart", "Skin"],
    answer: 3
  },
];

const questionElement = document.getElementById("question");
const optionsList = document.getElementById("options");
const nextButton = document.getElementById("nextButton");
const resultsElement = document.getElementById("results");

let currentQuestion = 0;
let score = 0;

loadQuestion();

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.textContent = currentQuizData.question;
  optionsList.innerHTML = "";
  
  for (let i = 0; i < currentQuizData.options.length; i++) {
    const option = document.createElement("li");
    option.textContent = currentQuizData.options[i];
    option.addEventListener("click", selectOption);
    optionsList.appendChild(option);
  }
}

function selectOption(e) {
  const selectedOption = e.target;
  const selectedAnswer = selectedOption.textContent;
  const currentQuizData = quizData[currentQuestion];
  
  if (currentQuizData.options[currentQuizData.answer] === selectedAnswer) {
    score++;
  }
  
  selectedOption.classList.add("selected");
  
  disableOptions();
  
  nextButton.disabled = false;
}

function disableOptions() {
  const options = optionsList.children;
  for (let i = 0; i < options.length; i++) {
    options[i].classList.add("disabled");
  }
}

function enableOptions() {
  const options = optionsList.children;
  for (let i = 0; i < options.length; i++) {
    options[i].classList.remove("disabled", "selected");
  }
}

function showNextQuestion() {
  currentQuestion++;
  
  if (currentQuestion === quizData.length) {
    showResults();
  } else {
    enableOptions();
    loadQuestion();
    nextButton.disabled = true;
  }
}

function showResults() {
  quiz.style.display = "none";
  nextButton.style.display = "none";
  
  resultsElement.textContent = `You scored ${score} out of ${quizData.length}!`;
  resultsElement.style.display = "block";
}

nextButton.addEventListener("click", showNextQuestion);

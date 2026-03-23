// Log a message to the console to ensure the script is linked correctly
console.log('JavaScript file is linked correctly.');

let inventory = []

let keyFound = false

const sidebar = document.getElementById("inventorySidebar");

function openInventory(){
  const inventory = document.getElementById("inventory");

  if (inventory.style.display === "none") {
      inventory.style.display = "block";
  } 
  
  else {
      inventory.style.display = "none";
  }
}

function addToInventory(text){
  const inventory = document.getElementById("inventoryList");

  const item = document.createElement("li");

  const popupCode = document.getElementById("popup-code");

  item.textContent = text;

  inventory.appendChild(item);

  popupCode.classList.add("hidden");
}

function checkCode(input) {
  const codeInput = document.getElementById("codeInput").value;

  const nextroomPopup = document.getElementById("popup-nextroom");

  if (input === 1 && codeInput === "0322") {
      document.getElementById("popup-lock").classList.add("hidden");

      nextroomPopup.classList.remove("hidden");
  }

  else if (input === 2 && codeInput === "2024") {
    document.getElementById("popup-lock").classList.add("hidden");

    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 }
    });

    document.getElementById("popup-congrats").classList.remove("hidden");
  }

  else {
      alert("Incorrect code. Please try again.");
  }
}

function nextRoom() {
  window.location.href = "room2.html";
}

function previousRoom() {
  window.location.href = "index.html";
}

function closePopup() {
  document.getElementById('popup-lock').classList.add('hidden');

  document.getElementById('codeInput').value = "";
}

function resetGame() {
  inventory = [];

  clickCount = 0;

  currentQuestion = 0;

  document.querySelectorAll(".popup").forEach(p =>
    p.classList.add("hidden")
  );

  window.location.href = "index.html";

  setTimeout(() => {
        document.getElementById("intro").classList.add("fade");
    }, 1500);
}

window.onload = function() {
    setTimeout(() => {
        document.getElementById("intro").classList.add("fade");
    }, 1500);
};

const windowlock = document.getElementById("windowlock");

const popupLock = document.getElementById("popup-lock");

const jerrycan = document.getElementById("jerrycan");

const questions = [
  {
    question: "How much water can a jerry can carry?",
    answers: ["20 liters", "5 liters", "50 liters"],
    correct: "20 liters"
  },
  {
    question: "How many people lack access to clean water?",
    answers: ["500 million", "2 billion", "100 million"],
    correct: "2 billion"
  },
  {
    question: "How far do some people walk daily to collect water?",
    answers: ["1 mile", "4 miles", "10 miles"],
    correct: "4 miles"
  }
];

let currentQues = 0;

function showQuestion() {
  const questionElement = document.getElementById("question");

  const answerBtns = document.querySelectorAll(".answerBtn");

  questionElement.textContent = questions[currentQues].question;
  
  answerBtns.forEach((btn) => {
      btn.innerHTML = "";
  });

  answerBtns.forEach((btn, i) => {
    btn.textContent = questions[currentQues].answers[i];
  });
}

function checkAnswer(btn) {
  const answer = btn.textContent;

  if (answer === questions[currentQues].correct) {
    currentQues++;

    if (currentQues < questions.length) {
      document.getElementById("triviaResult").textContent = "";

      showQuestion();
    }

    else {
      document.getElementById("triviaResult").textContent = "";

      document.getElementById("popup-trivia").classList.add("hidden");
      
      document.getElementById("popup-clue").classList.remove("hidden");
    }
  }

  else {
    document.getElementById("triviaResult").textContent = "Incorrect! Please try again.";
  }
}

windowlock.onclick = () => {
  popupLock.classList.remove("hidden");
};

jerrycan.onclick = () => {
  document.getElementById("popup-trivia").classList.remove("hidden");

  showQuestion();
};

if (localStorage.getItem("difficulty") === "medium") {
  document.getElementsByClassName("firstClue")[0].textContent = "In the chamber where water gathers still,";

  document.getElementsByClassName("firstClue")[1].textContent = "Sun-colored metal hides the will.";

  document.getElementsByClassName("secondClue")[0].textContent = "Answers leave traces beyond their name.";

  document.getElementsByClassName("secondClue")[1].textContent = "Each one whispers a piece of the same.";

  document.getElementsByClassName("secondClue")[2].textContent = "Follow the trail as it first appeared,";

  document.getElementsByClassName("secondClue")[3].textContent = "And the silent lock will yield.";
}

else if (localStorage.getItem("difficulty") === "hard") {
  document.getElementsByClassName("firstClue")[0].textContent = "Where mirrors fog and quiet pools remain,";

  document.getElementsByClassName("firstClue")[1].textContent = "The color of sunlight guards the gain.";

  document.getElementsByClassName("secondClue")[0].textContent = "Truth is not the only prize.";

  document.getElementsByClassName("secondClue")[1].textContent = "Each discovery leaves a mark.";

  document.getElementsByClassName("secondClue")[2].textContent = "Trace them back the way they came,";

  document.getElementsByClassName("secondClue")[3].textContent = "And the dark will show the spark.";
}

addToInventory("Code: World Water Day");
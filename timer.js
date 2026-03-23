console.log('JavaScript file is linked correctly.');

function updateTimer(totalTime) {
  const startTime = Number(localStorage.getItem("startTime"));

  const elapsedTime = Math.floor((Date.now() - startTime) / 1000);

  const remainingTime = totalTime - elapsedTime;

  const minutes = Math.floor(remainingTime / 60);

  const seconds = remainingTime % 60;

  document.getElementById("timer").textContent = `Time Left: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  if (remainingTime <= 0) {
    localStorage.removeItem("startTime");

    clearInterval(timerInterval);

    alert("Time's up! Game over.");
  }
}

let totalTime;

let timerInterval;

const difficulty = localStorage.getItem("difficulty");

if (difficulty === "hard") {
  totalTime = 302;
}
else if (difficulty === "medium") {
  totalTime = 602;
}
else {
  document.getElementById("timer").style.display = "none";
}

if (difficulty === "hard" || difficulty === "medium") {

  if (!localStorage.getItem("startTime")) {
    localStorage.setItem("startTime", Date.now());
  }

  let timerInterval = setInterval(() => {
    updateTimer(totalTime);
  }, 1000);
}

else {
  document.getElementById("timer").style.display = "none";
}
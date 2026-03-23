// Log a message to the console to ensure the script is linked correctly
console.log('JavaScript file is linked correctly.');

let inventory = []

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

  else if (input === 2 && codeInput === "0000") {
    document.getElementById("popup-lock").classList.add("hidden");

    alert("You have escaped!");
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

window.onload = function() {
    setTimeout(() => {
        document.getElementById("intro").classList.add("fade");
    }, 1500);
};

let paintingClickCount = 0;

let pillowClicked = false;

const pillow = document.getElementById("pillow");

const painting = document.getElementById("painting");

const lock = document.getElementById("lock");

const popupClue = document.getElementById("popup-clue");

const popupCode = document.getElementById("popup-code");

const popupLock = document.getElementById("popup-lock");

pillow.onclick = () => {
  pillowClicked = true;

  popupClue.classList.remove("hidden");
};

painting.onclick = () => {
    if (pillowClicked === true) {
        paintingClickCount++;
    }

    if (paintingClickCount >= 2) {
        popupCode.classList.remove("hidden");
    }
};

lock.onclick = () => {
  popupLock.classList.remove("hidden");
};

if (localStorage.getItem("difficulty") === "medium") {
  document.getElementsByClassName("firstClue")[0].textContent = "Clouds of down beneath your head,";

  document.getElementsByClassName("firstClue")[1].textContent = "Guard the dreams that come by night.";

  document.getElementsByClassName("secondClue")[0].textContent = "Where drifting thoughts are gently led.";

  document.getElementsByClassName("secondClue")[1].textContent = "Disturb it once to rouse its state,";

  document.getElementsByClassName("secondClue")[2].textContent = "Twice to uncover what awaits.";
}

else if (localStorage.getItem("difficulty") === "hard") {
  document.getElementsByClassName("firstClue")[0].textContent = "A resting crown upon a sea of white,";

  document.getElementsByClassName("firstClue")[1].textContent = "Where silent wings surrender to the night.";

  document.getElementsByClassName("secondClue")[0].textContent = "A quiet canvas keeps its secret.";

  document.getElementsByClassName("secondClue")[1].textContent = "The first knock wakes it,";

  document.getElementsByClassName("secondClue")[2].textContent = "The second lets you in.";
}
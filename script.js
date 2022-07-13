const startgame = document.getElementById("start-game");
const gamebox = document.getElementById("game-box");
const drawn_number = document.querySelectorAll(".show-number > p");
const input_number = document.getElementById("input-number");
const buttons = document.querySelectorAll(".gbox-bottom button");
const message = document.querySelector(".gbox-middle h2");

var messages = {
  success: "Congratulatins!! \n You Guessed the Number!",
  wrong: "Oh, no! Wrong number... Try again!",
};

/* Config Area */
/* Game Start */
function start_game() {
  startgame.style.display = "none";
  gamebox.style.visibility = "visible";
}

/* Game Restart */
function restart() {
  window.location.reload();
}

/* Drawn Number */
const num = getRandomInt(1, 7);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/* Get numbers area */
function handleListen() {
  input_number.addEventListener("keypress", (el) => {
    const keyPressed = el.keyCode ? el.keyCode : el.wich;

    if (keyPressed < 49 || keyPressed > 54) {
      el.preventDefault();
    } else if (input_number.value.length > 0) {
      el.preventDefault();
    }
  });
}
handleListen();

function getNumber(n) {
  write_number(n, 0);
  return n;
}

/* Write area */
function write_number(n, i) {
  drawn_number[i].innerText = n;
}

function write_message(n) {
  if (n == 1) {
    message.style.color = "green";
    message.innerText = messages.success;
  } else {
    message.style.color = "var(--main-shadow)";
    message.innerText = messages.wrong;
  }
}

/* Actions area */
function action() {
  if (input_number.value == "") {
    alert("Digite um número");
  } else {
    input_number.disabled = "true";
    write_number(num, 1);
    buttons[0].style.display = "none";
    buttons[1].style.display = "block";

    if (input_number.value == num) {
      write_message(1);
    } else {
      write_message(0);
    }
  }
}

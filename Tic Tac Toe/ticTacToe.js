let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;
let reset = document.getElementById("reset");

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach(e => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      document.getElementById("winMessage").innerText =
        boxtext[e[0]].innerText + " Won!";
      document.getElementById("winMessage").style.display = "block";
      isGameOver = true;
      gameOver.play();
      document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px";
      document.body.classList.add("disable-interaction");
      setTimeout(() => {
        document.body.classList.remove("disable-interaction");
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
        reset.dispatchEvent(new Event('click')); // Use dispatchEvent instead of click
      }, 5000);
    }
  });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerHTML === "" && !isGameOver) {
      boxtext.innerHTML = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isGameOver) {
        document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
      }
    }
  });
});

reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach(element => {
    element.innerHTML = "";
  });
  isGameOver = false;
  turn = "X";
  document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
  document.getElementById("winMessage").style.display = "none";
});

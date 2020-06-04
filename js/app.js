console.log("this is ticitactoe script");

// selectors
const gameplayer = document.querySelector(".game-player");
const gamereset = document.querySelector(".game-reset");
const gamegrid = document.querySelector(".game-grid");
const gamecell = document.querySelectorAll(".game-cell");
const dialoverlay = document.querySelector(".dialogoverlay");
const dialbox = document.querySelector(".dialogbox");
const dialboxbody = document.querySelector(".dialogboxbody");
const dialboxfoot = document.querySelector(".dialogboxfoot");

let player = true;
let gameon = true;
let winner;
// function
const winhandle = (letter) => {
  winner = letter;
  gameon = false;
  if (winner === "x") {
    gameplayer.textContent = "X HAS WON";
    Alert.render("Congrats! X Has Won");
  } else {
    gameplayer.textContent = "O HAS WON";
    Alert.render("Congrats! O Has Won");
  }
};

cellstatus = () => {
  const topleft = gamecell[0].classList[2];
  const topmid = gamecell[1].classList[2];
  const topright = gamecell[2].classList[2];
  const midleft = gamecell[3].classList[2];
  const midmid = gamecell[4].classList[2];
  const midright = gamecell[5].classList[2];
  const bottomleft = gamecell[6].classList[2];
  const bottommid = gamecell[7].classList[2];
  const bottomright = gamecell[8].classList[2];

  if (topleft && topleft === topmid && topleft === topright) {
    gamecell[0].classList.add("won");
    gamecell[1].classList.add("won");
    gamecell[2].classList.add("won");
    winhandle(topleft);
  } else if (topleft && topleft === bottomleft && topleft === midleft) {
    gamecell[0].classList.add("won");
    gamecell[3].classList.add("won");
    gamecell[6].classList.add("won");
    winhandle(topleft);
  } else if (midleft && midleft === midmid && midleft === midright) {
    gamecell[3].classList.add("won");
    gamecell[4].classList.add("won");
    gamecell[5].classList.add("won");
    winhandle(midleft);
  } else if (
    bottomleft &&
    bottomleft === bottommid &&
    bottomleft === bottomright
  ) {
    gamecell[6].classList.add("won");
    gamecell[7].classList.add("won");
    gamecell[8].classList.add("won");
    winhandle(bottomleft);
  } else if (topmid && topmid === midmid && topmid === bottommid) {
    gamecell[1].classList.add("won");
    gamecell[4].classList.add("won");
    gamecell[7].classList.add("won");
    winhandle(topmid);
  } else if (topright && topright === midright && topright === bottomright) {
    gamecell[2].classList.add("won");
    gamecell[5].classList.add("won");
    gamecell[8].classList.add("won");
    winhandle(topright);
  } else if (midmid && midmid === topleft && midmid === bottomright) {
    gamecell[0].classList.add("won");
    gamecell[4].classList.add("won");
    gamecell[8].classList.add("won");
    winhandle(midmid);
  } else if (bottomleft && bottomleft === midmid && bottomleft === topright) {
    gamecell[6].classList.add("won");
    gamecell[2].classList.add("won");
    gamecell[4].classList.add("won");
    winhandle(bottomleft);
  } else if (
    topleft &&
    topmid &&
    topright &&
    midleft &&
    midmid &&
    midright &&
    bottomleft &&
    bottommid &&
    bottomright
  ) {
    gameon = false;
    gameplayer.textContent = "GAME IS TIED";
    Alert.render("THE Game is Tied :");
  }
};

gamereset.addEventListener(
  "click",
  (reset = () => {
    player = true;
    gameon = true;
    for (const gamecells of gamecell) {
      gamecells.classList.remove("x");
      gamecells.classList.remove("o");
      gamecells.classList.remove("won");
      gameplayer.textContent = "X's TURN";
    }
  })
);

for (const gamecells of gamecell) {
  gamecells.addEventListener("click", (e) => {
    if (
      !gameon ||
      e.target.classList[2] === "x" ||
      e.target.classList[2] === "o"
    ) {
      return;
    }
    if (player) {
      e.target.classList.add("x");
      player = !player;
      gameplayer.textContent = "O's TURN";
      cellstatus();
    } else {
      e.target.classList.add("o");
      player = !player;
      gameplayer.textContent = "X's TURN";
      cellstatus();
    }
  });
}

function CustomAlert() {
  this.render = function (message) {
    dialoverlay.style.display = "block";
    dialbox.style.display = "block";
    dialboxbody.innerText = message;
    dialboxfoot.innerHTML = `<button onclick='Alert.restart()'>Play Again</button>`;
  };
  this.restart = function () {
    dialoverlay.style.display = "none";
    dialbox.style.display = "none";
    reset();
  };
}
const Alert = new CustomAlert();

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function changeImages() {
  let player1Image = document.querySelector(".img1");
  let player2Image = document.querySelector(".img2");

  const imageSource = "images/";
  let winner = "";

  let part1 = "dice";
  let part2 = ".png";

  let player1 = String(rollDice());
  let player2 = String(rollDice());

  let player1src = imageSource + "dice" + player1 + ".png";
  let player2src = imageSource + "dice" + player2 + ".png";

  player1Image.setAttribute("src", player1src);
  player2Image.setAttribute("src", player2src);

  console.log(player1src);
  console.log(player2src);

  let player1Score = Number(player1);
  let player2Score = Number(player2);
  if (player1Score > player2Score) {
    winner = "Player 1 wins!";
  } else if (player1Score == player2Score) {
    winner = "Draw!";
  } else {
    winner = "Player 2 wins!";
  }

  console.log(winner);

  heading = document.getElementsByTagName("h1")[0];
  heading.textContent = winner;
}

changeImages();

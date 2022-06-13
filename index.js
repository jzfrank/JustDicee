function throwDice() {
  return Math.floor(Math.random() * 6) + 1;
}

document.getElementById("toss-dice-btn").addEventListener("click", function () {
  document.getElementById("toss-dice-btn").disabled = true;
  const num = throwDice();
  document.getElementById("dice-image").src = `images/spinning-dice.gif`;
  setTimeout(function () {
    document.getElementById("dice-image").src = `images/dice${num}.png`;
    document.getElementById("toss-dice-btn").disabled = false;
  }, 500);
});

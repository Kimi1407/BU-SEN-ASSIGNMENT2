var rights = 0;
var wrongs = 0;
var q = 0;

function animename(guess) {
  console.log(guess);

  if (guess === "right") {
    rights = rights + 1;
  } else {
    wrongs = wrongs + 1;
  }

  console.log("rights = " + rights + " wrongs = " + wrongs);
  document.getElementById("result_msg").textContent =
    "You answered " + rights + " out of 5 questions correctly";

  q = q + 1;
  document.getElementById("q" + q).style.display = "none";

  if (q < 5) {
    document.getElementById("q" + (q + 1)).style.display = "block";
  } else {
    document.getElementById("results").style.display = "block";
  }
}

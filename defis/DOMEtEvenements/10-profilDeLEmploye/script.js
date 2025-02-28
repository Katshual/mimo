function showInfo() {
  document.querySelector("div").innerHTML = "Janie Culliver, Sales Rep";
}

function showPayHistory() {
  document.querySelector("div").innerHTML = "$2334.20<br>$2333.22";
}

function showTimeOff() {
  document.querySelector("div").innerHTML = "Taken this year: 8 days";
}

document.querySelectorAll("button")[0].onclick = showInfo;
document.querySelectorAll("button")[1].onclick = showPayHistory;
document.querySelectorAll("button")[2].onclick = showTimeOff;

const input = document.querySelector("input");
const duck = document.querySelector("img");
const progress = 10;

function move() {
  const input = document.querySelector("input");
  duck.style.left = input.value + "px";
}

function win() {
  const p = document.querySelector("p");
  const input = document.querySelector("input");
  if (Number(input.value) >= 100) {
    p.innerHTML = "You Win!";
  } else {
    p.innerHTML = "";
  }
}
input.oninput = move;
input.onchange = win;

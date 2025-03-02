const input = document.querySelector("input");
const button = document.querySelector("button");

function typing() {
  document.querySelector("p").innerHTML = "Typing...";
}

function send() {
  document.querySelector("textarea").innerHTML =
    document.querySelector("textarea").innerHTML +
    document.querySelector("input").value +
    "&#13;&#10;";
  document.querySelector("p").innerHTML = "";
  document.querySelector("input").value = "";
}

input.oninput = typing;
button.onclick = send;

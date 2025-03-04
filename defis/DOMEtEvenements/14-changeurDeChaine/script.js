let index = 0;
let currentSrc = "";
const images = [
  "https://mimo.app/i/shushi.png",
  "https://mimo.app/i/sparkles.png",
  "https://mimo.app/i/whiskers.png",
];

function up() {
  index = index === 2 ? index : index + 1;
  currentSrc = images[index];
  changeChannel();
}

function down() {
  index = index === 0 ? index : index - 1;
  currentSrc = images[index];
  changeChannel();
}

function changeChannel() {
  const image = document.getElementsByTagName("img")[0];
  image.src = currentSrc;
}
// Ajout des écouteurs d'événements aux boutons
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.getElementsByTagName("button");

  // Premier bouton pour monter la chaîne
  buttons[0].addEventListener("click", up);

  // Deuxième bouton pour descendre la chaîne
  buttons[1].addEventListener("click", down);
});

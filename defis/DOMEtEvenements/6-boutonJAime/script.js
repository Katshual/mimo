const button = document.querySelector(".heart"); // Sélectionne le bouton avec la classe "heart"

button.ondblclick = function like() {
  document.querySelector("p").innerHTML = "Liked"; // Affiche "Liked" dans le paragraphe
};

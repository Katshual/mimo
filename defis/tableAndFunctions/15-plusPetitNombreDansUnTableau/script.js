function smallest(array) {
  //j'initialise avec le premier élément du tableau
  let element = array[0];

  //je parcours le tableau pour trouver le plus petit élément
  for (let i = 1; i < array.length; i++) {
    //console.log(element);
    if (array[i] < element) {
      element = array[i];
    }
  }
  //je retourne le plus petit élément du tableau après l'avoir parcouru
  return element;
}

console.log(smallest([5, 7, 8, 9]));
console.log(smallest([10, 44, 2, 11]));

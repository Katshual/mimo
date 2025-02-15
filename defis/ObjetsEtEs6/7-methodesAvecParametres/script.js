const parcel = {
  length: 100,
  width: 80,
  depth: 30,

  // Méthode pour calculer le volume
  volume() {
    return this.length * this.width * this.depth;
  },

  // Méthode pour vérifier si le volume est éligible
  eligible(maxVolume) {
    return this.volume() <= maxVolume;
  },
};

// Fonction indépendante pour vérifier l'éligibilité d'un colis
function eligible(length, width, depth, maxVolume) {
  const volume = length * width * depth; // Calcul du volume
  return volume <= maxVolume; // Retourne true ou false
}

// Utilisation de l'objet parcel
console.log(parcel.eligible(100)); // Vérifie si le colis est éligible (via l'objet)

// Utilisation de la fonction globale
console.log(eligible(parcel.length, parcel.width, parcel.depth, 100)); // Vérifie si le colis est éligible (via la fonction)

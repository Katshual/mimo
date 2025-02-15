Regarde la fonction eligible(). Son but est de retourner true si volume est inférieur ou égal à maxVolume.Transformons cette fonction en méthode objet.

1. Ajoute une méthode à parcel appelée volume, qui retourne la valeur de length x width x depth pour l'objet.
2. Transforme la fonction eligible en une méthode avec le même nom à l'intérieur de l'objet parcel. La méthode ne doit avoir qu'un seul paramètre maxVolume et doit appeler this.volume() pour obtenir le volume.
3. console.log() le résultat d'un appel à la méthode eligible de parcel, en utilisant une valeur de 100 pour maxVolume.

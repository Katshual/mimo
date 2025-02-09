Appelons une fonction existante depuis une autre. Nous allons utiliser une fonction existante qui convertit une devise en une autre, pour calculer combien nous obtiendrons une fois que nous aurons inclus les frais.

1. Définis une fonction convert, avec deux paramètres, value et fee.
2. A l'intérieur de la fonction, crée une variable gbpValue. Appelle usdToGbp avec value comme argument. Soustrais fee de la valeur retournée par usdToGbp(). Enregistre le résultat dans gpbValue.
3. A l'intérieur de la fonction, affiche gbpValue.
4. Appelle convert() avec 100 et 2.5 comme arguments.

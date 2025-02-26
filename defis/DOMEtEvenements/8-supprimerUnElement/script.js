// Sélectionner le paragraphe avec l'id 'para'
const paraEl = document.getElementById("para");

//sélectionner l'élément <body>
const bodyEl = document.querySelector("body");

//supprimer le paragraphe du DOM
bodyEl.removeChild(paraEl);

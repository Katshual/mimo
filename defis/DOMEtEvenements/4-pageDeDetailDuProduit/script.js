const input = document.querySelector("input");

function qtyChanged() {
  document.querySelector("p").innerHTML =
    "Total Price: $" + (Number(input.value) * 1.99).toFixed(2);
}

// Ajout de l'événement onchange
input.onchange = qtyChanged;

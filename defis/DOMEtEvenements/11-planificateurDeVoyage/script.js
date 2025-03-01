const checkin = document.querySelectorAll("input")[0];
const checkout = document.querySelectorAll("input")[1];
const button = document.querySelector("button");
//Fonction de validation de dates

function valid() {
  if (new Date(checkin.value).getTime() >= new Date(checkout.value).getTime()) {
    document.querySelector("p").innerHTML =
      "Check in date must be before check out";
    document.querySelector("button").disabled = true;
  } else {
    document.querySelector("p").innerHTML = "";
    document.querySelector("button").disabled = false;
  }
}
//Fonction pour finaliser la réservation
function bookTrip() {
  document.querySelector("div").innerHTML = "Trip is booked";
}

//Ajout d'événement onchange aux champs de saisie

checkin.onchange = valid;
checkout.onchange = valid;
button.onclick = bookTrip;

const products = [
  {
    name: "bike",
    freeShipping: true,
  },
  {
    name: "gloves",
    freeShipping: false,
  },
  {
    name: "phone",
    freeShipping: true,
  },
];
//Fonction pour rechercher et afficher les produits
function searchProducts() {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    if (show(products[i])) {
      const li = document.createElement("li");
      li.innerHTML = products[i].name;
      ul.appendChild(li);
    }
  }
}

//Fonction afficher si un produit doit être affiché
function show(product) {
  const input = document.querySelector("input");
  const shipping = document.querySelectorAll("input")[1];
  return (
    (input.value === "" || product.name.indexOf(input.value) > -1) &&
    (!shipping.checked || product.freeShipping)
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector("input");
  const shippingCheckbox = document.querySelectorAll("input")[1];

  // Ajout des écouteurs d'événements
  searchInput.addEventListener("input", searchProducts);
  shippingCheckbox.addEventListener("change", searchProducts);

  searchProducts();
});

const firstName = ["Axe", "Miles", "Maya"];
const lastName = ["Rod", "Rhoades", "Wagner"];
let fullName = [];
for (let i = 0; i < firstName.length; i++) {
  fullName[i] = firstName[i] + " " + lastName[i];
}
console.log(fullName);

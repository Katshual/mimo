const attendees = ["John", "Jane", "Jemina"];
function sparePlaces(entries, capacity) {
  let taken = entries.length;
  return capacity - taken;
}
console.log(`Il reste ${sparePlaces(attendees, 8)} places disponibles.`);

// The function of the Mobile-Navbar

const navbarLinks = document.getElementsByClassName('links')[0];
const bar1 = document.getElementsByClassName('bar1')[0];
const bar2 = document.getElementsByClassName('bar2')[0];


function openMenu() {

    bar1.classList.toggle('active');

    bar2.classList.toggle('active');

    navbarLinks.classList.toggle('active');
}


// The function for recalculating ingredients


function calcIng() {
  const factor = document.getElementById('portions').value;
  const ingredients = document.querySelectorAll("#ingredients td");

  ingredients.forEach(td => {
    const base = parseFloat(td.getAttribute("data-basis"));
    const newQuantity = base * factor;
    const display = Number.isInteger(newQuantity) ? newQuantity : newQuantity.toFixed(2);

    // nur führende Zahl ersetzen
    td.textContent = td.textContent.replace(/^\d+(\.\d+)?/, display);
  });
}

const factorInput = document.getElementById('portions');

if (factorInput) {
  // Eingabeprüfung
  factorInput.addEventListener("keydown", e => {
    const allowedKeys = [
      "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"
    ];

    // Minus & Exponentialzeichen verhindern
    if (e.key === "-" || e.key === "e") {
      e.preventDefault();
      return;
    }

    // Steuerungstasten durchlassen
    if (allowedKeys.includes(e.key)) return;

    // Nur Zahlen 0–9 erlauben
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  });

  // Eingabe nachträglich validieren (bei Tippfehlern oder Einfügen)
  factorInput.addEventListener("input", () => {
    let val = parseInt(factorInput.value, 10);

    // Nur Zahlen 1–20 erlauben
    if (isNaN(val)) return;
    if (val < 1) val = 1;
    if (val > 20) val = 20;

    factorInput.value = val;
  });
}

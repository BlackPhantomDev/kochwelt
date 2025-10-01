
const input = document.getElementById("personen");
const zutaten = document.querySelectorAll("#zutaten-tabelle td");

// Funktion: Zutaten neu berechnen
function updateZutaten() {
    let personen = parseInt(input.value); // eingegebene Zahl
    zutaten.forEach(td => {
        // Basiswert aus Attribut lesen (z. B. 500 für Kartoffeln)
        let basis = parseInt(td.getAttribute("data-basis"));
        // neue Menge = Basis * Personen
        let neueMenge = basis * personen;
        
        // Text ersetzen (nur die Zahl am Anfang)
        td.textContent = td.textContent.replace(/^\d+/, neueMenge);
    });
}



input.addEventListener("keydown", function(event) {
  // Erlaubte Steuerungstasten
  const allowedKeys = [
    "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"
  ];

  if (allowedKeys.includes(event.key)) {
    return; // durchlassen
  }

   if (isNaN(val)) {
    return; // leere Eingabe erlauben
  }

   if (val < 1) {
    input.value = 1;
  }

  if (val > 20) {
    input.value = 20;
  }

  // Nur Ziffern erlauben
  if (!/^[0-9]$/.test(event.key)) {
    event.preventDefault();
    return;
  }

  // Cursor-Position ermitteln
  const start = input.selectionStart;
  const end = input.selectionEnd;

  // neuen Wert "simulieren", falls die Taste angenommen würde
  let newValue = 
    input.value.substring(0, start) + 
    event.key + 
    input.value.substring(end);

  // Zahl daraus machen
  let number = parseInt(newValue);

  // Nur zulassen, wenn es eine gültige Zahl im Bereich ist
  if (isNaN(number) || number < 1 || number > 20) {
    event.preventDefault();
  }
});



input.addEventListener("input", function() {
  let val = parseInt(input.value);

  if (isNaN(val)) {
    return; // leere Eingabe erlauben
  }

  if (val < 1) {
    input.value = 1;
  }

  if (val > 20) {
    input.value = 20;
  }
});

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
        console.log(neueMenge);
        // Text ersetzen (nur die Zahl am Anfang)
        td.textContent = td.textContent.replace(/^\d+/, neueMenge);
    });
}
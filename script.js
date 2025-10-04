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
    

    ingredients.forEach (td => {
        // Basiswert aus Attribut lesen (z. B. 500 für Kartoffeln)
        let base = parseFloat(td.getAttribute("data-basis"));
        // neue Menge = Basis * Personen
        let newQuantity = base * factor;
        
        const display = Number.isInteger(newQuantity) ? newQuantity : newQuantity.toFixed(2);

        // nur die führende Zahl ersetzen
        td.textContent = td.textContent.replace(/^\d+(\.\d+)?/, display);
    });
    
    
}


let input = document.getElementById('portions');

input.addEventListener("keydown", function(event) {
    let val = parseInt(input.value);
  // Erlaubte Steuerungstasten
    const allowedKeys = [
        "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
    ];

  if (allowedKeys.includes(event.key)) {
    return; // durchlassen
  }

   if (isNaN(val)) {
    return; // leere Eingabe erlauben
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
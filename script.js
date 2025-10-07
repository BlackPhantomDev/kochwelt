let fruits = [
  "Fladenbrot",
  "g Hähnchen- oder Kalbfleisch (mariniert)",
  "Stk. kleine Zwiebel",
  "Stk. Tomate",
  "Stk. Gurke",
  "g Eisbergsalat, fein geschnitten",
  "EL Knoblauchsauce",
  "EL Joghurtsauce oder Kräutersauce",
  "Prisen Salz und Pfeffer"
];

let amount = [
  1,    // Fladenbrot
  150,  // Fleisch
  1,    // Zwiebel
  1,    // Tomate
  0.25, // Gurke (¼ Stück pro Portion)
  50,   // Eisbergsalat in g
  2,    // Knoblauchsauce
  2,    // Joghurtsauce
  1     // Salz und Pfeffer
];

function AddPortion() {
  let valuePortion = document.getElementById('valuePortion').value;  
  let recipe1 = document.getElementById("recipe1");
  let needed = document.getElementById("needed");
 
  if (valuePortion.length <= 0) {
    needed.innerHTML = "Die Menge muss mindestens 1 Portion enthalten!";
  } else if (valuePortion < 1 || isNaN(valuePortion)) {
    needed.innerHTML = "Die Menge muss mindestens 1 Portion enthalten!";
  } else {
    needed.innerHTML = '';
    recipe1.innerHTML = '';

    for (let index = 0; index < amount.length; index++) {
      let result = valuePortion * amount[index];

      // Bei Gurke (Bruchstücke) schöner anzeigen
      if (fruits[index].includes("Gurke")) {
        recipe1.innerHTML += `<div class="outlineBg outlineBg2"> ${result.toFixed(2)} ${fruits[index]} </div>`;
      } else {
        recipe1.innerHTML += `<div class="outlineBg outlineBg2"> ${result} ${fruits[index]} </div>`;
      }
    }
  }
}
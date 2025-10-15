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
  const ingredients = document.getElementById("ingredients");
  const rows = ingredients.rows; 

  if(factor == "") {
    alert("Keine Zahl vorhanden. Rüdiger bitte!!");
  }else {
    for (i = 0; i < rows.length; i++) {
      const cell = rows[i].cells[0];
      const basis = parseFloat(cell.dataset.basis); 
      const newQuantity = factor * basis;
      cell.textContent = cell.textContent.replace(/^\d*\.?\d+/, newQuantity);
    }
  }
}

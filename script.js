// The function of the Mobile-Navbar

const navbarLinks = document.getElementsByClassName('links')[0];
const bar1 = document.getElementsByClassName('bar1')[0];
const bar2 = document.getElementsByClassName('bar2')[0];


function openMenu() {

    bar1.classList.toggle('active');

    bar2.classList.toggle('active');

    navbarLinks.classList.toggle('active');
}


function calcIng() {
    // write here the code for the recalculation of the recipe ingrediens

    const factor = document.getElementById('quantity-of-ing').value;
    console.log(factor);
    

    if (!Number.isNaN(factor) && factor > 0) {
        for (let i = 1; i <= 4; i++) {
            const cell = document.getElementById('q' + i);
            if (!cell) { console.warn(`q${i} fehlt`); continue; }

            const oldVal = Number(cell.textContent.trim());
            if (Number.isNaN(oldVal)) {
                console.warn(`q${i} enthält keine Zahl`);
                continue;
            }

            const newVal = oldVal * factor;
            cell.textContent = newVal;
            console.log(`q${i}: ${oldVal} × ${factor} = ${newVal}`);
        }
    } else {
        alert("Bitte geben Sie eine gültige Zahl ein!");
    }
    
}
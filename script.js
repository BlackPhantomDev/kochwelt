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
}
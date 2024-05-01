// JavaScript para mostrar/ocultar el menú en vista móvil
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

/* ------------ navbar --------- */
var navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* ----------- &copy --------- */
const fecha = Date.now();
const hoy = new Date(fecha);
const year = hoy.getFullYear();

let footer = document.getElementById('year');
footer.innerHTML = year;

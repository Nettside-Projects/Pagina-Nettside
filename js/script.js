document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star'); // Obtener todas las estrellas

    // Función para mover una estrella a una posición aleatoria y hacer que parpadee
    function moveAndFadeStar(star) {
        // Establecer posición aleatoria
        const container = document.querySelector('.star-field');
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        const x = Math.random() * containerWidth;
        const y = Math.random() * containerHeight;

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        // Aparecer y desaparecer con un intervalo aleatorio
        const delay = Math.random() * 3000; // Tiempo aleatorio para aparecer
        const duration = Math.random() * 2000 + 1000; // Tiempo aleatorio para desaparecer

        setTimeout(() => {
            star.style.opacity = 1; // Aparecer
            setTimeout(() => {
                star.style.opacity = 0; // Desaparecer
                moveAndFadeStar(star); // Mover y reiniciar
            }, duration);
        }, delay);
    }

    // Iniciar el parpadeo para cada estrella
    stars.forEach(star => {
        star.style.opacity = 0; // Comienza invisible
        moveAndFadeStar(star);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.stars');

    function resetStar(star) {
        // Posición inicial fuera de la vista, con un ligero desplazamiento lateral
        const initialLeft = Math.random() * window.innerWidth; // Posición horizontal aleatoria
        star.style.left = `${initialLeft}px`;
        star.style.top = '-10px'; // Fuera de la vista en la parte superior
        star.style.opacity = 0;

        // Aplicar la animación
        star.style.animation = `falling-star 3s linear forwards`; // Duración de la animación y movimiento hacia abajo

        // Reiniciar después de que termine la animación
        setTimeout(() => {
            resetStar(star); // Reiniciar para continuar el ciclo
        }, 3000); // Duración de la animación debe coincidir con la duración en CSS
    }

    stars.forEach(star => {
        resetStar(star); // Iniciar el ciclo de movimiento para cada estrella
    });
});

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

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

/* let footer = document.getElementById('year');
footer.innerHTML = year; */


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link'); // Todos los enlaces del navbar
    const sections = []; // Array para almacenar las secciones

    // Obtener todas las secciones por sus identificadores
    navLinks.forEach((link) => {
        const section = document.querySelector(link.getAttribute('href')); // Obtener la sección por el href
        if (section) {
            sections.push({
                link: link,
                section: section,
                offsetTop: section.offsetTop, // Ubicación de la sección
            });
        }
    });

    // Función para actualizar el enlace activo según la posición del desplazamiento
    function updateActiveLink() {
        const scrollPosition = window.scrollY + 10; // Compensar ligeramente

        sections.forEach((sectionObj) => {
            if (
                scrollPosition >= sectionObj.offsetTop &&
                (scrollPosition < sectionObj.offsetTop + sectionObj.section.offsetHeight)
            ) {
                // Establecer el enlace como activo
                navLinks.forEach((link) => link.classList.remove('active'));
                sectionObj.link.classList.add('active');
            }
        });
    }

    // Escuchar el evento de desplazamiento para actualizar el enlace activo
    window.addEventListener('scroll', updateActiveLink);

    // Configurar el evento de clic para activar el enlace y evitar comportamiento por defecto
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            navLinks.forEach((l) => l.classList.remove('active'));
            link.classList.add('active');
            updateActiveLink(); // Asegurarse de que el scroll también actualice
        });
    });

    // Inicializa para establecer el enlace activo al cargar la página
    updateActiveLink(); 
});

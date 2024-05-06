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
/* 
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track'); // El contenedor de las imágenes
    const slides = document.querySelectorAll('.carousel-slide'); // Todas las imágenes
    let currentSlide = 0; // Índice del carrusel actual

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length; // Mantiene el índice dentro de los límites
        const newTransform = `translateX(-${100 * currentSlide}%)`; // Mueve el carrusel para mostrar la imagen correcta
        track.style.transform = newTransform; // Aplica la transformación
    }

    function nextSlide() {
        showSlide(currentSlide + 1); // Avanza al siguiente
    }

    function prevSlide() {
        showSlide(currentSlide - 1); // Retrocede al anterior
    }

    setInterval(nextSlide, 3000); // Cambio automático cada 3 segundos

    document.querySelector('.carousel-control.left').onclick = prevSlide; // Configura el botón izquierdo
    document.querySelector('.carousel-control.right').onclick = nextSlide; // Configura el botón derecho
});


 */
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const visibleSlides = 3; // Mostrar 3 imágenes a la vez
    let currentSlide = 0;

    function updateActiveSlide() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide + 1); // La imagen del centro
        });
    }

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length; // Asegura que el índice esté dentro de los límites
        const newTransform = `translateX(-${(100 / visibleSlides) * currentSlide}%)`; // Desplaza el carrusel
        track.style.transform = newTransform;
        updateActiveSlide(); // Actualiza la opacidad
    }

    function nextSlide() {
        showSlide(currentSlide + 1); // Avanza al siguiente
    }

    function prevSlide() {
        showSlide(currentSlide - 1); // Retrocede al anterior
    }

    setInterval(nextSlide, 3000); // Cambia automáticamente cada 3 segundos

    document.querySelector('.carousel-control.left').onclick = prevSlide; // Configurar el botón izquierdo
    document.querySelector('.carousel-control.right').onclick = nextSlide; // Configurar el botón derecho
});

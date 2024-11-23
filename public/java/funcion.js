document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function(){
        const activeButton = document.querySelector('.accordion-button.active');
        
        // Desactivar el botón activo anterior
        if (activeButton && activeButton !== this){
            activeButton.classList.toggle('active');
            activeButton.nextElementSibling.style.maxHeight = null;
        }

        // Activar/desactivar el botón actual
        this.classList.toggle('active');
        const content = this.nextElementSibling;

        // Ajustar la altura del contenido
        if (this.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = null;
        }
    });
});

// Carrusel
const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const boxes = document.querySelectorAll('.box');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100; // Calcula el desplazamiento en porcentaje
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : boxes.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < boxes.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

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
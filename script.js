// Paso 1 -> Paso 2: Abrir el sobre y mostrar la galería
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const gallerySection = document.getElementById('gallery-section');

    envelope.classList.add('open');

    // Esperar a que la animación de apertura del sobre termine
    setTimeout(() => {
        envelope.classList.add('hidden');
        gallerySection.classList.remove('hidden');
    }, 1000);
}

// Paso 2 -> Paso 3: Ocultar la galería y mostrar el texto de la carta
function showLetterText() {
    const gallerySection = document.getElementById('gallery-section');
    const letter = document.getElementById('letter');

    gallerySection.classList.add('hidden');
    letter.classList.remove('hidden');

    // Si tienes alguna animación de escritura para el título/texto, la puedes iniciar aquí
}

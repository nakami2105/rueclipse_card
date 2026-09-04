// ABRIR SOBRE Y TRANSMITIR A GALERÍA
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const gallerySection = document.getElementById('gallery-section');

    if (envelope && !envelope.classList.contains('opening')) {
        envelope.classList.add('opening');
        setTimeout(() => {
            envelope.classList.add('hidden');
            envelope.classList.remove('opening');
            if (gallerySection) {
                gallerySection.classList.remove('hidden');
            }
        }, 800);
    }
}

// NAVEGACIÓN ENTRE SECCIONES
function showGallery() {
    hideAllSections();
    const gallerySection = document.getElementById('gallery-section');
    if (gallerySection) gallerySection.classList.remove('hidden');
}

function showLetterText() {
    hideAllSections();
    const letter = document.getElementById('letter');
    if (letter) letter.classList.remove('hidden');
}

function showEnvelope() {
    hideAllSections();
    const envelope = document.getElementById('envelope');
    if (envelope) envelope.classList.remove('hidden');
}

function hideAllSections() {
    const envelope = document.getElementById('envelope');
    const gallerySection = document.getElementById('gallery-section');
    const letter = document.getElementById('letter');

    if (envelope) envelope.classList.add('hidden');
    if (gallerySection) gallerySection.classList.add('hidden');
    if (letter) letter.classList.add('hidden');
}

// VISOR DE FOTOS (LIGHTBOX)
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightImage = document.getElementById('lightImage');
    
    if (lightbox && lightImage) {
        lightImage.src = src;
        lightbox.classList.add('active');
    }
}

function closeLightbox(event) {
    if (event.target.id === 'lightbox') {
        forceCloseLightbox();
    }
}

function forceCloseLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.classList.remove('active');
}

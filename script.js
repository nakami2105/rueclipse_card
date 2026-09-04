// Paso 1 -> Paso 2 (Abrir sobre)
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const gallerySection = document.getElementById('gallery-section');

    envelope.classList.add('open');

    setTimeout(() => {
        envelope.classList.add('hidden');
        gallerySection.classList.remove('hidden');
    }, 1000);
}

// Ir a la Galería (Paso 2)
function showGallery() {
    document.getElementById('envelope').classList.add('hidden');
    document.getElementById('letter').classList.add('hidden');
    document.getElementById('gallery-section').classList.remove('hidden');
}

// Ir a la Carta / Texto (Paso 3)
function showLetterText() {
    document.getElementById('gallery-section').classList.add('hidden');
    document.getElementById('letter').classList.remove('hidden');
}

// Volver al Sobre inicial (Paso 1)
function showEnvelope() {
    const envelope = document.getElementById('envelope');
    envelope.classList.remove('open');
    envelope.classList.remove('hidden');
    
    document.getElementById('gallery-section').classList.add('hidden');
    document.getElementById('letter').classList.add('hidden');
}

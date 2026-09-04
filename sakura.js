document.addEventListener('DOMContentLoaded', () => {
    const sakuraContainer = document.getElementById('sakura-container') || document.body;
    
    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('sakura');
        
        // Tamaños y posiciones aleatorias
        const size = Math.random() * 12 + 8; // Entre 8px y 20px
        const startX = Math.random() * window.innerWidth;
        const duration = Math.random() * 5 + 6; // Entre 6s y 11s
        const delay = Math.random() * 2;

        petal.style.width = `${size}px`;
        petal.style.height = `${size * 1.4}px`;
        petal.style.left = `${startX}px`;
        petal.style.animationDuration = `${duration}s`;
        petal.style.animationDelay = `${delay}s`;
        
        sakuraContainer.appendChild(petal);

        // Limpieza de pétalos
        setTimeout(() => {
            petal.remove();
        }, (duration + delay) * 1000);
    }

    // Genera pétalos periódicamente
    setInterval(createPetal, 350);
});

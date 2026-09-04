document.addEventListener('DOMContentLoaded', () => {
    // Definimos las dos clases de partículas que van a caer
    const elements = ['🌸', '✨', '🌸', '💖'];
    const totalParticles = window.innerWidth < 600 ? 18 : 35; // Menos en celular para evitar sobrecarga

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'sakura-particle';
        
        // Elección aleatoria entre pétalos y destellos
        const symbol = elements[Math.floor(Math.random() * elements.length)];
        particle.innerHTML = symbol;

        // Posición horizontal de inicio aleatoria
        const startLeft = Math.random() * 100;
        
        // Tamaños aleatorios
        const size = Math.random() * 12 + 12; // Entre 12px y 24px
        
        // Duración de la caída y retraso de inicio aleatorios
        const duration = Math.random() * 5 + 6; // Entre 6s y 11s
        const delay = Math.random() * 5;

        // Aplicamos estilos directamente a cada partícula
        Object.assign(particle.style, {
            position: 'fixed',
            top: '-30px',
            left: `${startLeft}vw`,
            fontSize: `${size}px`,
            opacity: Math.random() * 0.7 + 0.3,
            pointerEvents: 'none',
            zIndex: '9999',
            userSelect: 'none',
            animation: `sakuraFall ${duration}s linear ${delay}s infinite`
        });

        document.body.appendChild(particle);
    }

    // Generamos las partículas iniciales
    for (let i = 0; i < totalParticles; i++) {
        createParticle();
    }
});

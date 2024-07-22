document.addEventListener('DOMContentLoaded', () => {
    const wheel = document.getElementById('wheel');
    const result = document.getElementById('result');
    const spinButton = document.getElementById('spin-button');
    const confetti = document.getElementById('confetti');

    const options = ['Luchino', 'Soraya', 'Luchino', 'Soraya'];
    const sectors = options.length;
    const sectorDegree = 360 / sectors;
    let rotation = 0;

    spinButton.addEventListener('click', () => {
        const randomDegree = Math.floor(Math.random() * 360);
        rotation += randomDegree + 3600;

        wheel.style.transition = 'transform 4s ease-out';
        wheel.style.transform = `rotate(${rotation}deg)`;

        confetti.style.display = 'block';
        createConfetti();

        setTimeout(() => {
            const selectedSector = Math.floor(((rotation % 360) + (sectorDegree / 2)) / sectorDegree) % sectors;
            result.textContent = `Oggi chi metterà in pericolo le vite di entrambi sarà:\n${options[selectedSector]}`;

            confetti.style.display = 'none';
        }, 4000);
    });

    function createConfetti() {
        const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99'];
        const confettiCount = 200; // Aumentato il numero di coriandoli
        for (let i = 0; i < confettiCount; i++) {
            const confetto = document.createElement('div');
            confetto.classList.add('confetto');
            confetto.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetto.style.width = `${Math.random() * 10 + 5}px`;
            confetto.style.height = confetto.style.width;
            confetto.style.left = `${Math.random() * 100}%`;
            confetto.style.top = `${Math.random() * 100}%`;
            confetto.style.transform = `translate(-50%, -50%)`;
            confetto.style.opacity = Math.random();
            confetti.appendChild(confetto);

            setTimeout(() => {
                confetto.style.transform = `translate(-50%, -50%) scale(1.5)`;
                confetto.style.opacity = 0;
                setTimeout(() => confetto.remove(), 1000);
            }, Math.random() * 2000);
        }
    }
});
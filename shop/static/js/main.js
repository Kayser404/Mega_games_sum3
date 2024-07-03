// main.js
document.addEventListener('DOMContentLoaded', (event) => {
    // Selecciona todas las tarjetas
    const cards = document.querySelectorAll('.card');

    // Agrega un evento de hover a cada tarjeta
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.classList.add('shadow-lg');
        });

        card.addEventListener('mouseout', () => {
            card.classList.remove('shadow-lg');
        });
    });
});

// Este código espera a que la ventana se cargue completamente
window.addEventListener('load', function() {
    var cards = document.querySelectorAll('.card');
    var maxHeight = 0;

    // Encuentra la altura máxima de las tarjetas
    cards.forEach(function(card) {
        if (card.offsetHeight > maxHeight) {
            maxHeight = card.offsetHeight;
        }
    });

    // Establece todas las tarjetas a la altura máxima encontrada
    cards.forEach(function(card) {
        card.style.height = maxHeight + 'px';
    });
});

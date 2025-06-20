document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-project');
  const dots = document.querySelectorAll('.projectos-section .carousel-navigation .dot');

  let activeIndex = 1;

  function updateCarousel(index) {
    const total = cards.length;

    // Loop circular: se index for negativo ou maior que total, ajusta
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;

    // Esconde todos
    cards.forEach((card) => {
      card.classList.remove('active');
      card.style.display = 'none';
      card.style.transform = 'scale(0.85)';
      card.style.opacity = 0.9;
      card.style.zIndex = 1;
    });

    // Mostra o item atual e os vizinhos (loop circular)
    for (let offset = -1; offset <= 1; offset++) {
      let i = (index + offset + total) % total;
      const card = cards[i];
      card.style.display = 'block';

      if (offset === 0) {
        card.classList.add('active');
        card.style.transform = 'scale(1)';
        card.style.opacity = 1;
        card.style.zIndex = 2;
      }
    }

    // Atualiza os dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    activeIndex = index;
  }

  // Clique nos dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => updateCarousel(index));
  });

  // Clique nos próprios cards
  cards.forEach((card, index) => {
    card.addEventListener('click', () => updateCarousel(index));
  });

  // Scroll com roda do mouse (opcional)
  let scrollTimeout;
  window.addEventListener('wheel', (e) => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (e.deltaY > 0) {
        updateCarousel(activeIndex + 1);
      } else {
        updateCarousel(activeIndex - 1);
      }
    }, 50);
  }, { passive: true });

  // Inicializa
  updateCarousel(activeIndex);
});

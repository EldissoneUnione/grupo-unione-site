document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-project');
  const dots = document.querySelectorAll('.projectos-section .carousel-navigation .dot');

  let activeIndex = 1;

  function updateCarousel(index) {
    const total = cards.length;

    if (index < 0) index = total - 1;
    if (index >= total) index = 0;

    cards.forEach((card) => {
      card.classList.remove('active');
      card.style.display = 'none';
      card.style.transform = 'scale(0.85)';
      card.style.opacity = 0.9;
      card.style.zIndex = 1;
    });

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

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    activeIndex = index;
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => updateCarousel(index));
  });

  cards.forEach((card, index) => {
    card.addEventListener('click', () => updateCarousel(index));
  });


  updateCarousel(activeIndex);
});

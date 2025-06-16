document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-project');
  const dots = document.querySelectorAll('.projectos-section .carousel-navigation .dot');

  let activeIndex = 1; 

  function updateCarousel(index) {
    cards.forEach((card, i) => {
      card.classList.remove('active');
      card.style.display = 'none';
      card.style.transform = 'scale(0.85)';
      card.style.opacity = 0.9;
      card.style.zIndex = 1;
    });

    for (let i = index - 1; i <= index + 1; i++) {
      if (i >= 0 && i < cards.length) {
        const card = cards[i];
        card.style.display = 'block';
        if (i === index) {
          card.classList.add('active');
          card.style.transform = 'scale(1)';
          card.style.opacity = 1;
          card.style.zIndex = 2;
        }
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

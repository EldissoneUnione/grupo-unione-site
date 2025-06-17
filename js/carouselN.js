document.addEventListener('DOMContentLoaded', () => {
  const cardsN = document.querySelectorAll('.card-blog');
  const dotsNoticias = document.querySelectorAll('.noticias-section .carousel-navigation .dot');
  const prevButton = document.querySelector('.noticias-section .carousel-navigation .arrow.left');
  const nextButton = document.querySelector('.noticias-section .carousel-navigation .arrow.right');

  let activeIndexN = 1;

  function updateCarouselNoticias(indexN) {
    if (indexN < 0) indexN = 0;
    if (indexN > cardsN.length - 1) indexN = cardsN.length - 1;

    cardsN.forEach((cardN, i) => {
      cardN.classList.remove('active');
      cardN.style.display = 'none';
      cardN.style.transform = 'scale(1)';
      cardN.style.opacity = 0.9;
      cardN.style.zIndex = 1;
    });

    for (let i = indexN - 1; i <= indexN + 1; i++) {
      if (i >= 0 && i < cardsN.length) {
        const cardN = cardsN[i];
        cardN.style.display = 'flex';
        if (i === indexN) {
          cardN.classList.add('active');
          cardN.style.transform = 'scale(1)';
          cardN.style.opacity = 1;
          cardN.style.zIndex = 2;
        }
      }
    }

    dotsNoticias.forEach((dotN, i) => {
      dotN.classList.toggle('active', i === indexN);
    });

    activeIndexN = indexN;
  }

  dotsNoticias.forEach((dotN, index) => {
    dotN.addEventListener('click', () => {
      updateCarouselNoticias(index);
    });
  });

  cardsN.forEach((cardN, index) => {
    cardN.addEventListener('click', () => {
      updateCarouselNoticias(index);
    });
  });

  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
      updateCarouselNoticias(activeIndexN - 1);
    });

    nextButton.addEventListener('click', () => {
      updateCarouselNoticias(activeIndexN + 1);
    });
  }

  const container = document.querySelector('.noticias-section .category');
  if (container) {
    container.addEventListener('wheel', (e) => {
      if (e.deltaY > 0) {
        updateCarouselNoticias(activeIndexN + 1); 
      } else {
        updateCarouselNoticias(activeIndexN - 1); 
      }
    });
  }

  updateCarouselNoticias(activeIndexN);
});

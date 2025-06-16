document.addEventListener('DOMContentLoaded', () => {
  const cardsN = document.querySelectorAll('.card-blog');
  const dotsNoticias = document.querySelectorAll('.noticias-section .carousel-navigation .dot');
  const dotsContainer = document.querySelector('.noticias-section .carousel-navigation .dots');
  const prevButton = document.querySelector('.noticias-section .carousel-navigation .arrow.left');
  const nextButton = document.querySelector('.noticias-section .carousel-navigation .arrow.right');

  let activeIndex = 1;

  function updateCarouselNoticias(indexN) {
    cardsN.forEach((cardN, i) => {
      cardN.classList.remove('active');
      cardN.style.display = 'none';
      cardN.style.transform = 'scale(1)';
      cardN.style.opacity = 1;
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
    console.log('Atualizou carousel de notícias. Index ativo:', indexN);

  }

  dotsNoticias.forEach((dotN, index) => {
    dotN.addEventListener('click', () => {
      console.log('Dot notícia clicado', index);
      updateCarouselNoticias(index);
    });
  });

  cardsN.forEach((cardN, index) => {
    cardN.addEventListener('click', () => {
      console.log('Card notícia clicado', index);
      updateCarouselNoticias(index);
    });
  });

  updateCarouselNoticias(activeIndex);
});

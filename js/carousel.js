document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel-container');
  const cards = carousel.querySelectorAll('.card');
  const dotsContainer = document.querySelector('.dots');
  const prevButton = document.querySelector('.arrow.left');
  const nextButton = document.querySelector('.arrow.right');

  let currentIndex = 1;
  let isAnimating = false;
  let isDragging = false;
  let startX;
  let scrollLeft;
  const MAX_VISIBLE_CARDS = 3;
  let isMobile = window.innerWidth <= 768;

  function getVisibleCardsCount() {
    return Math.min(MAX_VISIBLE_CARDS, cards.length);
  }

  function updateCardBorders() {
    const visibleCount = getVisibleCardsCount();

    cards.forEach((card, index) => {
      card.classList.remove('first-visible', 'last-visible');

      if (index === 0) {
        card.classList.add('first-visible');
      }

      if (index === visibleCount - 1) {
        card.classList.add('last-visible');
      }
    });
  }

  function centerCard(index) {
    const card = cards[index];
    const containerWidth = carousel.offsetWidth;
    const cardWidth = card.offsetWidth;
    const gap = 60;

    let scrollPosition;
    if (index < MAX_VISIBLE_CARDS) {
      scrollPosition = (index * (cardWidth + gap)) - ((containerWidth - cardWidth) / 2);
    } else {
      scrollPosition = (index * (cardWidth + gap)) - (containerWidth - (cardWidth + gap * 2));
    }

    carousel.scrollTo({
      left: Math.max(0, scrollPosition),
      behavior: 'smooth'
    });
  }

  function updateDots() {
    dotsContainer.innerHTML = '';
    cards.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.className = `dot ${index === currentIndex ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Ir para slide ${index + 1}`);
      dot.addEventListener('click', () => {
        if (isAnimating || index === currentIndex) return;
        updateCarousel(index);
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateCarousel(index) {
    const total = cards.length;
    if (isAnimating) return;
    isAnimating = true;

    // Loop circular
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;

    cards.forEach(card => {
      card.classList.remove('active');
      card.style.opacity = '0.8';
      card.style.transform = 'scale(1) translateY(0)';
    });

    cards[index].classList.add('active');
    cards[index].style.opacity = '1';
    cards[index].style.transform = 'scale(1.09) translateY(-2px)';

    currentIndex = index;
    updateDots();
    centerCard(index);
    updateCardBorders();

    setTimeout(() => {
      isAnimating = false;
    }, 500);
  }

  prevButton.addEventListener('click', () => {
    updateCarousel(currentIndex - 1);
  });

  nextButton.addEventListener('click', () => {
    updateCarousel(currentIndex + 1);
  });

  cards.forEach((card, index) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      if (isDragging || isAnimating || index === currentIndex) return;
      updateCarousel(index);
    });
  });

  if (!isMobile) {
    carousel.addEventListener('scroll', () => {
      if (isAnimating) return;

      const containerWidth = carousel.offsetWidth;
      const cardWidth = cards[0].offsetWidth;
      const gap = 60;

      const scrollPosition = carousel.scrollLeft;
      const centerPosition = scrollPosition + (containerWidth / 2);
      const newIndex = Math.round(centerPosition / (cardWidth + gap));

      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < cards.length) {
        updateCarousel(newIndex);
      }
    });

    carousel.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
      carousel.style.cursor = 'grabbing';
    });

    carousel.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2;
      carousel.scrollLeft = scrollLeft - walk;
    });

    carousel.addEventListener('mouseup', () => {
      isDragging = false;
      carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseleave', () => {
      isDragging = false;
      carousel.style.cursor = 'grab';
    });
  }

  updateCarousel(currentIndex);
  updateDots();
  updateCardBorders();

  window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 768;
    updateCarousel(currentIndex);
    updateCardBorders();
  });
});

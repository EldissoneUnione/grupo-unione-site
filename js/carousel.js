document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel-container');
  const cards = carousel.querySelectorAll('.card');
  const dotsContainer = document.querySelector('.dots');
  const carouselContent = document.querySelector('.carousel-content');

  let currentIndex = 0;
  let isAnimating = false;
  let isDragging = false;
  let startX;
  let scrollLeft;
  const VISIBLE_CARDS = 3; // Mostrar sempre 3 cards
  let isMobile = window.innerWidth <= 768;
  let scrollTimeout;
  let autoScrollInterval;
  const AUTO_SCROLL_DELAY = 3000; // 4 segundos entre slides
  let cardWidth;
  let gap = 40;

  function getCardWidth() {
    const firstCard = carouselContent.querySelector('.card');
    if (firstCard) {
      return firstCard.offsetWidth;
    }
    return 380; // Valor padrão do CSS
  }

  function updateCarouselLayout() {
    cardWidth = getCardWidth();
    
    const totalWidth = (cardWidth + gap) * cards.length - gap;
    carouselContent.style.width = `${totalWidth}px`;
  }

  function updateDots() {
    dotsContainer.innerHTML = '';
    
    const totalGroups = Math.ceil(cards.length / VISIBLE_CARDS);
    
    for (let i = 0; i < totalGroups; i++) {
      const dot = document.createElement('span');
      dot.className = `dot ${Math.floor(currentIndex / VISIBLE_CARDS) === i ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Ir para grupo ${i + 1}`);
      dot.addEventListener('click', () => {
        if (isAnimating) return;
        stopAutoScroll();
        goToGroup(i);
        startAutoScroll();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function goToGroup(groupIndex) {
    if (isAnimating) return;
    isAnimating = true;
    
    const targetIndex = groupIndex * VISIBLE_CARDS;
    const scrollPosition = (cardWidth + gap) * targetIndex;
    
    smoothScrollTo(carousel, scrollPosition, 600);
    
    updateCardClasses(targetIndex);
    
    setTimeout(() => {
      currentIndex = targetIndex;
      updateDots();
      isAnimating = false;
    }, 600);
  }

  function updateCardClasses(centerIndex) {
    cards.forEach(card => {
      card.classList.remove('active');
    });
    
    for (let i = 0; i < VISIBLE_CARDS; i++) {
      const cardIndex = centerIndex + i;
      if (cards[cardIndex]) {
        // O card do meio do grupo fica mais destacado
        if (i === Math.floor(VISIBLE_CARDS / 2)) {
          cards[cardIndex].classList.add('active');
        }
      }
    }
  }

  function activateCard(cardIndex) {
    if (isAnimating) return;
    
    const groupIndex = Math.floor(cardIndex / VISIBLE_CARDS);
    const groupStartIndex = groupIndex * VISIBLE_CARDS;
    
    // Determinar qual card dentro do grupo deve ficar ativo
    let activeCardInGroup = cardIndex;
    
    // Se o card clicado não for o do meio do grupo, ajustar para o meio
    const positionInGroup = cardIndex - groupStartIndex;
    if (positionInGroup !== Math.floor(VISIBLE_CARDS / 2)) {
      // Calcular qual card deve ser o ativo (o do meio do grupo)
      activeCardInGroup = groupStartIndex + Math.floor(VISIBLE_CARDS / 2);
    }
    
    // Se o card clicado já está visível no grupo atual
    if (cardIndex >= groupStartIndex && cardIndex < groupStartIndex + VISIBLE_CARDS) {
      // Remover classe 'active' de todos os cards
      cards.forEach(card => {
        card.classList.remove('active');
      });
      
      // Ativar o card clicado
      cards[cardIndex].classList.add('active');
      currentIndex = groupStartIndex;
    } else {
      // Navegar para o grupo do card clicado
      goToGroup(groupIndex);
    }
    
    updateDots();
  }

  function showNextGroup() {
    const totalGroups = Math.ceil(cards.length / VISIBLE_CARDS);
    const currentGroup = Math.floor(currentIndex / VISIBLE_CARDS);
    const nextGroup = (currentGroup + 1) % totalGroups;
    
    goToGroup(nextGroup);
  }

  // Função para scroll suave
  function smoothScrollTo(element, target, duration) {
    const start = element.scrollLeft;
    const change = target - start;
    let startTime = null;

    function animateScroll(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function (easeOutCubic)
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      element.scrollLeft = start + (change * easedProgress);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  }

  function startAutoScroll() {
    stopAutoScroll();
    autoScrollInterval = setInterval(() => {
      showNextGroup();
    }, AUTO_SCROLL_DELAY);
  }

  function stopAutoScroll() {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      autoScrollInterval = null;
    }
  }

  // Event listeners para cards
  cards.forEach((card, index) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      if (isDragging || isAnimating) return;
      
      stopAutoScroll();
      
      // Ativar o card clicado
      activateCard(index);
      
      // Centralizar o grupo do card clicado
      const groupIndex = Math.floor(index / VISIBLE_CARDS);
      const scrollPosition = (cardWidth + gap) * (groupIndex * VISIBLE_CARDS);
      smoothScrollTo(carousel, scrollPosition, 600);
      
      startAutoScroll();
    });

    // Efeito hover nos cards - apenas modifica propriedades transitórias
    card.addEventListener('mouseenter', () => {
      if (!isMobile) {
        card.style.transform = 'translateY(-10px) scale(1.03)';
        card.style.zIndex = '10';
      }
    });

    card.addEventListener('mouseleave', () => {
      if (!isMobile) {
        card.style.transform = '';
        card.style.zIndex = '';
      }
    });
  });

  // Scroll horizontal com mouse wheel
  carousel.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (isAnimating) return;
    
    const delta = e.deltaY || e.detail || e.wheelDelta;
    const scrollAmount = delta * 0.5;
    
    smoothScrollTo(carousel, carousel.scrollLeft + scrollAmount, 300);
    
    // Atualizar índice baseado na posição
    setTimeout(() => {
      const newIndex = Math.round(carousel.scrollLeft / (cardWidth + gap));
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < cards.length) {
        currentIndex = newIndex;
        updateCardClasses(currentIndex);
        updateDots();
      }
    }, 350);
  }, { passive: false });

  // Drag and drop para desktop
  if (!isMobile) {
    carousel.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
      carousel.style.cursor = 'grabbing';
      carousel.style.scrollBehavior = 'auto';
      stopAutoScroll();
    });

    carousel.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2;
      carousel.scrollLeft = scrollLeft - walk;
    });

    carousel.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging = false;
      carousel.style.cursor = 'grab';
      carousel.style.scrollBehavior = 'smooth';

      // Ajustar para o card mais próximo
      const newScroll = carousel.scrollLeft;
      const newIndex = Math.round(newScroll / (cardWidth + gap));
      const adjustedScroll = newIndex * (cardWidth + gap);
      
      smoothScrollTo(carousel, adjustedScroll, 300);
      
      setTimeout(() => {
        currentIndex = Math.min(newIndex, cards.length - VISIBLE_CARDS);
        updateCardClasses(currentIndex);
        updateDots();
        startAutoScroll();
      }, 350);
    });

    carousel.addEventListener('mouseleave', () => {
      if (isDragging) {
        isDragging = false;
        carousel.style.cursor = 'grab';
        startAutoScroll();
      }
    });
  }

  // Navegação por toque para mobile
  if (isMobile) {
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoScroll();
    }, { passive: true });
    
    carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      setTimeout(startAutoScroll, 1000);
    }, { passive: true });
    
    function handleSwipe() {
      const swipeThreshold = 50;
      const swipeDistance = touchEndX - touchStartX;
      
      if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
          // Swipe para direita - grupo anterior
          const totalGroups = Math.ceil(cards.length / VISIBLE_CARDS);
          const currentGroup = Math.floor(currentIndex / VISIBLE_CARDS);
          const prevGroup = (currentGroup - 1 + totalGroups) % totalGroups;
          goToGroup(prevGroup);
        } else {
          // Swipe para esquerda - próximo grupo
          showNextGroup();
        }
      }
    }
  }

  // Inicializar
  function initializeCarousel() {
    updateCarouselLayout();
    updateCardClasses(currentIndex);
    updateDots();
    startAutoScroll();
    
    // Centralizar primeiro grupo
    setTimeout(() => {
      carousel.scrollLeft = 0;
    }, 100);
  }

  // Pausar auto scroll quando o mouse estiver sobre o carrossel
  carousel.addEventListener('mouseenter', stopAutoScroll);
  carousel.addEventListener('mouseleave', startAutoScroll);

  window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 768;
    updateCarouselLayout();
    
    // Reposicionar para o grupo atual
    const currentGroup = Math.floor(currentIndex / VISIBLE_CARDS);
    const reposition = currentGroup * VISIBLE_CARDS * (cardWidth + gap);
    carousel.scrollLeft = reposition;
    
    updateCardClasses(currentIndex);
    updateDots();
  });

  // Inicializar após um pequeno delay
  setTimeout(initializeCarousel, 100);
});
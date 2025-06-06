document.addEventListener('DOMContentLoaded', function () {
  const icons = document.querySelectorAll('.icon-item');
  const slices = document.querySelectorAll('.span');
  const centerInfo = document.getElementById('center-info');
  const container = document.querySelector('.rotate-on-scroll');
  const total = slices.length;

  const customOrder = [4, 3, 2, 1, 0, 5]; // ordem personalizada
  let currentIndex = 0;
  let isScrolling = false;

  const info = [
    { title: '+50 milhões<br>de dólares', desc: 'já investidos' },     // 0
    { title: 'Internacionalização', desc: 'Presença global' },         // 1
    { title: 'Prêmios', desc: 'Reconhecimentos' },                     // 2
    { title: 'Investimentos', desc: 'Em expansão' },                   // 3
    { title: 'Projetos', desc: 'Diversificados' },                     // 4
    { title: 'Pessoas', desc: 'Equipe qualificada' }                   // 5
  ];

  function setActive(visualIndex) {
    const realIndex = customOrder[visualIndex];
 
    slices.forEach((slice, i) => {
      slice.classList.toggle('active', i === realIndex);
    });

    centerInfo.innerHTML = `<h1>${info[realIndex].title}</h1><p>${info[realIndex].desc}</p>`;
    
  
    updateSize(realIndex);
    activateSequentially()
  }

  function activateSequentially() {
  const iconsArray = Array.from(icons);
  let i = 0;

  function activateNext() {
    // Desativa todos
    iconsArray.forEach(icon => icon.classList.remove('active'));

    // Ativa o ícone atual
    iconsArray[i].classList.add('active');

    console.log(`Ícone ativado: ${i}`);

    i++;
  }

  activateNext();
}


  function calculateSizes() {
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 768;

    const containerSize = isMobile ? 300 : 450;
    const spanSize = isMobile ? 100 : 150;

    const centerX = containerSize / 2;
    const centerY = containerSize / 2;
    const adjustedRadius = (containerSize / 2) - (spanSize / 2);

    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    slices.forEach((span, index) => {
      const angleDeg = (360 / total) * index;
      const angleRad = angleDeg * (Math.PI / 180);

      const x = centerX + adjustedRadius * Math.cos(angleRad) - spanSize / 2;
      const y = centerY + adjustedRadius * Math.sin(angleRad) - spanSize / 2;

      span.style.width = `${spanSize}px`;
      span.style.height = `${spanSize}px`;
      span.style.left = `${x}px`;
      span.style.top = `${y}px`;

      if (span.classList.contains('rotated')) {
        span.style.transform = `rotate(-30deg)`;
      }
      if (span.classList.contains('rotated1')) {
        span.style.transform = `rotate(0deg)`;
      }
      if (span.classList.contains('rotated2')) {
        span.style.transform = `rotate(30deg)`;
      }
    });
  }

  function updateSize(realIndex) {
    slices.forEach((span, i) => {
      span.classList.toggle('grow', i === realIndex);
    });
  }

  function setupSwipeEvents() {
    let touchStartY = 0;

    window.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
    });

    window.addEventListener('touchend', (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) > 30 && !isScrolling) {
        isScrolling = true;
        setTimeout(() => isScrolling = false, 100);

        if (deltaY > 0 && currentIndex < total - 1) {
          currentIndex++;
        } else if (deltaY < 0 && currentIndex > 0) {
          currentIndex--;
        }
        setActive(currentIndex);
      }
    });
  }

  function setupWheelEvent() {
    window.addEventListener('wheel', (event) => {
      if (isScrolling) return;

      isScrolling = true;
      setTimeout(() => isScrolling = false, 100);

      if (event.deltaY > 0 && currentIndex < total - 1) {
        currentIndex++;
      } else if (event.deltaY < 0 && currentIndex > 0) {
        currentIndex--;
      }
      setActive(currentIndex);
    });
  }

  // Aqui o loop que cria os eventos para os ícones seguindo a ordem do customOrder
  customOrder.forEach((realIndex, visualIndex) => {
    const icon = icons[realIndex];
    icon.addEventListener('mouseenter', () => {
      currentIndex = visualIndex;
      setActive(currentIndex);
    });
    icon.addEventListener('focus', () => {
      currentIndex = visualIndex;
      setActive(currentIndex);
    });
    icon.addEventListener('click', () => {
      currentIndex = visualIndex;
      setActive(currentIndex);
    });
  });

  window.addEventListener('resize', () => {
    calculateSizes();
    setActive(currentIndex);
  });

  calculateSizes();
  setActive(0);
  setupWheelEvent();
  setupSwipeEvents();
});

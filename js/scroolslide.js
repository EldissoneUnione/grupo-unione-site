document.addEventListener('DOMContentLoaded', function () {
  const icons = document.querySelectorAll('.icon-item');
  const slices = document.querySelectorAll('.span');
  const centerInfo = document.getElementById('center-info');
  const total = slices.length;
  const customOrder = [4, 3, 2, 1, 0, 5];
  let currentIndex = 0;
  let isScrolling = false;

  const info = [
    { title: '+50 milhões<br>de dólares', desc: 'já investidos' },
    { title: 'Internacionalização', desc: 'Presença global' },
    { title: 'Prêmios', desc: 'Reconhecimentos' },
    { title: 'Investimentos', desc: 'Em expansão' },
    { title: 'Projetos', desc: 'Diversificados' },
    { title: 'Pessoas', desc: 'Equipe qualificada' }
  ];

  // Adicionar transições suaves
  icons.forEach(icon => {
    icon.style.transition = 'all 0.5s ease-in-out';
  });

  slices.forEach(slice => {
    slice.style.transition = 'all 0.5s ease-in-out';
  });

  centerInfo.style.transition = 'all 0.5s ease-in-out';

  // Adicionar transição para os segmentos
  const segments = document.querySelectorAll('#segments path');
  segments.forEach(segment => {
    segment.style.transition = 'all 0.5s ease-in-out';
  });

  function setActive(visualIndex) {
    const realIndex = customOrder[visualIndex];

    slices.forEach((slice, i) => {
      slice.classList.toggle('active', i === realIndex);
      slice.classList.toggle('grow', i === realIndex);
    });

    icons.forEach((icon, i) => {
      icon.classList.toggle('active', i === realIndex);
    });

    centerInfo.innerHTML = `<h1>${info[realIndex].title}</h1><p>${info[realIndex].desc}</p>`;
    updateHighlight(realIndex);
  }

  function smoothScrollTo(index) {
    isScrolling = true;
    currentIndex = index;
    setActive(currentIndex);
    setTimeout(() => isScrolling = false, 600);
  }

  function setupControlledScrollInSection() {
    const sobreSection = document.querySelector('.sobre-container');
    if (!sobreSection) return;

    const body = document.body;
    let touchStartY = 0;
    let touchStartX = 0;
    const touchThreshold = 30; // Reduzido para tornar mais sensível

    function isInsideSobre() {
      const rect = sobreSection.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom >= window.innerHeight;
    }

    function lockScroll() {
      body.style.overflow = 'hidden';
      isLocked = true;
    }

    function unlockScroll() {
      body.style.overflow = '';
      isLocked = false;
    }

    function handleScroll(direction) {
      if (!isInsideSobre()) return;

      if (direction === 'down' && currentIndex < total - 1) {
        currentIndex++;
        setActive(currentIndex);
      } else if (direction === 'up' && currentIndex > 0) {
        currentIndex--;
        setActive(currentIndex);
      }
    }

    // Eventos de scroll com wheel
    window.addEventListener('wheel', (e) => {
      if (isInsideSobre()) {
        e.preventDefault();
        handleScroll(e.deltaY > 0 ? 'down' : 'up');
      }
    }, { passive: false });

    // Eventos de touch para dispositivos móveis
    window.addEventListener('touchstart', (e) => {
      if (isInsideSobre()) {
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].clientX;
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (isInsideSobre()) {
        e.preventDefault();
      }
    }, { passive: false });

    window.addEventListener('touchend', (e) => {
      if (!isInsideSobre()) return;

      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      const deltaY = touchStartY - touchEndY;
      const deltaX = touchStartX - touchEndX;

      // Verifica se o movimento foi mais vertical que horizontal
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > touchThreshold) {
        handleScroll(deltaY > 0 ? 'down' : 'up');
      }
    }, { passive: true });

    // Monitorar entrada e saída da seção
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        body.style.overflow = '';
      }
    }, { 
      threshold: 0.1,
      rootMargin: '0px'
    });

    observer.observe(sobreSection);

    // Limpar eventos quando a página é descarregada
    window.addEventListener('beforeunload', () => {
      observer.disconnect();
    });
  }

  // Eventos nos ícones
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
    setActive(currentIndex);
  });

  function updateHighlight(iconIndex) {
    const segmentIndex = iconToSegmentMap[iconIndex];

    segments.forEach((seg, i) => {
      seg.setAttribute("fill", i === segmentIndex ? "#c62828" : "#ddd");
    });

    const icons = document.querySelectorAll(".icon-item");
    icons.forEach((icon, i) => {
      icon.classList.toggle("active", i === iconIndex);
    });
  }

  setActive(0);
  setupControlledScrollInSection();
});

// === SVG Segmentos Dinâmicos ===
const g = document.getElementById("segments");
const totalSegments = 6;
const radius = 80;
const thickness = 20;
const center = 100;
let segments = [];

const iconToSegmentMap = [4, 3, 2, 5, 0, 1];

function createSegments() {
  for (let i = 0; i < totalSegments; i++) {
    const startAngle = (Math.PI * 2 * i) / totalSegments;
    const endAngle = (Math.PI * 2 * (i + 1)) / totalSegments;

    const x1 = center + radius * Math.cos(startAngle);
    const y1 = center + radius * Math.sin(startAngle);
    const x2 = center + radius * Math.cos(endAngle);
    const y2 = center + radius * Math.sin(endAngle);
    const x3 = center + (radius - thickness) * Math.cos(endAngle);
    const y3 = center + (radius - thickness) * Math.sin(endAngle);
    const x4 = center + (radius - thickness) * Math.cos(startAngle);
    const y4 = center + (radius - thickness) * Math.sin(startAngle);

    const pathData = `
      M ${x1} ${y1}
      A ${radius} ${radius} 0 0 1 ${x2} ${y2}
      L ${x3} ${y3}
      A ${radius - thickness} ${radius - thickness} 0 0 0 ${x4} ${y4}
      Z
    `;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData.trim());
    path.setAttribute("fill", "#ddd");
    g.appendChild(path);
    segments.push(path);
  }
}

createSegments();

let isScrolling = false;

// Listener de rolagem com debounce simples
window.addEventListener('wheel', (event) => {
  if (isScrolling) return;

  const sobreSection = document.querySelector('.sobre-container');
  if (!sobreSection) return;

  const rect = sobreSection.getBoundingClientRect();
  const isInsideSobre = rect.top <= 0 && rect.bottom >= window.innerHeight;
  if (!isInsideSobre) return;

  isScrolling = true;
  setTimeout(() => isScrolling = false, 300); // tempo de espera para liberar novo scroll

  if (event.deltaY > 0 && currentIndex < total - 1) {
    currentIndex++;
    setActive(customOrder[currentIndex]);
  } else if (event.deltaY < 0 && currentIndex > 0) {
    currentIndex--;
    setActive(customOrder[currentIndex]);
  }
});

// Bloqueio de scroll por teclado
window.addEventListener('keydown', preventScrollKeys, { passive: false });

// Bloqueio de scroll por touch
window.addEventListener('touchmove', preventTouchScroll, { passive: false });

function preventScrollKeys(e) {
  const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40]; // space, page up/down, arrows
  if (document.body.classList.contains('no-scroll') && keys.includes(e.keyCode)) {
    e.preventDefault();
  }
}

function preventTouchScroll(e) {
  if (document.body.classList.contains('no-scroll')) {
    e.preventDefault();
  }
}

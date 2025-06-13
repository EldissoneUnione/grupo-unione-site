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

    function isInsideSobre() {
      const rect = sobreSection.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom >= window.innerHeight;
    }

    function lockScroll() {
      sobreSection.classList.add('scroll-lock');
      body.style.overflow = 'hidden';
    }

    function unlockScroll() {
      sobreSection.classList.remove('scroll-lock');
      body.style.overflow = '';
    }

    function handleScroll(direction) {
      if (!isInsideSobre() || isScrolling) return;

      lockScroll();

      if (direction === 'down' && currentIndex < total - 1) {
        smoothScrollTo(currentIndex + 1);
      } else if (direction === 'up' && currentIndex > 0) {
        smoothScrollTo(currentIndex - 1);
      }
    }

    // Monitorar entrada e saída da seção
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        unlockScroll();
      }
    }, { threshold: 0.1 });

    observer.observe(sobreSection);

    // Eventos de scroll
    window.addEventListener('wheel', (e) => {
      if (isInsideSobre()) {
        e.preventDefault();
        handleScroll(e.deltaY > 0 ? 'down' : 'up');
      }
    }, { passive: false });

    let touchStartY = 0;
    window.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
    }, { passive: false });

    window.addEventListener('touchmove', (e) => {
      if (isInsideSobre()) e.preventDefault();
    }, { passive: false });

    window.addEventListener('touchend', (e) => {
      const deltaY = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) > 30 && isInsideSobre()) {
        handleScroll(deltaY > 0 ? 'down' : 'up');
      }
    }, { passive: false });
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

createSegments();

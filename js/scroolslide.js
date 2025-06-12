document.addEventListener('DOMContentLoaded', function () {
  const icons = document.querySelectorAll('.icon-item');
  const slices = document.querySelectorAll('.span');
  const centerInfo = document.getElementById('center-info');
  const total = slices.length;
  const customOrder = [4, 3, 2, 1, 0, 5]; // ordem personalizada
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
    updateHighlight(realIndex); // mantém os segmentos SVG sincronizados
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
        setTimeout(() => isScrolling = false, 300);

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
      setTimeout(() => isScrolling = false, 300);

      if (event.deltaY > 0 && currentIndex < total - 1) {
        currentIndex++;
      } else if (event.deltaY < 0 && currentIndex > 0) {
        currentIndex--;
      }
      setActive(currentIndex);
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

  setActive(0);
  setupWheelEvent();
  setupSwipeEvents();
});


// === SVG Segmentos Dinâmicos ===
const g = document.getElementById("segments");
const totalSegments = 6;
const radius = 80;
const thickness = 20;
const center = 100;
let segments = [];

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

function updateHighlight(index) {
  segments.forEach((seg, i) => {
    seg.setAttribute("fill", i === index ? "#c62828" : "#ddd");
  });

  const icons = document.querySelectorAll(".icon-item");
  icons.forEach((icon, i) => {
    icon.classList.toggle("active", i === index);
  });
}

// Criar segmentos
createSegments();

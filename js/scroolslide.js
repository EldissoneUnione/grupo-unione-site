const icons = document.querySelectorAll('.icon-item');
const centerInfo = document.getElementById('center-info');
const sobreSection = document.querySelector('.sobre-container');
const total = icons.length;
let currentIndex = 0;
let isScrolling = false;
let scrollLocked = true;

const info = [
  { title: '+50 milhões', desc: 'investidos' },
  { title: 'Internacionalização', desc: 'Presença global' },
  { title: 'Prêmios', desc: 'Reconhecimentos' },
  { title: 'Investimentos', desc: 'Expansão' },
  { title: 'Projetos', desc: 'Diversificados' },
  { title: 'Pessoas', desc: 'Equipe' }
];

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

function setActive(index) {
  icons.forEach((icon, i) => {
    icon.classList.toggle('active', i === index);
  });
  centerInfo.innerHTML = `<h1>${info[index].title}</h1><p>${info[index].desc}</p>`;
  updateHighlight(index);
}

function updateHighlight(iconIndex) {
  const segmentIndex = iconToSegmentMap[iconIndex];
  segments.forEach((seg, i) => seg.setAttribute("fill", i === segmentIndex ? "#c62828" : "#ddd"));
  icons.forEach((icon, i) => icon.classList.toggle("active", i === iconIndex));
}

function lockScroll() {
  if (!scrollLocked) {
    scrollLocked = true;
    document.body.style.overflow = 'hidden';
    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });
    document.addEventListener('keydown', preventKeyScroll, { passive: false });
  }
}

function unlockScroll() {
  if (scrollLocked) {
    scrollLocked = false;
    document.body.style.overflow = '';
    document.removeEventListener('wheel', preventScroll);
    document.removeEventListener('touchmove', preventScroll);
    document.removeEventListener('keydown', preventKeyScroll);
  }
}

function preventScroll(e) {
  e.preventDefault();
}

function preventKeyScroll(e) {
  const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', ' '];
  if (keys.includes(e.key)) {
    e.preventDefault();
  }
}

function isSobreContainerCentered() {
  const rect = sobreSection.getBoundingClientRect();
  const middle = window.innerHeight / 2;
  return rect.top <= middle && rect.bottom >= middle;
}

window.addEventListener('wheel', (e) => {
  if (!isSobreContainerCentered() || isScrolling) return;

  e.preventDefault();
  isScrolling = true;

  const scrollingDown = e.deltaY > 0;
  const scrollingUp = e.deltaY < 0;

  if (scrollingDown && currentIndex < total - 1) {
    currentIndex++;
    setActive(currentIndex);
  } else if (scrollingUp && currentIndex > 0) {
    currentIndex--;
    setActive(currentIndex);
  }

  // Libera o scroll no início e fim
  if (currentIndex === total - 1 || currentIndex === 0) {
    unlockScroll();
  } else {
    lockScroll();
  }

  setTimeout(() => isScrolling = false, 500);
}, { passive: false });

window.addEventListener('scroll', () => {
  if (isSobreContainerCentered() && currentIndex !== 0 && currentIndex !== total - 1) {
    lockScroll();
  } else {
    unlockScroll();
  }
});

// Hover ativa ícone correspondente
icons.forEach((icon, index) => {
  icon.addEventListener('mouseenter', () => {
    currentIndex = index;
    setActive(index);
  });
});

// Inicialização
createSegments();
setActive(0);
lockScroll();

// Aplicar transições suaves
icons.forEach(icon => {
  icon.style.transition = 'all 0.5s ease-in-out';
});

segments.forEach(segment => {
  segment.style.transition = 'all 0.5s ease-in-out';
});

centerInfo.style.transition = 'all 0.5s ease-in-out';
const donutData = [
  { name: 'áreas de negócio', value: 10, percent: 12, color: ' #f88703' },
  { name: 'hectares', value: 23, percent: 400, color: '#cf770f' },
  { name: 'milhões de dólares <br> investidos', value: 40, percent: 30, color: '#d3c50d' },
  { name: 'mil refeições servidas', value: 10, percent: 300, color: '#e6d53e' },
  { name: 'Colaboradores', value: 36, percent: 1000, color: '#ffeb68' },
  { name: 'Clientes e parceiros', value: 32, percent: 5000, color: '#ffa95a' }
];

const total = donutData.reduce((acc, cur) => acc + cur.value, 0);
const radius = 50;
const circumference = 2 * Math.PI * radius;
const svg = document.querySelector('svg.donut-chart');
const donutPercent = document.getElementById('donut-percent');
const donutDesc = document.getElementById('donut-desc');
let offset = 0;

const overlapFix = 2.5;
let lastActive = null;

const initialActiveIndex = 3; // Pode mudar para 0-6 conforme necessário

donutData.forEach((seg, index) => {
  const percent = seg.value / total;
  const dashLength = (percent * circumference) + overlapFix;

  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute('cx', '60');
  circle.setAttribute('cy', '60');
  circle.setAttribute('r', radius);
  circle.setAttribute('fill', 'none');
  circle.setAttribute('stroke', seg.color);
  circle.setAttribute('stroke-width', '18');
  circle.setAttribute('stroke-dasharray', `0 ${circumference}`);
  circle.setAttribute('stroke-dashoffset', -offset.toFixed(2));
  circle.setAttribute('data-name', seg.name);
  circle.setAttribute('data-value', seg.value);
  circle.setAttribute('data-dasharray', `${dashLength.toFixed(2)} ${circumference}`);
  circle.setAttribute('data-dashoffset', -offset.toFixed(2));
  circle.classList.add(`segment`);

  if (index === initialActiveIndex) {
    circle.classList.add('active');
    lastActive = { percent: Math.round(seg.percent), name: seg.name };
  }

  circle.addEventListener('mouseover', () => {
    svg.querySelectorAll('circle.segment.active').forEach(c => c.classList.remove('active'));
    circle.classList.add('active');
    donutPercent.textContent = `+${Math.round(seg.percent)}`;
    donutDesc.innerHTML = seg.name;
    lastActive = { percent: Math.round(seg.percent), name: seg.name };
    svg.appendChild(circle);
  });

  circle.addEventListener('mouseout', () => {
    // Não faz nada no mouseout, mantém o último segmento ativo
  });

  svg.appendChild(circle);
  offset += dashLength - overlapFix;
});

donutPercent.textContent = `+${Math.round(donutData[initialActiveIndex].percent)}`;
donutDesc.innerHTML = donutData[initialActiveIndex].name;

const style = document.createElement('style');
style.innerHTML = `
  .segment.active { 
    stroke-width: 19; 
    r: 50.4; 
    filter: drop-shadow(1px 1px 1px rgba(29, 29, 29, 0.4)); 
    opacity: 1; 
    cursor: pointer; 
  }
  
  /* Estilo inicial para segmentos não ativos */
  .segment:not(.active) {
    opacity: 0.8;
  }
`;
document.head.appendChild(style);

const circles = svg.querySelectorAll('circle');

const drawSegmentsSequentially = async () => {
  for (const [index, c] of circles.entries()) {
    const dashArray = c.getAttribute('data-dasharray');
    const dashOffset = c.getAttribute('data-dashoffset');

    c.setAttribute('stroke-dasharray', `0 ${dashArray.split(' ')[0]}`);
    c.setAttribute('stroke-dashoffset', dashOffset);
    c.style.opacity = '1';
    c.style.transition = 'stroke-dasharray 1.2s cubic-bezier(0.4, 0, 0.2, 1)';

    await new Promise(resolve => {
      setTimeout(() => {
        c.setAttribute('stroke-dasharray', dashArray);
        
        if (index === initialActiveIndex) {
          c.classList.add('active');
        }
        
        setTimeout(resolve, 100);
      }, 80);
    });
  }
};

const resetSegments = () => {
  circles.forEach(c => {
    const dashArray = c.getAttribute('data-dasharray');
    const dashOffset = c.getAttribute('data-dashoffset');
    c.setAttribute('stroke-dasharray', `0 ${dashArray.split(' ')[1]}`);
    c.setAttribute('stroke-dashoffset', dashOffset);
    c.style.opacity = '1';
    
    const circleIndex = Array.from(circles).indexOf(c);
    if (circleIndex === initialActiveIndex) {
      c.classList.add('active');
    } else {
      c.classList.remove('active');
    }
  });
  
  // Restaurar texto inicial
  donutPercent.textContent = `+${Math.round(donutData[initialActiveIndex].percent)}`;
  donutDesc.innerHTML = donutData[initialActiveIndex].name;
  lastActive = { 
    percent: Math.round(donutData[initialActiveIndex].percent), 
    name: donutData[initialActiveIndex].name 
  };
};

const observerNumber = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      drawSegmentsSequentially();
    } else {
      resetSegments();
    }
  });
}, { threshold: 0.5 });

observerNumber.observe(svg);

// Função adicional para mudar o segmento ativo programaticamente
function setActiveSegment(index) {
  if (index >= 0 && index < donutData.length) {
    circles.forEach((c, i) => {
      if (i === index) {
        c.classList.add('active');
        lastActive = { 
          percent: Math.round(donutData[index].percent), 
          name: donutData[index].name 
        };
        donutPercent.textContent = `+${Math.round(donutData[index].percent)}`;
        donutDesc.innerHTML = donutData[index].name;
        svg.appendChild(c);
      } else {
        c.classList.remove('active');
      }
    });
  }
}
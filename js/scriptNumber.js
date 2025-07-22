const donutData = [
  { name: 'áreas de negócio', value: 10, percent: 12, color: '#77dd77' },
  { name: 'Projectos de Inpacto social', value: 20, percent: 500, color: '#ceaabe' },
  { name: 'Projectos de Inpacto social', value: 3, percent: 500, color: '#ceaabe' },
  { name: 'milhões de dólares <br> já alocados em expansão', value: 50, percent: 50, color: '#1e668d' },
  { name: 'Colaboradores', value: 8, percent: 1000, color: '#0a3d91' },
  { name: 'Colaboradores', value: 12, percent: 1000, color: '#0a3d91' },
  { name: 'Colaboradores', value: 7, percent: 1000, color: '#0a3d91' },
  { name: 'Colaboradores', value: 9, percent: 1000, color: '#0a3d91' },
  { name: 'Clientes e parceiros', value: 6, percent: 5000, color: '#ffb347' },
  { name: 'Clientes e parceiros', value: 8, percent: 5000, color: '#ffb347'},
  { name: 'Clientes e parceiros', value: 15, percent: 5000, color: '#ffb347' },
  { name: 'Clientes e parceiros', value: 3, percent: 5000, color: '#ffb347' }
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

donutData.forEach((seg) => {
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

  circle.addEventListener('mouseover', () => {
    svg.querySelectorAll('circle.segment.active').forEach(c => c.classList.remove('active'));
    circle.classList.add('active');
    donutPercent.textContent = `+${seg.percent.toFixed(1)}`;
    donutDesc.innerHTML = seg.name;
    lastActive = { percent: seg.percent.toFixed(1), name: seg.name };
    svg.appendChild(circle);
  });

  circle.addEventListener('mouseout', () => {
    circle.classList.add('active');
    if (lastActive) {
      donutPercent.textContent = `+${lastActive.percent}`;
      donutDesc.innerHTML = lastActive.name;
    }
  });

  svg.appendChild(circle);
  offset += dashLength - overlapFix;
});

const style = document.createElement('style');
style.innerHTML = `.segment.active { stroke-width: 19; r: 50.4; filter: drop-shadow(1px 1px 1px rgba(29, 29, 29, 0.4)); opacity: 1; cursor: pointer; }`;
document.head.appendChild(style);

const circles = svg.querySelectorAll('circle');

const drawSegmentsSequentially = async () => {
  for (const c of circles) {
    const dashArray = c.getAttribute('data-dasharray');
    const dashOffset = c.getAttribute('data-dashoffset');

    c.setAttribute('stroke-dasharray', `0 ${dashArray.split(' ')[0]}`);
    c.setAttribute('stroke-dashoffset', dashOffset);
    c.style.opacity = '1';
    c.style.transition = 'stroke-dasharray 1.2s cubic-bezier(0.4, 0, 0.2, 1)';

    await new Promise(resolve => {
      setTimeout(() => {
        c.setAttribute('stroke-dasharray', dashArray);
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
  });
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

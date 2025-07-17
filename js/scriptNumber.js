document.addEventListener('DOMContentLoaded', () => {
    const donutData = [
        { name: 'Saúde e bem estar', value: 10 },
        { name: 'Setor 2', value: 20, },
        { name: 'Environment, Sustainable<br>Natural Resources', value: 3 },
        { name: 'Setor 4', value: 5},
        { name: 'Setor 5', value: 8 },
        { name: 'Setor 6', value: 12 },
        { name: 'Setor 7', value: 7 },
        { name: 'Setor 8', value: 9 },
        { name: 'Setor 9', value: 6 },
        { name: 'Setor 10', value: 8 },
        { name: 'Setor 11', value: 5 },
        { name: 'Setor 12', value: 3 }
    ];

    const total = donutData.reduce((acc, cur) => acc + cur.value, 0);
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const svg = document.querySelector('svg.donut-chart');
    let offset = 0;

    const overlapFix = 2.5;

    const donutPercent = document.getElementById('donut-percent');
    const donutDesc = document.getElementById('donut-desc');

    let lastActive = null;

    donutData.forEach((seg, i) => {
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
            donutPercent.textContent = `${((seg.value / total) * 100).toFixed(1)}%`;
            donutDesc.innerHTML = seg.name;
            lastActive = { percent: ((seg.value / total) * 100).toFixed(1), name: seg.name };

            svg.appendChild(circle);
        });

        circle.addEventListener('mouseout', () => {
            circle.classList.add('active');
            if (lastActive) {
                donutPercent.textContent = `${lastActive.percent}%`;
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

            c.setAttribute('stroke-dasharray', `0 ${dashArray.split(' ')[1]}`);
            c.setAttribute('stroke-dashoffset', dashOffset);
            c.style.opacity = '1';
            c.style.transition = 'stroke-dasharray 1.2s cubic-bezier(0.4, 0, 0.2, 1)';

            await new Promise(resolve => {
              setTimeout(() => {
                c.setAttribute('stroke-dasharray', dashArray);
                setTimeout(resolve, 50); 
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

});

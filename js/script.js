const control = document.getElementById("direction-toggle");
const marquees = document.querySelectorAll(".marquee");
const wrapper = document.querySelector(".wrapper");
/*
control.addEventListener("click", () => {
  control.classList.toggle("toggle--vertical");
  wrapper.classList.toggle("wrapper--vertical");
  [...marquees].forEach((marquee) =>
    marquee.classList.toggle("marquee--vertical")
  );
});
*/

const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.rotate-on-scroll');
  const spans = container.querySelectorAll('.span');
  const total = spans.length;

  let currentIndex = 0;
  let isScrolling = false;

  function calculateSizes() {
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 768;

    const containerSize = isMobile ? 300 : 450;
    const spanSize = isMobile ? 100 : 150;

    const centerX = containerSize / 2;
    const centerY = containerSize / 2;
    const adjustedRadius = (containerSize / 2) - (spanSize / 2);

    // Define o tamanho do container dinamicamente
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    spans.forEach((span, index) => {
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

  function updateSize() {
    spans.forEach((span, index) => {
      const isActive = index === currentIndex;
      span.classList.toggle('grow', isActive);

      const items = [
        ".pri", ".pri1", ".pri2", ".pri3", ".pri4", ".pri5"
      ].map(sel => document.querySelector(sel));

      items.forEach((item, i) => {
        if (item) item.classList.toggle('activeu', i === index);
      });
    });

    if (currentIndex < total - 1) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  function setupSwipeEvents() {
    let touchStartY = 0;

    window.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
    });

    window.addEventListener('touchend', (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) > 50 && !isScrolling) {
        isScrolling = true;
        setTimeout(() => isScrolling = false, 200);

        if (deltaY > 0 && currentIndex < total - 1) {
          currentIndex++;
        } else if (deltaY < 0 && currentIndex > 0) {
          currentIndex--;
        }
        updateSize();
      }
    });
  }

  function setupWheelEvent() {
    window.addEventListener('wheel', (event) => {
      if (isScrolling) return;

      isScrolling = true;
      setTimeout(() => isScrolling = false, 200);

      if (event.deltaY > 0 && currentIndex < total - 1) {
        currentIndex++;
        updateSize();
      } else if (event.deltaY < 0 && currentIndex > 0) {
        currentIndex--;
        updateSize();
      }
    });
  }

  window.addEventListener('resize', () => {
    calculateSizes();
    updateSize();
  });

  calculateSizes();
  updateSize();
  setupWheelEvent();
  setupSwipeEvents();
});


function preventScrollKeys(e) {
  const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40]; // space, page up/down, arrows
  if (keys.includes(e.keyCode)) {
    e.preventDefault();
  }
}

function preventTouchScroll(e) {
  if (document.body.classList.contains('no-scroll')) {
    e.preventDefault();
  }
}

// Adiciona os listeners globais
window.addEventListener('keydown', preventScrollKeys, { passive: false });
window.addEventListener('touchmove', preventTouchScroll, { passive: false });


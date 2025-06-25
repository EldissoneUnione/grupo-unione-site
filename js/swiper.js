document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll(".slider .item");
  const next = document.getElementById('nextBtn');
  const prev = document.getElementById('prevBtn');
  const dotsContainer = document.querySelector('.swiper-pagination-slid');
  const slider = document.querySelector('.slider');
  const areasSection = document.querySelector('.areas-section');

  let active = 2;

  function generateDots() {
    dotsContainer.innerHTML = '';
    items.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = `dot ${index === active ? 'active' : ''}`;
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-selected', index === active ? 'true' : 'false');
      dot.setAttribute('aria-label', `Slide ${index + 1}`);
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === active);
      dot.setAttribute('aria-selected', i === active ? 'true' : 'false');
    });
  }

  function loadShow() {
    let stt = 0;
    items.forEach(item => {
      item.style.transform = '';
      item.style.zIndex = '';
      item.style.filter = '';
      item.style.opacity = '0';
    });

    items[active].style.transform = 'none';
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    for (let i = active + 1; i < items.length; i++) {
      stt++;
      items[i].style.transform = `translateX(${250 * stt}px) scale(${1 - 0.2 * stt}) rotateY(-1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = 'blur(1px)';
      items[i].style.opacity = stt > 2 ? 0 : 0.7;
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      items[i].style.transform = `translateX(${-250 * stt}px) scale(${1 - 0.2 * stt}) rotateY(1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = 'blur(1px)';
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    updateDots();
  }

  next.onclick = () => {
    if (active + 1 < items.length) {
      active++;
      loadShow();
    }
  };

  prev.onclick = () => {
    if (active - 1 >= 0) {
      active--;
      loadShow();
    }
  };

  dotsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dot')) {
      const index = [...dotsContainer.children].indexOf(e.target);
      if (index !== -1) {
        active = index;
        loadShow();
      }
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && active + 1 < items.length) {
      active++;
      loadShow();
    }
    if (e.key === 'ArrowLeft' && active - 1 >= 0) {
      active--;
      loadShow();
    }
  });

  let startX = 0;
  let isDragging = false;
  const dragThreshold = 50;

  slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const diff = e.pageX - startX;
    if (Math.abs(diff) > dragThreshold) {
      if (diff < 0 && active + 1 < items.length) {
        active++;
      } else if (diff > 0 && active - 1 >= 0) {
        active--;
      }
      isDragging = false;
      loadShow();
    }
  });

  slider.addEventListener('mouseup', () => isDragging = false);
  slider.addEventListener('mouseleave', () => isDragging = false);

  let startTouchX = 0;

  slider.addEventListener('touchstart', (e) => {
    startTouchX = e.touches[0].clientX;
  });

  slider.addEventListener('touchmove', (e) => {
    const diff = e.touches[0].clientX - startTouchX;
    if (Math.abs(diff) > dragThreshold) {
      if (diff < 0 && active + 1 < items.length) {
        active++;
      } else if (diff > 0 && active - 1 >= 0) {
        active--;
      }
      loadShow();
      startTouchX = e.touches[0].clientX;
    }
  });

  // Scroll travado dentro da areas-section
  let lastScrollTime = 0;
  const scrollCooldown = 300;
  let isScrollLocked = false;

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isScrollLocked = true;
      } else {
        isScrollLocked = false;
      }
    });
  }, { threshold: 0.5 });

  if (areasSection) {
    sectionObserver.observe(areasSection);
  }

  window.addEventListener('wheel', (e) => {
    if (!isScrollLocked) return;

    const now = Date.now();
    if (now - lastScrollTime < scrollCooldown) return;

    const goingDown = e.deltaY > 0;
    const goingUp = e.deltaY < 0;
    const isAtEnd = active === items.length - 1;
    const isAtStart = active === 0;

    let handled = false;

    if (goingDown && !isAtEnd) {
      active++;
      loadShow();
      handled = true;
    } else if (goingUp && !isAtStart) {
      active--;
      loadShow();
      handled = true;
    }

    if ((goingDown && isAtEnd) || (goingUp && isAtStart)) {
      isScrollLocked = false;
    }

    if (handled || isScrollLocked) {
      e.preventDefault();
      lastScrollTime = now;
    }
  }, { passive: false });

  generateDots();
  loadShow();
});

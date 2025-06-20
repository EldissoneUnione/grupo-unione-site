document.addEventListener('DOMContentLoaded', () => {
  let items = document.querySelectorAll(".slider .item");
  let next = document.getElementById('nextBtn');
  let prev = document.getElementById('prevBtn');
  const dotsContainer = document.querySelector('.swiper-pagination-slid');
  const slider = document.querySelector('.slider');

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

  function handleScrollLock() {
    if (active > 0 && active < items.length - 1) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
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
      items[i].style.transform = `translateX(${250 * stt}px) scale(${1 - 0.2 * stt}) perspective(18px) rotateY(-1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = 'blur(1px)';
      items[i].style.opacity = stt > 2 ? 0 : 0.7;
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      items[i].style.transform = `translateX(${-250 * stt}px) scale(${1 - 0.2 * stt}) perspective(18px) rotateY(1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = 'blur(1px)';
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    updateDots();
    handleScrollLock();
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
  let dragThreshold = 50;

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

  let scrollTimeout;
  window.addEventListener('wheel', (e) => {
    const goingDown = e.deltaY > 0;
    const goingUp = e.deltaY < 0;

    const shouldHandle =
      (goingDown && active < items.length - 1) ||
      (goingUp && active > 0);

    if (shouldHandle) {
      e.preventDefault();
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (goingDown && active + 1 < items.length) {
          active++;
          loadShow();
        } else if (goingUp && active - 1 >= 0) {
          active--;
          loadShow();
        }
      }, 50);
    }
  }, { passive: false });

  generateDots();
  loadShow();
});

document.addEventListener('DOMContentLoaded', () => {
  let card = document.querySelectorAll('.noticias-section .carousel-container-noticias .card-blog');
  let nextBtn = document.querySelector('.noticias-section .carousel-navigation .arrow.right');
  let prevBtn = document.querySelector('.noticias-section .carousel-navigation .arrow.left');
  const dotsContainerC = document.querySelector('.noticias-section .carousel-navigation .dots');
  const cardConteiner = document.querySelector('.carousel-container-noticias');

  let activeN = 1;

  function generateDots() {
    dotsContainerC.innerHTML = '';
    card.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = `dot ${index === activeN ? 'activeN' : ''}`;
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-selected', index === activeN ? 'true' : 'false');
      dot.setAttribute('aria-label', `Slide ${index + 1}`);
      dotsContainerC.appendChild(dot);
    });
  }

  function updateDots() {
    const dots = dotsContainerC.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('activeN', i === activeN);
      dot.setAttribute('aria-selected', i === activeN ? 'true' : 'false');
    });
  }

  function loadShow() {
    let stt = 0;
    card.forEach(item => {
      item.style.transform = '';
      item.style.zIndex = '';
      item.style.filter = '';
      item.style.opacity = '0';
    });

    card[activeN].style.transform = 'none';
    card[activeN].style.zIndex = 1;
    card[activeN].style.filter = 'none';
    card[activeN].style.opacity = 1;

    for (let i = activeN + 1; i < card.length; i++) {
      stt++;
      card[i].style.transform = `translateX(${450 * stt}px) scale(${1 - 0 * stt}) perspective(18px) rotateY(-0deg)`;
      card[i].style.zIndex = -stt;
      card[i].style.filter = 'blur(0px)';
      card[i].style.opacity = 1;
    }

    stt = 0;
    for (let i = activeN - 1; i >= 0; i--) {
      stt++;
      card[i].style.transform = `translateX(${-450 * stt}px) scale(${1 - 0 * stt}) perspective(18px) rotateY(0deg)`;
      card[i].style.zIndex = -stt;
      card[i].style.filter = 'blur(0px)';
      card[i].style.opacity = 1;
    }

    updateDots();
  }

  nextBtn.onclick = () => {
    if (activeN + 1 < card.length) {
      activeN++;
      loadShow();
    }
  };

  prevBtn.onclick = () => {
    if (activeN - 1 >= 0) {
      activeN--;
      loadShow();
    }
  };

  dotsContainerC.addEventListener('click', (e) => {
    if (e.target.classList.contains('dot')) {
      const index = [...dotsContainerC.children].indexOf(e.target);
      if (index !== -1) {
        activeN = index;
        loadShow();
      }
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && activeN + 1 < card.length) {
      activeN++;
      loadShow();
    }
    if (e.key === 'ArrowLeft' && activeN - 1 >= 0) {
      activeN--;
      loadShow();
    }
  });

  let startXX = 0;
  let isDraggingg = false;
  let dragThresholdd = 50;

  cardConteiner.addEventListener('mousedown', (e) => {
    isDraggingg = true;
    startXX = e.pageX;
  });

  cardConteiner.addEventListener('mousemove', (e) => {
    if (!isDraggingg) return;
    const diff = e.pageX - startXX;
    if (Math.abs(diff) > dragThresholdd) {
      if (diff < 0 && activeN + 1 < card.length) {
        activeN++;
      } else if (diff > 0 && activeN - 1 >= 0) {
        activeN--;
      }
      isDraggingg = false;
      loadShow();
    }
  });

  cardConteiner.addEventListener('mouseup', () => isDraggingg = false);
  cardConteiner.addEventListener('mouseleave', () => isDraggingg = false);

  let startTouchXX = 0;

  cardConteiner.addEventListener('touchstart', (e) => {
    startTouchXX = e.touches[0].clientX;
  });

  cardConteiner.addEventListener('touchmove', (e) => {
    const diff = e.touches[0].clientX - startTouchXX;
    if (Math.abs(diff) > dragThresholdd) {
      if (diff < 0 && activeN + 1 < card.length) {
        activeN++;
      } else if (diff > 0 && activeN - 1 >= 0) {
        activeN--;
      }
      loadShow();
      startTouchXX = e.touches[0].clientX;
    }
  });

  generateDots();
  loadShow();

});

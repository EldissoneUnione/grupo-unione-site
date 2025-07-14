document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.card-baner');
    const dotsContainer = document.querySelector('.custom-selector');
    let currentSlide = 0;
    let slideInterval;
    const slideDelay = 5000;
    const maxVisibleDots = 6;

    function generateDots() {
        dotsContainer.innerHTML = '';
        const totalDots = Math.min(slides.length, maxVisibleDots);

        for (let index = 0; index < totalDots; index++) {
            const dot = document.createElement('button');
            dot.className = 'dot';
            dot.setAttribute('role', 'tab');
            dot.setAttribute('aria-selected', 'false');
            dot.addEventListener('click', () => {
                stopSlideShow();
               
                currentSlide = getRealIndex(index);
                showSlide(currentSlide);
                startSlideShow();
            });
            dotsContainer.appendChild(dot);
        }
        updateDots();
    }

    function getRealIndex(dotIndex) {
        let start = Math.max(0, currentSlide - Math.floor(maxVisibleDots / 2));
        if (start + maxVisibleDots > slides.length) {
            start = slides.length - maxVisibleDots;
        }
        start = Math.max(0, start);
        return start + dotIndex;
    }

    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.dot');
        let start = Math.max(0, currentSlide - Math.floor(maxVisibleDots / 2));
        if (start + maxVisibleDots > slides.length) {
            start = slides.length - maxVisibleDots;
        }
        start = Math.max(0, start);

        dots.forEach((dot, i) => {
            const slideIndex = start + i;
            dot.setAttribute('aria-label', `Slide ${slideIndex + 1}`);
            dot.classList.toggle('active', slideIndex === currentSlide);
            dot.setAttribute('aria-selected', slideIndex === currentSlide ? 'true' : 'false');

            const distance = Math.abs(slideIndex - currentSlide);
            let opacity = 1 - (distance * 0.2);
            if (opacity < 0.2) opacity = 0.2; 

            dot.style.opacity = opacity;
        });
    }

    function showSlide(index) {
        slides.forEach(slide => {
            slide.style.transition = 'opacity 0.5s ease-in-out';
            slide.classList.remove('active');
            slide.style.opacity = '0';
        });

        slides[index].classList.add('active');
        slides[index].style.opacity = '1';

        currentSlide = index;
        updateDots();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startSlideShow() {
        stopSlideShow();
        slideInterval = setInterval(nextSlide, slideDelay);
    }

    function stopSlideShow() {
        if (slideInterval) {
            clearInterval(slideInterval);
        }
    }

    let touchStartX = 0;
    let touchEndX = 0;
    const bannerCards = document.querySelector('.baner-cards');

    bannerCards.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    bannerCards.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            startSlideShow();
        }
    }

    generateDots();
    showSlide(0);
    startSlideShow();

    bannerCards.addEventListener('mouseenter', stopSlideShow);
    bannerCards.addEventListener('mouseleave', startSlideShow);
});

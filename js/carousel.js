document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel-container');
    const cards = carousel.querySelectorAll('.card');
    const dotsContainer = document.querySelector('.dots');
    const prevButton = document.querySelector('.arrow.left');
    const nextButton = document.querySelector('.arrow.right');
    let currentIndex = 2;
    let isAnimating = false;

    function centerCard(index) {
        const card = cards[index];
        const containerWidth = carousel.offsetWidth;
        const cardWidth = card.offsetWidth;
        const gap = 60;

        const scrollPosition = (index * (cardWidth + gap)) - ((containerWidth - cardWidth) / 2);

        carousel.scrollTo({
            left: Math.max(0, scrollPosition),
            behavior: 'smooth'
        });
    }

    function updateDots() {
        dotsContainer.innerHTML = '';

        cards.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = `dot ${index === currentIndex ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Ir para slide ${index + 1}`);
            dot.addEventListener('click', () => {
                if (isAnimating || index === currentIndex) return;
                updateCarousel(index);
            });
            dotsContainer.appendChild(dot);
        });
    }

    function updateCarousel(index) {
        if (isAnimating) return;
        isAnimating = true;

        cards.forEach(card => {
            card.classList.remove('active');
            card.style.opacity = '0.8';
            card.style.transform = 'scale(1) translateY(0)';
        });

        cards[index].classList.add('active');
        cards[index].style.opacity = '1';
        cards[index].style.transform = 'scale(1.1) translateY(-2px)';

        currentIndex = index;


        updateDots();


        centerCard(index);

        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }


    prevButton.addEventListener('click', () => {
        if (isAnimating) return;
        let newIndex = currentIndex - 1;
        if (newIndex < 0) newIndex = cards.length - 1;
        updateCarousel(newIndex);
    });

    nextButton.addEventListener('click', () => {
        if (isAnimating) return;
        let newIndex = currentIndex + 1;
        if (newIndex >= cards.length) newIndex = 0;
        updateCarousel(newIndex);
    });

    updateCarousel(currentIndex);

    window.addEventListener('resize', () => {
        centerCard(currentIndex);
    });
}); 
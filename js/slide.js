document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.card-baner');
    const dotsContainer = document.querySelector('.custom-selector');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const banner = document.querySelector('.baner');

    let currentSlide = 0;
    let slideInterval;
    const slideDelay = 6000;
    const maxVisibleDots = 6;

    const slideRoutes = {
        0: '/grupo',                // Slide 1: Grupo Unione
        1: '/empresas/quavi',       // Slide 2: Quavi (Agroindústria)
        2: '/empresas/mbt',         // Slide 3: MBT - Energia
        3: '/empresas/corpo-e-mente', // Slide 4: Corpo e Mente (Saúde)
        4: '/empresas/okukulanaua'  // Slide 5: Okukulanau (Educação Técnica)
    };

    const routes = {
        '/': 'index.html',
        '/grupo': 'pages/grupo.html',
        '/empresas': 'pages/empresas.html',
        '/areas-negocios': 'pages/areas-negocios.html',
        '/empreendimentos': 'pages/empreendimentos.html',
        '/investidores': 'pages/investidores.html',
        '/Contactos': 'pages/Contactos.html',
        '/empresas/mbt': 'pages/empresas/mbt.html',
        '/empresas/corpo-e-mente': 'pages/empresas/corpo-e-mente.html',
        '/empresas/quavi': 'pages/empresas/quavi.html',
        '/empresas/okukulanaua': 'pages/empresas/okukulanaua.html',
        '/empresas/tecnology': 'pages/empresas/tecnology.html',
        '/empresas/kalanaua': 'pages/empresas/kalanaua.html',
        '/empresas/fibra': 'pages/empresas/fibra.html',
        '/empresas/infraone': 'pages/empresas/infraone.html',
        '/empresas/metalangol': 'pages/empresas/metalangol.html',
        '/empresas/mater': 'pages/empresas/mater.html',
        '/empresas/unione': 'pages/empresas/unione.html'
    };

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
            dot.setAttribute('aria-label', `Ir para slide ${slideIndex + 1}`);
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
        banner.classList.remove('paused');
    }

    function stopSlideShow() {
        if (slideInterval) {
            clearInterval(slideInterval);
            banner.classList.add('paused');
        }
    }

    // Função para mostrar o loader
    function showLoader() {
        const loaderHTML = `
            <div class="loader">
                <div class="banter-loader">
                    <div class="banter-loader__box"></div>
                    <div class="banter-loader__box"></div>
                    <div class="banter-loader__box"></div>
                    <div class="banter-loader__box"></div>
                    <div class="banter-loader__box"></div>
                    <div class="banter-loader__box"></div>
                    <div class="banter-loader__box"></div>
                    <div class="banter-loader__box"></div>
                    <div class="banter-loader__box"></div>
                </div>
            </div>
        `;
        
        const loaderContainer = document.createElement('div');
        loaderContainer.innerHTML = loaderHTML;
        document.body.appendChild(loaderContainer);
    }

    function navigateTo(path) {
        const targetPage = routes[path];
        if (targetPage) {
            const currentPath = window.location.pathname;
            const isInPages = currentPath.includes('/pages/');
            const isInEmpresas = currentPath.includes('/empresas/');
            
            let basePath = '';
            if (isInEmpresas) {
                basePath = '../../';
            } else if (isInPages) {
                basePath = '../';
            }

            showLoader();
            
            setTimeout(() => {
                window.location.href = basePath + targetPage;
            }, 500);
        } else {
            console.error('Página não encontrada:', path);
        }
    }

    prevBtn.addEventListener('click', () => {
        stopSlideShow();
        prevSlide();
        startSlideShow();
    });

    nextBtn.addEventListener('click', () => {
        stopSlideShow();
        nextSlide();
        startSlideShow();
    });

    document.querySelectorAll('.btn-saiba-mais').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const route = slideRoutes[index];
            if (route) {
                navigateTo(route);
            } else {
                console.error('Rota não configurada para o slide:', index + 1);
                navigateTo('/empresas');
            }
        });
    });

    banner.addEventListener('mouseenter', stopSlideShow);
    banner.addEventListener('mouseleave', startSlideShow);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            stopSlideShow();
            prevSlide();
            startSlideShow();
        } else if (e.key === 'ArrowRight') {
            stopSlideShow();
            nextSlide();
            startSlideShow();
        } else if (e.key === 'Escape') {
            stopSlideShow();
        } else if (e.key === ' ') {
            if (slideInterval) {
                stopSlideShow();
            } else {
                startSlideShow();
            }
        }
    });

    generateDots();
    showSlide(0);
    startSlideShow();

    const navLinks = document.querySelectorAll('.nav-links a, .nav-links-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const path = link.getAttribute('href');
            if (path && path !== '#') {
                navigateTo(path);
            }
        });
    });

    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const path = link.getAttribute('href');
            if (path && path !== '#') {
                navigateTo(path);
            }
        });
    });
});
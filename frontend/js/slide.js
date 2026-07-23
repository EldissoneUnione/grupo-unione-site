document.addEventListener('DOMContentLoaded', async function () {
    const bannerContainer = document.querySelector('.baner-cards');
    const dotsContainer = document.querySelector('.custom-selector');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const banner = document.querySelector('.baner');

    let slides = [];
    let currentSlide = 0;
    let slideInterval;
    const slideDelay = 6000;
    const maxVisibleDots = 6;

    // Route map original mantido
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

    // ─── Carregar Banners da API ──────────────────────────────
    try {
        const response = await fetch('/api/v1/banners');
        if (response.ok) {
            const data = await response.json();
            const ativos = data.filter(b => b.ativo);

            if (ativos.length > 0) {
                // Limpar estáticos se API retornou algo
                bannerContainer.innerHTML = '';
                
                ativos.sort((a,b) => a.ordem - b.ordem).forEach((b, index) => {
                    const imgUrl = b.imagem.startsWith('data:') || b.imagem.startsWith('http') 
                        ? b.imagem 
                        : (b.imagem.startsWith('/') ? b.imagem : '/' + b.imagem);

                    const div = document.createElement('div');
                    div.className = 'e-con card-baner';
                    
                    // O titulo vindo da API pode ter HTML ou apenas texto. 
                    // No original era <h2 data-translate="...">...</h2>
                    div.innerHTML = `
                        <img src="${imgUrl}" alt="${b.titulo || 'Banner'}" loading="${index === 0 ? 'eager' : 'lazy'}">
                        <div class="txt">
                            <h2>${b.titulo || ''} ${b.subtitulo ? `<small>${b.subtitulo}</small>` : ''}</h2><br>
                            ${b.link ? `<button class="btn-saiba-mais" data-link="${b.link}">Saiba mais</button>` : ''}
                        </div>
                    `;
                    bannerContainer.appendChild(div);
                });
            }
        }
    } catch (error) {
        console.error('Erro ao carregar banners:', error);
        // Fallback usa os banners estáticos já presentes no HTML
    }

    // ─── Inicialização do Slider ──────────────────────────────
    slides = document.querySelectorAll('.card-baner');
    
    if(slides.length === 0) return; // Nada para animar

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

        // Animar texto usando a função do animar.js (se existir)
        if (typeof animateTxt === 'function') {
            const txtEl = slides[index].querySelector('.txt');
            if (txtEl) animateTxt(txtEl);
        }

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
        if(banner) banner.classList.remove('paused');
    }

    function stopSlideShow() {
        if (slideInterval) {
            clearInterval(slideInterval);
            if(banner) banner.classList.add('paused');
        }
    }

    // Navegação customizada
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

    // Event Listeners
    if(prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopSlideShow();
            prevSlide();
            startSlideShow();
        });
    }

    if(nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopSlideShow();
            nextSlide();
            startSlideShow();
        });
    }

    document.querySelectorAll('.btn-saiba-mais').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const route = e.target.getAttribute('data-link');
            if (route) {
                navigateTo(route);
            }
        });
    });

    if(banner) {
        banner.addEventListener('mouseenter', stopSlideShow);
        banner.addEventListener('mouseleave', startSlideShow);
    }

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

    // Iniciar
    generateDots();
    showSlide(0);
    startSlideShow();

    // Outros links de navegação
    const navLinks = document.querySelectorAll('.nav-links a, .nav-links-menu a, .dropdown-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const path = link.getAttribute('href');
            if (path && path !== '#') {
                navigateTo(path);
            }
        });
    });
});
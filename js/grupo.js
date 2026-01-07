document.addEventListener('DOMContentLoaded', function() {
    // ===== ANIMAÇÃO DO CEO =====
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        circle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // ===== SCROLL SUAVE PARA ÂNCORAS =====
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== LAZY LOADING PARA IMAGENS =====
    const lazyImages = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // ===== RESPONSIVIDADE DINÂMICA =====
    function adjustLayout() {
        const isMobile = window.innerWidth < 768;
        const historiaSection = document.querySelector('.historia');
        
        // Esconde/mostra a timeline baseado no tamanho da tela
        if (historiaSection) {
            if (isMobile) {
                historiaSection.style.display = 'none';
            } else {
                historiaSection.style.display = 'block';
            }
        }
        
        // Ajusta altura do hero
        const heroSection = document.querySelector('.hero-section.grupo-hero');
        if (heroSection) {
            heroSection.style.height = isMobile ? '60vh' : '70vh';
        }
    }
    
    // Executa no carregamento e no redimensionamento
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
    
    // ===== EFITO PARALLAX NO HERO =====
    function setupParallax() {
        const heroSection = document.querySelector('.card-baner-grupo');
        if (!heroSection) return;
        
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            
            if (heroSection.querySelector('img')) {
                heroSection.querySelector('img').style.transform = `translateY(${rate}px)`;
            }
        });
    }
    
    // Desativa parallax em mobile para performance
    if (window.innerWidth > 768) {
        setupParallax();
    }
    
    // ===== ANIMAÇÃO DE APARECIMENTO =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observa elementos para animação
    const elementsToAnimate = document.querySelectorAll('.mvv > div, .ceo-content, .grupo p');
    elementsToAnimate.forEach(el => observer.observe(el));
    
    // ===== FORMATAÇÃO DE DATAS =====
    const dateSpans = document.querySelectorAll('.info span');
    dateSpans.forEach(span => {
        const dateText = span.textContent;
        // Pode adicionar formatação de data aqui se necessário
    });
});
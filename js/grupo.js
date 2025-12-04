const candidaturaBtn = document.querySelector(".CandidaturaBtn");
const candidaturaModal = document.querySelector(".Candidatura");
const ofertaModal = document.querySelector(".oferta");
const tabButtons = document.querySelectorAll(".tab");


function handleTabClick(selectedButton) {

  tabButtons.forEach(btn => btn.classList.remove("active"));

  selectedButton.classList.add("active");

  const tabName = selectedButton.textContent.trim();

  if (tabName === "Candidatura Espontânea") {
    candidaturaModal.classList.add("active");
    ofertaModal.classList.remove("active");
  } else {
    candidaturaModal.classList.remove("active");
    ofertaModal.classList.add("active");
  }
}

tabButtons.forEach(button => {
  button.addEventListener("click", () => handleTabClick(button));
});

// JavaScript para funcionalidades da página grupo.html

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== TABS DO RECRUTAMENTO =====
    const tabs = document.querySelectorAll('.tab');
    const ofertaSection = document.querySelector('.oferta');
    const candidaturaSection = document.querySelector('.Candidatura');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove classe active de todas as tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Adiciona classe active à tab clicada
            this.classList.add('active');
            
            // Mostra a seção correspondente
            if (this.classList.contains('CandidaturaBtn')) {
                ofertaSection.classList.remove('active');
                candidaturaSection.classList.add('active');
            } else {
                candidaturaSection.classList.remove('active');
                ofertaSection.classList.add('active');
            }
        });
    });
    
    // ===== FORMULÁRIO DE CANDIDATURA =====
    const formCandidatura = document.querySelector('.form-candidatura');
    if (formCandidatura) {
        formCandidatura.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const inputs = this.querySelectorAll('input[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '#e0e0e0';
                }
            });
            
            // Validação de email
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value)) {
                    isValid = false;
                    emailInput.style.borderColor = 'red';
                }
            }
            
            if (isValid) {
                // Simulação de envio
                const submitBtn = this.querySelector('.enviar-btn');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Enviando...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    alert('Candidatura enviada com sucesso! Entraremos em contato em breve.');
                    formCandidatura.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            } else {
                alert('Por favor, preencha todos os campos obrigatórios corretamente.');
            }
        });
    }
    
    // ===== BOTÕES VER OFERTA =====
    const verOfertaBtns = document.querySelectorAll('.ver-oferta');
    verOfertaBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const ofertaItem = this.closest('.oferta-item');
            const titulo = ofertaItem.querySelector('h3').textContent;
            const local = ofertaItem.querySelector('small').textContent;
            const inicio = ofertaItem.querySelector('span').textContent;
            
            // Aqui você pode abrir um modal ou redirecionar para a página da oferta
            alert(`Detalhes da oferta:\n\n${titulo}\nLocal: ${local}\nInício: ${inicio}\n\n(Página de detalhes em desenvolvimento)`);
        });
    });
    
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
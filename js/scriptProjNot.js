
document.addEventListener('DOMContentLoaded', function () {

    if (window.PROJETOS_DATA) {
        const projetosRecentes = window.PROJETOS_DATA.slice(-3).reverse();
        const container = document.getElementById('projetos-cards');
        if (container) {
            container.innerHTML = projetosRecentes.map((p, i) => `
        <div class="card-project" data-aos="fade-down" data-aos-delay="${i * 200}" data-id="${p.id}">
          <img src="${p.img}" alt="${p.titulo}">
          <div class="card-project-overlay">
            <h3>${p.titulo}</h3>
            <button class="btn ver-mais-projeto"><span class="text">ver mais</span><span>ver mais</span></button>
          </div>
        </div>
      `).join('');
            container.querySelectorAll('.ver-mais-projeto').forEach(btn => {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    const card = btn.closest('.card-project');
                    const id = parseInt(card.getAttribute('data-id'), 10);
                    const projeto = window.PROJETOS_DATA.find(p => p.id === id);
                    if (projeto) {
                        localStorage.setItem('projetoSelecionado', JSON.stringify(projeto));
                        window.location.href = 'pages/projeto.html';
                    }
                });
            });
        }
    }
});



document.addEventListener('DOMContentLoaded', function () {

    inicializarCarouselNoticias();

    if (window.PROJETOS_DATA) {
        const projetosRecentes = window.PROJETOS_DATA.slice(-3).reverse();
        const container = document.getElementById('projetos-cards');
        if (container) {
            container.innerHTML = projetosRecentes.map((p, i) => `
        <div class="card-project" data-aos="fade-down" data-aos-delay="${i * 200}" data-id="${p.id}">
          <img src="${p.img}" alt="${p.titulo}">
          <div class="card-project-overlay">
            <h3>${p.titulo}</h3>
            <button class="btn ver-mais-projeto"><span class="text">ver mais</span><span>ver mais</span></button>
          </div>
        </div>
      `).join('');
            container.querySelectorAll('.ver-mais-projeto').forEach(btn => {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    const card = btn.closest('.card-project');
                    const id = parseInt(card.getAttribute('data-id'), 10);
                    const projeto = window.PROJETOS_DATA.find(p => p.id === id);
                    if (projeto) {
                        localStorage.setItem('projetoSelecionado', JSON.stringify(projeto));
                        window.location.href = 'pages/projeto.html';
                    }
                });
            });
        }
    }
});

const NOTICIAS_CONFIG = {
    itemsPorPagina: 3,
    paginacao: true,
    navegacao: true,
    loop: false
};

let estadoNoticias = {
    paginaAtual: 0,
    totalPaginas: 0,
    todasNoticias: []
};

function inicializarCarouselNoticias() {
    if (!window.NOTICIAS_DATA || window.NOTICIAS_DATA.length === 0) return;
    
  
    estadoNoticias.todasNoticias = [...window.NOTICIAS_DATA]
        .sort((a, b) => b.id - a.id);
    
    estadoNoticias.totalPaginas = Math.ceil(
        estadoNoticias.todasNoticias.length / NOTICIAS_CONFIG.itemsPorPagina
    );
    
    renderizarPaginaNoticias(0);
    
    configurarEventosNavegacao();
    
    if (NOTICIAS_CONFIG.paginacao && estadoNoticias.totalPaginas > 1) {
        criarIndicadores();
    }
}

function renderizarPaginaNoticias(pagina) {
    const container = document.getElementById('noticias-cards');
    const nextBtn = document.getElementById('next-noticias');
    const prevBtn = document.getElementById('prev-noticias');

    if (!container) return;

    estadoNoticias.paginaAtual = pagina;

    const inicio = pagina * NOTICIAS_CONFIG.itemsPorPagina;
    const fim = inicio + NOTICIAS_CONFIG.itemsPorPagina;
    const noticiasPagina = estadoNoticias.todasNoticias.slice(inicio, fim);

    container.innerHTML = noticiasPagina.map((noticia, index) => `
        <div class="card-blog"  data-id="${noticia.id}">
            <img id="img-card" src="${noticia.img}" alt="${noticia.titulo}" loading="lazy">
            <section>
                <span>${noticia.data}</span>
                <h4>${noticia.titulo}</h4>
                <a href="#" class="btn-ver-mais">ver mais</a>
            </section>
        </div>
    `).join('');

    container.querySelectorAll('.card-blog').forEach(card => {
        card.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') e.preventDefault();
            const id = parseInt(card.getAttribute('data-id'), 10);
            const noticia = window.NOTICIAS_DATA.find(n => n.id === id);
            if (noticia) {
                localStorage.setItem('noticiaSelecionada', JSON.stringify(noticia));
                window.location.href = 'pages/noticia.html';
            }
        });
    });

    atualizarEstadoBotoes(nextBtn, prevBtn);

    atualizarIndicadores();

    atualizarContador();
}

function configurarEventosNavegacao() {
    const nextBtn = document.getElementById('next-noticias');
    const prevBtn = document.getElementById('prev-noticias');

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (estadoNoticias.paginaAtual < estadoNoticias.totalPaginas - 1) {
                renderizarPaginaNoticias(estadoNoticias.paginaAtual + 1);
                scrollParaTopoNoticias();
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (estadoNoticias.paginaAtual > 0) {
                renderizarPaginaNoticias(estadoNoticias.paginaAtual - 1);
                scrollParaTopoNoticias();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextBtn.click();
        } else if (e.key === 'ArrowLeft') {
            prevBtn.click();
        }
    });
}

function atualizarEstadoBotoes(nextBtn, prevBtn) {
    if (!nextBtn || !prevBtn) return;

    nextBtn.disabled = estadoNoticias.paginaAtual >= estadoNoticias.totalPaginas - 1;
    prevBtn.disabled = estadoNoticias.paginaAtual <= 0;
}

function criarIndicadores() {
    const container = document.getElementById('noticias-indicators');
    if (!container || estadoNoticias.totalPaginas <= 1) return;

    container.innerHTML = '';

    for (let i = 0; i < estadoNoticias.totalPaginas; i++) {
        const dot = document.createElement('div');
        dot.className = `indicator-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('data-page', i);
        dot.setAttribute('aria-label', `Ir para página ${i + 1}`);

        dot.addEventListener('click', () => {
            renderizarPaginaNoticias(i);
            scrollParaTopoNoticias();
        });

        container.appendChild(dot);
    }
}

function atualizarIndicadores() {
    const dots = document.querySelectorAll('.indicator-dot');
    dots.forEach((dot, index) => {
        if (index === estadoNoticias.paginaAtual) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function atualizarContador() {
    const counter = document.getElementById('noticias-counter');
    if (counter) {
        counter.textContent = `${estadoNoticias.paginaAtual + 1}/${estadoNoticias.totalPaginas}`;
    }
}

function scrollParaTopoNoticias() {
    const noticiasSection = document.getElementById('noticias');
    if (noticiasSection) {
        noticiasSection.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }
}

function configurarSwipe() {
    const container = document.getElementById('noticias-cards');
    if (!container) return;

    let touchStartX = 0;
    let touchEndX = 0;

    container.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            const nextBtn = document.getElementById('next-noticias');
            const prevBtn = document.getElementById('prev-noticias');

            if (diff > 0 && nextBtn && !nextBtn.disabled) {
                // Swipe para a esquerda (próximo)
                nextBtn.click();
            } else if (diff < 0 && prevBtn && !prevBtn.disabled) {
                // Swipe para a direita (anterior)
                prevBtn.click();
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    configurarSwipe();
});
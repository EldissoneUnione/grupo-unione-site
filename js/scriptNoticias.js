
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


function inicializarCarouselNoticias() {
    if (!window.NOTICIAS_DATA || window.NOTICIAS_DATA.length === 0) return;
    
    estadoNoticias.todasNoticias = [...window.NOTICIAS_DATA]
        .sort((a, b) => b.id - a.id);
    
    console.log('Notícias ordenadas (mais recentes primeiro):');
    estadoNoticias.todasNoticias.forEach((n, i) => {
        console.log(`${i + 1}. ID: ${n.id} - ${n.titulo.substring(0, 40)}...`);
    });
    
    estadoNoticias.totalPaginas = Math.ceil(
        estadoNoticias.todasNoticias.length / NOTICIAS_CONFIG.itemsPorPagina
    );  
    
}


function configurarEventosCards(container) {
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
}


// Configurar swipe para mobile
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


const getImgPath = (img) => {
    if (img.startsWith('/')) return img;
    if (img.startsWith('../')) return img;
    return '../' + img;
};

function inicializarPaginaNoticia() {
    const isNoticiaPage = window.location.pathname.includes('noticia.html');
    const containerOutras = document.getElementById('outras-noticias');
    
    if (!isNoticiaPage || !containerOutras) {
        return; 
    }

    const noticia = JSON.parse(localStorage.getItem('noticiaSelecionada') || '{}');
    if (noticia && noticia.id) {
        document.getElementById('noticia-img').src = getImgPath(noticia.img);
        document.getElementById('noticia-data').textContent = noticia.data;
        document.getElementById('noticia-titulo').textContent = noticia.titulo;
        document.getElementById('noticia-conteudo').innerHTML = noticia.conteudo;
        
        const outrasNoticias = window.NOTICIAS_DATA
            .filter(n => n.id !== noticia.id)
            .sort((a, b) => b.id - a.id); 

        console.log(`Carregando ${outrasNoticias.length} outras notícias (exceto ID ${noticia.id})`);

        if (outrasNoticias.length > 0) {
            containerOutras.innerHTML = outrasNoticias.map(n => `
                <div class="card-blog" data-id="${n.id}">
                    <img src="${getImgPath(n.img)}" alt="${n.titulo}">
                    <section>
                        <span>${n.data}</span>
                        <h4>${n.titulo}</h4>
                        <a href="#">ver mais</a>
                    </section>
                </div>
            `).join('');

            containerOutras.querySelectorAll('.card-blog').forEach(card => {
                card.addEventListener('click', function (e) {
                    if (e.target.tagName === 'A') e.preventDefault();
                    const id = parseInt(card.getAttribute('data-id'), 10);
                    const noticia = window.NOTICIAS_DATA.find(n => n.id === id);
                    if (noticia) {
                        localStorage.setItem('noticiaSelecionada', JSON.stringify(noticia));
                        window.location.href = 'noticia.html'; 
                    }
                });
            });

            containerOutras.style.height = 'auto';
            containerOutras.style.overflow = 'visible';
            containerOutras.style.flexWrap = 'wrap';
            containerOutras.style.justifyContent = 'center';
            containerOutras.style.gap = '40px';
            
        } else {
            containerOutras.innerHTML = `
                <div class="sem-outras-noticias" style="text-align: center; padding: 40px; width: 100%;">
                    <h3>Nenhuma outra notícia disponível no momento</h3>
                </div>
            `;
        }
    } else {
        console.warn('Nenhuma notícia selecionada. Redirecionando...');
        window.location.href = '../index.html';
    }
}

if (window.location.pathname.includes('noticia.html')) {
    document.addEventListener('DOMContentLoaded', inicializarPaginaNoticia);
}
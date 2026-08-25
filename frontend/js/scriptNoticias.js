document.addEventListener('DOMContentLoaded', async function () {

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
    
    // (A variável estadoNoticias já existe no contexto global se o outro script carregar primeiro, 
    // mas este ficheiro scriptNoticias.js às vezes é carregado em paralelo ou em vez do outro)
    if (typeof estadoNoticias === 'undefined') {
        window.estadoNoticias = { paginaAtual: 0, totalPaginas: 0, todasNoticias: [] };
    }
    
    estadoNoticias.todasNoticias = [...window.NOTICIAS_DATA].sort((a, b) => b.id - a.id);
    estadoNoticias.totalPaginas = Math.ceil(estadoNoticias.todasNoticias.length / (window.NOTICIAS_CONFIG?.itemsPorPagina || 3));  
}


function configurarEventosCards(container) {
    container.querySelectorAll('.card-blog').forEach(card => {
        card.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') e.preventDefault();
            const id = parseInt(card.getAttribute('data-id'), 10);
            const noticia = window.NOTICIAS_DATA.find(n => n.id === id);
            if (noticia) {
                localStorage.setItem('noticiaSelecionada', JSON.stringify(noticia));
                window.location.href = '/noticia?id=' + id;
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
    }, {passive: true});

    container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            const nextBtn = document.getElementById('next-noticias');
            const prevBtn = document.getElementById('prev-noticias');

            if (diff > 0 && nextBtn && !nextBtn.disabled) {
                nextBtn.click();
            } else if (diff < 0 && prevBtn && !prevBtn.disabled) {
                prevBtn.click();
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    configurarSwipe();
});


const getImgPath = (img) => {
    if (!img) return '';
    if (img.startsWith('data:') || img.startsWith('http')) return img;
    if (img.startsWith('/')) return img;
    if (img.startsWith('../')) return img;
    return '../' + img; // default fallback
};

const escapeAttr = (value = '') => String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

function normalizarImagemNoticia(imagem, index, noticia) {
    if (typeof imagem === 'string') {
        return {
            src: imagem,
            alt: `${noticia.titulo} - imagem ${index + 1}`,
        };
    }

    return {
        src: imagem.src || imagem.img || '',
        alt: imagem.alt || `${noticia.titulo} - imagem ${index + 1}`,
        legenda: imagem.legenda || '',
        aposParagrafo: Number.isInteger(imagem.aposParagrafo) ? imagem.aposParagrafo : null,
        destaque: Boolean(imagem.destaque),
    };
}

function criarImagemNoticiaHtml(imagem, index) {
    const classes = ['noticia-imagem-inline'];

    if (imagem.destaque || index === 0) {
        classes.push('noticia-imagem-destaque');
    } else if (index % 2 === 0) {
        classes.push('noticia-imagem-direita');
    } else {
        classes.push('noticia-imagem-esquerda');
    }

    return `
        <figure class="${classes.join(' ')}">
            <img src="${getImgPath(imagem.src)}" alt="${escapeAttr(imagem.alt)}" loading="lazy">
            ${imagem.legenda ? `<figcaption>${imagem.legenda}</figcaption>` : ''}
        </figure>
    `;
}


function renderizarConteudoNoticia(noticia) {
    // ── Novo formato: array de blocos JSON ──────────────────
    const blocosRaw = noticia.blocos;
    if (blocosRaw) {
        try {
            const blocos = typeof blocosRaw === 'string' ? JSON.parse(blocosRaw) : blocosRaw;
            if (Array.isArray(blocos) && blocos.length > 0) {
                return blocos.map(b => {
                    if (b.type === 'text') {
                        return `<p>${(b.content || '').replace(/\n/g, '</p><p>')}</p>`;
                    }
                    if (b.type === 'image' && (b.src || b.img)) {
                        return criarImagemNoticiaHtml(normalizarImagemNoticia(b, 0, noticia), 0);
                    }
                    return '';
                }).join('');
            }
        } catch (e) {
            console.error('Não foi possível ler os blocos da notícia:', e);
        }
    }

    // ── Fallback: formato antigo (galeria + conteúdo HTML) ──
    const imagens = Array.isArray(noticia.imagens)
        ? noticia.imagens.map((imagem, index) => normalizarImagemNoticia(imagem, index, noticia)).filter(imagem => imagem.src)
        : [];

    if (imagens.length === 0) {
        return noticia.conteudo || '';
    }

    const template = document.createElement('template');
    template.innerHTML = noticia.conteudo || '';
    const paragrafos = [...template.content.querySelectorAll('p')];

    if (paragrafos.length === 0) {
        return `${noticia.conteudo || ''}<div class="noticia-galeria-final">${imagens.map(criarImagemNoticiaHtml).join('')}</div>`;
    }

    imagens.forEach((imagem, index) => {
        const posicao = imagem.aposParagrafo || Math.round(((index + 1) * paragrafos.length) / (imagens.length + 1));
        const indiceParagrafo = Math.min(Math.max(posicao, 1), paragrafos.length) - 1;
        paragrafos[indiceParagrafo].insertAdjacentHTML('afterend', criarImagemNoticiaHtml(imagem, index));
    });

    return template.innerHTML;
}

async function carregarNoticiasAPI() {
    try {
        const response = await fetch('/api/v1/news');
        if (response.ok) {
            const data = await response.json();
            window.NOTICIAS_DATA = data.map(n => ({
                id: n.id,
                img: n.imagem,
                titulo: n.titulo,
                conteudo: n.conteudo,
                blocos: n.blocos,
                data: new Date(n.dataPublicacao).toLocaleDateString('pt-PT'),
                imagens: n.resumo && n.resumo.startsWith('[{') ? JSON.parse(n.resumo) : []
            }));
        }
    } catch(err) {
        console.error('Falha ao buscar notícias da API:', err);
    }
}

function isPaginaNoticia() {
    const path = window.location.pathname.replace(/\/$/, '');
    return path.endsWith('/noticia') || path.includes('noticia.html');
}

async function inicializarPaginaNoticia() {
    const containerOutras = document.getElementById('outras-noticias');
    
    if (!isPaginaNoticia() || !containerOutras) {
        return; 
    }

    // Garante que NOTICIAS_DATA está atualizado com o backend
    await carregarNoticiasAPI();

    const dataArray = window.NOTICIAS_DATA || [];
    const stored = JSON.parse(localStorage.getItem('noticiaSelecionada') || '{}');
    const idParam = parseInt(new URLSearchParams(window.location.search).get('id') || '', 10);
    const noticiaId = Number.isInteger(idParam) && idParam > 0 ? idParam : stored.id;
    // Preferir o registo da API: o clique na homepage gravava a notícia
    // sem os blocos de imagem, e o localStorage ficava desactualizado.
    const noticia = dataArray.find(n => n.id === noticiaId) || stored;

    if (noticia && noticia.id) {
        try {
            localStorage.setItem('noticiaSelecionada', JSON.stringify(noticia));
        } catch (e) {
            // Imagens em base64 podem exceder a quota do localStorage.
        }
        document.getElementById('noticia-img').src = getImgPath(noticia.img);
        
        const dataStr = noticia.data || '';
        document.getElementById('noticia-data').textContent = dataStr;
        document.getElementById('noticia-titulo').textContent = noticia.titulo;
        document.getElementById('noticia-conteudo').innerHTML = renderizarConteudoNoticia(noticia);
        
        const outrasNoticias = dataArray
            .filter(n => n.id !== noticia.id)
            .sort((a, b) => b.id - a.id)
            .slice(0, 3); // Mostrar apenas as 3 mais recentes

        if (outrasNoticias.length > 0) {
            containerOutras.innerHTML = outrasNoticias.map(n => `
                <div class="card-blog" data-id="${n.id}">
                    <img src="${getImgPath(n.img)}" alt="${n.titulo}">
                    <section>
                        <span>${n.data || ''}</span>
                        <h4>${n.titulo}</h4>
                        <a href="#">ver mais</a>
                    </section>
                </div>
            `).join('');

            containerOutras.querySelectorAll('.card-blog').forEach(card => {
                card.addEventListener('click', function (e) {
                    if (e.target.tagName === 'A') e.preventDefault();
                    const id = parseInt(card.getAttribute('data-id'), 10);
                    const nSeleccionada = dataArray.find(n => n.id === id);
                    if (nSeleccionada) {
                        localStorage.setItem('noticiaSelecionada', JSON.stringify(nSeleccionada));
                        window.location.href = '/noticia?id=' + id; 
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
        window.location.href = '/';
    }
}

if (isPaginaNoticia()) {
    document.addEventListener('DOMContentLoaded', inicializarPaginaNoticia);
}
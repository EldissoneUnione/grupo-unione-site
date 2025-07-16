
document.addEventListener('DOMContentLoaded', function () {
    if (window.NOTICIAS_DATA) {
        const noticiasRecentes = window.NOTICIAS_DATA.slice(-3).reverse();
        const container = document.getElementById('noticias-cards');
        if (container) {
            container.innerHTML = noticiasRecentes.map((n, i) => `
        <div class="card-blog" data-aos="fade-down" data-aos-delay="${i * 200}" data-id="${n.id}">
          <img id="img-card" src="${n.img}" alt="${n.titulo}">
          <section>
            <span>${n.data}</span>
            <h4>${n.titulo}</h4>
            <a href="#">ver mais</a>
          </section>
        </div>
      `).join('');
            // Clique nos cards
            container.querySelectorAll('.card-blog').forEach(card => {
                card.addEventListener('click', function (e) {
                    if (e.target.tagName === 'A') e.preventDefault();
                    const id = parseInt(card.getAttribute('data-id'), 10);
                    const noticia = window.NOTICIAS_DATA.find(n => n.id === id);
                    if (noticia) {
                        localStorage.setItem('noticiaSelecionada', JSON.stringify(noticia));
                        window.location.href = '/pages/noticia.html';
                    }
                });
            });
        }
    }

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
                        window.location.href = '/pages/projeto.html';
                    }
                });
            });
        }
    }
});


const getImgPath = (img) => {
  if (img.startsWith('/')) return img;
  if (img.startsWith('../')) return img;
  return '../' + img;
};

document.addEventListener('DOMContentLoaded', function () {
    const noticia = JSON.parse(localStorage.getItem('noticiaSelecionada') || '{}');
    if (noticia) {
        document.getElementById('noticia-img').src = getImgPath(noticia.img);
        document.getElementById('noticia-data').textContent = noticia.data;
        document.getElementById('noticia-titulo').textContent = noticia.titulo;
        document.getElementById('noticia-conteudo').innerHTML = noticia.conteudo;
    }

    const outrasNoticias = window.NOTICIAS_DATA.filter(n => n.id !== noticia.id);
    const container = document.getElementById('outras-noticias');
    container.innerHTML = outrasNoticias.map(n => `
      <div class="card-blog" data-id="${n.id}">
        <img src="${getImgPath(n.img)}" alt="${n.titulo}">
        <section>
          <span>${n.data}</span>
          <h4>${n.titulo}</h4>
          <a href="#">ver mais</a>
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
                window.location.href = '/pages/noticia.html';
            }
        });
    });

}); 
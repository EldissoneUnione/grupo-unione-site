document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card-blog').forEach(card => {
    card.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') e.preventDefault();

      const img = card.querySelector('img')?.src || '';
      const data = card.querySelector('span')?.textContent || '';
      const titulo = card.querySelector('h4')?.textContent || '';
      const conteudo = '';

      localStorage.setItem('noticiaSelecionada', JSON.stringify({ img, data, titulo, conteudo }));
      window.location.href = 'pages/noticia.html';
    });
  });

  loadShow();
});

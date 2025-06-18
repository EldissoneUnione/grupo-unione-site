const noticia = JSON.parse(localStorage.getItem('noticiaSelecionada'));
if (noticia) {
    document.getElementById('noticia-img').src = noticia.img;
    document.getElementById('noticia-img').alt = noticia.titulo;
    document.getElementById('noticia-data').textContent = noticia.data;
    document.getElementById('noticia-titulo').textContent = noticia.titulo;
    document.getElementById('noticia-conteudo').innerHTML = noticia.conteudo || '';
} else {
    document.getElementById('noticia-titulo').textContent = 'Notícia não encontrada.';
    document.getElementById('noticia-conteudo').textContent = '';
}
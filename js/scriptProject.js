const getImgPath = (img) => {
  if (img.startsWith('/')) return img;
  if (img.startsWith('../')) return img;
  return '../' + img;
};

document.addEventListener('DOMContentLoaded', function () {
    const projeto = JSON.parse(localStorage.getItem('projetoSelecionado') || '{}');
    if (projeto) {
        document.getElementById('projeto-img').src = getImgPath(projeto.img);
        document.getElementById('projeto-titulo').textContent = projeto.titulo;
        document.getElementById('projeto-conteudo').innerHTML = projeto.conteudo;
    }

    const outrosProjetos = window.PROJETOS_DATA.filter(p => p.id !== projeto.id);
    const container = document.getElementById('outros-projetos');
    container.innerHTML = outrosProjetos.map(p => `
      <div class="card-project" data-id="${p.id}">
        <img src="${getImgPath(p.img)}" alt="${p.titulo}">
        <div class="card-project-overlay">
          <h3>${p.titulo}</h3>
          <button class="btn"><span class="text">ver mais</span><span>ver mais</span></button>
        </div>
      </div>
    `).join('');
     

    container.querySelectorAll('.card-project').forEach(card => {
        card.addEventListener('click', function (e) {
            e.preventDefault();
            const id = parseInt(card.getAttribute('data-id'), 10);
            const projeto = window.PROJETOS_DATA.find(p => p.id === id);
            if (projeto) {
                localStorage.setItem('projetoSelecionado', JSON.stringify(projeto));
                window.location.href = '/pages/projeto.html';
            }
        });
    });
});

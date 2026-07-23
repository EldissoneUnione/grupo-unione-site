fetch('data/empresas.json')
  .then(response => response.json())
  .then(empresas => {
    const container = document.getElementById('empresas-container');
    empresas.forEach(empresa => {
      container.innerHTML += `
        <div class="empresa-card">
          <img src="${empresa.logo}" alt="${empresa.nome}" class="logo">
          <h3>${empresa.nome}</h3>
          <p>${empresa.descricao}</p>
          <p><strong>Setor:</strong> ${empresa.setor}</p>
          <p><strong>Localização:</strong> ${empresa.localizacao}</p>
          <a href="${empresa.website}" target="_blank">Visitar site</a>
        </div>
      `;
    });
  });
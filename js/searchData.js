document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('search-input');
    const searchBox = document.querySelector('.search-box');
  
    if (!searchInput || !searchBox) return;
  
    searchInput.addEventListener('input', function () {
      const query = searchInput.value.trim().toLowerCase();
      searchBox.innerHTML = '';
      if (query.length < 2) {
        // searchBox.style.display = 'none';
        return;
      }
      const results = window.SEARCH_DATA.filter(item =>
        item.title.toLowerCase().includes(query)
      );
      if (results.length === 0) {
        searchBox.innerHTML = '<div class="search-result">Nenhum resultado encontrado.</div>';
      } else {
        results.forEach(item => {
          const div = document.createElement('div');
          div.className = 'search-result';
          div.textContent = item.title;
          div.onclick = () => window.location.href = item.url;
          searchBox.appendChild(div);
        });
      }
      searchBox.style.display = 'block';
    });
  
    document.addEventListener('click', function (e) {
      if (!searchBox.contains(e.target) && e.target !== searchInput) {
        // searchBox.style.display = 'none';
      }
    });
  });


window.SEARCH_DATA = [
  { title: "Grupo Unione", url: "/pages/grupo.html" },
  { title: "O Grupo - Sobre", url: "/pages/grupo.html#sobre" },
  { title: "O Grupo - História", url: "/pages/grupo.html#historia" },
  { title: "O Grupo - Missão", url: "/pages/grupo.html#missao" },
  { title: "O Grupo - Visão", url: "/pages/grupo.html#visao" },
  { title: "O Grupo - Valores", url: "/pages/grupo.html#valores" },
  { title: "Empresas", url: "/pages/empresas.html" },
  { title: "Corpo e Mente", url: "/pages/empresas/corpo-e-mente.html" },
  { title: "Fibra", url: "/pages/empresas/mbt.html" },
  { title: "Okukulanaua", url: "/pages/empresas/okukulanaua.html" },
  { title: "Quavi", url: "/pages/empresas/quavi.html" },
  { title: "Unione", url: "/pages/empresas/unione.html" },
  { title: "MBT Energia", url: "/pages/empresas/mbt.html" },
  { title: "Kalanaua", url: "/pages/empresas/kalanaua.html" },
  { title: "Infraone", url: "/pages/empresas/infraone.html" },
  { title: "Metalangol", url: "/pages/empresas/metalangol.html" },
  { title: "Mater", url: "/pages/empresas/mater.html" },
  { title: "Tecnology", url: "/pages/empresas/tecnology.html" },
  { title: "Áreas de Negócios", url: "/pages/areas-negocios.html" },
  { title: "Empreendimentos", url: "/pages/empreendimentos.html" },
  { title: "Investidores", url: "/pages/investidores.html" },
  { title: "Contatos", url: "/pages/contatos.html" },
  { title: "Saúde", url: "/pages/areas-negocios.html#saude" },
  { title: "Telecomunicações", url: "/pages/areas-negocios.html#telecomunicacoes" },
  { title: "Ensino", url: "/pages/areas-negocios.html#ensino" },
  { title: "Agropecuária", url: "/pages/areas-negocios.html#agropecuaria" },
  { title: "Consultoria e Gestão", url: "/pages/areas-negocios.html#consultoria-gestao" },
  { title: "Energia", url: "/pages/areas-negocios.html#energia" },
  { title: "Hotelaria e Turismo", url: "/pages/areas-negocios.html#hotelaria-turismo" },
  { title: "Construção Civil", url: "/pages/areas-negocios.html#construcao-civil" },
  { title: "Metalomecânica", url: "/pages/areas-negocios.html#metalomecanica" },
  { title: "Carpintaria", url: "/pages/areas-negocios.html#carpintaria" },
  { title: "Indústria Mecânica", url: "/pages/areas-negocios.html#industria-mecanica" },
  // Adicione mais conforme necessário
];


window.NOTICIAS_DATA = [
  {
    id: 1,
    img: "assets/Imagens/Projeto 2/Granja_Área Interior_8.png",
    data: "12 / Abril 2025",
    titulo: "Retomada da Produção de Suínos de Genética Pura Marca Nova Fase na Nossa Granja",
    conteudo: `
      <p>Após um período de reestruturação, a granja retoma suas atividades com foco em genética pura, trazendo inovação e qualidade para o setor.</p>
      <ul>
        <li>Nova fase de produção</li>
        <li>Investimento em tecnologia</li>
        <li>Equipe especializada</li>
      </ul>
      <p>Essa retomada marca um novo ciclo de crescimento para o Grupo Unione.</p>
    `
  },
  {
    id: 2,
    img: "assets/Imagens/epas/epas.jpg",
    data: "20 / Março 2025",
    titulo: "EPAS- Huila Realiza Team Building de Sucesso com Dinâmicas Interativas e Estratégicas no POLIS",
    conteudo: `
      <p>O evento reuniu colaboradores para atividades de integração, promovendo o espírito de equipe e a colaboração.</p>
      <p>As dinâmicas foram conduzidas por especialistas e contaram com a participação ativa de todos.</p>
    `
  },
  {
    id: 3,
    img: "assets/Imagens/JVL/jvl.jpg",
    data: "08 / Março 2025",
    titulo: "Adolescentes do Projeto JV+L Colhem os Frutos de Seu Trabalho e Transformam Vidas!",
    conteudo: `
      <p>O projeto JV+L celebra conquistas dos adolescentes envolvidos, mostrando resultados positivos na formação e cidadania.</p>
      <p>O Grupo Unione segue apoiando iniciativas de impacto social.</p>
    `
  },
  {
    id: 4,
    img: "/assets/Imagens/cm/cm2.jpeg",
    data: "07 / Julho 2025",
    titulo: "Clínica Corpo e Mente Anuncia Novo Serviço de Medicina Dentária para Este Ano!",
    conteudo: `
      <p>O projeto JV+L celebra conquistas dos adolescentes envolvidos, mostrando resultados positivos na formação e cidadania.</p>
      <p>O Grupo Unione segue apoiando iniciativas de impacto social.</p>
    `
  }
];

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card-blog').forEach(card => {
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
});
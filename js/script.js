document.addEventListener('DOMContentLoaded', () => {
  const burgerInput = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');
  const navLinksItem = document.querySelectorAll('.nav-links a.active');

  const searchIcon = document.getElementById('search-icon');
  const fecharBtnIcon = document.getElementById('FeicharBtn');
  const searchContainer = document.querySelector('.search-conteiner');

  const nav = document.querySelector('.nav-container');
  const header = document.querySelector('#navBarHeder');
  let prevScrollpos = window.pageYOffset;

  const buttons = document.querySelectorAll('.options button');
  const inputEmpresa = document.querySelector('#empresaInput');

  // Botões de filtro (Empresa / Outra opção)
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      if (button.textContent.trim() === "Empresa") {
        inputEmpresa.classList.add('active');
      } else {
        inputEmpresa.classList.remove('active');
      }
    });
  });

  // Menu burger
  burgerInput.addEventListener('change', () => {
    navLinks.classList.toggle('active', burgerInput.checked);
  });

  // Ícones de busca
  searchIcon.addEventListener('click', () => {
    searchContainer.classList.add('active');
    navLinks.classList.remove('active');
  });

  fecharBtnIcon.addEventListener('click', () => {
    searchContainer.classList.remove('active');
  });

  // Acessibilidade
  function setupAccessibility() {
    const menuItems = document.querySelectorAll('.nav-links a');
    menuItems.forEach(item => {
      item.setAttribute('role', 'menuitem');
      item.setAttribute('tabindex', '0');
    });
  }
  setupAccessibility();

  // Scroll inteligente do header
  window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollpos < currentScrollPos) {
      nav.classList.add('hide');
      header.classList.remove('active');
    } else if (window.pageYOffset === 0) {
      nav.classList.remove('hide');
      header.classList.remove('active');
    } else {
      nav.classList.remove('hide');
      header.classList.add('active');
    }

    prevScrollpos = currentScrollPos;
  });

  // Debounce utilitário
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  // Ativação de links de menu com base na rota
  function setActiveMenu() {
    const currentPath = window.location.pathname.replace(/\/$/, "");
    const navLinks = document.querySelectorAll('.nav-links a, .nav-links-menu a');

    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href').replace(/\/$/, "");
      link.classList.remove('active');
      
      // Extrai o nome da página do caminho atual
      const currentPage = currentPath.split('/').pop().replace('.html', '');
      const linkPage = linkPath.split('/').pop().replace('.html', '');
      
      // Verifica se o caminho atual corresponde ao link
      if (linkPath === currentPath || 
          currentPage === linkPage ||
          (currentPath.includes('/pages/empresas/') && linkPath === '/empresas')) {
        link.classList.add('active');
      }
    });
  }

  setActiveMenu();
  window.addEventListener('popstate', setActiveMenu);

  // Clique no logo redireciona com loader
  const logo = document.getElementById('logo');
  if (logo) {
    logo.addEventListener('click', function (e) {
      e.preventDefault();

      const load = `
        <div class="loader">
          <div class="banter-loader">
            ${'<div class="banter-loader__box"></div>'.repeat(9)}
          </div>
        </div>
      `;

      const loaderContainer = document.createElement('div');
      loaderContainer.innerHTML = load;
      document.body.appendChild(loaderContainer);

      setTimeout(() => {
        window.location.assign("/");
      }, 2000);
    });
  } else {
    console.error('Elemento logo não encontrado.');
  }

  // Garante que busca esteja oculta ao iniciar
  searchContainer.classList.remove('active');
});

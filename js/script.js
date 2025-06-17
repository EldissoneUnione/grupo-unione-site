const burgerInput = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const navLinksItem = document.querySelectorAll('.nav-links a.active');


const buttons = document.querySelectorAll('.options button');
const inputEmpresa = document.querySelector('#empresaInput');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    if (button.textContent.trim() === "Empresa") {
      inputEmpresa.classList.add('active')
    } else {
      inputEmpresa.classList.remove('active')
    }

  });
});

burgerInput.addEventListener('change', () => {
  navLinks.classList.toggle('active', burgerInput.checked);
});


window.onload = function () {
  let logo = document.getElementById('logo');

  if (logo) {
    logo.addEventListener("click", function (e) {
      e.preventDefault();

      function loadHTML() {
        let load = `
                    <div class="loader">
                        <div class="banter-loader">
                            <div class="banter-loader__box"></div>
                            <div class="banter-loader__box"></div>
                            <div class="banter-loader__box"></div>
                            <div class="banter-loader__box"></div>
                            <div class="banter-loader__box"></div>
                            <div class="banter-loader__box"></div>
                            <div class="banter-loader__box"></div>
                            <div class="banter-loader__box"></div>
                            <div class="banter-loader__box"></div>
                        </div>
                    </div>
                `;

        // Adicionando o loader em uma div específica
        let loaderContainer = document.createElement('div');
        loaderContainer.innerHTML = load;
        document.body.appendChild(loaderContainer);
      }

      loadHTML();

      setTimeout(function () {
        window.location.assign("/");
      }, 2000);
    });

  } else {
    console.error('Elemento logo não encontrado ou não suporta getContext.');
  }
  
};

const searchIcon = document.getElementById('search-icon');
const FeicharBtnIcon = document.getElementById('FeicharBtn');
const searchConteiner = document.querySelector('.search-conteiner');

searchIcon.addEventListener('click', () => {
  searchConteiner.classList.toggle('active');
});
FeicharBtnIcon.addEventListener('click', () => {
  searchConteiner.classList.remove('active');
});

// Melhorar acessibilidade
function setupAccessibility() {
  const menuItems = document.querySelectorAll('.nav-links a');
  menuItems.forEach(item => {
    item.setAttribute('role', 'menuitem');
    item.setAttribute('tabindex', '0');
  });
}

// Melhorar tratamento de erros
function safeQuerySelector(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    console.warn(`Elemento não encontrado: ${selector}`);
    return null;
  }
  return element;
}

// Adicionar debounce para eventos de redimensionamento
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};



document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os links de navegação, inclusive menus duplicados (mobile/desktop)
    const links = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.replace(/\/$/, ""); // remove barra final

    links.forEach(link => {
        // Remove barra final do href para comparar corretamente
        const linkPath = link.getAttribute('href').replace(/\/$/, "");
        // Marca como ativo se o path atual começa com o href do link (evita erro em subpáginas)
        if (linkPath !== "" && currentPath.startsWith(linkPath)) {
            link.classList.add('active');
        }
    });
});

// Função para gerenciar o menu ativo
function setActiveMenu() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links nav a');
    
    // Remove a classe active de todos os links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Verifica cada link
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Se for uma subpágina de empresas
        if (currentPath.includes('/empresas/')) {
            const empresasLink = document.querySelector('a[href="/empresas"]');
            if (empresasLink) {
                empresasLink.classList.add('active');
            }
        }
        
        // Verifica se o path atual corresponde ao href do link
        if (currentPath.includes(linkPath)) {
            link.classList.add('active');
        }
    });
}

// Executa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    setActiveMenu();
    
    // Executa quando a URL mudar
    window.addEventListener('popstate', setActiveMenu);
});

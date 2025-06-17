const burgerInput = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const navLinksItem = document.querySelectorAll('.nav-links a.active');

const searchIcon = document.getElementById('search-icon');
const FeicharBtnIcon = document.getElementById('FeicharBtn');
const searchConteiner = document.querySelector('.search-conteiner');

const nav = document.querySelector('.nav-container');
const header = document.querySelector('#navBarHeder');
let prevScrollpos = window.pageYOffset;

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
  searchConteiner.classList.remove('active');

};



searchIcon.addEventListener('click', () => {
  searchConteiner.classList.add('active');
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
  const links = document.querySelectorAll('.nav-links a');
  const currentPath = window.location.pathname.replace(/\/$/, "");

  links.forEach(link => {
    const linkPath = link.getAttribute('href').replace(/\/$/, "");
    if (linkPath !== "" && currentPath.startsWith(linkPath)) {
      link.classList.add('active');
    }
  });
});

function setActiveMenu() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links nav a');

  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');

    if (currentPath.includes('/empresas/')) {
      const empresasLink = document.querySelector('a[href="/empresas"]');
      if (empresasLink) {
        empresasLink.classList.add('active');
      }
    }

    if (currentPath.includes(linkPath)) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  setActiveMenu();

  window.addEventListener('popstate', setActiveMenu);
});

window.addEventListener('scroll', () => {
  let currentScrollPos = window.pageYOffset;

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

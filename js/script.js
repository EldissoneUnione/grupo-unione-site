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
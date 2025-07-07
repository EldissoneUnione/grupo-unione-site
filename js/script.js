document.addEventListener('DOMContentLoaded', () => {
  const burgerInput = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');

  const searchIcon = document.getElementById('search-icon');
  const fecharBtnIcon = document.getElementById('FeicharBtn');
  const searchContainer = document.querySelector('.search-conteiner');

  const buttons = document.querySelectorAll('.options button');
  const inputEmpresa = document.querySelector('#empresaInput');

  const cards = document.querySelectorAll('.card-baner');

  cards.forEach(card => {
    const img = card.querySelector('img');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      img.style.transformOrigin = `${x}% ${y}%`;
      img.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
      img.style.transformOrigin = 'center center';
      img.style.transform = 'scale(1)';
    });
  });


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

  burgerInput.addEventListener('change', () => {
    navLinks.classList.toggle('active', burgerInput.checked);
  });

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


  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  function setActiveMenu() {
    const currentPath = window.location.pathname.replace(/\/$/, "");
    const navLinks = document.querySelectorAll('.nav-links a, .nav-links-menu a');

    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href').replace(/\/$/, "");
      link.classList.remove('active');

      const currentPage = currentPath.split('/').pop().replace('.html', '');
      const linkPage = linkPath.split('/').pop().replace('.html', '');

      if (linkPath === currentPath ||
        currentPage === linkPage ||
        (currentPath.includes('/pages/empresas/') && linkPath === '/empresas')) {
        link.classList.add('active');
      }
    });
  }

  setActiveMenu();
  window.addEventListener('popstate', setActiveMenu);

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

  searchContainer.classList.remove('active');

});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const toggle = dropdown.querySelector('.dropdown-toggle');
  const menu = dropdown.querySelector('.dropdown-menu');
  let timeout;

  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    menu.classList.add('show');
  });

  dropdown.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      menu.classList.remove('show');
    }, 200);
  });

});


document.addEventListener("DOMContentLoaded", function () {
  const widget = document.getElementById('chatbot-widget');
  const header = document.getElementById('chatbot-header');
  const toggle = document.getElementById('chatbot-toggle');
  const body = document.getElementById('chatbot-body');
  const messages = document.getElementById('chatbot-messages');
  const input = document.getElementById('chatbot-input');
  const send = document.getElementById('chatbot-send');

  function botMessage(msg) {
    messages.innerHTML += `
      <div class="chatbot-msg-row">
        <img src="assets/logo/Grupo-Unione_Logotipo.png" class="chatbot-avatar" alt="Bot">
        <span class="chatbot-msg-bot"> ${msg}</span>
      </div>`;
    messages.scrollTop = messages.scrollHeight;
  }

  function userMessage(msg) {
    messages.innerHTML += `
      <div class="chatbot-msg-row chatbot-msg-row-user">
      <img src="assets/icons/user.png" class="chatbot-avatar" alt="Você">
        <span class="chatbot-msg-user"> ${msg}</span>
      </div>`;
    messages.scrollTop = messages.scrollHeight;
  }

  botMessage("Olá! Posso ajudar em algo durante sua visita?");

  function sendMessage() {
    const userMsg = input.value.trim();
    if (!userMsg) return;
    userMessage(userMsg);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    setTimeout(() => {
      if (userMsg.toLowerCase().includes('contato')) {
        botMessage("Você pode nos contatar pelo e-mail:unione@unioneafrica.com ou pelo telefone (+244) 922 490 448.");
      } else if (userMsg.toLowerCase().includes('empresa')) {
        botMessage("Temos várias empresas no grupo! Quer saber mais sobre alguma em específico?");
      } else {
        botMessage("Desculpe, ainda estou aprendendo! Em breve saberei responder mais perguntas.");
      }
    }, 800);
  }

  send.onclick = sendMessage;
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') sendMessage();
  });

  const chatbotWidget = document.getElementById('chatbot-widget');
  const chatbotHeader = document.getElementById('chatbot-header');
 
  chatbotWidget.addEventListener('click', function (e) {
    if (chatbotWidget.classList.contains('minimized')) {
      chatbotWidget.classList.remove('minimized');
      e.stopPropagation();
    }
  });

  chatbotHeader.addEventListener('click', function (e) {
    if (!chatbotWidget.classList.contains('minimized')) {
      chatbotWidget.classList.add('minimized');
      e.stopPropagation();
    }
  });

  document.addEventListener('click', function (e) {
    if (!chatbotWidget.classList.contains('minimized') && !chatbotWidget.contains(e.target)) {
      chatbotWidget.classList.add('minimized');
    }
  });

  if (chatbotWidget) {
    chatbotWidget.querySelectorAll('#chatbot-body, #chatbot-whatsapp').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    });
  }
});

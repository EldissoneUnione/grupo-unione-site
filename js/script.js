const control = document.getElementById("direction-toggle");
const marquees = document.querySelectorAll(".marquee");
const wrapper = document.querySelector(".wrapper");
const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');


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

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

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

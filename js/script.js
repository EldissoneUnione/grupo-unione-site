document.addEventListener('DOMContentLoaded', () => {
  const burgerInput = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');

  const searchIcon = document.getElementById('search-icon');
  const fecharBtnIcon = document.getElementById('FeicharBtn');
  const searchContainer = document.querySelector('.search-conteiner');

  const buttons = document.querySelectorAll('.options button');
  const inputEmpresa = document.querySelector('#empresaInput');

  // const cards = document.querySelectorAll('.card-baner');

  // cards.forEach(card => {
  //   const img = card.querySelector('img');

  //   card.addEventListener('mousemove', (e) => {
  //     const rect = card.getBoundingClientRect();
  //     const x = ((e.clientX - rect.left) / rect.width) * 100;
  //     const y = ((e.clientY - rect.top) / rect.height) * 100;

  //     img.style.transformOrigin = `${x}% ${y}%`;
  //     img.style.transform = 'scale(1.05)';
  //   });

  //   card.addEventListener('mouseleave', () => {
  //     img.style.transformOrigin = 'center center';
  //     img.style.transform = 'scale(1)';
  //   });
  // });


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
        window.location.assign("/index.html");
      }, 2000);
    });
  } else {
    console.error('Elemento logo não encontrado.');
  }

  searchContainer.classList.remove('active');

  // Otimização de imagens: aplica lazy/async em imagens não críticas
  const imgs = document.querySelectorAll('img');
  imgs.forEach((img, index) => {
    const isHero = img.closest('.hero-company, .hero-section');
    const isLogo = img.closest('.logo, .logo-grupoP');
    const isEager = img.getAttribute('loading') === 'eager';

    if (!isHero && !isLogo && !isEager) {
      if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
      img.setAttribute('decoding', 'async');
      img.setAttribute('fetchpriority', 'low');
    } else if (isHero || isEager) {
      img.setAttribute('fetchpriority', 'high');
    }
  });

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
    }, 100);
  });

});


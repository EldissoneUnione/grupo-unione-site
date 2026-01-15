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

document.addEventListener('DOMContentLoaded', () => {
  const Consent = (() => {
    const COOKIE_NAME = 'unione_cookie_consent_v1';
    const DEFAULT = { necessary: true, performance: false, analytics: false, marketing: false, timestamp: null };
    const isHttps = window.location.protocol === 'https:';
    const dnt = (navigator.doNotTrack === '1' || window.doNotTrack === '1' || navigator.msDoNotTrack === '1');
    const getCookie = (name) => {
      const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      if (match) {
        try { return JSON.parse(decodeURIComponent(match[2])); } catch { return null; }
      }
      return null;
    };
    const setCookie = (name, value, days) => {
      const maxAge = days * 24 * 60 * 60;
      let str = name + '=' + encodeURIComponent(JSON.stringify(value)) + ';path=/;SameSite=Lax;Max-Age=' + maxAge;
      if (isHttps) str += ';Secure';
      document.cookie = str;
    };
    const hasConsent = (category) => {
      const c = getCookie(COOKIE_NAME);
      return c && c[category] === true;
    };
    const applyConsentToScripts = () => {
      const scripts = document.querySelectorAll('script[type="text/plain"][data-consent]');
      scripts.forEach(s => {
        const cat = s.getAttribute('data-consent');
        if (hasConsent(cat)) {
          const ns = document.createElement('script');
          Array.from(s.attributes).forEach(a => {
            if (a.name === 'type') return;
            ns.setAttribute(a.name, a.value);
          });
          ns.text = s.text;
          if (s.src) ns.src = s.src;
          s.replaceWith(ns);
        }
      });
    };
    const createBanner = () => {
      const banner = document.createElement('div');
      banner.className = 'cookie-banner';
      banner.innerHTML = `
        <div class="text">Usamos cookies para melhorar sua experiência. Você pode aceitar todos, rejeitar não essenciais ou configurar por categoria.</div>
        <div class="actions">
          <button class="btn configure">Configurar</button>
          <button class="btn reject">Rejeitar</button>
          <button class="btn accept">Aceitar todos</button>
        </div>
      `;
      document.body.appendChild(banner);
      const onAccept = () => {
        const cons = { necessary: true, performance: true, analytics: true, marketing: true, timestamp: Date.now() };
        setCookie(COOKIE_NAME, cons, 365);
        banner.style.display = 'none';
        applyConsentToScripts();
      };
      const onReject = () => {
        const cons = { necessary: true, performance: false, analytics: false, marketing: false, timestamp: Date.now() };
        setCookie(COOKIE_NAME, cons, 365);
        banner.style.display = 'none';
      };
      const onConfigure = () => {
        createModal();
      };
      banner.querySelector('.accept').addEventListener('click', onAccept);
      banner.querySelector('.reject').addEventListener('click', onReject);
      banner.querySelector('.configure').addEventListener('click', onConfigure);
      banner.classList.add('show');
    };
    const createModal = () => {
      const existing = document.querySelector('.cookie-modal-overlay');
      if (existing) existing.remove();
      const cons = getCookie(COOKIE_NAME) || DEFAULT;
      const overlay = document.createElement('div');
      overlay.className = 'cookie-modal-overlay';
      overlay.innerHTML = `
        <div class="cookie-modal">
          <h3>Preferências de Cookies</h3>
          <p class="desc">Selecione as categorias que deseja permitir. Cookies necessários são sempre ativos.</p>
          <div class="cookie-categories">
            <div class="cookie-category">
              <span class="label">Necessários</span>
              <span>Ativo</span>
            </div>
            <div class="cookie-category">
              <span class="label">Desempenho</span>
              <label class="toggle">
                <input type="checkbox" id="cc-performance" ${cons.performance ? 'checked' : ''}>
                <span class="dot"></span>
              </label>
            </div>
            <div class="cookie-category">
              <span class="label">Analytics</span>
              <label class="toggle">
                <input type="checkbox" id="cc-analytics" ${cons.analytics ? 'checked' : ''}>
                <span class="dot"></span>
              </label>
            </div>
            <div class="cookie-category">
              <span class="label">Marketing</span>
              <label class="toggle">
                <input type="checkbox" id="cc-marketing" ${cons.marketing ? 'checked' : ''}>
                <span class="dot"></span>
              </label>
            </div>
          </div>
          <div class="actions">
            <button class="btn close">Fechar</button>
            <button class="btn save">Guardar Preferências</button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);
      overlay.style.display = 'flex';
      overlay.querySelector('.close').addEventListener('click', () => overlay.remove());
      overlay.querySelector('.save').addEventListener('click', () => {
        const updated = {
          necessary: true,
          performance: overlay.querySelector('#cc-performance').checked,
          analytics: overlay.querySelector('#cc-analytics').checked,
          marketing: overlay.querySelector('#cc-marketing').checked,
          timestamp: Date.now()
        };
        setCookie(COOKIE_NAME, updated, 365);
        overlay.remove();
        applyConsentToScripts();
      });
    };
    const injectManageLink = () => {
      const termList = document.querySelector('.termo');
      const footerBottom = document.querySelector('.footer-bottom');
      const link = document.createElement('a');
      link.textContent = 'Gerir Cookies';
      link.className = 'manage-cookies';
      link.href = '#';
      link.addEventListener('click', (e) => { e.preventDefault(); createModal(); });
      if (termList) {
        const li = document.createElement('li');
        li.appendChild(link);
        termList.appendChild(li);
      } else if (footerBottom) {
        footerBottom.appendChild(link);
      }
    };
    const init = () => {
      if (dnt) {
        const cons = { necessary: true, performance: false, analytics: false, marketing: false, timestamp: Date.now() };
        setCookie(COOKIE_NAME, cons, 365);
        injectManageLink();
        return;
      }
      const cons = getCookie(COOKIE_NAME);
      if (!cons) {
        createBanner();
      } else {
        applyConsentToScripts();
      }
      injectManageLink();
    };
    return { init };
  })();
  Consent.init();
});


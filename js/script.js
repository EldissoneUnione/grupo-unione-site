document.addEventListener('DOMContentLoaded', () => {
  const burgerInput = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');

  const searchIcon = document.getElementById('search-icon');
  const fecharBtnIcon = document.getElementById('FeicharBtn');
  const searchContainer = document.querySelector('.search-conteiner');

  const buttons = document.querySelectorAll('.options button');
  const inputEmpresa = document.querySelector('#empresaInput');

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
      }, 1500);
    });
  } else {
    console.error('Elemento logo não encontrado.');
  }

  searchContainer.classList.remove('active');

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
    const ensureGtag = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
    };
    const initGoogleConsentMode = () => {
      ensureGtag();
      const c = getCookie(COOKIE_NAME) || DEFAULT;
      gtag('consent', 'default', {
        ad_storage: c.marketing ? 'granted' : 'denied',
        analytics_storage: c.analytics ? 'granted' : 'denied',
        functionality_storage: 'granted',
        personalization_storage: c.marketing ? 'granted' : 'denied',
        security_storage: 'granted'
      });
      gtag('js', new Date());
    };
    const updateGoogleConsentMode = (c) => {
      ensureGtag();
      gtag('consent', 'update', {
        ad_storage: c.marketing ? 'granted' : 'denied',
        analytics_storage: c.analytics ? 'granted' : 'denied',
        functionality_storage: 'granted',
        personalization_storage: c.marketing ? 'granted' : 'denied',
        security_storage: 'granted'
      });
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
        updateGoogleConsentMode(cons);
      };
      const onReject = () => {
        const cons = { necessary: true, performance: false, analytics: false, marketing: false, timestamp: Date.now() };
        setCookie(COOKIE_NAME, cons, 365);
        banner.style.display = 'none';
        updateGoogleConsentMode(cons);
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
        updateGoogleConsentMode(updated);
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
        initGoogleConsentMode();
        return;
      }
      const cons = getCookie(COOKIE_NAME);
      if (!cons) {
        createBanner();
      } else {
        applyConsentToScripts();
      }
      injectManageLink();
      document.querySelectorAll('a.manage-cookies').forEach(a => {
        a.addEventListener('click', (e) => { e.preventDefault(); createModal(); });
      });
      initGoogleConsentMode();
    };
    return { init };
  })();
  Consent.init();
});

document.addEventListener('DOMContentLoaded', () => {
  const existing = document.getElementById('chatbot-widget');
  if (existing) return;
  const path = window.location.pathname;
  const inEmpresas = path.includes('/empresas/');
  const inPages = path.includes('/pages/');
  let base = '';
  if (inEmpresas) base = '../../'; else if (inPages) base = '../';

  const container = document.createElement('div');
  container.id = 'chatbot-widget';
  container.className = 'minimized';
  container.setAttribute('role', 'dialog');
  container.setAttribute('aria-label', 'Assistente virtual');
  container.setAttribute('aria-expanded', 'false');
  container.innerHTML = (
    '<div id="chatbot-header">ChatBot <span id="chatbot-toggle">_</span></div>' +
    '<div id="chatbot-body">' +
    '  <div id="chatbot-messages"></div>' +
    '  <div id="chatbot-typing" style="display:none">Digitando...</div>' +
    '  <div id="chatbot-suggestions"></div>' +
    '  <input type="text" id="chatbot-input" placeholder="Digite sua mensagem..." autocomplete="off" />' +
    '  <button id="chatbot-send">Enviar</button>' +
    '</div>' +
    '<a id="chatbot-whatsapp" href="https://wa.me/244922490448" target="_blank" aria-label="Fale no WhatsApp" style="display:none"></a>'
  );
  document.body.appendChild(container);

  const messages = container.querySelector('#chatbot-messages');
  const input = container.querySelector('#chatbot-input');
  const send = container.querySelector('#chatbot-send');
  const header = container.querySelector('#chatbot-header');
  const typing = container.querySelector('#chatbot-typing');
  const suggestions = container.querySelector('#chatbot-suggestions');

  const BOT_ICON = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect x='14' y='18' width='36' height='28' rx='6' fill='%232b2b2b'/><circle cx='26' cy='32' r='5' fill='%23ffffff'/><circle cx='38' cy='32' r='5' fill='%23ffffff'/><rect x='24' y='40' width='16' height='4' rx='2' fill='%23ffffff'/><line x1='32' y1='10' x2='32' y2='18' stroke='%232b2b2b' stroke-width='4'/><circle cx='32' cy='8' r='4' fill='%232b2b2b'/></svg>";

  function botMessage(msg) {
    messages.innerHTML += (
      '<div class="chatbot-msg-row">' +
      '  <img src="' + BOT_ICON + '" class="chatbot-avatar" alt="Bot">' +
      '  <span class="chatbot-msg-bot"> ' + msg + '</span>' +
      '</div>'
    );
    messages.scrollTop = messages.scrollHeight;
  }

  function userMessage(msg) {
    messages.innerHTML += (
      '<div class="chatbot-msg-row chatbot-msg-row-user">' +
      '  <img src="' + base + 'assets/icons/user.png" class="chatbot-avatar" alt="Você">' +
      '  <span class="chatbot-msg-user"> ' + msg + '</span>' +
      '</div>'
    );
    messages.scrollTop = messages.scrollHeight;
  }

  const respostas = {
    contacto: [
      'Você pode nos contatar pelo e-mail: unione@unioneafrica.com ou pelo telefone (+244) 922 490 448.',
      'Nosso contacto: unione@unioneafrica.com | Tel: (+244) 922 490 448. Precisa de mais alguma informação?',
      'Fale conosco pelo e-mail unione@unioneafrica.com ou ligue para (+244) 922 490 448.',
      'Também estamos no WhatsApp: (+244) 922 490 448.',
      'Prefere e-mail ou telefone? Posso te passar ambos.'
    ],
    empresa: [
      'Temos várias empresas no grupo! Quer saber mais sobre alguma em específico? Veja a seção de empresas na página.',
      'O Grupo Unione é composto por diversas empresas. Sobre qual delas você gostaria de saber mais?',
      'Nossas empresas atuam em diferentes áreas. Se quiser detalhes, posso te mostrar informações da página de empresas.',
      'Você pode explorar as empresas no menu principal em “Empresas”.',
      'Quer que eu procure uma empresa pelo nome?'
    ], 
    areas: [
      'Atuamos em Saúde, Energia, Construção Civil, Hotelaria e mais. Qual interessa?',
      'Temos áreas como Telecomunicações, Ensino, Agropecuária e Consultoria.',
      'Posso buscar áreas no menu. Qual você procura?',
      'Área específica em mente? Posso tentar localizar na página.',
      'Quer ver todas as áreas disponíveis?'
    ],
    whatsapp: [
      'Nosso WhatsApp: (+244) 922 490 448.',
      'Pode falar conosco no WhatsApp pelo número (+244) 922 490 448.',
      'Se preferir WhatsApp, estamos disponíveis: (+244) 922 490 448.'
    ],
    email: [
      'Nosso e-mail: unione@unioneafrica.com.',
      'Pode enviar um e-mail para unione@unioneafrica.com.',
      'E-mail de contacto: unione@unioneafrica.com.'
    ],
    telefone: [
      'Telefone: (+244) 922 490 448.',
      'Fale por telefone: (+244) 922 490 448.',
      'Nosso número é (+244) 922 490 448.'
    ],
    endereco: [
      'Endereço: Polis - Estrada da Zootécnica, Humpata - Huíla.',
      'Estamos em Humpata (Huíla), Polis - Estrada da Zootécnica.',
      'Nossa localização: Polis - Estrada da Zootécnica, Humpata - Huíla.'
    ],
    noticias: [
      'Você pode ver as últimas notícias na seção “Notícias”.',
      'Quer que eu procure uma notícia relacionada ao seu tema?',
      'Posso destacar notícias recentes do Grupo Unione.'
    ],
    projetos: [
      'Veja os projetos em destaque na seção “Projetos”.',
      'Posso abrir a página de projetos para você.',
      'Quer saber mais sobre um projeto específico?'
    ],
    sobre: [
      'O Grupo Unione reúne empresas atuando em diversas áreas em Angola.',
      'Somos um grupo com presença em Saúde, Energia, Construção e outras frentes.',
      'Quer um resumo sobre nossa atuação e valores?'
    ],
    saudacao: [
      'Olá! Como posso ajudar você hoje?',
      'Oi! Precisa de alguma informação sobre o Grupo Unione?',
      'Seja bem-vindo! Em que posso te ajudar?',
      'Olá! Quer falar sobre empresas, áreas ou contactos?',
      'Oi! Me diga o que você procura que eu tento achar.'
    ],
    ajuda: [
      'Posso ajudar com empresas, áreas de negócio, contactos e notícias.',
      'Diga se procura contacto, empresa específica, área ou projeto.',
      'Se preferir, posso sugerir tópicos populares para começar.'
    ],
    desconhecido: [
      'Desculpe, ainda estou aprendendo! Você pode perguntar sobre empresas, áreas de atuação ou como entrar em contacto.',
      'Não entendi muito bem. Tente perguntar sobre empresas, áreas de negócio ou formas de contacto.',
      'Ainda não sei responder isso, mas posso te ajudar com informações sobre empresas, áreas ou contacto.',
      'Tente ser mais específico: empresa, área, notícia, projeto ou contacto?',
      'Posso buscar pelo termo na página se desejar.'
    ]
  };

  const areasNegocioFixas = [
    'Saúde','Telecomunicações','Ensino','Agropecuária','Consultoria e Gestão','Energia','Hotelaria e Turismo','Construção Civil','Metalomecânica','Carpintaria','Industria Mecânica'
  ];

  function setTyping(on) {
    typing.style.display = on ? 'block' : 'none';
  }

  function clearSuggestions() {
    suggestions.innerHTML = '';
  }

  function showSuggestions(list) {
    clearSuggestions();
    list.forEach(label => {
      const b = document.createElement('button');
      b.className = 'chatbot-suggestion';
      b.textContent = label;
      b.addEventListener('click', () => {
        input.value = label;
        send.click();
      });
      suggestions.appendChild(b);
    });
  }

  function buscarConteudo(termo) {
    const empresasSection = document.getElementById('empresas-lista');
    if (empresasSection) {
      const empresas = Array.from(empresasSection.querySelectorAll('li, .empresa-nome'));
      const resultado = empresas.find(e => e.textContent.toLowerCase().includes(termo));
      if (resultado) return 'Encontrei esta empresa: ' + resultado.textContent;
    }
    const noticiasSection = document.getElementById('noticias-cards');
    if (noticiasSection) {
      const noticias = Array.from(noticiasSection.querySelectorAll('h2, h3, .noticia-titulo, .noticia-resumo, .card-title'));
      const resultado = noticias.find(n => n.textContent.toLowerCase().includes(termo));
      if (resultado) return 'Veja esta notícia relacionada: ' + resultado.textContent;
    }
    const areasDropdown = document.querySelector('.dropdown-menu');
    if (areasDropdown) {
      const areas = Array.from(areasDropdown.querySelectorAll('a[role="menuitem"]'));
      const resultado = areas.find(a => a.textContent.toLowerCase().includes(termo));
      if (resultado) return 'Área de negócio encontrada: ' + resultado.textContent;
    }
    const areaFixa = areasNegocioFixas.find(area => area.toLowerCase().includes(termo));
    if (areaFixa) return 'Área de negócio encontrada: ' + areaFixa;
    return null;
  }

  function buscarConteudosLista(termo, max) {
    const lista = [];
    const empresasSection = document.getElementById('empresas-lista');
    if (empresasSection) {
      const empresas = Array.from(empresasSection.querySelectorAll('li, .empresa-nome'));
      empresas.forEach(e => { if (e.textContent.toLowerCase().includes(termo)) lista.push(e.textContent.trim()); });
    }
    const noticiasSection = document.getElementById('noticias-cards');
    if (noticiasSection) {
      const noticias = Array.from(noticiasSection.querySelectorAll('h2, h3, .noticia-titulo, .noticia-resumo, .card-title'));
      noticias.forEach(n => { if (n.textContent.toLowerCase().includes(termo)) lista.push(n.textContent.trim()); });
    }
    const areasDropdown = document.querySelector('.dropdown-menu');
    if (areasDropdown) {
      const areas = Array.from(areasDropdown.querySelectorAll('a[role="menuitem"]'));
      areas.forEach(a => { if (a.textContent.toLowerCase().includes(termo)) lista.push(a.textContent.trim()); });
    }
    if (!lista.length) {
      areasNegocioFixas.forEach(a => { if (a.toLowerCase().includes(termo)) lista.push(a); });
    }
    return lista.slice(0, max || 3);
  }

  function classificar(msg) {
    const m = msg.toLowerCase();
    if (m.includes('whatsapp')) return { intent: 'whatsapp' };
    if (m.includes('email') || m.includes('e-mail')) return { intent: 'email' };
    if (m.includes('telefone') || m.includes('telemovel') || m.includes('telemóvel')) return { intent: 'telefone' };
    if (m.includes('endereco') || m.includes('endereço') || m.includes('morada') || m.includes('localizacao') || m.includes('localização')) return { intent: 'endereco' };
    if (m.includes('area') || m.includes('área') || m.includes('areas') || m.includes('áreas') || m.includes('negocio') || m.includes('negócio') || m.includes('negocios') || m.includes('negócios')) return { intent: 'areas' };
    if (m.includes('empresa') || m.includes('empresas') || m.includes('grupo')) return { intent: 'empresa' };
    if (m.includes('noticia') || m.includes('notícias') || m.includes('noticias')) return { intent: 'noticias' };
    if (m.includes('projeto') || m.includes('projetos')) return { intent: 'projetos' };
    if (m.includes('sobre') || m.includes('quem é') || m.includes('o que é') || m.includes('grupo unione')) return { intent: 'sobre' };
    if (m.includes('ajuda') || m.includes('help')) return { intent: 'ajuda' };
    if (m.includes('olá') || m.includes('oi') || m.includes('bom dia') || m.includes('boa tarde') || m.includes('boa noite')) return { intent: 'saudacao' };
    if (m.includes('contacto') || m.includes('falar com')) return { intent: 'contacto' };
    return { intent: 'desconhecido' };
  }

  botMessage(respostas.saudacao[Math.floor(Math.random() * respostas.saudacao.length)]);

  function sendMessage() {
    const userMsg = input.value.trim();
    if (!userMsg) return;
    userMessage(userMsg);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
    const delay = Math.floor(300 + Math.random() * 300);
    setTyping(true);
    setTimeout(() => {
      const cls = classificar(userMsg);
      let resposta = null;
      const termos = userMsg.toLowerCase().split(/\s+/).filter(t => t.length > 2);
      let lista = [];
      if (termos.length) lista = buscarConteudosLista(termos[0], 3);
      if (lista.length) {
        resposta = 'Encontrei: ' + lista.join(', ');
      } else {
        if (cls.intent === 'whatsapp') resposta = respostas.whatsapp[Math.floor(Math.random() * respostas.whatsapp.length)];
        else if (cls.intent === 'email') resposta = respostas.email[Math.floor(Math.random() * respostas.email.length)];
        else if (cls.intent === 'telefone') resposta = respostas.telefone[Math.floor(Math.random() * respostas.telefone.length)];
        else if (cls.intent === 'endereco') resposta = respostas.endereco[Math.floor(Math.random() * respostas.endereco.length)];
        else if (cls.intent === 'areas') resposta = respostas.areas[Math.floor(Math.random() * respostas.areas.length)];
        else if (cls.intent === 'empresa') resposta = respostas.empresa[Math.floor(Math.random() * respostas.empresa.length)];
        else if (cls.intent === 'noticias') resposta = respostas.noticias[Math.floor(Math.random() * respostas.noticias.length)];
        else if (cls.intent === 'projetos') resposta = respostas.projetos[Math.floor(Math.random() * respostas.projetos.length)];
        else if (cls.intent === 'sobre') resposta = respostas.sobre[Math.floor(Math.random() * respostas.sobre.length)];
        else if (cls.intent === 'ajuda') resposta = respostas.ajuda[Math.floor(Math.random() * respostas.ajuda.length)];
        else if (cls.intent === 'contacto') resposta = respostas.contacto[Math.floor(Math.random() * respostas.contacto.length)];
        else if (cls.intent === 'saudacao') resposta = respostas.saudacao[Math.floor(Math.random() * respostas.saudacao.length)];
        else resposta = respostas.desconhecido[Math.floor(Math.random() * respostas.desconhecido.length)];
      }
      botMessage(resposta);
      if (cls.intent === 'empresa') {
        showSuggestions(['Contactos','Empresas','Áreas de negócio']);
      } else if (cls.intent === 'areas') {
        showSuggestions(['Saúde','Energia','Construção Civil','Hotelaria','Telecomunicações']);
      } else if (cls.intent === 'contacto') {
        showSuggestions(['WhatsApp','E-mail','Telefone','Endereço']);
      } else if (cls.intent === 'ajuda' || cls.intent === 'saudacao') {
        showSuggestions(['Empresas','Áreas de negócio','Notícias','Projetos','Contactos']);
      } else {
        clearSuggestions();
      }
      setTyping(false);
    }, delay);
  }

  send.addEventListener('click', sendMessage);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });

  const widget = container;
  widget.addEventListener('click', e => { if (widget.classList.contains('minimized')) { widget.classList.remove('minimized'); container.setAttribute('aria-expanded','true'); setTimeout(()=>input.focus(), 50); e.stopPropagation(); } });
  header.addEventListener('click', e => { if (!widget.classList.contains('minimized')) { widget.classList.add('minimized'); container.setAttribute('aria-expanded','false'); e.stopPropagation(); } });
  document.addEventListener('click', e => { if (!widget.classList.contains('minimized') && !widget.contains(e.target)) { widget.classList.add('minimized'); container.setAttribute('aria-expanded','false'); } });
  container.querySelectorAll('#chatbot-body, #chatbot-whatsapp').forEach(el => { el.addEventListener('click', e => e.stopPropagation()); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !widget.classList.contains('minimized')) { widget.classList.add('minimized'); container.setAttribute('aria-expanded','false'); } });
});



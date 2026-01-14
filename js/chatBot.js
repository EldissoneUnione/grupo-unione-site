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
  
    // Banco de respostas variadas
    const respostas = {
      contacto: [
        "Você pode nos contatar pelo e-mail: unione@unioneafrica.com ou pelo telefone (+244) 922 490 448.",
        "Nosso contacto: unione@unioneafrica.com | Tel: (+244) 922 490 448. Precisa de mais alguma informação?",
        "Fale conosco pelo e-mail unione@unioneafrica.com ou ligue para (+244) 922 490 448."
      ],
      empresa: [
        "Temos várias empresas no grupo! Quer saber mais sobre alguma em específico? Veja a seção de empresas na página.",
        "O Grupo Unione é composto por diversas empresas. Sobre qual delas você gostaria de saber mais?",
        "Nossas empresas atuam em diferentes áreas. Se quiser detalhes, posso te mostrar informações da página de empresas."
      ],
      saudacao: [
        "Olá! Como posso ajudar você hoje?",
        "Oi! Precisa de alguma informação sobre o Grupo Unione?",
        "Seja bem-vindo! Em que posso te ajudar?"
      ],
      desconhecido: [
        "Desculpe, ainda estou aprendendo! Você pode perguntar sobre empresas, áreas de atuação ou como entrar em contacto.",
        "Não entendi muito bem. Tente perguntar sobre empresas, áreas de negócio ou formas de contacto.",
        "Ainda não sei responder isso, mas posso te ajudar com informações sobre empresas, áreas ou contacto."
      ]
    };

    // Lista fixa de áreas de negócio
    const areasNegocioFixas = [
      "Saúde",
      "Telecomunicações",
      "Ensino",
      "Agropecuária",
      "Consultoria e Gestão",
      "Energia",
      "Hotelaria e Turismo",
      "Construção Civil",
      "Metalomecânica",
      "Carpintaria",
      "Industria Mecânica"
    ];

    // Função para buscar conteúdos da página (empresas, notícias, áreas de negócio)
    function buscarConteudo(termo) {
      // Buscar empresas
      const empresasSection = document.getElementById('empresas-lista');
      if (empresasSection) {
        const empresas = Array.from(empresasSection.querySelectorAll('li, .empresa-nome'));
        const resultado = empresas.find(e => e.textContent.toLowerCase().includes(termo));
        if (resultado) {
          return `Encontrei esta empresa: ${resultado.textContent}`;
        }
      }
      // Buscar notícias
      const noticiasSection = document.getElementById('noticias-cards');
      if (noticiasSection) {
        const noticias = Array.from(noticiasSection.querySelectorAll('h2, h3, .noticia-titulo, .noticia-resumo, .card-title'));
        const resultado = noticias.find(n => n.textContent.toLowerCase().includes(termo));
        if (resultado) {
          return `Veja esta notícia relacionada: ${resultado.textContent}`;
        }
      }
      // Buscar áreas de negócio no DOM
      const areasDropdown = document.querySelector('.dropdown-menu');
      if (areasDropdown) {
        const areas = Array.from(areasDropdown.querySelectorAll('a[role="menuitem"]'));
        const resultado = areas.find(a => a.textContent.toLowerCase().includes(termo));
        if (resultado) {
          return `Área de negócio encontrada: ${resultado.textContent}`;
        }
      }
      // Buscar áreas de negócio na lista fixa
      const areaFixa = areasNegocioFixas.find(area => area.toLowerCase().includes(termo));
      if (areaFixa) {
        return `Área de negócio encontrada: ${areaFixa}`;
      }
      return null;
    }
  
    botMessage(respostas.saudacao[Math.floor(Math.random() * respostas.saudacao.length)]);
  
    function sendMessage() {
      const userMsg = input.value.trim();
      if (!userMsg) return;
      userMessage(userMsg);
      input.value = '';
      messages.scrollTop = messages.scrollHeight;
  
      setTimeout(() => {
        const msg = userMsg.toLowerCase();
        let resposta = null;
        const conteudo = buscarConteudo(msg);
        if (conteudo) {
          resposta = conteudo;
        } else if (msg.includes('contacto') || msg.includes('falar com') || msg.includes('telefone') || msg.includes('email')) {
          resposta = respostas.contacto[Math.floor(Math.random() * respostas.contacto.length)];
        } else if (msg.includes('empresa') || msg.includes('empresas') || msg.includes('grupo')) {
          resposta = respostas.empresa[Math.floor(Math.random() * respostas.empresa.length)];
        } else if (msg.includes('olá') || msg.includes('oi') || msg.includes('bom dia') || msg.includes('boa tarde')) {
          resposta = respostas.saudacao[Math.floor(Math.random() * respostas.saudacao.length)];
        } else {
          resposta = respostas.desconhecido[Math.floor(Math.random() * respostas.desconhecido.length)];
        }
        botMessage(resposta);
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
  
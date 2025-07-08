
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
  
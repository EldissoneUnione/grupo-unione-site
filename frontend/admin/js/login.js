// Gerenciador de Login
class LoginManager {
    constructor() {
        this.form = document.getElementById('loginForm');
        this.errorDiv = document.getElementById('loginError');
        this.initializeEventListeners();
        this.checkAuth();
    }

    initializeEventListeners() {
        this.form.addEventListener('submit', this.handleLogin.bind(this));
    }

    checkAuth() {
        // Verificar se já está autenticado
        const token = localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken');
        if (token) {
            this.redirectToDashboard();
        }
    }

    async handleLogin(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe').checked;

        try {
            const response = await fetch('/api/v1/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const data = await response.json();
                const token = data.token;

                // Salvar token
                if (rememberMe) {
                    localStorage.setItem('adminToken', token);
                } else {
                    sessionStorage.setItem('adminToken', token);
                }

                // Salvar informações do usuário
                localStorage.setItem('adminUser', JSON.stringify({
                    username: data.user.username,
                    role: data.user.role,
                    lastLogin: new Date().toISOString()
                }));

                // Redirecionar para o dashboard
                this.redirectToDashboard();
            } else {
                const errorData = await response.json().catch(() => ({}));
                this.showError(errorData.message || 'Usuário ou senha inválidos');
            }
        } catch (error) {
            this.showError('Erro ao conectar com o servidor. Tente novamente.');
            console.error('Erro no login:', error);
        }
    }

    showError(message) {
        this.errorDiv.textContent = message;
        this.errorDiv.style.display = 'block';
    }

    redirectToDashboard() {
        window.location.href = '/admin/dashboard.html';
    }
}

// Inicializar o gerenciador de login
document.addEventListener('DOMContentLoaded', () => {
    new LoginManager();
});
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
        const token = localStorage.getItem('adminToken');
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
            // Aqui você pode implementar a lógica de autenticação real
            // Por enquanto, vamos usar uma autenticação básica
            if (this.validateCredentials(username, password)) {
                // Gerar token simples (em produção, use um método mais seguro)
                const token = this.generateToken();
                
                // Salvar token
                if (rememberMe) {
                    localStorage.setItem('adminToken', token);
                } else {
                    sessionStorage.setItem('adminToken', token);
                }

                // Salvar informações do usuário
                const userInfo = {
                    username,
                    lastLogin: new Date().toISOString()
                };
                localStorage.setItem('adminUser', JSON.stringify(userInfo));

                // Redirecionar para o dashboard
                this.redirectToDashboard();
            } else {
                this.showError('Usuário ou senha inválidos');
            }
        } catch (error) {
            this.showError('Erro ao fazer login. Tente novamente.');
            console.error('Erro no login:', error);
        }
    }

    validateCredentials(username, password) {
        // Em produção, isso deve ser feito no servidor
        // Por enquanto, vamos usar credenciais fixas
        return username === 'admin' && password === 'admin123';
    }

    generateToken() {
        // Em produção, use um método mais seguro para gerar tokens
        return btoa(Date.now().toString()) + '.' + btoa(Math.random().toString());
    }

    showError(message) {
        this.errorDiv.textContent = message;
        this.errorDiv.style.display = 'block';
    }

    redirectToDashboard() {
        window.location.href = 'dashboard.html';
    }
}

// Inicializar o gerenciador de login
const loginManager = new LoginManager(); 
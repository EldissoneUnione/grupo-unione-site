// Verificador de Autenticação
class AuthChecker {
    constructor() {
        this.checkAuth();
    }

    checkAuth() {
        // Verificar se está na página de login
        if (window.location.pathname.includes('login.html')) {
            return;
        }

        // Verificar token
        const token = localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken');
        if (!token) {
            this.redirectToLogin();
            return;
        }

        // Verificar se o token é válido (em produção, isso deve ser feito no servidor)
        if (!this.isValidToken(token)) {
            this.logout();
            return;
        }

        // Atualizar informações do usuário
        this.updateUserInfo();
    }

    isValidToken(token) {
        // Em produção, isso deve ser verificado no servidor
        // Por enquanto, vamos apenas verificar se o token existe
        return !!token;
    }

    updateUserInfo() {
        const userInfo = JSON.parse(localStorage.getItem('adminUser') || '{}');
        const userInfoElement = document.getElementById('userInfo');
        
        if (userInfoElement && userInfo.username) {
            userInfoElement.textContent = `Olá, ${userInfo.username}`;
        }
    }

    logout() {
        localStorage.removeItem('adminToken');
        sessionStorage.removeItem('adminToken');
        this.redirectToLogin();
    }

    redirectToLogin() {
        window.location.href = 'login.html';
    }
}

// Inicializar o verificador de autenticação
const authChecker = new AuthChecker(); 
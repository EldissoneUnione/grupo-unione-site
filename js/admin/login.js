document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    // Verifica se já está logado
    if (localStorage.getItem('adminToken')) {
        window.location.href = '/pages/admin/dashboard.html';
    }

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            if (username === 'admin@grupounione.com' && password === 'admin123') {
                const token = 'simulated-token-' + Date.now();
                localStorage.setItem('adminToken', token);
                window.location.href = '/pages/admin/dashboard.html';
            } else {
                errorMessage.textContent = 'Usuário ou senha inválidos';
            }
        } catch (error) {
            errorMessage.textContent = 'Erro ao fazer login. Tente novamente.';
            console.error('Erro de login:', error);
        }
    });
}); 
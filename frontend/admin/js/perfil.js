document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken');
    if (!token) {
        window.location.href = '/admin/login';
        return;
    }

    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            ApiClient.clearToken();
            window.location.href = '/admin/login';
        });
    }

    new PerfilManager();
});

class PerfilManager {
    constructor() {
        this.form = document.getElementById('passwordForm');
        this.submitButton = document.getElementById('passwordSubmit');
        this.alertBox = document.getElementById('passwordAlert');
        this.alertMsg = document.getElementById('passwordAlertMsg');

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.changePassword();
        });

        document.getElementById('showPasswords').addEventListener('change', (e) => {
            this.togglePasswordVisibility(e.target.checked);
        });

        this.loadProfile();
    }

    async loadProfile() {
        try {
            const user = await ApiClient.get('/auth/profile');

            document.getElementById('profileUsername').value = user.username || '—';
            document.getElementById('profileEmail').value = user.email || '—';
            document.getElementById('profileRole').textContent = user.role || '—';
            document.getElementById('profileCreatedAt').value = this.formatDate(user.createdAt);

            const userInfo = document.getElementById('userInfo');
            if (userInfo && user.username) {
                userInfo.textContent = `Olá, ${user.username}`;
            }

            const avatar = document.getElementById('userAvatar');
            if (avatar && user.username) {
                avatar.textContent = user.username.charAt(0).toUpperCase();
            }
        } catch (error) {
            console.error('Erro ao carregar perfil:', error);
            this.showAlert('danger', 'Não foi possível carregar os dados do perfil.');
        }
    }

    async changePassword() {
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (newPassword.length < 8) {
            this.showAlert('danger', 'A nova palavra-passe deve ter no mínimo 8 caracteres.');
            return;
        }

        if (newPassword !== confirmPassword) {
            this.showAlert('danger', 'A confirmação não coincide com a nova palavra-passe.');
            return;
        }

        if (currentPassword === newPassword) {
            this.showAlert('danger', 'A nova palavra-passe deve ser diferente da atual.');
            return;
        }

        this.setLoading(true);

        try {
            const result = await ApiClient.put('/auth/change-password', {
                currentPassword,
                newPassword
            });

            this.form.reset();
            this.togglePasswordVisibility(false);
            this.showAlert('success', result.message || 'Palavra-passe alterada com sucesso.');
        } catch (error) {
            console.error('Erro ao alterar palavra-passe:', error);
            this.showAlert('danger', error.message);
        } finally {
            this.setLoading(false);
        }
    }

    togglePasswordVisibility(visible) {
        const type = visible ? 'text' : 'password';
        ['currentPassword', 'newPassword', 'confirmPassword'].forEach((id) => {
            document.getElementById(id).type = type;
        });
        document.getElementById('showPasswords').checked = visible;
    }

    setLoading(loading) {
        this.submitButton.disabled = loading;
        this.submitButton.innerHTML = loading
            ? '<i class="fas fa-spinner fa-spin"></i> A guardar...'
            : '<i class="fas fa-save"></i> Guardar Nova Palavra-passe';
    }

    showAlert(type, message) {
        this.alertBox.className = `alert alert-${type}`;
        this.alertBox.style.display = 'flex';
        this.alertMsg.textContent = message;

        const icon = this.alertBox.querySelector('i');
        if (icon) {
            icon.className = type === 'success'
                ? 'fas fa-check-circle'
                : 'fas fa-exclamation-circle';
        }
    }

    formatDate(value) {
        if (!value) return '—';
        return new Intl.DateTimeFormat('pt-PT', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(new Date(value));
    }
}

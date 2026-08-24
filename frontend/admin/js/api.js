
// API Client Utility
const API_BASE_URL = '/api/v1';

class ApiClient {
    static getToken() {
        return localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken');
    }

    static setToken(token, rememberMe = false) {
        if (rememberMe) {
            localStorage.setItem('adminToken', token);
        } else {
            sessionStorage.setItem('adminToken', token);
        }
    }

    static clearToken() {
        localStorage.removeItem('adminToken');
        sessionStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
    }

    static setUser(user) {
        localStorage.setItem('adminUser', JSON.stringify(user));
    }

    static getUser() {
        const userStr = localStorage.getItem('adminUser');
        return userStr ? JSON.parse(userStr) : null;
    }

    static async request(endpoint, options = {}) {
        const token = this.getToken();
        const headers = {
            'Content-Type': 'application/json',
            ...options.headers
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...options,
            headers
        });

        if (!response.ok) {
            if (response.status === 401) {
                // Token inválido ou expirado
                this.clearToken();
                window.location.href = '/admin/login.html';
                throw new Error('Sessão expirada. Faça login novamente.');
            }
            throw new Error(await this.errorMessage(response));
        }

        return response.json();
    }

    // O 413 é devolvido pelo nginx, não pela API, e vem em HTML.
    // Sem este tratamento a mensagem chega ao utilizador vazia.
    static async errorMessage(response) {
        if (response.status === 413) {
            return 'O ficheiro é demasiado grande para o servidor aceitar.';
        }
        const errorData = await response.json().catch(() => ({}));
        return errorData.message || `Erro: ${response.status}`;
    }

    static async uploadFile(file) {
        const token = this.getToken();
        const formData = new FormData();
        formData.append('file', file);

        // O Content-Type é deixado ao browser, que precisa de definir o boundary.
        const headers = {};
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(`${API_BASE_URL}/uploads`, {
            method: 'POST',
            headers,
            body: formData
        });

        if (!response.ok) {
            if (response.status === 401) {
                this.clearToken();
                window.location.href = '/admin/login.html';
                throw new Error('Sessão expirada. Faça login novamente.');
            }
            throw new Error(await this.errorMessage(response));
        }

        return response.json();
    }

    static async get(endpoint) {
        return this.request(endpoint, { method: 'GET' });
    }

    static async post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    static async put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }

    static async delete(endpoint) {
        return this.request(endpoint, { method: 'DELETE' });
    }
}


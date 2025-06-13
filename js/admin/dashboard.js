document.addEventListener('DOMContentLoaded', () => {
    // Verifica se está autenticado
    if (!localStorage.getItem('adminToken')) {
        window.location.href = '/pages/admin/login.html';
        return;
    }

    // Logout
    const logoutButton = document.getElementById('logout');
    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('adminToken');
        window.location.href = '/pages/admin/login.html';
    });

    // Carrega os dados do dashboard
    loadDashboardData();
});

async function loadDashboardData() {
    try {
        // Aqui você deve implementar a chamada real para sua API
        // Este é apenas um exemplo simulado
        const data = {
            empresas: 6,
            areasNegocio: 12,
            empreendimentos: 8,
            noticias: 15,
            atividades: [
                {
                    data: '2024-03-20 15:30',
                    acao: 'Nova notícia adicionada',
                    usuario: 'Admin'
                },
                {
                    data: '2024-03-20 14:15',
                    acao: 'Empresa atualizada',
                    usuario: 'Admin'
                },
                {
                    data: '2024-03-20 11:45',
                    acao: 'Novo empreendimento adicionado',
                    usuario: 'Admin'
                }
            ]
        };

        // Atualiza os contadores
        updateCounters(data);

        // Atualiza a tabela de atividades
        updateActivitiesTable(data.atividades);

    } catch (error) {
        console.error('Erro ao carregar dados do dashboard:', error);
        showError('Erro ao carregar dados do dashboard');
    }
}

function updateCounters(data) {
    // Aqui você pode atualizar os contadores com os dados reais
    // Por enquanto, os dados já estão hardcoded no HTML
}

function updateActivitiesTable(activities) {
    const tbody = document.querySelector('.admin-table tbody');
    if (!tbody) return;

    tbody.innerHTML = activities.map(activity => `
        <tr>
            <td>${activity.data}</td>
            <td>${activity.acao}</td>
            <td>${activity.usuario}</td>
        </tr>
    `).join('');
}

function showError(message) {
    // Implementar uma notificação de erro mais elaborada
    console.error(message);
}

// Dashboard Manager
class DashboardManager {
    constructor() {
        this.banners = JSON.parse(localStorage.getItem('banners')) || [];
        this.destaques = JSON.parse(localStorage.getItem('destaques')) || [];
        
        this.initializeDashboard();
    }

    initializeDashboard() {
        this.updateBannerStats();
        this.updateDestaqueStats();
        this.loadLastActivities();
    }

    updateBannerStats() {
        const totalBanners = this.banners.length;
        const activeBanners = this.banners.filter(b => b.status).length;

        document.getElementById('totalBanners').textContent = totalBanners;
        document.getElementById('activeBanners').textContent = activeBanners;
    }

    updateDestaqueStats() {
        const totalDestaques = this.destaques.length;
        const activeDestaques = this.destaques.filter(d => d.status).length;

        document.getElementById('totalDestaques').textContent = totalDestaques;
        document.getElementById('activeDestaques').textContent = activeDestaques;
    }

    loadLastActivities() {
        const activities = [];
        
        // Adicionar banners às atividades
        this.banners.forEach(banner => {
            activities.push({
                type: 'Banner',
                title: banner.title,
                date: new Date(banner.createdAt),
                status: banner.status ? 'Ativo' : 'Inativo'
            });
        });

        // Adicionar destaques às atividades
        this.destaques.forEach(destaque => {
            activities.push({
                type: 'Destaque',
                title: destaque.title,
                date: new Date(destaque.createdAt),
                status: destaque.status ? 'Ativo' : 'Inativo'
            });
        });

        // Ordenar por data (mais recente primeiro)
        activities.sort((a, b) => b.date - a.date);

        // Mostrar apenas as 5 atividades mais recentes
        const lastActivities = activities.slice(0, 5);

        // Atualizar a tabela
        const tbody = document.getElementById('lastActivities');
        tbody.innerHTML = '';

        lastActivities.forEach(activity => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${activity.type}</td>
                <td>${activity.title}</td>
                <td>${this.formatDate(activity.date)}</td>
                <td>
                    <span class="badge ${activity.status === 'Ativo' ? 'bg-success' : 'bg-danger'}">
                        ${activity.status}
                    </span>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    formatDate(date) {
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    }
}

// Inicializar o dashboard
const dashboardManager = new DashboardManager(); 
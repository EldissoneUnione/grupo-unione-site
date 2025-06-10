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
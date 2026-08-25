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
            localStorage.removeItem('adminToken');
            sessionStorage.removeItem('adminToken');
            window.location.href = '/admin/login';
        });
    }

    loadDashboardData();
});

function setStat(id, value) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('is-loading');
    el.textContent = value;
}

function setStatsLoading() {
    ['totalBanners', 'activeBanners', 'totalNoticias', 'totalEmpresas'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.add('is-loading');
            el.textContent = '…';
        }
    });
}

function settledValue(result, fallback) {
    return result.status === 'fulfilled' && Array.isArray(result.value) ? result.value : fallback;
}

async function loadDashboardData() {
    const tbody = document.getElementById('lastActivities');
    setStatsLoading();
    if (tbody) {
        tbody.innerHTML = ApiClient.loadingRow(4, 'A carregar atividade...');
    }

    const [bannersRes, newsRes, companiesRes] = await Promise.allSettled([
        ApiClient.get('/banners'),
        ApiClient.get('/news?admin=true', { headers: { 'x-admin-request': 'true' } }),
        ApiClient.get('/companies'),
    ]);

    const banners = settledValue(bannersRes, []);
    const noticias = settledValue(newsRes, []);
    const empresas = settledValue(companiesRes, []);

    setStat('totalBanners', banners.length);
    setStat('activeBanners', banners.filter((b) => b.ativo).length);
    setStat('totalNoticias', noticias.length);
    setStat('totalEmpresas', empresas.length);

    renderActivities({ banners, noticias, empresas });
}

function renderActivities({ banners, noticias, empresas }) {
    const tbody = document.getElementById('lastActivities');
    if (!tbody) return;

    const activities = [
        ...banners.map((b) => ({
            type: 'Banner',
            title: b.titulo || 'Sem título',
            date: new Date(b.updatedAt || b.createdAt),
            status: b.ativo ? 'Ativo' : 'Inativo',
        })),
        ...noticias.map((n) => ({
            type: 'Notícia',
            title: n.titulo || 'Sem título',
            date: new Date(n.dataPublicacao || n.updatedAt || n.createdAt),
            status: n.status || 'publicada',
        })),
        ...empresas.map((e) => ({
            type: 'Empresa',
            title: e.nome || 'Sem nome',
            date: new Date(e.updatedAt || e.createdAt),
            status: e.status ? 'Ativa' : 'Inativa',
        })),
    ]
        .filter((a) => !Number.isNaN(a.date.getTime()))
        .sort((a, b) => b.date - a.date)
        .slice(0, 8);

    if (activities.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="4">
                    <div class="empty-state" style="padding:32px 24px;">
                        <i class="fas fa-inbox"></i>
                        <h3>Sem atividade recente</h3>
                        <p>Adicione banners, notícias ou empresas para começar.</p>
                    </div>
                </td>
            </tr>`;
        return;
    }

    tbody.innerHTML = activities.map((activity) => `
        <tr>
            <td>${activity.type}</td>
            <td>${activity.title}</td>
            <td>${formatDate(activity.date)}</td>
            <td><span class="status-badge">${labelStatus(activity.status)}</span></td>
        </tr>
    `).join('');
}

function labelStatus(status) {
    const map = {
        publicada: 'Publicada',
        rascunho: 'Rascunho',
        agendada: 'Agendada',
        Ativo: 'Ativo',
        Inativo: 'Inativo',
        Ativa: 'Ativa',
        Inativa: 'Inativa',
    };
    return map[status] || status;
}

function formatDate(date) {
    return new Intl.DateTimeFormat('pt-PT', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(date);
}

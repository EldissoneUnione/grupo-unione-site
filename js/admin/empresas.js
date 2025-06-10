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

    // Modal
    const modal = document.getElementById('empresaModal');
    const closeBtn = document.querySelector('.close');
    const addEmpresaBtn = document.getElementById('addEmpresa');
    const empresaForm = document.getElementById('empresaForm');

    // Abrir modal para nova empresa
    addEmpresaBtn.addEventListener('click', () => {
        document.getElementById('modalTitle').textContent = 'Nova Empresa';
        empresaForm.reset();
        modal.style.display = 'block';
    });

    // Fechar modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Editar empresa
    document.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', () => {
            const empresaId = btn.dataset.id;
            editEmpresa(empresaId);
        });
    });

    // Excluir empresa
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', () => {
            const empresaId = btn.dataset.id;
            if (confirm('Tem certeza que deseja excluir esta empresa?')) {
                deleteEmpresa(empresaId);
            }
        });
    });

    // Busca e filtros
    const searchInput = document.getElementById('searchEmpresa');
    const statusFilter = document.getElementById('filterStatus');

    searchInput.addEventListener('input', filterEmpresas);
    statusFilter.addEventListener('change', filterEmpresas);

    // Submit do formulário
    empresaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveEmpresa();
    });
});

async function editEmpresa(id) {
    try {
        // Aqui você deve implementar a chamada real para sua API
        // Este é apenas um exemplo simulado
        const empresa = {
            id: id,
            nome: 'MBT',
            areaNegocio: 'energia',
            descricao: 'Empresa de energia',
            status: 'ativo'
        };

        document.getElementById('modalTitle').textContent = 'Editar Empresa';
        document.getElementById('nome').value = empresa.nome;
        document.getElementById('areaNegocio').value = empresa.areaNegocio;
        document.getElementById('descricao').value = empresa.descricao;
        document.getElementById('status').value = empresa.status;

        document.getElementById('empresaModal').style.display = 'block';
    } catch (error) {
        console.error('Erro ao carregar dados da empresa:', error);
        showError('Erro ao carregar dados da empresa');
    }
}

async function deleteEmpresa(id) {
    try {
        // Aqui você deve implementar a chamada real para sua API
        // Este é apenas um exemplo simulado
        console.log('Excluindo empresa:', id);
        
        // Recarrega a página após excluir
        window.location.reload();
    } catch (error) {
        console.error('Erro ao excluir empresa:', error);
        showError('Erro ao excluir empresa');
    }
}

async function saveEmpresa() {
    try {
        const formData = new FormData(document.getElementById('empresaForm'));
        const empresa = Object.fromEntries(formData.entries());

        // Aqui você deve implementar a chamada real para sua API
        // Este é apenas um exemplo simulado
        console.log('Salvando empresa:', empresa);

        // Fecha o modal e recarrega a página
        document.getElementById('empresaModal').style.display = 'none';
        window.location.reload();
    } catch (error) {
        console.error('Erro ao salvar empresa:', error);
        showError('Erro ao salvar empresa');
    }
}

function filterEmpresas() {
    const searchTerm = document.getElementById('searchEmpresa').value.toLowerCase();
    const statusFilter = document.getElementById('filterStatus').value;
    const rows = document.querySelectorAll('.admin-table tbody tr');

    rows.forEach(row => {
        const nome = row.cells[1].textContent.toLowerCase();
        const status = row.querySelector('.status-badge').textContent.toLowerCase();
        
        const matchesSearch = nome.includes(searchTerm);
        const matchesStatus = !statusFilter || status === statusFilter;

        row.style.display = matchesSearch && matchesStatus ? '' : 'none';
    });
}

function showError(message) {
    // Implementar uma notificação de erro mais elaborada
    console.error(message);
    alert(message);
} 
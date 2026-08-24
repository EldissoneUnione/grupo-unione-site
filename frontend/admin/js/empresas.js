/**
 * Grupo Unione — Admin Empresas
 * Sincronizado com Backend API via ApiClient
 */

class EmpresaManager {
    constructor() {
        this.empresas = [];
        this.form = document.getElementById('empresaForm');
        this.empresasList = document.querySelector('.admin-table tbody');
        this.currentEmpresaId = null;

        this.initializeEventListeners();
        this.loadEmpresas();
    }

    initializeEventListeners() {
        const logoInput = document.getElementById('logo');
        if (logoInput) {
            logoInput.addEventListener('change', this.handleLogoPreview.bind(this));
        }

        if (this.form) {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveEmpresa();
            });
        }

        const addEmpresaBtn = document.getElementById('addEmpresa');
        if (addEmpresaBtn) {
            addEmpresaBtn.addEventListener('click', () => {
                document.getElementById('modalTitle').innerHTML = '<i class="fas fa-building" style="color:var(--accent);margin-right:8px;"></i> Nova Empresa';
                this.resetForm();
                document.getElementById('empresaModal').style.display = 'block';
            });
        }

        const closeBtns = document.querySelectorAll('.close');
        closeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                document.getElementById('empresaModal').style.display = 'none';
            });
        });

        const modal = document.getElementById('empresaModal');
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Filtros
        const searchInput = document.getElementById('searchEmpresa');
        const statusFilter = document.getElementById('filterStatus');
        
        if (searchInput) searchInput.addEventListener('input', this.filterEmpresas.bind(this));
        if (statusFilter) statusFilter.addEventListener('change', this.filterEmpresas.bind(this));
    }

    handleLogoPreview(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                let preview = document.querySelector('.logo-preview');
                if (!preview) {
                    preview = document.createElement('img');
                    preview.className = 'logo-preview';
                    preview.style.marginTop = '10px';
                    preview.style.maxWidth = '100px';
                    preview.style.borderRadius = '4px';
                    this.form.insertBefore(preview, this.form.querySelector('.form-group:nth-child(4)'));
                }
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    }

    async loadEmpresas() {
        try {
            this.empresasList.innerHTML = '<tr><td colspan="5" class="text-center">A carregar empresas...</td></tr>';
            this.empresas = await ApiClient.get('/companies');
            this.renderEmpresas(this.empresas);
            this.updateStats();
        } catch (error) {
            console.error('Erro ao carregar empresas:', error);
            this.empresasList.innerHTML = '<tr><td colspan="5" class="text-center" style="color:var(--danger)">Erro ao carregar empresas da API.</td></tr>';
        }
    }

    updateStats() {
        const total = this.empresas.length;
        const ativas = this.empresas.filter(e => e.status === true).length;
        const elTotal = document.getElementById('totalEmpresas');
        const elAtivas = document.getElementById('ativasEmpresas');
        
        if (elTotal) elTotal.textContent = total;
        if (elAtivas) elAtivas.textContent = ativas;
    }

    renderEmpresas(list) {
        this.empresasList.innerHTML = '';
        if (list.length === 0) {
            this.empresasList.innerHTML = '<tr><td colspan="5" class="text-center">Nenhuma empresa encontrada.</td></tr>';
            return;
        }

        list.forEach(empresa => {
            const row = document.createElement('tr');
            
            // Tratamento de logo
            let logoSrc = empresa.logo || 'https://placehold.co/60x60/f4f6fb/9da3be?text=Sem+Logo';
            if (logoSrc.startsWith('/') === false && logoSrc.startsWith('http') === false && logoSrc.startsWith('data:') === false) {
                logoSrc = '/' + logoSrc;
            }

            // Tratamento de status
            const statusHtml = empresa.status 
                ? `<span class="status-badge active"><i class="fas fa-circle" style="font-size:7px;"></i> Ativo</span>`
                : `<span class="status-badge inactive"><i class="fas fa-circle" style="font-size:7px;"></i> Inativo</span>`;

            // Tratamento da área (categoria/descricao)
            // Backend Schema não tem areaNegocio explícito, vamos usar 'descricao' resumida
            let desc = empresa.descricao ? empresa.descricao.substring(0, 30) + '...' : 'Sem área definida';

            row.innerHTML = `
                <td><img src="${logoSrc}" alt="${empresa.nome}" class="company-logo" style="width:40px;height:40px;object-fit:contain;background:white;border-radius:6px;padding:2px;"></td>
                <td><strong>${empresa.nome}</strong></td>
                <td><span class="badge" style="background:var(--surface-2);color:var(--text-secondary);border:1px solid var(--border)">${desc}</span></td>
                <td>${statusHtml}</td>
                <td>
                    <button class="btn-admin btn-edit btn-sm" onclick="empresaManager.editEmpresa(${empresa.id})" title="Editar">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-admin btn-delete btn-sm" onclick="empresaManager.deleteEmpresa(${empresa.id})" title="Eliminar">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            this.empresasList.appendChild(row);
        });
    }

    async saveEmpresa() {
        const nome = document.getElementById('nome').value;
        const descricao = document.getElementById('descricao').value;
        const statusVal = document.getElementById('status').value;
        const status = statusVal === 'ativo' ? true : false;
        
        let logo = '';
        const preview = document.querySelector('.logo-preview');
        if (preview && preview.src) {
            logo = preview.src;
        }

        const data = { nome, descricao, status };
        if (logo) data.logo = logo;

        try {
            if (this.currentEmpresaId) {
                await ApiClient.put(`/companies/${this.currentEmpresaId}`, data);
                this.showToast('Empresa atualizada com sucesso!');
            } else {
                await ApiClient.post('/companies', data);
                this.showToast('Empresa criada com sucesso!');
            }

            document.getElementById('empresaModal').style.display = 'none';
            this.loadEmpresas();
        } catch (error) {
            console.error('Erro ao guardar empresa:', error);
            alert('Erro ao guardar empresa: ' + error.message);
        }
    }

    async editEmpresa(id) {
        try {
            const empresa = await ApiClient.get(`/companies/${id}`);
            if (empresa) {
                this.currentEmpresaId = empresa.id;
                document.getElementById('modalTitle').innerHTML = '<i class="fas fa-building" style="color:var(--accent);margin-right:8px;"></i> Editar Empresa';
                
                document.getElementById('nome').value = empresa.nome || '';
                document.getElementById('descricao').value = empresa.descricao || '';
                document.getElementById('status').value = empresa.status ? 'ativo' : 'inativo';
                
                // Area de Negócio não existe nativamente no prisma schema, então ignoramos o input

                // Limpar input file
                const logoInput = document.getElementById('logo');
                if (logoInput) logoInput.value = '';

                let preview = document.querySelector('.logo-preview');
                if (empresa.logo) {
                    if (!preview) {
                        preview = document.createElement('img');
                        preview.className = 'logo-preview';
                        preview.style.marginTop = '10px';
                        preview.style.maxWidth = '100px';
                        preview.style.borderRadius = '4px';
                        this.form.insertBefore(preview, this.form.querySelector('.form-group:nth-child(4)'));
                    }
                    preview.src = (empresa.logo.startsWith('data:') || empresa.logo.startsWith('http') || empresa.logo.startsWith('/'))
                        ? empresa.logo
                        : '/' + empresa.logo;
                    preview.style.display = 'block';
                } else if (preview) {
                    preview.style.display = 'none';
                }

                document.getElementById('empresaModal').style.display = 'block';
            }
        } catch (error) {
            console.error('Erro ao buscar detalhes da empresa:', error);
            alert('Erro ao carregar dados da empresa.');
        }
    }

    async deleteEmpresa(id) {
        if (confirm('Tem certeza que deseja excluir esta empresa?')) {
            try {
                await ApiClient.delete(`/companies/${id}`);
                this.showToast('Empresa apagada com sucesso!');
                this.loadEmpresas();
            } catch (error) {
                console.error('Erro ao apagar empresa:', error);
                alert('Erro ao excluir empresa.');
            }
        }
    }

    resetForm() {
        if (this.form) this.form.reset();
        this.currentEmpresaId = null;
        const preview = document.querySelector('.logo-preview');
        if (preview) {
            preview.style.display = 'none';
            preview.src = '';
        }
    }

    filterEmpresas() {
        const searchTerm = document.getElementById('searchEmpresa').value.toLowerCase();
        const statusFilter = document.getElementById('filterStatus').value; // ativo / inativo / ""

        const filtered = this.empresas.filter(emp => {
            const matchesSearch = !searchTerm || emp.nome.toLowerCase().includes(searchTerm);
            
            let matchesStatus = true;
            if (statusFilter === 'ativo') matchesStatus = emp.status === true;
            if (statusFilter === 'inativo') matchesStatus = emp.status === false;

            return matchesSearch && matchesStatus;
        });

        this.renderEmpresas(filtered);
    }

    showToast(msg) {
        const t = document.createElement('div');
        t.style.cssText = `
            position:fixed;bottom:24px;right:24px;z-index:9999;
            background:#16a34a;color:white;padding:12px 20px;
            border-radius:8px;font-size:13px;font-weight:600;
            box-shadow:0 4px 16px rgba(0,0,0,0.15);
            animation:fadeIn .2s ease;
        `;
        t.textContent = '✓ ' + msg;
        document.body.appendChild(t);
        setTimeout(() => t.remove(), 3000);
    }
}

// Global scope
let empresaManager;
document.addEventListener('DOMContentLoaded', () => {
    // Certificar-se que ApiClient está carregado
    if (typeof ApiClient !== 'undefined') {
        empresaManager = new EmpresaManager();
    } else {
        console.error('ApiClient não encontrado.');
    }
});
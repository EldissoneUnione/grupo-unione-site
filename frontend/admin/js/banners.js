/**
 * Grupo Unione — Admin Banners
 * Sincronizado com Backend API via ApiClient
 */

class BannerManager {
    constructor() {
        this.banners = [];
        this.form = document.getElementById('bannerForm');
        this.bannersList = document.getElementById('bannersList');
        this.saveButton = document.getElementById('saveBanner');
        this.currentBannerId = null;
        this.selectedFile = null;

        this.initializeEventListeners();
        this.loadBanners();
    }

    initializeEventListeners() {
        // Preview de imagem
        const imgInput = document.getElementById('bannerImage');
        if (imgInput) {
            imgInput.addEventListener('change', this.handleImagePreview.bind(this));
        }
        
        // Salvar banner
        if (this.saveButton) {
            this.saveButton.addEventListener('click', this.saveBanner.bind(this));
        }
    }

    handleImagePreview(event) {
        const file = event.target.files[0];
        if (file) {
            // O ficheiro é guardado para envio; o base64 abaixo serve apenas
            // para a pré-visualização no browser e nunca é enviado à API.
            this.selectedFile = file;
            const reader = new FileReader();
            reader.onload = (e) => {
                let preview = document.querySelector('.image-preview');
                if (!preview) {
                    preview = document.createElement('img');
                    preview.className = 'image-preview';
                    preview.style.marginTop = '10px';
                    preview.style.maxWidth = '100%';
                    preview.style.borderRadius = '8px';
                    this.form.appendChild(preview);
                }
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    }

    async loadBanners() {
        try {
            this.bannersList.innerHTML = '<tr><td colspan="6" class="text-center">A carregar banners...</td></tr>';
            this.banners = await ApiClient.get('/banners');
            this.renderBanners();
        } catch (error) {
            console.error('Erro ao carregar banners:', error);
            this.bannersList.innerHTML = '<tr><td colspan="6" class="text-center text-danger">Erro ao carregar banners.</td></tr>';
        }
    }

    // Registos antigos podem ter o domínio completo gravado no campo imagem,
    // pelo que um URL absoluto tem de ser usado tal como está.
    imageSrc(imagem) {
        if (!imagem) return '';
        if (imagem.startsWith('data:') || imagem.startsWith('http')) return imagem;
        return imagem.startsWith('/') ? imagem : '/' + imagem;
    }

    // URLs com .html ou /pages/ passam a caminho limpo ao gravar.
    normalizeLink(link) {
        if (!link || !link.trim()) return null;
        const value = link.trim();
        if (/^(mailto:|tel:)/i.test(value)) return value;

        try {
            const url = new URL(value, window.location.origin);
            if (url.origin !== window.location.origin) return value;

            let path = url.pathname.replace(/\.html$/i, '').replace(/^\/pages\//, '/');
            if (path.endsWith('/index')) path = path.slice(0, -'/index'.length);
            if (!path) path = '/';
            return path + url.search + url.hash;
        } catch {
            return value.startsWith('/') ? value : '/' + value;
        }
    }

    renderBanners() {
        this.bannersList.innerHTML = '';
        if (this.banners.length === 0) {
            this.bannersList.innerHTML = '<tr><td colspan="6" class="text-center">Nenhum banner encontrado.</td></tr>';
            return;
        }

        this.banners.forEach(banner => {
            const row = document.createElement('tr');
            const imgUrl = this.imageSrc(banner.imagem);
            
            row.innerHTML = `
                <td>${banner.id}</td>
                <td><img src="${imgUrl}" alt="${banner.titulo || 'Banner'}" style="max-width: 100px; border-radius: 4px;"></td>
                <td>${banner.titulo || '-'}</td>
                <td>
                    <span class="badge bg-${banner.ativo ? 'success' : 'secondary'}">
                        ${banner.ativo ? 'Ativo' : 'Inativo'}
                    </span>
                </td>
                <td>${banner.ordem}</td>
                <td>
                    <button class="btn btn-sm btn-primary btn-action me-1" onclick="bannerManager.editBanner(${banner.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger btn-action" onclick="bannerManager.deleteBanner(${banner.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            this.bannersList.appendChild(row);
        });
    }

    async saveBanner() {
        const titleInput = document.getElementById('bannerTitle');
        const subtitleInput = document.getElementById('bannerSubtitle');
        const linkInput = document.getElementById('bannerLink');
        const orderInput = document.getElementById('bannerOrder');
        const statusInput = document.getElementById('bannerStatus');
        const imageInput = document.getElementById('bannerImage');

        const titulo = titleInput ? titleInput.value : '';
        const subtitulo = subtitleInput ? subtitleInput.value : null;
        const link = this.normalizeLink(linkInput ? linkInput.value : '');
        const ordem = orderInput ? parseInt(orderInput.value) || 0 : 0;
        const ativo = statusInput ? statusInput.checked : true;
        
        if (!this.selectedFile && !this.currentBannerId) {
            alert('Por favor, selecione uma imagem para o banner.');
            return;
        }

        this.setSaving(true);

        try {
            const data = {
                titulo,
                subtitulo,
                link,
                ordem,
                ativo
            };

            // A imagem vai como ficheiro para /uploads e na base de dados
            // guarda-se apenas o caminho devolvido.
            if (this.selectedFile) {
                const uploaded = await ApiClient.uploadFile(this.selectedFile);
                data.imagem = uploaded.url;
            }

            // Numa edição sem imagem nova o campo é omitido, para que o
            // update parcial do Prisma preserve a imagem existente.

            if (this.currentBannerId) {
                await ApiClient.put(`/banners/${this.currentBannerId}`, data);
                this.showToast('Banner atualizado com sucesso!');
            } else {
                await ApiClient.post('/banners', data);
                this.showToast('Banner criado com sucesso!');
            }

            this.resetForm();
            
            // Tentar fechar o modal do Bootstrap
            const modalEl = document.getElementById('addBannerModal');
            if (modalEl) {
                const modal = bootstrap.Modal.getInstance(modalEl);
                if (modal) modal.hide();
            }
            
            this.loadBanners();

        } catch (error) {
            console.error('Erro ao guardar banner:', error);
            alert('Ocorreu um erro ao guardar o banner: ' + error.message);
        } finally {
            this.setSaving(false);
        }
    }

    setSaving(saving) {
        if (!this.saveButton) return;
        this.saveButton.disabled = saving;
        this.saveButton.innerHTML = saving
            ? '<i class="fas fa-spinner fa-spin"></i> A guardar...'
            : '<i class="fas fa-save"></i> Guardar Banner';
    }

    async editBanner(id) {
        try {
            const banner = await ApiClient.get(`/banners/${id}`);
            if (banner) {
                this.currentBannerId = banner.id;
                
                const titleInput = document.getElementById('bannerTitle');
                const subtitleInput = document.getElementById('bannerSubtitle');
                const linkInput = document.getElementById('bannerLink');
                const orderInput = document.getElementById('bannerOrder');
                const statusInput = document.getElementById('bannerStatus');
                
                if (titleInput) titleInput.value = banner.titulo || '';
                if (subtitleInput) subtitleInput.value = banner.subtitulo || '';
                if (linkInput) linkInput.value = banner.link || '';
                if (orderInput) orderInput.value = banner.ordem;
                if (statusInput) statusInput.checked = banner.ativo;
                
                // Limpar input file: numa edição a imagem só é substituída
                // se o utilizador escolher outra.
                const imageInput = document.getElementById('bannerImage');
                if (imageInput) imageInput.value = '';
                this.selectedFile = null;

                let preview = document.querySelector('.image-preview');
                if (!preview) {
                    preview = document.createElement('img');
                    preview.className = 'image-preview';
                    preview.style.marginTop = '10px';
                    preview.style.maxWidth = '100%';
                    preview.style.borderRadius = '8px';
                    this.form.appendChild(preview);
                }
                preview.src = this.imageSrc(banner.imagem);
                preview.style.display = 'block';

                const modalEl = document.getElementById('addBannerModal');
                if (modalEl) {
                    let modal = bootstrap.Modal.getInstance(modalEl);
                    if (!modal) modal = new bootstrap.Modal(modalEl);
                    modal.show();
                }
            }
        } catch (error) {
            console.error('Erro ao buscar banner para edição:', error);
            alert('Não foi possível carregar os detalhes do banner.');
        }
    }

    async deleteBanner(id) {
        if (confirm('Tem certeza que deseja excluir este banner?')) {
            try {
                await ApiClient.delete(`/banners/${id}`);
                this.showToast('Banner apagado com sucesso!');
                this.loadBanners();
            } catch (error) {
                console.error('Erro ao apagar banner:', error);
                alert('Erro ao apagar o banner: ' + error.message);
            }
        }
    }

    resetForm() {
        if (this.form) this.form.reset();
        this.currentBannerId = null;
        this.selectedFile = null;
        const preview = document.querySelector('.image-preview');
        if (preview) {
            preview.style.display = 'none';
            preview.src = '';
        }
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
let bannerManager;
document.addEventListener('DOMContentLoaded', () => {
    // Certificar-se que ApiClient está carregado (auth.js ou api.js)
    if (typeof ApiClient !== 'undefined') {
        bannerManager = new BannerManager();
    } else {
        console.error('ApiClient não encontrado. Verifique se api.js foi importado antes de banners.js.');
    }
});
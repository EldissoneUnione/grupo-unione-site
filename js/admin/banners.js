// Gerenciamento de Banners
class BannerManager {
    constructor() {
        this.banners = JSON.parse(localStorage.getItem('banners')) || [];
        this.form = document.getElementById('bannerForm');
        this.bannersList = document.getElementById('bannersList');
        this.saveButton = document.getElementById('saveBanner');
        this.currentBannerId = null;

        this.initializeEventListeners();
        this.loadBanners();
    }

    initializeEventListeners() {
        // Preview de imagem
        document.getElementById('bannerImage').addEventListener('change', this.handleImagePreview.bind(this));
        
        // Salvar banner
        this.saveButton.addEventListener('click', this.saveBanner.bind(this));
    }

    handleImagePreview(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                let preview = document.querySelector('.image-preview');
                if (!preview) {
                    preview = document.createElement('img');
                    preview.className = 'image-preview';
                    this.form.appendChild(preview);
                }
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    }

    saveBanner() {
        const title = document.getElementById('bannerTitle').value;
        const order = parseInt(document.getElementById('bannerOrder').value);
        const status = document.getElementById('bannerStatus').checked;
        const imageFile = document.getElementById('bannerImage').files[0];

        if (!title || !imageFile) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const banner = {
                id: this.currentBannerId || Date.now(),
                title,
                image: e.target.result,
                order,
                status,
                createdAt: new Date().toISOString()
            };

            if (this.currentBannerId) {
                // Atualizar banner existente
                const index = this.banners.findIndex(b => b.id === this.currentBannerId);
                this.banners[index] = banner;
            } else {
                // Adicionar novo banner
                this.banners.push(banner);
            }

            this.saveToStorage();
            this.loadBanners();
            this.resetForm();
            bootstrap.Modal.getInstance(document.getElementById('addBannerModal')).hide();
        };

        reader.readAsDataURL(imageFile);
    }

    loadBanners() {
        this.bannersList.innerHTML = '';
        this.banners.sort((a, b) => a.order - b.order).forEach(banner => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${banner.id}</td>
                <td><img src="${banner.image}" alt="${banner.title}" style="max-width: 100px;"></td>
                <td>${banner.title}</td>
                <td>${banner.status ? 'Ativo' : 'Inativo'}</td>
                <td>${banner.order}</td>
                <td>
                    <button class="btn btn-sm btn-primary btn-action" onclick="bannerManager.editBanner(${banner.id})">
                        Editar
                    </button>
                    <button class="btn btn-sm btn-danger btn-action" onclick="bannerManager.deleteBanner(${banner.id})">
                        Excluir
                    </button>
                </td>
            `;
            this.bannersList.appendChild(row);
        });
    }

    editBanner(id) {
        const banner = this.banners.find(b => b.id === id);
        if (banner) {
            this.currentBannerId = id;
            document.getElementById('bannerTitle').value = banner.title;
            document.getElementById('bannerOrder').value = banner.order;
            document.getElementById('bannerStatus').checked = banner.status;
            
            // Preview da imagem existente
            let preview = document.querySelector('.image-preview');
            if (!preview) {
                preview = document.createElement('img');
                preview.className = 'image-preview';
                this.form.appendChild(preview);
            }
            preview.src = banner.image;
            preview.style.display = 'block';

            const modal = new bootstrap.Modal(document.getElementById('addBannerModal'));
            modal.show();
        }
    }

    deleteBanner(id) {
        if (confirm('Tem certeza que deseja excluir este banner?')) {
            this.banners = this.banners.filter(b => b.id !== id);
            this.saveToStorage();
            this.loadBanners();
        }
    }

    resetForm() {
        this.form.reset();
        this.currentBannerId = null;
        const preview = document.querySelector('.image-preview');
        if (preview) {
            preview.style.display = 'none';
        }
    }

    saveToStorage() {
        localStorage.setItem('banners', JSON.stringify(this.banners));
    }
}

// Inicializar o gerenciador de banners
const bannerManager = new BannerManager(); 
// Gerenciamento de Destaques
class DestaqueManager {
    constructor() {
        this.destaques = JSON.parse(localStorage.getItem('destaques')) || [];
        this.form = document.getElementById('destaqueForm');
        this.destaquesList = document.getElementById('destaquesList');
        this.saveButton = document.getElementById('saveDestaque');
        this.currentDestaqueId = null;

        this.initializeEventListeners();
        this.loadDestaques();
    }

    initializeEventListeners() {
        // Preview de imagem
        document.getElementById('destaqueImage').addEventListener('change', this.handleImagePreview.bind(this));
        
        // Salvar destaque
        this.saveButton.addEventListener('click', this.saveDestaque.bind(this));
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

    saveDestaque() {
        const title = document.getElementById('destaqueTitle').value;
        const description = document.getElementById('destaqueDescription').value;
        const order = parseInt(document.getElementById('destaqueOrder').value);
        const status = document.getElementById('destaqueStatus').checked;
        const imageFile = document.getElementById('destaqueImage').files[0];

        if (!title || !description || !imageFile) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const destaque = {
                id: this.currentDestaqueId || Date.now(),
                title,
                description,
                image: e.target.result,
                order,
                status,
                createdAt: new Date().toISOString()
            };

            if (this.currentDestaqueId) {
                // Atualizar destaque existente
                const index = this.destaques.findIndex(d => d.id === this.currentDestaqueId);
                this.destaques[index] = destaque;
            } else {
                // Adicionar novo destaque
                this.destaques.push(destaque);
            }

            this.saveToStorage();
            this.loadDestaques();
            this.resetForm();
            bootstrap.Modal.getInstance(document.getElementById('addDestaqueModal')).hide();
        };

        reader.readAsDataURL(imageFile);
    }

    loadDestaques() {
        this.destaquesList.innerHTML = '';
        this.destaques.sort((a, b) => a.order - b.order).forEach(destaque => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${destaque.id}</td>
                <td><img src="${destaque.image}" alt="${destaque.title}" style="max-width: 100px;"></td>
                <td>${destaque.title}</td>
                <td>${destaque.description}</td>
                <td>${destaque.status ? 'Ativo' : 'Inativo'}</td>
                <td>${destaque.order}</td>
                <td>
                    <button class="btn btn-sm btn-primary btn-action" onclick="destaqueManager.editDestaque(${destaque.id})">
                        Editar
                    </button>
                    <button class="btn btn-sm btn-danger btn-action" onclick="destaqueManager.deleteDestaque(${destaque.id})">
                        Excluir
                    </button>
                </td>
            `;
            this.destaquesList.appendChild(row);
        });
    }

    editDestaque(id) {
        const destaque = this.destaques.find(d => d.id === id);
        if (destaque) {
            this.currentDestaqueId = id;
            document.getElementById('destaqueTitle').value = destaque.title;
            document.getElementById('destaqueDescription').value = destaque.description;
            document.getElementById('destaqueOrder').value = destaque.order;
            document.getElementById('destaqueStatus').checked = destaque.status;
            
            // Preview da imagem existente
            let preview = document.querySelector('.image-preview');
            if (!preview) {
                preview = document.createElement('img');
                preview.className = 'image-preview';
                this.form.appendChild(preview);
            }
            preview.src = destaque.image;
            preview.style.display = 'block';

            const modal = new bootstrap.Modal(document.getElementById('addDestaqueModal'));
            modal.show();
        }
    }

    deleteDestaque(id) {
        if (confirm('Tem certeza que deseja excluir este destaque?')) {
            this.destaques = this.destaques.filter(d => d.id !== id);
            this.saveToStorage();
            this.loadDestaques();
        }
    }

    resetForm() {
        this.form.reset();
        this.currentDestaqueId = null;
        const preview = document.querySelector('.image-preview');
        if (preview) {
            preview.style.display = 'none';
        }
    }

    saveToStorage() {
        localStorage.setItem('destaques', JSON.stringify(this.destaques));
    }
}

// Inicializar o gerenciador de destaques
const destaqueManager = new DestaqueManager(); 
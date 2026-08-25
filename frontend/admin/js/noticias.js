/**
 * Grupo Unione — Admin Notícias (Block Editor + Publish System)
 */

// ─── Auth check ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken');
    if (!token) {
        window.location.href = '/admin/login';
        return;
    }
    const userInfo = JSON.parse(localStorage.getItem('adminUser') || '{}');
    const el = document.getElementById('userInfo');
    if (el && userInfo.username) el.textContent = `Olá, ${userInfo.username}`;
    init();
});

// ─── Estado ─────────────────────────────────────────────────
let noticias = [];
let currentNewsId = null;
let currentStatus = 'publicada'; // 'publicada' | 'rascunho' | 'agendada'
let blocks = []; // Array de blocos { type:'text'|'image', content, src, alt, legenda }
let currentImgBase64 = ''; // imagem principal base64

// ─── Init ────────────────────────────────────────────────────
async function init() {
    await loadNoticias();
    bindEvents();
}

function generateSlug(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '') + '-' + Math.floor(Math.random() * 9999);
}

// ─── Carregar da API ───────────────────────────────────────────
async function loadNoticias() {
    try {
        const tbody = document.getElementById('noticiasList');
        if (tbody) tbody.innerHTML = ApiClient.loadingRow(6, 'A carregar notícias...');

        const data = await ApiClient.get('/news?admin=true', { headers: { 'x-admin-request': 'true' } });
        noticias = (Array.isArray(data) ? data : []).sort((a, b) => {
            const da = new Date(a.dataPublicacao || a.createdAt || 0).getTime();
            const db = new Date(b.dataPublicacao || b.createdAt || 0).getTime();
            return db - da;
        });
        renderTable();
        updateStats();
    } catch (error) {
        console.error('Erro ao carregar noticias da API:', error);
        const tbody = document.getElementById('noticiasList');
        if (tbody) tbody.innerHTML = '<tr><td colspan="6"><div class="empty-state"><h3 style="color:var(--danger)">Erro ao carregar notícias.</h3><p>Verifique se o servidor da API está a correr.</p></div></td></tr>';
    }
}

// ─── Stats ───────────────────────────────────────────────────
function updateStats() {
    const total = noticias.length;
    const publicadas = noticias.filter(n => n.status === 'publicada' || !n.status).length;
    const agendadas = noticias.filter(n => n.status === 'agendada').length;
    const rascunhos = noticias.filter(n => n.status === 'rascunho').length;

    const elTotal = document.getElementById('totalNoticias');
    const elAtivas = document.getElementById('ativasNoticias');
    const elAgendadas = document.getElementById('agendadasNoticias');
    const elRascunhos = document.getElementById('rascunhosNoticias');

    if (elTotal) elTotal.textContent = total;
    if (elAtivas) elAtivas.textContent = publicadas;
    if (elAgendadas) elAgendadas.textContent = agendadas;
    if (elRascunhos) elRascunhos.textContent = rascunhos;
}

// ─── Render Table ────────────────────────────────────────────
function renderTable(filteredList) {
    const tbody = document.getElementById('noticiasList');
    const list = filteredList ?? noticias;

    if (list.length === 0) {
        tbody.innerHTML = `
            <tr><td colspan="6">
                <div class="empty-state">
                    <i class="fas fa-newspaper"></i>
                    <h3>Nenhuma notícia encontrada</h3>
                    <p>Clique em "Nova Notícia" para adicionar a primeira.</p>
                </div>
            </td></tr>`;
        return;
    }

    tbody.innerHTML = list.map(n => {
        const status = n.status || 'publicada';
        const statusIcons = { publicada: 'fa-eye', rascunho: 'fa-file-alt', agendada: 'fa-clock' };
        const statusLabels = { publicada: 'Publicada', rascunho: 'Rascunho', agendada: 'Agendada' };

        const statusBadge = `<span class="status-badge ${status}">
            <i class="fas ${statusIcons[status] || 'fa-eye'}" style="font-size:9px;"></i>
            ${statusLabels[status] || status}
        </span>`;

        // Preview do conteúdo — a listagem já não traz blocos (são demasiado pesados).
        let previewText = '';
        if (n.resumo && !String(n.resumo).startsWith('[{')) {
            previewText = String(n.resumo).replace(/<[^>]*>/g, '').substring(0, 80);
        }
        if (!previewText && n.conteudo) {
            previewText = n.conteudo.replace(/<[^>]*>/g, '').substring(0, 80) + '...';
        }

        let dataStr = '';
        try { dataStr = new Date(n.dataPublicacao).toLocaleDateString('pt-PT'); } catch(e) {}

        let agendadoInfo = '';
        if (status === 'agendada' && n.agendadoPara) {
            agendadoInfo = `<div style="font-size:10px;color:var(--warning);margin-top:2px;">
                <i class="fas fa-clock"></i> ${new Date(n.agendadoPara).toLocaleString('pt-PT')}
            </div>`;
        }

        return `
        <tr>
            <td style="color:var(--text-muted);font-size:12px;">${n.id}</td>
            <td>
                <img src="${fixImgPath(n.imagem)}" alt="${n.titulo}" class="noticia-thumb"
                    onerror="this.src='https://placehold.co/64x48/f4f6fb/9da3be?text=?'">
            </td>
            <td>
                <div class="noticia-titulo" title="${n.titulo}">${n.titulo}</div>
                <div class="noticia-conteudo-preview">${previewText}</div>
            </td>
            <td style="white-space:nowrap;">${dataStr}${agendadoInfo}</td>
            <td>${statusBadge}</td>
            <td>
                <button class="btn-admin btn-edit btn-sm" onclick="openEdit(${n.id})" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-admin btn-delete btn-sm" onclick="deleteNoticia(${n.id})" title="Eliminar">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>`;
    }).join('');
}

function fixImgPath(src) {
    if (!src) return '';
    if (src.startsWith('http') || src.startsWith('data:')) return src;
    return src.replace(/^\.\.\//, '/');
}

// ─── Block Editor ─────────────────────────────────────────────
function renderBlocks() {
    const editor = document.getElementById('blockEditor');
    if (!editor) return;
    editor.innerHTML = '';

    blocks.forEach((block, i) => {
        const el = document.createElement('div');
        el.className = 'block-item';
        el.dataset.index = i;

        const typeLabel = block.type === 'text'
            ? `<i class="fas fa-paragraph"></i> Parágrafo`
            : `<i class="fas fa-image"></i> Imagem`;

        const moveUpBtn = i > 0 ? `<button type="button" class="block-btn" onclick="moveBlock(${i},-1)" title="Mover para cima"><i class="fas fa-arrow-up"></i></button>` : '';
        const moveDownBtn = i < blocks.length - 1 ? `<button type="button" class="block-btn" onclick="moveBlock(${i},1)" title="Mover para baixo"><i class="fas fa-arrow-down"></i></button>` : '';

        if (block.type === 'text') {
            el.innerHTML = `
                <div class="block-header">
                    <span class="block-type-badge">${typeLabel}</span>
                    <div class="block-actions">
                        ${moveUpBtn}${moveDownBtn}
                        <button type="button" class="block-btn danger" onclick="removeBlock(${i})" title="Remover"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
                <div class="block-content">
                    <textarea class="block-textarea" placeholder="Escreve o texto deste parágrafo..." onchange="updateBlockText(${i}, this.value)">${block.content || ''}</textarea>
                </div>`;
        } else {
            const previewStyle = block.src ? 'class="block-img-preview show"' : 'class="block-img-preview"';
            const imgSrc = block.src || '';
            el.innerHTML = `
                <div class="block-header">
                    <span class="block-type-badge">${typeLabel}</span>
                    <div class="block-actions">
                        ${moveUpBtn}${moveDownBtn}
                        <button type="button" class="block-btn danger" onclick="removeBlock(${i})" title="Remover"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
                <div class="block-content">
                    <input type="file" accept="image/*" style="width:100%;background:var(--surface-3);border:1px solid var(--border);border-radius:4px;padding:6px;color:var(--text-primary);"
                        onchange="handleBlockImageUpload(${i}, this)">
                    <img ${previewStyle} src="${imgSrc}" alt="">
                    <div class="block-img-meta">
                        <input type="text" placeholder="Texto alternativo (alt)" value="${block.alt || ''}"
                            onchange="updateBlockMeta(${i}, 'alt', this.value)">
                        <input type="text" placeholder="Legenda (opcional)" value="${block.legenda || ''}"
                            onchange="updateBlockMeta(${i}, 'legenda', this.value)">
                    </div>
                </div>`;
        }
        editor.appendChild(el);
    });
}

window.updateBlockText = function(i, val) { blocks[i].content = val; }
window.updateBlockMeta = function(i, key, val) { blocks[i][key] = val; }
window.moveBlock = function(i, dir) {
    const j = i + dir;
    if (j < 0 || j >= blocks.length) return;
    [blocks[i], blocks[j]] = [blocks[j], blocks[i]];
    renderBlocks();
}
window.removeBlock = function(i) {
    blocks.splice(i, 1);
    renderBlocks();
}
window.handleBlockImageUpload = function(i, input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        blocks[i].src = e.target.result;
        const preview = input.parentElement.querySelector('.block-img-preview');
        if (preview) { preview.src = e.target.result; preview.classList.add('show'); }
    };
    reader.readAsDataURL(file);
}

function addTextBlock() {
    blocks.push({ type: 'text', content: '' });
    renderBlocks();
    // Scroll to new block
    const editor = document.getElementById('blockEditor');
    if (editor) editor.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function addImageBlock() {
    blocks.push({ type: 'image', src: '', alt: '', legenda: '' });
    renderBlocks();
    const editor = document.getElementById('blockEditor');
    if (editor) editor.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ─── Publish Status ──────────────────────────────────────────
function setStatus(status) {
    currentStatus = status;
    document.querySelectorAll('.status-btn').forEach(btn => {
        btn.classList.remove('active-publicada', 'active-rascunho', 'active-agendada');
    });
    const activeBtn = document.querySelector(`.status-btn[data-status="${status}"]`);
    if (activeBtn) activeBtn.classList.add(`active-${status}`);

    const scheduleWrap = document.getElementById('scheduleWrap');
    if (scheduleWrap) scheduleWrap.classList.toggle('show', status === 'agendada');
}

// ─── Modal ────────────────────────────────────────────────────
function openModal(noticia = null) {
    blocks = [];
    currentNewsId = null;
    currentImgBase64 = '';

    if (noticia) {
        currentNewsId = noticia.id;

        // Carregar blocos existentes
        if (noticia.blocos) {
            try { blocks = JSON.parse(noticia.blocos); } catch(e) {}
        }
        // Fallback: migrar conteúdo HTML antigo para um bloco de texto
        if (blocks.length === 0 && noticia.conteudo) {
            blocks.push({ type: 'text', content: noticia.conteudo });
        }
    }

    document.getElementById('modalNoticiaTitle').innerHTML =
        `<i class="fas fa-newspaper" style="color:var(--accent)"></i>
         ${noticia ? 'Editar Notícia' : 'Nova Notícia'}`;

    document.getElementById('noticiaId').value = noticia ? noticia.id : '';
    document.getElementById('noticiaTitulo').value = noticia ? noticia.titulo : '';
    document.getElementById('noticiaImg').value = '';

    const preview = document.getElementById('noticiaImgPreview');
    if (noticia && noticia.imagem) {
        preview.src = fixImgPath(noticia.imagem);
        preview.style.display = 'block';
        currentImgBase64 = noticia.imagem; // preserva imagem existente
    } else {
        preview.src = '';
        preview.style.display = 'none';
    }

    // Status
    const status = noticia?.status || 'publicada';
    setStatus(status);

    // Agendamento
    const agendadoInput = document.getElementById('agendadoPara');
    if (agendadoInput && noticia?.agendadoPara) {
        const d = new Date(noticia.agendadoPara);
        agendadoInput.value = d.toISOString().slice(0, 16);
    } else if (agendadoInput) {
        agendadoInput.value = '';
    }

    renderBlocks();
    document.getElementById('noticiaModal').classList.add('open');
}

function closeModal() {
    document.getElementById('noticiaModal').classList.remove('open');
    const preview = document.getElementById('noticiaImgPreview');
    if (preview) { preview.src = ''; preview.style.display = 'none'; }
    blocks = [];
    currentNewsId = null;
    currentImgBase64 = '';
    document.getElementById('noticiaForm').reset();
    setStatus('publicada');
}

// ─── CRUD ────────────────────────────────────────────────────
window.openEdit = async function(id) {
    try {
        const n = await ApiClient.get(`/news/${id}`);
        openModal(n);
    } catch (error) {
        const cached = noticias.find(x => x.id === id);
        if (cached) {
            openModal(cached);
            return;
        }
        alert('Não foi possível carregar a notícia para edição.');
    }
}

window.deleteNoticia = async function(id) {
    if (!confirm('Eliminar esta notícia?')) return;
    try {
        await ApiClient.delete(`/news/${id}`);
        showToast('Notícia apagada!');
        await loadNoticias();
    } catch (error) {
        console.error('Erro ao apagar:', error);
        alert('Erro ao apagar notícia: ' + error.message);
    }
}

async function saveNoticia() {
    const titulo = document.getElementById('noticiaTitulo').value.trim();
    if (!titulo) { alert('O título é obrigatório.'); return; }

    // Imagem principal
    const preview = document.getElementById('noticiaImgPreview');
    const imagem = (preview && preview.src && preview.style.display !== 'none') ? preview.src : currentImgBase64;

    if (!imagem && !currentNewsId) {
        alert('Por favor, selecione uma imagem principal.');
        return;
    }

    if (blocks.length === 0) {
        alert('Adicione pelo menos um bloco de conteúdo.');
        return;
    }

    // Verificar blocos de imagem sem ficheiro
    const emptyImgBlock = blocks.find(b => b.type === 'image' && !b.src);
    if (emptyImgBlock) {
        alert('Há um bloco de imagem sem imagem selecionada. Selecione uma imagem ou remova o bloco.');
        return;
    }

    // Gerar conteúdo HTML a partir dos blocos (compatibilidade)
    const conteudoHtml = blocks
        .filter(b => b.type === 'text' && b.content)
        .map(b => `<p>${b.content.replace(/\n/g, '</p><p>')}</p>`)
        .join('');

    const agendadoInput = document.getElementById('agendadoPara');
    const agendadoPara = currentStatus === 'agendada' && agendadoInput.value
        ? new Date(agendadoInput.value).toISOString()
        : null;

    if (currentStatus === 'agendada' && !agendadoPara) {
        alert('Selecione a data e hora para agendar a publicação.');
        return;
    }

    const payload = {
        titulo,
        slug: generateSlug(titulo),
        blocos: JSON.stringify(blocks),
        conteudo: conteudoHtml,
        status: currentStatus,
    };

    if (imagem) payload.imagem = imagem;
    if (agendadoPara) payload.agendadoPara = agendadoPara;

    const saveBtnEl = document.getElementById('saveNoticia');
    if (saveBtnEl) { saveBtnEl.disabled = true; saveBtnEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i> A guardar...'; }

    try {
        if (currentNewsId) {
            await ApiClient.put(`/news/${currentNewsId}`, payload);
            showToast('Notícia atualizada!');
        } else {
            await ApiClient.post('/news', payload);
            showToast('Notícia criada!');
        }
        closeModal();
        await loadNoticias();
    } catch (error) {
        console.error('Erro ao guardar notícia:', error);
        alert('Erro ao guardar: ' + error.message);
    } finally {
        if (saveBtnEl) { saveBtnEl.disabled = false; saveBtnEl.innerHTML = '<i class="fas fa-save"></i> Guardar'; }
    }
}

// ─── Filtros ─────────────────────────────────────────────────
function applyFilters() {
    const search = (document.getElementById('searchNoticia')?.value || '').toLowerCase();
    const status = document.getElementById('filterStatus')?.value || '';

    const filtered = noticias.filter(n => {
        const matchSearch = !search || n.titulo.toLowerCase().includes(search);
        const matchStatus = !status || (n.status || 'publicada') === status;
        return matchSearch && matchStatus;
    });

    renderTable(filtered);
}

// ─── Toast ───────────────────────────────────────────────────
function showToast(msg, type = 'success') {
    const t = document.createElement('div');
    const bg = type === 'error' ? '#dc2626' : '#16a34a';
    t.style.cssText = `
        position:fixed;bottom:24px;right:24px;z-index:9999;
        background:${bg};color:white;padding:12px 20px;
        border-radius:8px;font-size:13px;font-weight:600;
        box-shadow:0 4px 16px rgba(0,0,0,0.15);
        animation:fadeIn .2s ease;
    `;
    t.textContent = (type === 'success' ? '✓ ' : '✕ ') + msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3500);
}

// ─── Events ──────────────────────────────────────────────────
function bindEvents() {
    // Abrir modal nova notícia
    document.getElementById('btnNovaNoticia')?.addEventListener('click', () => openModal());

    // Fechar modal
    document.getElementById('closeNoticiaModal')?.addEventListener('click', closeModal);
    document.getElementById('cancelNoticiaModal')?.addEventListener('click', closeModal);
    document.getElementById('noticiaModal')?.addEventListener('click', e => {
        if (e.target === document.getElementById('noticiaModal')) closeModal();
    });

    // Guardar notícia
    document.getElementById('saveNoticia')?.addEventListener('click', saveNoticia);

    // Adicionar blocos
    document.getElementById('btnAddParagrafo')?.addEventListener('click', addTextBlock);
    document.getElementById('btnAddImagem')?.addEventListener('click', addImageBlock);

    // Botões de status
    document.querySelectorAll('.status-btn').forEach(btn => {
        btn.addEventListener('click', () => setStatus(btn.dataset.status));
    });

    // Upload imagem principal
    document.getElementById('noticiaImg')?.addEventListener('change', function() {
        const file = this.files[0];
        const preview = document.getElementById('noticiaImgPreview');
        if (file) {
            const reader = new FileReader();
            reader.onload = e => {
                preview.src = e.target.result;
                preview.style.display = 'block';
                currentImgBase64 = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Filtros
    document.getElementById('searchNoticia')?.addEventListener('input', applyFilters);
    document.getElementById('filterStatus')?.addEventListener('change', applyFilters);
}

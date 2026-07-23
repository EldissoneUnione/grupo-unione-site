// Configuração das rotas do site
const routes = {
    '/': 'grupo-unione-site/index.html',
    '/grupo': 'pages/grupo.html',
    '/empresas': 'pages/empresas.html',
    '/areas-negocios': 'pages/areas-negocios.html',
    '/empreendimentos': 'pages/empreendimentos.html',
    '/investidores': 'pages/investidores.html',
    '/contactos': 'pages/contactos.html',
    // Rotas das empresas
    '/empresas/mbt': 'pages/empresas/mbt.html',
    '/empresas/corpo-e-mente': 'pages/empresas/corpo-e-mente.html',
    '/empresas/quavi': 'pages/empresas/quavi.html',
    '/empresas/okukulanaua': 'pages/empresas/okukulanaua.html',
    '/empresas/tecnology': 'pages/empresas/tecnology.html',
    '/empresas/kalanaua': 'pages/empresas/kalanaua.html',
    '/empresas/fibra': 'pages/empresas/fibra.html',
    '/empresas/infraone': 'pages/empresas/infraone.html',
    '/empresas/metalangol': 'pages/empresas/metalangol.html',
    '/empresas/mater': 'pages/empresas/mater.html',
    '/empresas/unione': 'pages/empresas/unione.html'
};

// Função para mostrar o loader
function showLoader() {
    const loaderHTML = `
        <div class="loader">
            <div class="banter-loader">
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
                <div class="banter-loader__box"></div>
            </div>
        </div>
    `;
    
    const loaderContainer = document.createElement('div');
    loaderContainer.innerHTML = loaderHTML;
    document.body.appendChild(loaderContainer);
}

// Função para navegar entre as páginas
function navigateTo(path) {
    const targetPage = routes[path];
    if (targetPage) {
        // Determina o nível de profundidade atual
        const currentPath = window.location.pathname;
        const isInPages = currentPath.includes('/pages/');
        const isInEmpresas = currentPath.includes('/empresas/');
        
        // Ajusta o caminho baseado na localização atual
        let basePath = '';
        if (isInEmpresas) {
            basePath = '../../';
        } else if (isInPages) {
            basePath = '../';
        }

        // Mostra o loader
        showLoader();
        
        // Navega após um pequeno delay para mostrar o loader
        setTimeout(() => {
            window.location.href = basePath + targetPage;
        }, 500);
    } else {
        console.error('Página não encontrada:', path);
    }
}

// Adicionar event listeners para os links de navegação
document.addEventListener('DOMContentLoaded', () => {
    // Links principais
    const navLinks = document.querySelectorAll('.nav-links a, .nav-links-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const path = link.getAttribute('href');
            if (path !== '#') {
                navigateTo(path);
            }
        });
    });

    // Links do dropdown de empresas
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const path = link.getAttribute('href');
            if (path !== '#') {
                navigateTo(path);
            }
        });
    });
}); 
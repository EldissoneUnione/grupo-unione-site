// Rotas públicas do site, em URL limpo. O servidor Express resolve cada uma
// para o ficheiro HTML correspondente, por isso a navegação usa o próprio
// caminho e nunca o ficheiro .html.
const routes = [
    '/',
    '/grupo',
    '/empresas',
    '/areas-negocios',
    '/empreendimentos',
    '/investidores',
    '/contactos',
    '/noticia',
    '/projeto',
    '/privacidade',
    // Empresas do grupo
    '/empresas/corpo-e-mente',
    '/empresas/fibra',
    '/empresas/infraone',
    '/empresas/kalanaua',
    '/empresas/mater',
    '/empresas/mbt',
    '/empresas/metalangol',
    '/empresas/okukulanaua',
    '/empresas/quavi',
    '/empresas/tecnology',
    '/empresas/unione'
];

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
    showLoader();

    setTimeout(() => {
        window.location.href = path;
    }, 500);
}

// Adicionar event listeners para os links de navegação
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll(
        '.nav-links a, .nav-links-menu a, .dropdown-menu a'
    );

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const path = link.getAttribute('href');

            // Âncoras, links externos e rotas desconhecidas seguem o
            // comportamento normal do browser.
            if (!routes.includes(path)) {
                return;
            }

            e.preventDefault();
            navigateTo(path);
        });
    });
});

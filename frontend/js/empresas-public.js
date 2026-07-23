document.addEventListener('DOMContentLoaded', async function () {
    const marqueeGroups = document.querySelectorAll('.marquee__group');
    if (marqueeGroups.length === 0) return;

    try {
        const response = await fetch('/api/v1/companies');
        if (response.ok) {
            const companies = await response.json();
            const activeCompanies = companies.filter(c => c.status === true && c.logo);

            if (activeCompanies.length > 0) {
                // Montar o HTML
                const logosHtml = activeCompanies.map(c => {
                    const imgUrl = c.logo.startsWith('data:') || c.logo.startsWith('http') 
                        ? c.logo 
                        : (c.logo.startsWith('/') ? c.logo : '/' + c.logo);
                    return `
                        <div class="icon-empresa">
                            <img src="${imgUrl}" alt="${c.nome}" title="${c.nome}">
                        </div>
                    `;
                }).join('');

                // Limpar e preencher cada grupo (existem normalmente dois grupos por marquee para criar o loop contínuo)
                marqueeGroups.forEach(group => {
                    group.innerHTML = logosHtml;
                    // Duplicar conteúdo internamente se houver poucas empresas para o marquee não quebrar
                    if (activeCompanies.length < 8) {
                        group.innerHTML += logosHtml + logosHtml;
                    }
                });
            }
        }
    } catch (error) {
        console.error('Erro ao buscar empresas da API:', error);
        // Fallback usa o HTML estático já existente no index.html
    }
});

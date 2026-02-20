# Grupo Unione - Site Institucional

# Comandos
npm install
npm run dev
npm start

## 📋 Sobre o Projeto
Site institucional do Grupo Unione, um importante grupo empresarial e de investimento Angolano com atuação em diversos setores da economia.

## 🚀 Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript
- Font Awesome
- Png/jpg/jpeg para otimização de imagens

## � Atualizações Recentes (Dezembro 2026)

### Refinamento de Páginas
- **Padronização Visual:** Criação do `css/pages-custom.css` para centralizar estilos de páginas internas (`empreendimentos.html`, `investidores.html`, `Contactos.html`, `grupo.html`), eliminando estilos inline e garantindo consistência de marca.
- **Empreendimentos:** Novo layout de grid responsivo para exibição de projetos com status.
- **Investidores:** Adição de seção de pilares de investimento e call-to-action claro.
- **Contactos:** Implementação de formulário funcional, informações de contacto completas e mapa interativo.

### Organograma Empresarial
- Implementado na página `grupo.html`.
- Design responsivo que se adapta de visualização hierárquica completa (desktop) para lista estruturada (mobile).
- Integração visual com a identidade do Grupo Unione.

## �🎯 Otimizações Implementadas

### Performance
1. **Carregamento de Recursos**
   - Preload de recursos críticos
   - Carregamento assíncrono de Font Awesome
   - Preconnect para recursos externos
   - Cache-Control para recursos estáticos

2. **Otimização de Imagens**
   - Formato Png para melhor compressão
   - Lazy loading com IntersectionObserver
   - Dimensões otimizadas (800x450)
   - Preload de imagens críticas
   - Atributos `decoding="async"` e `fetchpriority="high"`

3. **Scripts**
   - Carregamento deferido de scripts não críticos
   - Separação entre scripts críticos e não críticos
   - Otimização do código de lazy loading
   - Preload de imagens críticas

### Acessibilidade
1. **Atributos ARIA**
   - Roles apropriados para elementos interativos
   - Labels descritivos
   - Correção de atributos ARIA proibidos
   - Descrições alt para imagens

2. **Navegação**
   - Estrutura semântica HTML5
   - Menu responsivo
   - Suporte a navegação por teclado
   - Textos alternativos descritivos

## 📦 Estrutura do Projeto
```
grupo-unione-site/
├── assets/
│   ├── Imagens/
│   └── logo/
├── css/
│   ├── style.css
│   ├── responsivStyle.css
│   ├── load.css
│   └── pages-custom.css
├── js/
│   ├── script.js
│   ├── slide.js
│   ├── swiper.js
│   ├── carousel.js
│   ├── scroolslide.js
│   ├── routes.js
│   └── translations.js
├── pages/
│   ├── grupo.html
│   ├── empresas/
│   ├── areas-negocios.html
│   ├── empreendimentos.html
│   ├── investidores.html
│   └── Contactos.html
└── index.html
```

## 🔧 Configurações de Performance

### Cache
```html
<meta http-equiv="Cache-Control" content="public, max-age=31536000">
```

### Preload de Recursos Críticos
```html
<link rel="preload" href="css/style.css" as="style">
<link rel="preload" href="css/responsivStyle.css" as="style">
```

### Carregamento Otimizado de Scripts
```html
<script src="js/script.js" defer></script>
<script src="js/slide.js" defer></script>
```

## 📱 Responsividade
- Design adaptativo para diferentes dispositivos
- Imagens otimizadas para mobile
- Menu responsivo
- Layout fluido

## 🌐 SEO
- Meta tags otimizadas
- Estrutura semântica
- URLs amigáveis
- Sitemap
- Robots.txt

## 🔍 Boas Práticas Implementadas
1. **Performance**
   - Minificação de recursos
   - Compressão de imagens
   - Lazy loading
   - Cache eficiente

2. **Acessibilidade**
   - ARIA labels
   - Contraste adequado
   - Navegação por teclado
   - Textos alternativos

3. **SEO**
   - Meta tags
   - Estrutura semântica
   - URLs amigáveis
   - Sitemap

## 📈 Métricas de Performance
- Tempo de carregamento inicial: < 3s
- Score Lighthouse: > 90
- Core Web Vitals otimizados
- Tamanho total de recursos: < 2MB

## 🔄 Manutenção
- Atualização regular de dependências
- Monitoramento de performance
- Backup regular
- Documentação atualizada

## 📝 Licença
Todos os direitos reservados © 2026 Grupo Unione

## 👥 Contribuição
Para contribuir com o projeto:
1. Faça um fork
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📞 contacto
- Email: unione@unioneafrica.com
- Telefone: (+244) 922 490 448
- Endereço: Polis - Estrada da Zootécnica, Humpata - Huíla

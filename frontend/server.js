const express = require('express');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
app.disable('x-powered-by');

const root = path.resolve(__dirname);
const port = Number(process.env.PORT) || 4000;
const host = process.env.HOST || 'localhost';

function addRoute(routePath, filePath) {
  app.get(routePath, (req, res) => {
    res.sendFile(filePath);
  });
}

function mapHtmlRoutes(dirPath, baseRoute) {
  if (!fs.existsSync(dirPath)) return;

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  entries
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.html'))
    .forEach((entry) => {
      const baseName = path.basename(entry.name, '.html');
      const routePath = baseRoute ? `${baseRoute}/${baseName}` : `/${baseName}`;
      const filePath = path.join(dirPath, entry.name);
      addRoute(routePath, filePath);
    });
}

// ─── API & Uploads Proxy (Redireciona chamadas para o backend na porta 3000) ────
const http = require('http');

function setupProxy(route) {
  app.use(route, (req, res) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: req.originalUrl,
      method: req.method,
      headers: req.headers
    };

    const proxyReq = http.request(options, (proxyRes) => {
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res, { end: true });
    });

    req.pipe(proxyReq, { end: true });
    proxyReq.on('error', (e) => {
      res.status(500).send(`Erro de Proxy para ${route} (O backend na porta 3000 está a correr?): ${e.message}`);
    });
  });
}

setupProxy('/api');
setupProxy('/uploads');

// ─── Static assets (deve vir ANTES das rotas de fallback) ──────────────────
app.use(express.static(root));

// ─── Rota raiz ──────────────────────────────────────────────────────────────
addRoute('/', path.join(root, 'index.html'));

// ─── Páginas públicas (/pages) ───────────────────────────────────────────────
const pagesDir = path.join(root, 'pages');
mapHtmlRoutes(pagesDir, '');

// Subpastas de /pages
const pageSubDirs = ['empresas', 'contactos', 'noticias', 'grupo', 'empreendimentos', 'investidores'];
pageSubDirs.forEach((sub) => {
  mapHtmlRoutes(path.join(pagesDir, sub), `/${sub}`);
});

// ─── Admin (/admin) ──────────────────────────────────────────────────────────
const adminDir = path.join(root, 'admin');
mapHtmlRoutes(adminDir, '/admin');

// Redirecionar /admin → /admin/login
const adminLogin = path.join(adminDir, 'login.html');
if (fs.existsSync(adminLogin)) {
  addRoute('/admin', adminLogin);
}

// ─── 404 fallback ────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).send('404 - Página não encontrada');
});

app.listen(port, host, () => {
  console.log(`🚀 Servidor a correr em http://${host}:${port}`);
});
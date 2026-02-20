const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.disable('x-powered-by');

const root = path.resolve(__dirname);
const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || '0.0.0.0';

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

// Core routes
addRoute('/', path.join(root, 'index.html'));

const pagesDir = path.join(root, 'pages');
mapHtmlRoutes(pagesDir, '');
mapHtmlRoutes(path.join(pagesDir, 'empresas'), '/empresas');

const adminDir = path.join(root, 'admin');
mapHtmlRoutes(adminDir, '/admin');

const adminLogin = path.join(adminDir, 'login.html');
if (fs.existsSync(adminLogin)) {
  addRoute('/admin', adminLogin);
}

// Static assets
app.use(express.static(root));

// 404 fallback
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
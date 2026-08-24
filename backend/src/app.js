
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const authRoutes = require('./routes/authRoutes');
const companyRoutes = require('./routes/companyRoutes');
const bannerRoutes = require('./routes/bannerRoutes');
const highlightRoutes = require('./routes/highlightRoutes');
const newsRoutes = require('./routes/newsRoutes');
const investorRoutes = require('./routes/investorRoutes');
const partnerRoutes = require('./routes/partnerRoutes');
const contactRoutes = require('./routes/contactRoutes');
const teamMemberRoutes = require('./routes/teamMemberRoutes');
const projectRoutes = require('./routes/projectRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(morgan('dev'));
// As notícias enviam a imagem em base64 dentro do JSON, o que aumenta os dados
// cerca de 37%. Uma imagem de 50 MB chega aqui como ~68 MB de corpo.
app.use(express.json({ limit: '75mb' }));
app.use(express.urlencoded({ limit: '75mb', extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/companies', companyRoutes);
app.use('/api/v1/banners', bannerRoutes);
app.use('/api/v1/highlights', highlightRoutes);
app.use('/api/v1/news', newsRoutes);
app.use('/api/v1/investors', investorRoutes);
app.use('/api/v1/partners', partnerRoutes);
app.use('/api/v1/contacts', contactRoutes);
app.use('/api/v1/team-members', teamMemberRoutes);
app.use('/api/v1/projects', projectRoutes);
app.use('/api/v1/uploads', uploadRoutes);

app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'OK', message: 'API is running' });
});

// Serve static assets first
const frontendDir = path.join(__dirname, '../../frontend');
const adminDir = path.join(__dirname, '../../admin');
app.use(express.static(frontendDir));
app.use('/admin', express.static(adminDir));

// Clean URL routing for HTML files
function serveCleanUrl(req, res, dirPath) {
  const requestedPath = req.path;
  let filePath = path.join(dirPath, requestedPath);

  // Try without extension first
  if (!filePath.endsWith('.html') && !filePath.endsWith('/')) {
    const htmlPath = filePath + '.html';
    if (fs.existsSync(htmlPath)) {
      return res.sendFile(htmlPath);
    }
    const indexPath = path.join(filePath, 'index.html');
    if (fs.existsSync(indexPath)) {
      return res.sendFile(indexPath);
    }
  }

  // Try with .html extension
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  }

  // Try index.html in directory
  const indexPath = path.join(filePath, 'index.html');
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }

  return null;
}

// Frontend routes
app.get('/', (req, res) => {
  res.sendFile(path.join(frontendDir, 'index.html'));
});

app.get('*', (req, res, next) => {
  // Check if it's an API route first
  if (req.path.startsWith('/api/')) {
    return next();
  }

  // Check admin routes
  if (req.path.startsWith('/admin')) {
    const adminPath = req.path.replace('/admin', '');
    const result = serveCleanUrl({ path: adminPath }, res, adminDir);
    if (result) return;

    // Default to admin/login if not found
    const adminLogin = path.join(adminDir, 'login.html');
    if (fs.existsSync(adminLogin)) {
      return res.sendFile(adminLogin);
    }
  }

  // Check frontend routes
  const result = serveCleanUrl(req, res, frontendDir);
  if (result) return;

  // If not found, send 404 or index.html for SPA
  res.status(404).sendFile(path.join(frontendDir, 'index.html'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Algo deu errado!', error: err.message });
});

module.exports = app;

const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const { authMiddleware } = require('../middlewares/auth');

router.post('/', authMiddleware, (req, res) => {
  // O multer é invocado manualmente para devolver os seus erros como JSON,
  // em vez de os deixar chegar ao handler genérico de 500.
  upload.single('file')(req, res, (err) => {
    if (err) {
      const message =
        err.code === 'LIMIT_FILE_SIZE'
          ? 'O ficheiro excede o limite de 10 MB'
          : err.message;
      return res.status(400).json({ message });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'Nenhum ficheiro enviado' });
    }

    res.status(201).json({
      url: `/uploads/${req.file.filename}`,
      filename: req.file.filename,
      size: req.file.size,
    });
  });
});

module.exports = router;

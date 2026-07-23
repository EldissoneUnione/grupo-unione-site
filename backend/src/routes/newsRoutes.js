
const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const { authMiddleware, roleMiddleware } = require('../middlewares/auth');

router.get('/', newsController.getAll);
router.get('/:id', newsController.getById);
router.post('/', authMiddleware, roleMiddleware(['ADMIN', 'MANAGER', 'EDITOR']), newsController.create);
router.put('/:id', authMiddleware, roleMiddleware(['ADMIN', 'MANAGER', 'EDITOR']), newsController.update);
router.delete('/:id', authMiddleware, roleMiddleware(['ADMIN']), newsController.delete);

module.exports = router;

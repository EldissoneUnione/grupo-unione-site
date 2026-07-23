
const express = require('express');
const router = express.Router();
const highlightController = require('../controllers/highlightController');
const { authMiddleware, roleMiddleware } = require('../middlewares/auth');

router.get('/', highlightController.getAll);
router.get('/:id', highlightController.getById);
router.post('/', authMiddleware, roleMiddleware(['ADMIN', 'MANAGER']), highlightController.create);
router.put('/:id', authMiddleware, roleMiddleware(['ADMIN', 'MANAGER']), highlightController.update);
router.delete('/:id', authMiddleware, roleMiddleware(['ADMIN']), highlightController.delete);

module.exports = router;


const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const { authMiddleware, roleMiddleware } = require('../middlewares/auth');

router.get('/', projectController.getAll);
router.get('/:id', projectController.getById);
router.post('/', authMiddleware, roleMiddleware(['ADMIN', 'MANAGER']), projectController.create);
router.put('/:id', authMiddleware, roleMiddleware(['ADMIN', 'MANAGER']), projectController.update);
router.delete('/:id', authMiddleware, roleMiddleware(['ADMIN']), projectController.delete);

module.exports = router;

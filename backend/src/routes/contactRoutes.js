
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const { authMiddleware, roleMiddleware } = require('../middlewares/auth');

router.get('/', authMiddleware, contactController.getAll);
router.get('/:id', authMiddleware, contactController.getById);
router.post('/', contactController.create);
router.put('/:id', authMiddleware, roleMiddleware(['ADMIN', 'MANAGER']), contactController.update);
router.delete('/:id', authMiddleware, roleMiddleware(['ADMIN']), contactController.delete);

module.exports = router;

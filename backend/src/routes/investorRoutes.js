
const express = require('express');
const router = express.Router();
const investorController = require('../controllers/investorController');
const { authMiddleware, roleMiddleware } = require('../middlewares/auth');

router.get('/', authMiddleware, investorController.getAll);
router.get('/:id', authMiddleware, investorController.getById);
router.post('/', investorController.create);
router.put('/:id', authMiddleware, roleMiddleware(['ADMIN', 'MANAGER']), investorController.update);
router.delete('/:id', authMiddleware, roleMiddleware(['ADMIN']), investorController.delete);

module.exports = router;

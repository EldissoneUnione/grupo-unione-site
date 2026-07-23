
const express = require('express');
const router = express.Router();
const partnerController = require('../controllers/partnerController');
const { authMiddleware, roleMiddleware } = require('../middlewares/auth');

router.get('/', partnerController.getAll);
router.get('/:id', partnerController.getById);
router.post('/', authMiddleware, roleMiddleware(['ADMIN', 'MANAGER']), partnerController.create);
router.put('/:id', authMiddleware, roleMiddleware(['ADMIN', 'MANAGER']), partnerController.update);
router.delete('/:id', authMiddleware, roleMiddleware(['ADMIN']), partnerController.delete);

module.exports = router;

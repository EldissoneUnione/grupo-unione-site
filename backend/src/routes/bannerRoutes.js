
const express = require('express');
const router = express.Router();
const bannerController = require('../controllers/bannerController');
const { authMiddleware, roleMiddleware } = require('../middlewares/auth');

router.get('/', bannerController.getAll);
router.get('/:id', bannerController.getById);
router.post('/', authMiddleware, roleMiddleware(['ADMIN', 'MANAGER']), bannerController.create);
router.put('/:id', authMiddleware, roleMiddleware(['ADMIN', 'MANAGER']), bannerController.update);
router.delete('/:id', authMiddleware, roleMiddleware(['ADMIN']), bannerController.delete);

module.exports = router;


const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
const { authMiddleware, roleMiddleware } = require('../middlewares/auth');

router.get('/', companyController.getAll);
router.get('/:id', companyController.getById);
router.post('/', authMiddleware, roleMiddleware(['ADMIN', 'MANAGER']), companyController.create);
router.put('/:id', authMiddleware, roleMiddleware(['ADMIN', 'MANAGER']), companyController.update);
router.delete('/:id', authMiddleware, roleMiddleware(['ADMIN']), companyController.delete);

module.exports = router;

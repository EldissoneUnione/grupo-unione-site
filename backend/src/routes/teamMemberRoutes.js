
const express = require('express');
const router = express.Router();
const teamMemberController = require('../controllers/teamMemberController');
const { authMiddleware, roleMiddleware } = require('../middlewares/auth');

router.get('/', teamMemberController.getAll);
router.get('/:id', teamMemberController.getById);
router.post('/', authMiddleware, roleMiddleware(['ADMIN', 'MANAGER']), teamMemberController.create);
router.put('/:id', authMiddleware, roleMiddleware(['ADMIN', 'MANAGER']), teamMemberController.update);
router.delete('/:id', authMiddleware, roleMiddleware(['ADMIN']), teamMemberController.delete);

module.exports = router;
